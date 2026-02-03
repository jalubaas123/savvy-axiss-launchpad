# Savvy Axiss – SEO Score & How You’ll Appear in Google

This doc estimates your **SEO score**, how **keywords** can bring traffic, and what **rich results** people may see when they search.

---

## 1. Website SEO Score (Estimated)

**Overall SEO score: 78–85 / 100** (technical + on-page; not ranking position).

| Area | Score | Notes |
|------|--------|--------|
| **Technical SEO** | 85/100 | Sitemap, robots.txt, canonicals, base URL. Pre-render script exists; run it so crawlers get HTML. |
| **On-Page SEO** | 88/100 | Title/description/keywords per page, H1–H3 hierarchy, image alts. Strong. |
| **Structured Data** | 90/100 | Organization, WebSite, LocalBusiness, Course, Product, Service, AboutPage, ContactPage, BreadcrumbList. Rich-result ready. |
| **Internal Linking** | 82/100 | Footer quick links, nav, CTAs. Good; add more in-body links to courses/projects where relevant. |
| **Crawlability** | 75/100 | SPA: Google runs JS, but pre-rendering or static HTML improves certainty. Run `npm run build:full` and serve pre-rendered pages. |
| **Content & Keywords** | 80/100 | Primary/secondary keywords in titles and meta; can be reinforced more in body copy over time. |

**What would push you to 90+:**  
Pre-rendered or static HTML for main URLs, OG images (1200×630) in place, Google Search Console + indexing, and more internal links from content to key pages.

---

## 2. How Keywords Will Play in Google (What People Type → What They See)

When someone types a query, Google shows **title**, **URL**, and **snippet** (and sometimes rich results). Below is how your **current meta tags** map to likely queries.

### Homepage (`savvyaxiss.com`)

| People might search… | What they’ll see (title + snippet) |
|----------------------|------------------------------------|
| **final year projects** | **Final Year Projects, Tech Courses & Web Development \| Savvy Axiss** · “Savvy Axiss offers complete final year project solutions, live tech courses…” |
| **tech courses India** / **MERN stack course** | Same as above (keywords in title + description). |
| **website development small business** / **tech internship India** | Same homepage; snippet highlights the part of the description that matches. |
| **Savvy Axiss** / **Savvy Axiss Chennai** | Your brand result; Organization + WebSite schema can add sitelinks/search box. |

### About

| People might search… | What they’ll see |
|----------------------|------------------|
| **about Savvy Axiss** / **tech training company India** | **About Us - Empowering Tech Professionals Since 2022 \| Savvy Axiss** · “Learn about Savvy Axiss - founded in 2022…” |

### Projects

| People might search… | What they’ll see |
|----------------------|------------------|
| **BTech final year project** / **MCA project** / **college project solutions** | **Final Year Projects for BTech, MCA & MBA Students \| Savvy Axiss** · “Complete final year project solutions for BTech, BE, MCA & MBA…” |

### Courses

| People might search… | What they’ll see |
|----------------------|------------------|
| **MERN stack course** / **Python course** / **full stack developer course** / **digital marketing course India** | **Professional Tech Courses - Live Training & Certification \| Savvy Axiss** · “Live online tech courses: Python, MERN Stack, Full Stack…” |
| **React training** / **coding bootcamp India** | Same courses page (keywords in meta). |

### Course detail pages (e.g. `/courses/mern-fullstacka`)

| People might search… | What they’ll see |
|----------------------|------------------|
| **MERN full stack course** / **MERN stack certification** | **MERN Full Stack - Advanced Level \| Savvy Axiss** (or matching level) · “Learn MERN Full Stack with live online training…” |
| **Python course Chennai** / **React course online** | Corresponding course page title + description. |

### Web Development

| People might search… | What they’ll see |
|----------------------|------------------|
| **website development India** / **small business website** / **Chennai web development** | **Website Development Services for Small Business \| Savvy Axiss** · “Custom website development for Indian businesses…” |

### Internship

| People might search… | What they’ll see |
|----------------------|------------------|
| **tech internship India** / **web development internship** / **internship with certificate** | **Tech Internship Programs with Certificate & Job Placement \| Savvy Axiss** · “Structured tech internships in Web Development, Data Science…” |

### Contact

| People might search… | What they’ll see |
|----------------------|------------------|
| **contact Savvy Axiss** / **Savvy Axiss get in touch** | **Contact Us - Get in Touch with Savvy Axiss** · “Have questions about our courses, projects, or services?…” |

### Project detail pages (e.g. `/projects/ecommerce-website`)

| People might search… | What they’ll see |
|----------------------|------------------|
| **e-commerce website project** / **final year project web development** | **E-Commerce Website - Final Year Project \| Savvy Axiss** · “E-Commerce Website final year project solution. Complete source code…” |

**Summary:** Your titles and descriptions are aligned with the main keywords from your strategy. Rankings depend on competition, backlinks, and content depth; your **on-page and structured data are in good shape** for Google to show these snippets when the site is indexed and relevant.

---

## 3. Rich Results – What People May See in Google

Rich results are the **extra bits** (stars, breadcrumbs, course cards, sitelinks) that can show with your listing. They depend on **structured data** and **Google’s choice** to show them.

### Already implemented (eligible for rich results)

| Schema you have | What can show in Google |
|-----------------|-------------------------|
| **Organization** (global) | **Knowledge panel** for “Savvy Axiss”: logo, description, social links, sometimes sitelinks. |
| **WebSite + SearchAction** | **Search box** in results: “Search Savvy Axiss” with a box that searches your site (e.g. courses). |
| **LocalBusiness** (home) | **Star rating** (e.g. 4.8 · 450 reviews) and **price range (₹₹)** next to your homepage result. |
| **Course** (course detail pages) | **Course rich result**: course name, provider “Savvy Axiss”, rating, duration, price. Can appear in **course carousels** or as a rich snippet. |
| **Product** (project detail + web dev) | **Product**-style result: name, brand “Savvy Axiss”, price, rating. Can get **star snippet** (e.g. 4.8 · 35 reviews). |
| **BreadcrumbList** (course/project details) | **Breadcrumbs** under the title: `Home > Courses > MERN Full Stack` or `Home > Projects > E-Commerce Website`. |
| **Review / AggregateRating** (home, web dev, course/project pages) | **Star rating** in the snippet (e.g. ★★★★☆ 4.8 · 450 reviews). |
| **AboutPage** (about) | Helps Google understand the page; can support **site links** or knowledge panel. |
| **ContactPage** (contact) | Can support **“Contact”** or similar sitelink. |

### Example of what a searcher might see

**Query: “final year projects BTech”**

- **Title:** Final Year Projects, Tech Courses & Web Development | Savvy Axiss  
- **URL:** https://savvyaxiss.com/  
- **Snippet:** “Savvy Axiss offers complete final year project solutions, live tech courses (Python, MERN, Full Stack)…”  
- **Rich:** ★★★★☆ 4.8 · 450 reviews · ₹₹ (from LocalBusiness)

**Query: “MERN stack course”**

- **Title:** Professional Tech Courses - Live Training & Certification | Savvy Axiss  
- **URL:** https://savvyaxiss.com/courses  
- **Snippet:** “Live online tech courses: Python, MERN Stack, Full Stack…”  
- **Or** a specific course: **MERN Full Stack - Advanced Level | Savvy Axiss** with breadcrumb `Home > Courses > MERN Full Stack` and rating.

**Query: “Savvy Axiss”**

- **Title:** Final Year Projects, Tech Courses & Web Development | Savvy Axiss  
- **URL:** https://savvyaxiss.com  
- **Rich:** Organization panel (logo, description, links) + optional **“Search Savvy Axiss”** box.

**Query: “website development Chennai”**

- **Title:** Website Development Services for Small Business | Savvy Axiss  
- **URL:** https://savvyaxiss.com/web-development  
- **Snippet:** “Custom website development for Indian businesses…”  
- **Rich:** ★★★★☆ 4.9 · 47 reviews (from Product/Service schema).

---

## 4. How to Check Your Real Score and Rich Results

These run on **your live site** (or built output), not in the repo:

| Tool | What it does |
|------|----------------------|
| **Google Rich Results Test** | https://search.google.com/test/rich-results · Paste a URL (e.g. homepage, a course page). Shows if Course, Organization, LocalBusiness, Breadcrumb, etc. are valid and **eligible** for rich results. |
| **PageSpeed Insights** | https://pagespeed.web.dev/ · Enter savvyaxiss.com. Gives **performance** (and partly UX); aim for 90+ and “Good” Core Web Vitals. |
| **Google Search Console** | Add property savvyaxiss.com, submit sitemap, use “URL Inspection” and “Enhancements” (e.g. Core Web Vitals, structured data) to see **real indexing and rich result status**. |
| **Mobile-Friendly Test** | https://search.google.com/test/mobile-friendly · Confirms mobile layout; important for ranking. |

---

## 5. Short Summary

| Question | Answer |
|----------|--------|
| **SEO score?** | **~78–85/100** from implementation; 90+ with pre-rendering, OG images, and GSC in use. |
| **Will keywords show our website?** | Yes – your **titles and meta descriptions** target the main keywords (final year projects, tech courses India, MERN stack course, website development, internship, etc.). **Ranking position** depends on competition and backlinks. |
| **What will people see in rich results?** | Possible: **stars + review count + price range** on home; **breadcrumbs** on course/project pages; **course** and **product** rich results; **organization**/sitelinks/search box for “Savvy Axiss”. Validate with Rich Results Test and Search Console. |

**Next steps:**  
1) Run **Rich Results Test** on 2–3 URLs (home, one course, one project).  
2) Run **build:full** and deploy so crawlers get pre-rendered HTML.  
3) Add **OG images** and submit **sitemap** in **Google Search Console**.
