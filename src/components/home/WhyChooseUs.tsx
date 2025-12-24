import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, Briefcase, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Live Online Classes',
    description: 'Interactive sessions with industry experts. Ask questions in real-time and learn collaboratively.',
  },
  {
    icon: Briefcase,
    title: 'Real-Time Projects',
    description: 'Work on actual client projects during training. Build a portfolio that impresses employers.',
  },
  {
    icon: Award,
    title: 'Industry Certification',
    description: 'Earn recognized certificates that validate your skills and boost your career prospects.',
  },
  {
    icon: Clock,
    title: 'Lifetime Access',
    description: 'Get unlimited access to course materials, updates, and our alumni community forever.',
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

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 section-title">
            Why Choose Savvy Axiss?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            We don't just teach - we transform careers. Our unique approach combines live learning 
            with real-world experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <feature.icon className="w-7 h-7 text-secondary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
