import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FolderKanban, BookOpen, Globe, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: FolderKanban,
    title: 'Final Year Projects',
    description: 'Get expert guidance and complete solutions for your college final year projects. We help students create impressive, working projects that score top grades.',
    href: '/projects',
    features: ['All Domains', 'Documentation', 'Presentation Support', 'Plagiarism-Free'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: BookOpen,
    title: 'Professional Courses',
    description: 'Master in-demand tech skills through live interactive classes taught by industry experts. Get certified and job-ready.',
    href: '/courses',
    features: ['Live Classes', 'Industry Experts', 'Certification', 'Job Assistance'],
    color: 'from-secondary to-accent',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Professional websites for small businesses. From stunning portfolios to e-commerce stores, we build websites that drive results.',
    href: '/web-development',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Delivery'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Briefcase,
    title: 'Internship Programs',
    description: 'Gain real-world experience through our structured internship programs. Work on live projects and build your portfolio.',
    href: '/internship',
    features: ['Live Projects', 'Mentorship', 'Certificate', 'Letter of Recommendation'],
    color: 'from-orange-500 to-amber-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const OurServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="our-services" className="py-12 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 section-title">
            Our Services
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            What We Offer
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            From college projects to career development, we provide comprehensive solutions 
            to help students and businesses succeed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 card-hover overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button variant="outline" asChild className="group/btn">
                <Link to={service.href}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
