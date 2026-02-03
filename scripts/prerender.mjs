/**
 * Pre-renders main static routes for SEO (run after build).
 * Usage: npm run build && node scripts/prerender.mjs
 * Requires: puppeteer, and dist/ from vite build.
 */
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const port = 34567;

const routes = [
  "/",
  "/about",
  "/blog",
  "/projects",
  "/courses",
  "/web-development",
  "/internship",
  "/contact",
];

if (!fs.existsSync(distDir)) {
  console.error("dist/ not found. Run npm run build first.");
  process.exit(1);
}

const server = spawn("npx", ["serve", distDir, "-p", String(port), "-s"], {
  stdio: "ignore",
  shell: true,
});

await new Promise((resolve) => setTimeout(resolve, 2000));

let puppeteer;
try {
  puppeteer = await import("puppeteer");
} catch {
  console.warn("Puppeteer not found. Install with: npm i -D puppeteer");
  server.kill();
  process.exit(0);
}

let browser;
try {
  browser = await puppeteer.default.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-software-rasterizer",
      "--single-process",
    ],
  });
} catch (e) {
  console.warn("Puppeteer could not launch (Chrome not found or sandbox issue). Skip prerender.");
  server.kill();
  process.exit(0);
}
const page = await browser.newPage();

for (const route of routes) {
  const url = `http://localhost:${port}${route}`;
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
    await new Promise((r) => setTimeout(r, 2500));
    const html = await page.content();
    const outPath = route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route.slice(1), "index.html");
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, "utf8");
    console.log("Prerendered:", route || "/");
  } catch (e) {
    console.warn("Skip", route, e.message);
  }
}

await browser.close();
server.kill();
console.log("Pre-render done.");
