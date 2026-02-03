# Image Guide - Where to Add Real Photos

## 📁 Directory Structure Needed

```
public/
├── images/           # CREATE THIS - Team & Instructor Photos
│   ├── img1.png     # Varsha Sekar (Instructor)
│   ├── img2.png     # Shalini Baskaran (CEO)
│   └── raji.png     # Rajalakshmi Venkatesan (Trainer)
│
└── projects/         # CREATE THIS - Project Screenshots
    ├── ecommerce.png
    ├── food-delivery.png
    ├── sentiment-analysis.png
    └── ... (21 more project images)
```

## 🖼️ Image Specifications

### Team Photos (`public/images/`)
- **Format:** PNG or JPG
- **Size:** 400x400px (square)
- **Quality:** High resolution, professional headshots
- **Background:** Plain or professional setting

**Files Needed:**
1. `img1.png` - Varsha Sekar (Director & Instructor)
2. `img2.png` - Shalini Baskaran (Founder & CEO)
3. `raji.png` - Rajalakshmi Venkatesan (Co-Director & Trainer)

### Project Screenshots (`public/projects/`)
- **Format:** PNG (preferred) or JPG
- **Size:** 800x500px (16:10 ratio) or similar aspect ratio
- **Quality:** Clear, readable UI/screenshots
- **Content:** Actual project screenshots or mockups

**Files Needed (25 total):**

#### Main Projects (17)
- `ecommerce.png` - E-Commerce Website
- `food-delivery.png` - Food Delivery App
- `sentiment-analysis.png` - Sentiment Analysis System
- `hospital-management.png` - Hospital Management System
- `expense-tracker.png` - Expense Tracker App
- `crop-disease.png` - Crop Disease Detection
- `learning-platform.png` - Online Learning Platform
- `inventory-management.png` - Inventory Management System
- `sales-prediction.png` - Sales Prediction Dashboard
- `churn-prediction.png` - Customer Churn Prediction
- `stock-market.png` - Stock Market Analysis
- `network-security.png` - Network Intrusion Detection
- `password-manager.png` - Password Manager
- `malware-detection.png` - Malware Detection System
- `smart-home.png` - Smart Home Automation
- `smart-agriculture.png` - Smart Agriculture System
- `health-monitoring.png` - Health Monitoring Device

#### Research Papers (4)
- `research-blockchain.png` - Blockchain in Supply Chain
- `research-ai-healthcare.png` - AI in Healthcare Diagnosis
- `research-iot-agriculture.png` - IoT Smart Agriculture
- `research-cybersecurity.png` - ML for Cybersecurity

#### MBA Projects (4)
- `mba-fintech.png` - FinTech Market Analysis
- `mba-hr.png` - Employee Retention Strategies
- `mba-marketing.png` - Digital Marketing ROI
- `mba-operations.png` - Supply Chain Optimization

## 🚀 Quick Setup

### Create Directories
```bash
cd public
mkdir images
mkdir projects
```

### Add Your Images
1. Place team photos in `public/images/`
2. Place project screenshots in `public/projects/`
3. Use exact filenames listed above
4. Refresh your browser - images will load automatically!

## 📸 Image Sources

### Where to Get Images

**Team Photos:**
- Use actual professional photos of your team
- Ensure you have permission to use the images
- Keep consistent style (same background, lighting)

**Project Screenshots:**
- Take screenshots of actual projects you've built
- Use mockups if project isn't live yet
- Tools: Figma, Sketch, or screenshot tools
- Or use placeholder until real projects are ready

## 💡 Temporary Solution

**If you don't have images yet:**

All image paths are already set up to use `/placeholder.svg` which exists in your project. The site will work fine with placeholders until you add real images.

**Replace Placeholders When Ready:**
- Just add the images with correct filenames
- No code changes needed
- Images will automatically load

## ⚠️ Important Notes

1. **File Extensions:** Use lowercase extensions (`.png`, `.jpg`)
2. **No Spaces:** Use hyphens instead of spaces in filenames
3. **Exact Names:** Use the exact filenames listed above
4. **Optimize:** Compress images before uploading (keep under 500KB each)

## 🔍 Where These Images Appear

### Team Photos
- **About Page** (`/about`) - Team section showing all 3 members
- **Course Detail Pages** - Instructor profiles on each course

### Project Screenshots
- **Projects Page** (`/projects`) - Grid view of all projects
- **Project Detail Pages** - Individual project pages with large preview
- **Home Page** - Featured projects section (if enabled)

## ✅ Testing

After adding images:
1. Clear browser cache
2. Visit `/about` - Check team photos
3. Visit `/projects` - Check project screenshots
4. Visit any course detail page - Check instructor photo
5. Visit any project detail page - Check project image

## 🎨 Image Quality Tips

- **Resolution:** Use 2x resolution for retina displays
- **Compression:** Use tools like TinyPNG or Squoosh
- **Format:** PNG for logos/text, JPG for photos
- **Alt Text:** Already set in code for SEO
- **Consistency:** Keep similar style across all images

## 📦 Batch Processing

If you have multiple images to optimize:

```bash
# Using ImageMagick (if installed)
# Resize all images in a folder
mogrify -resize 800x500 -quality 85 *.jpg

# For team photos
mogrify -resize 400x400 -quality 90 *.png
```

Or use online tools:
- **Bulk Resize Photos**: bulkresizephotos.com
- **Squoosh**: squoosh.app (by Google)
- **TinyPNG**: tinypng.com

---

**Ready?** Just add your images to the folders and they'll automatically appear on your site!
