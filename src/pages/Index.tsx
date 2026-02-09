import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/home/HeroSection';
import { OurServices } from '@/components/home/OurServices';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { HowItWorks } from '@/components/home/HowItWorks';
import { StudentReviews } from '@/components/home/StudentReviews';
import { StatsCounter } from '@/components/home/StatsCounter';
import { CTABanner } from '@/components/home/CTABanner';
import { SEO_BASE_URL, schemaLocalBusiness, schemaOrganization, schemaWebSite, createFAQSchema, createReviewSchema } from '@/lib/seo';

// FAQ Schema for home page
const homeFAQs = createFAQSchema([
  {
    question: 'What programming courses are offered in Chennai by Savvy Axiss?',
    answer: 'Savvy Axiss offers Python, Java, MERN Stack, Full Stack Development, React, Digital Marketing, Excel, and more in Chennai with live training and certification.',
  },
  {
    question: 'Where is Savvy Axiss located in Chennai?',
    answer: 'Savvy Axiss is located at 38, 4th Block MMDA Colony, Maduravoyal, Chennai 600095. We serve students across Chennai including T Nagar, Velachery, Tambaram, Anna Nagar, OMR, and Guindy.',
  },
  {
    question: 'Do you provide final year projects for engineering students in Chennai?',
    answer: 'Yes, we provide complete final year project solutions for B.Tech, M.Tech, MCA, and other engineering students in Chennai with source code, documentation, and deployment support.',
  },
  {
    question: 'Are internship programs available for Chennai students?',
    answer: 'Yes, Savvy Axiss offers internship programs for students in Chennai with real-world projects, hands-on training, and completion certificates.',
  },
]);

const reviewSchema = createReviewSchema({
  itemName: 'Savvy Axiss',
  ratingValue: 4.9,
  reviewCount: 50,
  bestRating: 5,
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Programming Courses, Projects & Internships in Chennai | Savvy Axiss</title>
        <meta
          name="description"
          content="Affordable programming courses, internships, student projects and website development across Chennai. Learn Python, Java, Full Stack, MERN. Located in Maduravoyal, serving T Nagar, Velachery, Tambaram, Anna Nagar, OMR, Guindy."
        />
        <meta name="keywords" content="programming courses chennai, final year projects chennai, internship chennai, website development chennai, python course chennai, java training chennai, full stack course chennai, react training chennai, student projects chennai, BTech projects chennai" />
        <link rel="canonical" href={`${SEO_BASE_URL}/`} />
        <meta property="og:title" content="Programming Courses, Projects & Internships in Chennai | Savvy Axiss" />
        <meta property="og:description" content="Affordable programming courses, internships, student projects and website development across Chennai. T Nagar, Velachery, Tambaram, Anna Nagar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SEO_BASE_URL}/`} />
        <meta property="og:image" content={`${SEO_BASE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Savvy Axiss" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Programming Courses, Projects & Internships in Chennai | Savvy Axiss" />
        <meta name="twitter:description" content="Affordable programming courses, internships, student projects and website development across Chennai." />
        <meta name="twitter:image" content={`${SEO_BASE_URL}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebSite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(homeFAQs)}</script>
      </Helmet>

      <HeroSection />
      <OurServices />
      <FeaturedCourses />
      <HowItWorks />
      <StudentReviews />
      <StatsCounter />
      <CTABanner />
    </>
  );
};

export default Index;
