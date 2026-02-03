# Medium Priority SEO – Done & Your Checklist

## What’s done (in code)

| # | Item | Status |
|---|------|--------|
| 6 | **hreflang** | Added in `index.html`: `en-IN` and `x-default` both point to `https://savvyaxiss.com/`. When you add Tamil (or another language), add more `<link rel="alternate" hreflang="ta-IN" href="https://savvyaxiss.com/ta/" />` and set `x-default` to your main language URL. |
| 7 | **Pre-rendering** | Prerender script updated: extra Puppeteer args (`--disable-dev-shm-usage`, `--disable-gpu`, etc.), `/blog` in routes, `domcontentloaded` + 2.5s wait. Run: `npm run build && npm run prerender` (needs Puppeteer/Chrome). |
| 8 | **Blog / content hub** | Added **Resources** page at `/blog` with internal links to Courses, Projects, Web Development, Internship and a “More content coming soon” CTA. Nav and footer link to it; sitemap and prerender include `/blog`. |
| 9 | **NAP on-site** | Already consistent: address, phone, name in Footer, Contact, and schema. No code change. |
| 10 | **Image SEO** | Alt text is set on key images. Project/course images still use Unsplash URLs — see “Your checklist” below. |

---

## Your checklist (manual / off-site)

### NAP consistency (medium #9)
- [ ] **Google Business Profile** – Name, address, phone match the site exactly: **Savvy Axiss**, **38, 4th Block MMDA Colony, Maduravoyal, Chennai-600095, Tamil Nadu, India**, **+91 93849 02501**.
- [ ] **Other directories** – Same NAP on JustDial, Sulekha, or any other listing.
- [ ] **Schema** – Already correct on-site (`CHENNAI_ADDRESS` in `seo.ts`).

### Image SEO (medium #10)
- [ ] **Project images** – Replace Unsplash URLs in `src/data/projectsData.ts` with your own files (e.g. under `public/projects/`) and use descriptive filenames (e.g. `ecommerce-website-screenshot.jpg`).
- [ ] **About hero image** – Replace the Unsplash hero in `About.tsx` with a real team/office image (e.g. `public/images/about-hero.jpg`).
- [ ] **Alt text** – Already in place; keep descriptive alt when you add new images.

### Pre-rendering (medium #7)
- [ ] Run `npm run build && npm run prerender` on a machine where Puppeteer can launch Chrome (e.g. CI or local with Chrome installed). If it fails, deploy as SPA and consider a prerender service (e.g. Prerender.io) or SSR later.

### Blog / content (medium #8)
- [ ] When you add real articles, create routes like `/blog/:slug` and list them in the sitemap. Link to courses/projects from each post for internal linking.

---

## Summary

- **Done in repo:** hreflang, improved prerender script, Blog/Resources page with internal links, sitemap/nav/footer/prerender updated, NAP and image SEO documented.
- **Your follow-up:** Align NAP off-site (Google Business, directories), replace Unsplash images with your own, run prerender when possible, and add real blog posts when ready.
