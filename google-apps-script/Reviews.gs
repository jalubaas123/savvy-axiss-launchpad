/**
 * Google Apps Script: Student Reviews — Read (doGet) + Write (doPost)
 *
 * SETUP:
 * 1. Create a Google Sheet with these columns in row 1:
 *    id | name | course | rating | review | created_at | approved
 * 2. In Apps Script: File → New → Script project (or extend a spreadsheet).
 * 3. Replace SHEET_ID below with your spreadsheet ID (from the Sheet URL).
 * 4. Paste this code, deploy as Web App:
 *    Deploy → New deployment → Type: Web app
 *    Execute as: Me | Who has access: Anyone
 * 5. Copy the Web App URL into your site's .env as VITE_REVIEWS_SCRIPT_URL
 *
 * SECURITY:
 * - Do NOT share the Sheet for editing. Sheet is write-only via this script.
 * - Read is public (GET returns only approved rows). Admin approves by setting TRUE in Sheet.
 */

const SHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID from the URL

/**
 * Get the reviews sheet (first sheet in the workbook).
 * Uses openById so the script can be standalone (not bound to the sheet).
 */
function getReviewsSheet() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  return ss.getSheets()[0];
}

/**
 * doGet — READ: Return approved reviews as JSON or JSONP.
 * Called when the site fetches reviews (GET request).
 * Only rows where approved === TRUE, sorted by created_at descending (latest first).
 * If query param "callback" is present, returns JSONP (avoids CORS — no Access-Control headers needed).
 */
function doGet(e) {
  try {
    e = e || {};
    var rows = getApprovedRows();
    var callback = e.parameter && e.parameter.callback;
    if (callback) {
      var safeName = String(callback).replace(/[^a-zA-Z0-9_.]/g, '');
      var js = safeName + '(' + JSON.stringify(rows) + ')';
      return ContentService.createTextOutput(js).setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return createJsonResponse(rows);
  } catch (err) {
    if (e && e.parameter && e.parameter.callback) {
      var cb = String(e.parameter.callback).replace(/[^a-zA-Z0-9_.]/g, '');
      return ContentService.createTextOutput(cb + '([])').setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return createJsonResponse({ error: err.message }, 200);
  }
}

function getApprovedRows() {
  var sheet = getReviewsSheet();
  var data = sheet.getDataRange().getValues();

  if (data.length <= 1) return [];

  var headers = data[0].map(function (h) { return String(h).toLowerCase().replace(/\s+/g, '_'); });
  var idIdx = headers.indexOf('id');
  var nameIdx = headers.indexOf('name');
  var courseIdx = headers.indexOf('course');
  var ratingIdx = headers.indexOf('rating');
  var reviewIdx = headers.indexOf('review');
  var createdIdx = headers.indexOf('created_at');
  var approvedIdx = headers.indexOf('approved');

  var rows = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var approved = row[approvedIdx];
    if (approved !== true && String(approved).toUpperCase() !== 'TRUE') continue;
    rows.push({
      id: row[idIdx] != null ? String(row[idIdx]) : '',
      name: row[nameIdx] != null ? String(row[nameIdx]) : '',
      course: row[courseIdx] != null ? String(row[courseIdx]) : '',
      rating: Number(row[ratingIdx]) || 0,
      review: row[reviewIdx] != null ? String(row[reviewIdx]) : '',
      created_at: row[createdIdx] != null ? String(row[createdIdx]) : '',
      approved: true
    });
  }

  rows.sort(function (a, b) {
    var da = new Date(a.created_at).getTime();
    var db = new Date(b.created_at).getTime();
    return db - da;
  });
  return rows;
}

/**
 * doPost — WRITE: Append one new review row.
 * Accepts form-encoded (e.parameter) or JSON (e.postData.contents) body: name, course, rating, review.
 * Sets: id (timestamp), created_at (ISO), approved = FALSE.
 * Wrapped in try-catch so errors return 200 + { success: false, error } instead of 500 (avoids CORS block).
 */
function doPost(e) {
  try {
    e = e || {};
    var body = {};
    if (e.parameter) {
      body = { name: e.parameter.name, course: e.parameter.course, rating: e.parameter.rating, review: e.parameter.review };
    } else if (e.postData && e.postData.contents) {
      try {
        body = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        return createJsonResponse({ success: false, error: 'Invalid JSON' }, 200);
      }
    }

    var name = (body.name != null ? String(body.name).trim() : '') || '';
    var course = (body.course != null ? String(body.course).trim() : '') || '';
    var rating = typeof body.rating === 'number' ? body.rating : parseInt(body.rating, 10);
    var review = (body.review != null ? String(body.review).trim() : '') || '';

    if (!name) return createJsonResponse({ success: false, error: 'Name is required' }, 200);
    if (!review) return createJsonResponse({ success: false, error: 'Review is required' }, 200);
    if (isNaN(rating) || rating < 1 || rating > 5) return createJsonResponse({ success: false, error: 'Rating must be 1–5' }, 200);
    if (review.length > 400) return createJsonResponse({ success: false, error: 'Review must be at most 400 characters (about 50 words)' }, 200);

    var id = 'rev_' + new Date().getTime();
    var created_at = new Date().toISOString();
    var approved = false;

    var sheet = getReviewsSheet();
    sheet.appendRow([id, name, course, rating, review, created_at, approved]);

    return createJsonResponse({ success: true, id: id });
  } catch (err) {
    return createJsonResponse({ success: false, error: err.message || 'Server error' }, 200);
  }
}

/**
 * Return a JSON response with optional status code.
 */
function createJsonResponse(data, statusCode) {
  statusCode = statusCode || 200;
  var output = ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
  return output;
}
