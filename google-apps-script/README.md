# Student Reviews — Google Apps Script setup

This folder contains the **write (doPost)** and **read (doGet)** API for student reviews. Google Sheets is the only persistence layer; no backend server or database.

## 1. Create the Google Sheet

1. Create a new Google Sheet.
2. In **row 1**, add these column headers exactly:
   ```
   id | name | course | rating | review | created_at | approved | gender | image
   ```
   - **gender** (required): `male` or `female` — used for the default profile picture when no image is uploaded.
   - **image** (optional): URL or base64 image if the user uploads a photo.
3. Copy the **Spreadsheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Use `SPREADSHEET_ID` in the script.

**Important:** Do **not** share the Sheet for public editing. Writes happen only through the script (write-only). Read is public via the script.

## 2. Deploy the script

1. In Google Drive: **New → More → Google Apps Script** (or from the Sheet: **Extensions → Apps Script**).
2. Replace `YOUR_SPREADSHEET_ID` in `Reviews.gs` with your Spreadsheet ID.
3. Paste the full contents of `Reviews.gs` into the script editor.
4. **Deploy → New deployment → Type: Web app**
   - **Execute as:** Me
   - **Who has access:** Anyone
5. Copy the **Web App URL** (e.g. `https://script.google.com/macros/s/.../exec`).

## 3. Configure the site

In your project root, create or edit `.env`:

```env
VITE_REVIEWS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart the dev server after changing `.env`. Redeploy the site (Vercel/Netlify) so the env var is available in production.

## Flow

- **Submit (POST):** User submits the form → React sends JSON to the script → script appends a row with `approved = FALSE`.
- **Admin:** In the Sheet, set `approved` to `TRUE` for rows you want to show.
- **Read (GET):** The site fetches the script URL → script returns only rows where `approved === TRUE`, sorted by `created_at` (latest first). List updates on page load and on optional 60s polling.

## Security

- Sheet edit access is **not** exposed. All writes go through the script.
- Read is public (anyone can call GET and see approved reviews only).
- Optional: restrict script deployment to “Anyone, even anonymous” only if you need unauthenticated POST from the site.
