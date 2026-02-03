/**
 * Generates sitemap.xml for Savvy Axiss.
 * Run: node scripts/generateSitemap.js
 * Or add to package.json: "generate-sitemap": "node scripts/generateSitemap.js"
 * Run before or after build; output is public/sitemap.xml (copied to dist on build).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseUrl = 'https://savvyaxiss.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog', priority: 0.8, changefreq: 'weekly' },
  { url: '/projects', priority: 0.9, changefreq: 'weekly' },
  { url: '/courses', priority: 0.9, changefreq: 'weekly' },
  { url: '/web-development', priority: 0.9, changefreq: 'monthly' },
  { url: '/internship', priority: 0.9, changefreq: 'monthly' },
  { url: '/contact', priority: 0.7, changefreq: 'yearly' },
];

// Course slugs from src/pages/Courses.tsx allCourses (baseSlug + level suffix b/i/a, or vibe-codingb)
const courseSlugs = [
  'pythonb', 'pythoni', 'pythona', 'javab', 'javai', 'javaa',
  'htmlb', 'htmli', 'htmla', 'cssb', 'cssi', 'cssa',
  'javascriptb', 'javascripti', 'javascripta', 'reactb', 'reacti', 'reacta',
  'excelb', 'exceli', 'excela', 'mysqlb', 'mysqli', 'mysqla',
  'mongodbb', 'mongodbi', 'mongodba', 'digital-marketingb', 'digital-marketingi', 'digital-marketinga',
  'mern-fullstackb', 'mern-fullstacki', 'mern-fullstacka',
  'python-fullstackb', 'python-fullstacki', 'python-fullstacka',
  'vibe-codingb',
];

// Project slugs from src/data/projectsData.ts
const projectSlugs = [
  'ecommerce-website', 'food-delivery-app', 'sentiment-analysis-system', 'hospital-management-system',
  'expense-tracker-app', 'crop-disease-detection', 'online-learning-platform', 'inventory-management-system',
  'sales-prediction-analytics', 'customer-churn-prediction', 'stock-market-analysis',
  'network-intrusion-detection', 'password-strength-analyzer', 'malware-detection-system',
  'smart-home-automation', 'smart-agriculture-monitoring', 'health-monitoring-device',
];

const coursePages = courseSlugs.map((slug) => ({
  url: `/courses/${slug}`,
  priority: 0.7,
  changefreq: 'monthly',
}));

const projectPages = projectSlugs.map((slug) => ({
  url: `/projects/${slug}`,
  priority: 0.6,
  changefreq: 'monthly',
}));

const allPages = [...staticPages, ...coursePages, ...projectPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log('Sitemap generated successfully at public/sitemap.xml');
