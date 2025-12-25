import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/home/HeroSection';
import { OurServices } from '@/components/home/OurServices';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Testimonials } from '@/components/home/Testimonials';
import { StatsCounter } from '@/components/home/StatsCounter';
import { CTABanner } from '@/components/home/CTABanner';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Savvy Axiss - Projects, Courses, Web Development & Internships</title>
        <meta 
          name="description" 
          content="Savvy Axiss offers final year projects for college students, professional courses, website development for businesses, and internship programs. Get started today!" 
        />
        <meta name="keywords" content="final year projects, college projects, web development, internship programs, tech courses, full stack development, data science" />
        <meta property="og:title" content="Savvy Axiss - Projects, Courses, Web Development & Internships" />
        <meta property="og:description" content="Complete solutions for students and businesses. Final year projects, professional courses, website development, and internship programs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://savvyaxiss.com" />
      </Helmet>

      <HeroSection />
      <OurServices />
      <FeaturedCourses />
      <HowItWorks />
      <Testimonials />
      <StatsCounter />
      <CTABanner />
    </>
  );
};

export default Index;
