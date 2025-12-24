import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Testimonials } from '@/components/home/Testimonials';
import { StatsCounter } from '@/components/home/StatsCounter';
import { CTABanner } from '@/components/home/CTABanner';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Savvy Axiss - Live Training & Real-Time Internships | Transform Your Career</title>
        <meta 
          name="description" 
          content="Master in-demand tech skills through live training and real-time internships. Get certified and hired with Savvy Axiss. 500+ students trained, 98% success rate." 
        />
        <meta name="keywords" content="live training, internship, tech courses, full stack development, data science, digital marketing, UI/UX design, career transformation" />
        <meta property="og:title" content="Savvy Axiss - Transform Your Career with Live Training" />
        <meta property="og:description" content="Master in-demand tech skills through live training and real-time internships. Get certified and hired." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://savvyaxiss.com" />
      </Helmet>

      <HeroSection />
      <WhyChooseUs />
      <FeaturedCourses />
      <HowItWorks />
      <Testimonials />
      <StatsCounter />
      <CTABanner />
    </>
  );
};

export default Index;
