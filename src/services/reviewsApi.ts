/**
 * Reviews API — Google Sheets via Apps Script Web App.
 * Read: GET script URL → approved reviews as JSON.
 * Write: POST script URL → append row (approved = FALSE); admin approves in Sheet.
 *
 * Set VITE_REVIEWS_SCRIPT_URL in .env to your deployed Apps Script Web App URL.
 * If unset, the UI falls back to static reviews from data/reviews.ts.
 */

import type { StudentReview } from '@/data/reviews';

// --- Sheet row shape (columns: id, name, course, rating, review, created_at, approved) ---
export interface SheetReview {
  id: string;
  name: string;
  course: string;
  rating: number;
  review: string;
  created_at: string;
  approved: boolean;
}

// --- Payload for submitting a new review (no id, created_at, approved — set by script) ---
export interface SubmitReviewPayload {
  name: string;
  course: string;
  rating: number;
  review: string;
}

const SCRIPT_URL = import.meta.env.VITE_REVIEWS_SCRIPT_URL as string | undefined;

/** Max length for review text (frontend + Apps Script). */
export const REVIEW_MAX_LENGTH = 400;
/** Max words for review (keeps cards compact and professional). */
export const REVIEW_MAX_WORDS = 50;

/** Whether the Google Sheets integration is configured. */
export function isReviewsScriptConfigured(): boolean {
  return typeof SCRIPT_URL === 'string' && SCRIPT_URL.trim().length > 0;
}

/** Script URL for form action (POST via iframe avoids CORS). */
export function getReviewsScriptUrl(): string {
  return typeof SCRIPT_URL === 'string' && SCRIPT_URL.trim() ? SCRIPT_URL.trim() : '';
}

/** Map a sheet row to the display shape used by StudentReviews (id, name, role, image, content, rating, course, dateAdded). */
function mapSheetToDisplay(row: SheetReview): StudentReview {
  return {
    id: row.id,
    name: row.name,
    role: '', // Sheet has no role column; optional to add later
    image: '/placeholder.svg',
    content: row.review,
    rating: row.rating,
    course: row.course,
    dateAdded: row.created_at ? new Date(row.created_at).getFullYear().toString() : undefined,
  };
}

/**
 * Fetch approved reviews using JSONP (script tag) to avoid CORS.
 * Apps Script does not send Access-Control-Allow-Origin for GET, so fetch() is blocked.
 * JSONP loads the URL as a script (?callback=...) and gets data without CORS.
 */
export function fetchApprovedReviews(): Promise<StudentReview[]> {
  if (!isReviewsScriptConfigured()) {
    return Promise.resolve([]);
  }
  const url = `${SCRIPT_URL!.replace(/\/$/, '')}?callback=__reviewsJsonp`;
  return new Promise((resolve, reject) => {
    const callbackName = `__reviewsJsonp_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error('Failed to load reviews: timeout'));
    }, 15000);

    function cleanup() {
      clearTimeout(timeout);
      script.remove();
      delete (window as unknown as Record<string, unknown>)[callbackName];
    }

    (window as unknown as Record<string, (data: SheetReview[]) => void>)[callbackName] = (data: SheetReview[]) => {
      cleanup();
      if (!Array.isArray(data)) {
        resolve([]);
        return;
      }
      resolve(data.map(mapSheetToDisplay));
    };

    const script = document.createElement('script');
    script.src = `${SCRIPT_URL!.replace(/\/$/, '')}?callback=${callbackName}`;
    script.onerror = () => {
      cleanup();
      reject(new Error('Failed to load reviews'));
    };
    document.body.appendChild(script);
  });
}

/** Submit is done via form POST to script URL in a hidden iframe (no fetch, no CORS). See StudentReviews.tsx. */
