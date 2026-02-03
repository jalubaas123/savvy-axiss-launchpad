# OG Images – What’s in Place & What’s Needed

## Current setup

- **File in use:** `public/og-image.png` (your attached image).
- **Used for:** Default/site-wide Open Graph and Twitter Card image.
- **Where it’s used:**
  - `index.html` – default OG image before React loads
  - **Home** – `og:image` and `twitter:image`
  - **About** – `og:image` and `twitter:image`
  - **Projects** – `og:image` and `twitter:image`
  - **Courses** – `og:image` and `twitter:image`
  - **Web Development** – `og:image` and `twitter:image`
  - **Internship** – `og:image` and `twitter:image`
  - **Contact** – `og:image`
  - **Course detail** (e.g. `/courses/mern-fullstacka`) – `og:image` and `twitter:image` (fallback to site image)
- **Project detail** pages use each project’s `image` from data (e.g. Unsplash URLs), so no extra file is required for those.

So **og-image.png is placed correctly** and is the single OG image for the whole site. All main pages and course pages will show it when shared on social (Facebook, LinkedIn, Twitter, WhatsApp, etc.).

---

## Recommended image specs

- **Size:** 1200 × 630 px (works well on Facebook, LinkedIn, Twitter).
- **Format:** PNG or JPG.
- **Aspect ratio:** 1.91:1.
- **File size:** Under ~1 MB so it loads quickly.
- **Content:** Logo/brand + short tagline or key message; avoid important text near the edges (some platforms crop).

---

## Optional: page-specific OG images

Right now one image is used everywhere. If you want a **different image per section** (e.g. “Courses” vs “Internship”), add files to `public/` and we can point those pages to them:

| Optional file      | Used for   | Current behavior      |
|--------------------|------------|------------------------|
| (none)             | All pages  | `og-image.png`         |
| `og-home.png`      | Home       | Would override default |
| `og-about.png`     | About      | Would override default |
| `og-projects.png`  | Projects   | Would override default |
| `og-courses.png`   | Courses    | Would override default |
| `og-webdev.png`    | Web Dev    | Would override default |
| `og-internship.png`| Internship | Would override default |
| `courses/{slug}-og.jpg` | Each course page | Would override per course |

You don’t need any of these for correct behavior; they’re only for richer, page-specific previews when shared.

---

## Summary

| Item                         | Status |
|------------------------------|--------|
| `public/og-image.png` in use | Done   |
| Default OG in `index.html`   | Points to `og-image.png` |
| All main pages use `og-image.png` | Done   |
| Course detail pages use `og-image.png` | Done (fallback) |
| Project detail pages        | Use project image from data (no extra file) |
| Optional page-specific OG  | Add files above only if you want different images per page |

Your attached **og-image.png** is placed correctly and is the only OG image you need for the site to work. Optional extras are only for better, page-specific sharing previews.
