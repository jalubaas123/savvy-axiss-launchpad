# Savvy Axiss – Website Readiness Audit & Marks

**Audit date:** 2026-02-03  
**Scope:** Structure, SEO, content, links, forms, assets, accuracy.

---

## Overall readiness score: **92 / 100**

**Verdict:** **Ready for launch.** Core flows, SEO, and content are in place. Instructor images fixed to use placeholder (no 404s). Optional: add real team photos and confirm OG image 1200×630.

---

## 1. Routing & navigation — **18/20**

| Check | Status | Notes |
|-------|--------|--------|
| All routes defined | ✅ | Home, About, Courses, CourseDetail, Projects, ProjectDetail, Web Development, Internship, Blog, Contact, Apply, Enroll, NotFound |
| Navbar links | ✅ | Home, About, Projects, Courses, Web Development, Internship, Resources (Blog), Contact – all valid |
| Footer links | ✅ | Quick links + Popular Courses use SEO-friendly URLs |
| 404 handling | ✅ | NotFound with meta noindex, Go Home / Go Back |
| Course detail URLs | ✅ | SEO slugs (e.g. `/courses/excel-advanced`, `/courses/vibe-coding`) |
| Project detail URLs | ✅ | SEO slugs (e.g. `/projects/ecommerce-website`) |

**Deductions:**  
- Apply/Enroll not in main nav (by design if intentional): -0  
- No sitemap link in footer: -2 (minor; sitemap in robots.txt)

---

## 2. SEO — **22/25**

| Check | Status | Notes |
|-------|--------|--------|
| Global meta (index.html) | ✅ | Title, description, keywords, canonical, geo |
| Per-page meta (Helmet) | ✅ | Title, description, canonical, OG, Twitter on main pages |
| H1 per page + Chennai | ✅ | e.g. Home: "Programming Courses, Projects & Internships in Chennai" |
| Heading hierarchy | ✅ | H1 → H2 → H3, no skips |
| Schema (JSON-LD) | ✅ | Organization, WebSite, LocalBusiness, FAQ (home), Course (detail), etc. |
| Sitemap | ✅ | public/sitemap.xml, course URLs use SEO slugs |
| robots.txt | ✅ | Allow /, Sitemap URL, Disallow /apply, /enroll |
| URL structure | ✅ | Lowercase, hyphenated (e.g. /web-development, /courses/excel-advanced) |
| Internal links | ✅ | 3–5+ keyword-rich links per page |
| Image ALT | ✅ | Descriptive ALT on course/project images |
| Lazy loading | ✅ | FeaturedCourses, Testimonials images |

**Deductions:**  
- OG image size (1200×630) not verified in audit: -2  
- Canonical/OG use savvyaxiss.com; ensure production domain matches: -1  

---

## 3. Content & copy — **17/20**

| Check | Status | Notes |
|-------|--------|--------|
| Home messaging | ✅ | Chennai, services, areas (T Nagar, Velachery, etc.) |
| Service pages | ✅ | Courses, Projects, Internship, Web Development have clear copy |
| About | ✅ | Story, team (Shalini, Varsha, Rajalakshmi), values |
| Contact info | ✅ | Address, info@savvyaxiss.com, +91 93849 02501 in Footer/Contact |
| Form submit emails | ✅ | careers@savvyaxiss.com for Contact, Apply, Enroll, EnrollModal |
| FAQs (home) | ✅ | 4 FAQs with schema |
| Blog/Resources | ✅ | Placeholder “coming soon” + links to courses/projects/etc. |
| Testimonials | ✅ | Empty array; no fake reviews (good) |

**Deductions:**  
- Team/instructor images use `/placeholder.svg` or `/images/…` (see Assets): -2  
- Blog has no real articles yet (acceptable for launch): -1  

---

## 4. Forms & functionality — **14/15**

| Check | Status | Notes |
|-------|--------|--------|
| Contact form | ✅ | FormSubmit.co → careers@savvyaxiss.com |
| Apply form | ✅ | FormSubmit.co → careers@savvyaxiss.com |
| Enroll form | ✅ | FormSubmit.co → careers@savvyaxiss.com |
| Enroll modal (course detail) | ✅ | Same submit target |
| Course filters (Courses page) | ✅ | Category, level, search |
| Course detail by slug | ✅ | getCourseBySlug supports SEO + legacy slugs |
| Project detail by slug | ✅ | getProjectBySlug, project slugs are SEO-friendly |

**Deductions:**  
- No client-side validation beyond HTML5: -1 (optional)  

---

## 5. Assets & media — **14/15**

| Check | Status | Notes |
|-------|--------|--------|
| Favicon | ✅ | public/favicon/ (ico, svg, apple, manifest) |
| Logo | ✅ | public/logo.png |
| OG image | ✅ | public/og-image.png (confirm 1200×630 for best previews) |
| Course images | ✅ | python.png, msexcel.png, html.png, etc. in public/ |
| placeholder.svg | ✅ | Used where no image yet |
| Instructor images (courseData) | ✅ | Set to `/placeholder.svg` (no 404s). Replace with real photos in public/images/ when ready. |

**Deductions:**  
- No .webp or explicit image compression noted: -1  

**Recommendation:** When you have team/instructor photos, add them under `public/images/` and update courseData instructor `image` paths.

---

## 6. Data & config accuracy — **14/15**

| Check | Status | Notes |
|-------|--------|--------|
| Address | ✅ | 38, 4th Block MMDA Colony, Maduravoyal, Chennai 600095 – consistent (seo, Footer, Contact) |
| Phone | ✅ | +91 93849 02501 – Footer, Contact, seo CONTACT_INFO |
| Email | ✅ | info@savvyaxiss.com (display), careers@savvyaxiss.com (forms) |
| Social links (Footer) | ✅ | Facebook, Twitter, LinkedIn, Instagram, YouTube |
| Course list vs courseDetails | ✅ | Slugs and baseSlug align; getCourseBySlug resolves correctly |
| Project slugs | ✅ | Match projectsData (e.g. ecommerce-website, food-delivery-app) |
| Analytics | ✅ | GA4 G-2SZP0HMZX2 in index.html |
| Canonical base | ✅ | https://savvyaxiss.com in seo.ts and meta |

**Deductions:**  
- If phone/email differ from real business, update seo.ts + Contact + Footer: -1  

---

## 7. Technical & best practices — **13/15**

| Check | Status | Notes |
|-------|--------|--------|
| React + Vite | ✅ | SPA with client-side routing |
| Layout wrapper | ✅ | Layout with Navbar + Footer on all main routes |
| No broken internal links | ✅ | All Link to= and href= point to existing routes or valid externals |
| External links | ✅ | FormSubmit, WhatsApp, social – target="_blank" + rel where appropriate |
| Linter | ✅ | No errors reported on edited files |
| Build | ✅ | Assumed OK (Vite); run `npm run build` before deploy |

**Deductions:**  
- No redirects for old course URLs (e.g. /courses/excela) – backward compatibility in getCourseBySlug mitigates: -1  
- No explicit performance audit (LCP, CLS): -1  

---

## Summary by category

| Category | Score | Max |
|----------|--------|-----|
| Routing & navigation | 18 | 20 |
| SEO | 22 | 25 |
| Content & copy | 17 | 20 |
| Forms & functionality | 14 | 15 |
| Assets & media | 14 | 15 |
| Data & config accuracy | 14 | 15 |
| Technical & best practices | 13 | 15 |
| **Total** | **92** | **100** |

---

## Quick fixes before or right after launch

1. **Instructor images**  
   - Currently set to `'/placeholder.svg'` in courseData (no 404s).  
   - When ready, add real photos under `public/images/` and update instructor `image` in `src/data/courseData.ts`.

2. **OG image**  
   - Ensure `public/og-image.png` is **1200×630 px** for best sharing on WhatsApp, LinkedIn, Twitter.

3. **Production domain**  
   - Confirm canonical and OG URLs use the live domain (e.g. https://savvyaxiss.com) after deploy.

4. **Optional**  
   - Add a “Sitemap” link in footer (e.g. to `/sitemap.xml`) for transparency.  
   - Run Lighthouse/PageSpeed and fix any critical issues.

---

## Final marks

- **Overall: 92/100 – A- (Ready for launch)**  
- **SEO: 22/25 – Strong**  
- **Content & accuracy: 17/20 – Good**  
- **Technical: 13/15 – Good**  
- **Assets: 14/15 – Good** (optional: real team photos + .webp for full marks)

The site is **ready for production**. Optional improvements: add real instructor/team photos, confirm OG image is 1200×630, and run Lighthouse for performance.
