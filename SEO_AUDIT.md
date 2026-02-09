# SEO Audit — Savvy Axiss Website

**Audit date:** February 2026  
**Scope:** Full site (index.html, src/, public/, routing, meta, schema, sitemap, robots).

---

## Overall SEO Score: **88 / 100**

---

## 1. Technical foundation (22/25)

| Item | Status | Notes |
|------|--------|--------|
| **Sitemap** | ✅ | `public/sitemap.xml` — all main pages + course slugs + project slugs; valid XML, lastmod, priority, changefreq. |
| **robots.txt** | ✅ | Allows `/`, disallows `/apply` and `/enroll`; Sitemap URL declared. |
| **Canonical URLs** | ✅ | Every page sets canonical via React Helmet (`SEO_BASE_URL` from `src/lib/seo.ts`). |
| **Base HTML** | ✅ | `index.html`: charset, viewport, geo meta, lang="en", default OG/Twitter, GA4, favicon, manifest. |
| **Hreflang** | ✅ | `en-IN` and `x-default` in index.html (single locale; ready for future languages). |
| **GA4** | ✅ | G-2SZP0HMZX2 in index.html. |
| **GSC/Bing** | ⚠️ | Placeholder comments only; add verification meta when you have the tags. |

**Deductions:** −3 for GSC/Bing not yet verified (recommended for indexing and Search Console).

---

## 2. On-page SEO (23/25)

| Item | Status | Notes |
|------|--------|--------|
| **Unique &lt;title&gt;** | ✅ | All routes: Index, About, Courses, CourseDetail, CourseEnroll, Projects, ProjectDetail, WebDevelopment, Internship, Blog, Contact, Apply, NotFound — each has a distinct, keyword-aware title. |
| **Meta description** | ✅ | Unique per page; ~150–160 chars; includes location (Chennai/Maduravoyal) and intent. |
| **Meta keywords** | ✅ | Present and relevant (not a ranking factor but harmless). |
| **Single H1 per page** | ✅ | Home (HeroSection), About, Courses, CourseDetail, CourseEnroll, Projects, ProjectDetail, WebDevelopment, Internship, Blog, Contact, Apply, NotFound — one primary H1 each. ProjectDetail has conditional “Project Not Found” H1 when missing. |
| **Keyword usage** | ✅ | Primary terms (programming courses Chennai, final year projects, internship, website development) used in titles and descriptions. |

**Deductions:** −2 for minor room to strengthen long-tail/question phrases in a few descriptions.

---

## 3. Structured data / Schema (20/20)

| Schema | Where | Status |
|--------|--------|--------|
| **Organization** | Home | ✅ EducationalOrganization, address, contactPoint, sameAs. |
| **WebSite** | Home | ✅ SearchAction for `/courses?search={search_term_string}`. |
| **LocalBusiness** | Home | ✅ NAP, geo, openingHours, areaServed (Chennai + areas). |
| **BreadcrumbList** | Courses, CourseDetail, Projects, ProjectDetail, About, WebDevelopment, Internship, Blog | ✅ |
| **Course** | CourseDetail | ✅ name, description, provider, offers, aggregateRating where used. |
| **FAQPage** | Home, Courses, CourseDetail, WebDevelopment | ✅ |
| **Review / AggregateRating** | Home | ✅ |
| **Service/WebPage** | WebDevelopment, Internship | ✅ |

**Deductions:** None. Implementation is strong and consistent.

---

## 4. Open Graph &amp; Twitter (12/15)

| Item | Status | Notes |
|------|--------|--------|
| **og:type, og:url, og:title, og:description** | ✅ | Set on all main pages via Helmet. |
| **og:image** | ✅ | Default in index.html; overridden where needed (e.g. ProjectDetail uses project image). |
| **og:image dimensions** | ✅ | Home has og:image:width/height (1200×630). |
| **Twitter card** | ✅ | summary_large_image (or summary for Apply/Enroll). |
| **Twitter title/description/image** | ⚠️ | Present on most pages; a few list pages could explicitly set twitter:description for consistency. |

**Deductions:** −3 for minor inconsistency on a couple of pages (e.g. Courses could add explicit twitter:description).

---

## 5. Crawlability &amp; indexing (10/10)

| Item | Status | Notes |
|------|--------|--------|
| **Apply / Enroll** | ✅ | `noindex, follow` + excluded from sitemap; forms not indexed. |
| **404** | ✅ | `noindex, nofollow` + descriptive title/description. |
| **Internal links** | ✅ | Nav + footer + in-content links to courses, projects, contact. |
| **URL structure** | ✅ | Clean, hyphenated routes (`/web-development`, `/courses/:slug`, `/projects/:slug`). |

**Deductions:** None.

---

## 6. Content &amp; UX signals (8/10)

| Item | Status | Notes |
|------|--------|--------|
| **Image alt text** | ⚠️ | Used in key components (Navbar, Footer, FeaturedCourses, ProjectDetail, etc.); ensure every meaningful image has descriptive alt. |
| **Mobile** | ✅ | viewport meta; layout is responsive. |
| **Performance** | — | Not measured here; use Lighthouse / PageSpeed in production. |

**Deductions:** −2 for ensuring full alt coverage on all images (quick audit of `<img>` and Next/Image-style usage).

---

## 7. Local SEO (8/10)

| Item | Status | Notes |
|------|--------|--------|
| **NAP consistency** | ✅ | Single address in `seo.ts` (CHENNAI_ADDRESS); used in Organization and LocalBusiness. |
| **Geo meta** | ✅ | index.html: geo.region, geo.placename, geo.position, ICBM. |
| **Area served** | ✅ | LocalBusiness areaServed includes Chennai and localities (Maduravoyal, T Nagar, etc.). |
| **Contact** | ✅ | Contact page and schema; phone/email in CONTACT_INFO. |

**Deductions:** −2 for optional enhancements: more local landing content and/or local business citations.

---

## Summary by category

| Category | Score | Max |
|----------|--------|-----|
| Technical foundation | 22 | 25 |
| On-page SEO | 23 | 25 |
| Structured data | 20 | 20 |
| Open Graph &amp; Twitter | 12 | 15 |
| Crawlability &amp; indexing | 10 | 10 |
| Content &amp; UX signals | 8 | 10 |
| Local SEO | 8 | 10 |
| **Total** | **88** | **100** |

---

## How to reach 95+

1. **Add GSC and Bing verification** — Paste the meta or HTML file verification in `index.html` (or as instructed). (+2)
2. **Set twitter:description (and image where needed)** on every page that has og:description. (+1–2)
3. **Alt text audit** — Ensure every `<img>` (and any image component) has an appropriate `alt`. (+1)
4. **Optional:** Add more long-tail/question keywords in meta descriptions and H2s where natural. (+1)
5. **Optional:** Strengthen local signals (e.g. “Chennai” in a few more headings or intro paragraphs). (+1)

---

## Files reviewed

- `index.html` — default meta, GA4, favicon, OG baseline.
- `public/robots.txt` — rules and sitemap.
- `public/sitemap.xml` — URL set.
- `src/lib/seo.ts` — base URL, schemas, NAP, helpers.
- `src/App.tsx` — routing.
- All page components under `src/pages/` for Helmet, title, meta, and schema.
- Key components: Navbar, Footer, HeroSection, FeaturedCourses, etc., for H1 and alt usage.

No critical SEO bugs were found. The site is in good shape for indexing and local search; the remaining points are refinements and verification steps.
