# SEO Audit (Senior Analyst POV) & Dummy Data Removal List

---

## PART 1: SEO MISSOUTS / REMAINING GAPS

### High priority (fix before launch)

| # | Missout | Where | Action |
|---|---------|--------|--------|
| 1 | **Fake / misleading structured data** | `Index.tsx`, `CourseDetail.tsx`, `ProjectDetail.tsx`, `WebDevelopment.tsx` | `aggregateRating` (e.g. 4.8, 450 reviews, 35 reviews) and hardcoded stats (450+ students) must reflect **real** numbers. Google can penalize fake reviews/ratings. Replace with real data or remove until you have it. |
| 2 | **Fake testimonials in schema** | `WebDevelopment.tsx` (JSON-LD `review`) | Schema includes review from "Kumar Electronics" tied to dummy testimonial. Remove or replace with real, verified reviews only. |
| 3 | **Random review counts** | `src/pages/Courses.tsx` line ~51 | `reviews: Math.floor(Math.random() * 100) + 20` — different on every load. Replace with real review counts or a fixed value until you have a backend. |
| 4 | **Social links – placeholder URLs** | `Footer.tsx`, `seo.ts` | Twitter: `https://twitter.com` (no profile). LinkedIn: `https://linkedin.com` (no company page). Update to real Savvy Axiss profiles (e.g. `twitter.com/savvyaxiss`, `linkedin.com/company/savvyaxiss`) or remove. |
| 5 | **Default / fake course data** | `src/data/courseData.ts` (~846–862) | When a course slug isn’t found, code generates fake course (generic description, syllabus). Either **404** for unknown slugs or show a proper “course not found” — do not serve fake course pages (duplicate/thin content risk). |

### Medium priority (soon after launch)

| # | Missout | Where | Action |
|---|---------|--------|--------|
| 6 | **No hreflang** | Site-wide | If you add Tamil (or other languages) later, add `hreflang` and alternate URLs in `<head>` and sitemap. |
| 7 | **Pre-rendering / SSR** | Build | SPA: crawlers get one HTML shell. Prerender script exists but needs working Puppeteer/Chrome. For stronger SEO, consider SSR (e.g. Vite SSR) or a prerender service so key pages have full HTML. |
| 8 | **Blog / content hub** | N/A | No blog. Adding a Chennai/tech/career blog with internal links to courses/projects can help rankings and topical authority. |
| 9 | **Local / NAP consistency** | Off-site | Ensure same address, phone, name (Savvy Axiss, Maduravoyal) on Google Business Profile, directories, and site. Already consistent on-site. |
| 10 | **Image SEO** | Project/course images | Many images are Unsplash URLs (see Dummy list). Prefer your own images; use descriptive filenames and ensure `alt` is set (already done for key images). |

### Lower priority / optional

| # | Missout | Where | Action |
|---|---------|--------|--------|
| 11 | **FAQ schema** | Contact / key pages | If you add FAQ sections, add `FAQPage` JSON-LD for rich results. |
| 12 | **VideoObject schema** | Project detail | When you have real project demo videos, add `VideoObject` schema for video rich results. |
| 13 | **Breadcrumb in HTML** | All pages | Breadcrumbs exist in schema; optional: visible breadcrumb UI with correct markup for UX + SEO. |

---

## PART 2: DUMMY ENTRIES TO REMOVE OR REPLACE

### Must remove / replace (content & code)

| # | Category | Location | What to do |
|---|----------|----------|------------|
| 1 | **Project video URLs (Rick Roll / placeholder)** | `src/data/projectsData.ts` | All `videoUrl` use `https://www.youtube.com/embed/dQw4w9WgXcQ` (or empty). **Remove or replace** every project `videoUrl` with real demo video IDs, or remove the embed section until you have real videos. |
| 2 | **Project images (Unsplash placeholders)** | `src/data/projectsData.ts` | All project `image` fields use Unsplash URLs. **Replace** with real project screenshots (e.g. in `public/projects/`) or approved stock; update each project’s `image` path. |
| 3 | **Homepage testimonials (fake people/quotes)** | `src/components/home/Testimonials.tsx` | Five testimonials: Priya Sharma, Rahul Verma, Ananya Patel, Vikram Singh, Sneha Reddy — fake names, companies (TCS, Infosys, Flipkart, etc.), quotes, Unsplash avatars. **Replace** with real student testimonials (name, permission, real quote) and real photos or remove section until you have them. |
| 4 | **Web Development page testimonials** | `src/pages/WebDevelopment.tsx` | Four testimonials: Rajesh Kumar (Kumar Electronics), Priya’s Boutique, Dr. Anil Mehta, Patel Real Estate — fake names/businesses/quotes and Unsplash images. **Replace** with real client testimonials or remove. |
| 5 | **About page hero image** | `src/pages/About.tsx` ~line 170 | Uses Unsplash: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop`. **Replace** with real team/office/company image (e.g. in `public/`). |
| 6 | **Course review count (random)** | `src/pages/Courses.tsx` ~line 51 | `reviews: Math.floor(Math.random() * 100) + 20`. **Remove** randomness; use real review count or a single fixed value (e.g. 0) until you have data. |
| 7 | **Stats (450+ students, etc.)** | `HeroSection.tsx`, `StatsCounter.tsx`, `Index.tsx` meta, `WebDevelopment.tsx` stats | “450+ students”, “100+ projects”, etc. **Confirm** these are true; if not, change to real numbers or remove until you have them. |
| 8 | **Schema aggregateRating / reviewCount** | `Index.tsx`, `CourseDetail.tsx`, `ProjectDetail.tsx`, `WebDevelopment.tsx` | All use hardcoded rating/review counts. **Use only real data** or remove `aggregateRating`/review schema until you have verified reviews. |
| 9 | **WebDevelopment schema “review”** | `src/pages/WebDevelopment.tsx` ~458 | JSON-LD includes a review from “Kumar Electronics” (dummy). **Remove** this review from schema or replace with a real, verified review. |

### Verify or replace (assets / paths)

| # | Category | Location | What to do |
|---|----------|----------|------------|
| 10 | **Team member images** | `src/pages/About.tsx` | Paths: `/images/img2.png`, `/images/img1.png`, `/images/raji.png`. **Ensure** these exist under `public/images/` or replace with correct paths. |
| 11 | **Instructor images in data** | `src/data/courseData.ts` | Instructor entries reference `/images/img1.png`, `/images/img2.png`, `/images/raji.png`. **Align** with actual files or keep using UI avatars and remove dead image refs from data. |
| 12 | **Course placeholder image** | `Courses.tsx` line ~45, `courseData.ts` ~850 | Fallback `courseImages[name] \|\| '/placeholder.svg'`. **Ensure** `public/placeholder.svg` exists or use a default course image path you control. |

### Acceptable as-is (UX placeholders)

| # | Item | Note |
|---|------|------|
| 13 | Form input placeholders | e.g. “Enter your full name”, “your@email.com”, “+91 93849 02501”, “Search courses…” — **keep**; they are normal UX placeholder text, not fake content. |
| 14 | Internship copy “not dummy assignments” | `Internship.tsx` — **keep**; it’s marketing copy, not dummy data. |
| 15 | UI component classNames with “placeholder” | `input.tsx`, `textarea.tsx`, etc. — **keep**; CSS/component usage only. |

---

## PART 3: QUICK REFERENCE – FILES TO EDIT

| File | Changes |
|------|--------|
| `src/data/projectsData.ts` | Replace all `videoUrl` (remove dQw4w9WgXcQ / empty); replace all `image` Unsplash URLs with real assets. |
| `src/components/home/Testimonials.tsx` | Replace or remove 5 fake testimonials; use real testimonials + real or no photos. |
| `src/pages/WebDevelopment.tsx` | Replace or remove 4 fake testimonials; remove or fix dummy review in JSON-LD. |
| `src/pages/About.tsx` | Replace Unsplash hero image with real image; verify team image paths. |
| `src/pages/Courses.tsx` | Remove `Math.random()` for reviews; use real or fixed count. |
| `src/components/home/HeroSection.tsx` | Verify “450+” and other stats; use real numbers or remove. |
| `src/components/home/StatsCounter.tsx` | Same as above. |
| `src/pages/Index.tsx` | Meta “450+ students” and LocalBusiness `aggregateRating` — use real data or remove. |
| `src/pages/CourseDetail.tsx` | `aggregateRating` — use real course ratings/review count or remove. |
| `src/pages/ProjectDetail.tsx` | `aggregateRating` — use real data or remove. |
| `src/data/courseData.ts` | Default/fake course generator for unknown slugs — replace with 404 or “course not found”; verify instructor image paths. |
| `src/components/layout/Footer.tsx` | Twitter and LinkedIn links — set to real Savvy Axiss URLs. |
| `src/lib/seo.ts` | sameAs Twitter/LinkedIn — match real profiles. |

---

## Summary

- **SEO:** Fix fake/misleading structured data and stats first; add real social URLs; consider prerender/SSR and real images; then optional (hreflang, FAQ, video schema).
- **Dummy removal:** Replace or remove fake project videos and images, fake testimonials, random/fake review counts, and fake schema ratings/reviews; verify team and course assets; keep form placeholder text as-is.

Use this as the master checklist; tick off as you replace with real content and data.
