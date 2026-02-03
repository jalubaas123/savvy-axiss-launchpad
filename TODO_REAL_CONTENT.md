# TODO: Add Real Content

This checklist tracks what real content needs to be added to replace placeholders.

## 🚨 Critical (Site Won't Look Good Without These)

### Images
- [ ] Create `/public/images/` directory
- [ ] Add team member photos:
  - [ ] `img1.png` - Varsha Sekar
  - [ ] `img2.png` - Shalini Baskaran
  - [ ] `raji.png` - Rajalakshmi Venkatesan
- [ ] Add company team photo for About page
- [ ] Create `/public/projects/` directory
- [ ] Add project screenshots (17 main projects + 4 research + 4 MBA):
  ```
  /public/projects/
  ├── ecommerce.png
  ├── food-delivery.png
  ├── sentiment-analysis.png
  ├── hospital-management.png
  ├── expense-tracker.png
  ├── crop-disease.png
  ├── learning-platform.png
  ├── inventory-management.png
  ├── sales-prediction.png
  ├── churn-prediction.png
  ├── stock-market.png
  ├── network-security.png
  ├── password-manager.png
  ├── malware-detection.png
  ├── smart-home.png
  ├── smart-agriculture.png
  ├── health-monitoring.png
  ├── research-blockchain.png
  ├── research-ai-healthcare.png
  ├── research-iot-agriculture.png
  ├── research-cybersecurity.png
  ├── mba-fintech.png
  ├── mba-hr.png
  ├── mba-marketing.png
  └── mba-operations.png
  ```

## ⚠️ Important (Should Be Updated Soon)

### Verify Stats
- [ ] Verify "280+ Students Trained" is accurate
  - Update in: `src/components/home/HeroSection.tsx` (line 7)
  - Update in: `src/components/home/StatsCounter.tsx` (line 6)
- [ ] Verify "120+ Projects Completed" is accurate
  - Update in: `src/components/home/StatsCounter.tsx` (line 10)
- [ ] Verify "3+ Years Experience" is accurate (founded 2022)
  - Update in: `src/components/home/HeroSection.tsx` (line 11)
  - Update in: `src/components/home/StatsCounter.tsx` (line 14)
- [ ] Verify "4.8/5 Rating" is accurate
  - Update in: `src/components/home/HeroSection.tsx` (line 13)
  - Update in: `src/components/home/StatsCounter.tsx` (line 18)

### Demo Videos
- [ ] Add YouTube demo videos for projects (optional but recommended):
  - Update `videoUrl` in `src/data/projectsData.ts`
  - Format: `https://www.youtube.com/embed/VIDEO_ID`
  - Only shown if `videoUrl` is not empty

## 💚 Nice to Have (Add When Available)

### Testimonials
- [ ] Collect real student testimonials (with permission)
  - Add to: `src/components/home/Testimonials.tsx`
  - Need: name, role, image, content, rating, course
- [ ] Collect real client testimonials for web development
  - Add to: `src/pages/WebDevelopment.tsx`
  - Need: name, business, role, quote, rating, image, results

### Schema.org Ratings
- [ ] Add real aggregateRating when you have verified reviews:
  - Index page: `src/pages/Index.tsx`
  - Project detail: `src/pages/ProjectDetail.tsx`
  - Web development: `src/pages/WebDevelopment.tsx`

### Course Data
- [ ] Update individual course review counts (currently all set to 22)
  - File: `src/pages/Courses.tsx` (allCourses array)
  - Current: All courses have `reviews: 22`
  - Update with actual enrolled student counts

## 📋 Quick Start Commands

### Create Image Directories
```bash
mkdir -p public/images
mkdir -p public/projects
```

### Optimize Images Before Adding
```bash
# Recommended image sizes:
# - Team photos: 400x400px (square)
# - Project screenshots: 800x500px (16:10 ratio)
# - About team photo: 800x600px (4:3 ratio)
```

## ✅ Already Clean (No Action Needed)

- ✅ Testimonials show placeholder CTAs (no fake data)
- ✅ Course detail pages use real data from courseData.ts
- ✅ Schema ratings removed (not showing fake numbers)
- ✅ All Unsplash URLs replaced with local paths
- ✅ Empty video URLs handled gracefully

## 🔄 Update Process

### When You Have Real Images
1. Add images to appropriate directories
2. Images will automatically load (paths are already set)
3. No code changes needed!

### When You Have Real Testimonials
1. Open `src/components/home/Testimonials.tsx`
2. Add testimonial objects to the array (currently empty)
3. Format:
   ```typescript
   {
     id: 1,
     name: "Student Name",
     role: "Job Title",
     image: "/path/to/image.jpg",
     content: "Testimonial text...",
     rating: 5,
     course: "Course Name"
   }
   ```

### When You Have Real Stats
1. Open `src/components/home/HeroSection.tsx`
2. Update the `stats` array values (lines 5-17)
3. Open `src/components/home/StatsCounter.tsx`
4. Update the `stats` array values (lines 4-25)

## 📞 Questions?

If you're unsure about any of these items, refer to:
- `DUMMY_DATA_CLEANUP_SUMMARY.md` - Details on what was changed
- Project files directly - All changes are well-documented

---

**Last Updated:** After dummy data cleanup
**Status:** Ready for real content
