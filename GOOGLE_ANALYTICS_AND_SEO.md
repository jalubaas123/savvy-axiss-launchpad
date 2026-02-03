# Google Analytics & SEO – What’s Done & What You Need

## Google Measurement ID in Use

- **GA4 Measurement ID:** `G-2SZP0HMZX2`

---

## What’s Implemented

### 1. Google Analytics 4 (GA4)

- **`index.html`**
  - gtag.js loaded: `https://www.googletagmanager.com/gtag/js?id=G-2SZP0HMZX2`
  - `gtag('config', 'G-2SZP0HMZX2')` runs on every page load.
- **SPA page views**
  - In `Layout.tsx`, on every route change we send a `page_view` event with `page_path` and `page_title` so GA4 gets correct URLs and titles for client-side navigation.

So: **each page load and each in-app navigation is tracked** with your measurement ID.

### 2. Canonicals (no duplicates)

- **Removed** the static canonical from `index.html` so there is only **one canonical per page**, set by React Helmet on the active route.
- Each route sets its own canonical exactly once:

| Route | Canonical |
|-------|-----------|
| `/` | `https://savvyaxiss.com/` |
| `/about` | `https://savvyaxiss.com/about` |
| `/courses` | `https://savvyaxiss.com/courses` |
| `/courses/:slug` | `https://savvyaxiss.com/courses/{slug}` |
| `/projects` | `https://savvyaxiss.com/projects` |
| `/projects/:slug` | `https://savvyaxiss.com/projects/{slug}` |
| `/web-development` | `https://savvyaxiss.com/web-development` |
| `/internship` | `https://savvyaxiss.com/internship` |
| `/contact` | `https://savvyaxiss.com/contact` |
| `/apply` | `https://savvyaxiss.com/apply` |
| `/enroll` | `https://savvyaxiss.com/enroll` |
| 404 | No canonical (robots: noindex,nofollow) |

### 3. Top-level SEO per page

Every page has:

- **Unique `<title>`**
- **Unique meta `description`**
- **Meta `keywords`** (where relevant)
- **Single canonical** (except 404)
- **Open Graph** (og:title, og:description, og:type, og:url; og:image where used)
- **Twitter Card** (twitter:title, twitter:description; twitter:image where used)
- **robots** where needed: `noindex, follow` on Apply & Enroll; `noindex, nofollow` on 404

Pages covered: Home, About, Projects, Courses, Course Detail, Project Detail, Web Development, Internship, Contact, Apply, Enroll, 404.

---

## What You Still Need to Do

### 1. Google Analytics (GA4)

- **Confirm in GA4**
  - In [Google Analytics](https://analytics.google.com/) → Admin → Data Streams → your web stream, confirm the Measurement ID is **G-2SZP0HMZX2** and the stream URL is your live site (e.g. `https://savvyaxiss.com`).
- **Check data**
  - After deploy, open the site, browse a few pages, then in GA4 go to **Reports → Realtime** and confirm hits and page paths.
- **Optional**
  - **Conversions:** In GA4, mark important events (e.g. “Enrollment form submit”, “Contact form submit”) as conversions.
  - **Google Tag Manager (GTM):** If you add more tags later, consider moving the GA4 tag into GTM and removing the gtag snippet from `index.html` (then use a single GTM container snippet).

### 2. Google Search Console

- **Add property**
  - [Search Console](https://search.google.com/search-console) → Add property → URL prefix: `https://savvyaxiss.com` (or your live domain).
- **Verify**
  - Use the “HTML tag” method and add the meta tag they give you to `index.html` in `<head>`, or use DNS/domain verification if you prefer.
- **Submit**
  - Submit `https://savvyaxiss.com/sitemap.xml` in Sitemaps so Google can discover all canonicals.

### 3. Optional: Consent / Cookie Banner

- If you need **GDPR/cookie consent** before loading GA4:
  - Load the gtag script only after the user accepts (or use a consent mode / GTM consent integration).
  - Right now the script loads on first visit without consent; adjust if your legal requirements need it.

### 4. Optional: More GA4 Events

- **Form submissions:** Fire a custom event when Apply or Enroll form is successfully submitted (e.g. `gtag('event', 'form_submit', { form_name: 'apply' })`).
- **Outbound / CTAs:** Optional events for “Click – WhatsApp”, “Click – Course CTA”, etc., for better funnels in GA4.

---

## Quick checklist

| Item | Status |
|------|--------|
| GA4 Measurement ID G-2SZP0HMZX2 in site | Done |
| SPA page_view on route change | Done |
| One canonical per page, no duplicates | Done |
| Unique title/description/keywords per page | Done |
| OG & Twitter tags per page | Done |
| robots (noindex) on Apply, Enroll, 404 | Done |
| Verify GA4 stream URL & check Realtime | You |
| Search Console property + sitemap | You |
| Consent/cookie banner (if required) | Optional |
| Conversions / extra events in GA4 | Optional |

If you tell me your live domain and whether you use GTM, I can suggest exact meta tag text for Search Console and where to add conversion events in your code.
