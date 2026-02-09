import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Code2, Briefcase, ArrowRight } from 'lucide-react';
import { SEO_BASE_URL, createBreadcrumbSchema } from '@/lib/seo';

const blogBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Resources & Blog', url: '/blog' },
]);

const resourceLinks = [
  {
    title: 'Tech Courses in Chennai',
    description: 'Live training in Python, MERN Stack, Full Stack, React, Digital Marketing & more. Certification and job assistance.',
    href: '/courses',
    icon: GraduationCap,
  },
  {
    title: 'Final Year Projects',
    description: 'BTech, MCA & MBA project solutions with source code, documentation and viva support. 100+ project ideas.',
    href: '/projects',
    icon: Code2,
  },
  {
    title: 'Website Development',
    description: 'E-commerce, business sites, portfolios and custom web solutions for Chennai businesses.',
    href: '/web-development',
    icon: Briefcase,
  },
  {
    title: 'Internship Programs',
    description: 'Tech internships in Web Dev, Data Science, UI/UX and Digital Marketing. Certificate, LOR & job support.',
    href: '/internship',
    icon: Briefcase,
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Resources & Blog | Savvy Axiss Chennai - Courses, Projects & Web Development</title>
        <meta name="description" content="Resources on tech courses, final year projects, website development and internships in Chennai. Savvy Axiss - Maduravoyal. Explore courses, projects and career guidance." />
        <meta name="keywords" content="tech resources Chennai, coding courses Chennai, final year projects, web development Chennai, internship Chennai, Savvy Axiss blog" />
        <link rel="canonical" href={`${SEO_BASE_URL}/blog`} />
        <meta property="og:title" content="Resources & Blog | Savvy Axiss Chennai" />
        <meta property="og:description" content="Explore tech courses, final year projects, website development and internships in Chennai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SEO_BASE_URL}/blog`} />
        <meta property="og:image" content={`${SEO_BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resources & Blog | Savvy Axiss Chennai" />
        <meta name="twitter:description" content="Explore tech courses, final year projects, website development and internships in Chennai." />
        <meta name="twitter:image" content={`${SEO_BASE_URL}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify(blogBreadcrumbSchema)}</script>
      </Helmet>

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/20 text-secondary border border-secondary/30 mb-6">
              Resources
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Resources & Blog
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Explore our courses, final year projects, website development services and internship programs. More articles and career tips coming soon.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Explore by topic
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceLinks.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  to={item.href}
                  className="block h-full p-6 rounded-xl border border-border bg-card hover:border-secondary/50 hover:shadow-md transition-all duration-300 group"
                >
                  <item.icon className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 max-w-2xl mx-auto text-center p-8 rounded-xl bg-muted/50 border border-border">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-foreground mb-2">
              More content coming soon
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              We’re adding articles on tech careers, Chennai job market, project ideas and course guides. Follow us or get in touch for updates.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
