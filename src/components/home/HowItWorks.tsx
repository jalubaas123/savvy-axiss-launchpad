import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserPlus, BookOpen, Award } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Enroll & Onboard',
    description: 'Complete your registration, join orientation, and get ready for an immersive learning experience.',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Learn & Build',
    description: 'Attend live sessions, work on real-time projects, and build a portfolio that showcases your skills.',
  },
  {
    number: '03',
    icon: Award,
    title: 'Get Certified & Hired',
    description: 'Earn your industry-recognized certificate and leverage our placement support to land your dream job.',
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
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
            Simple Process
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            How It Works
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Your journey from learner to professional in three simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Card */}
                <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-300 card-hover text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-8 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center shadow-glow">
                    <span className="text-sm font-bold text-secondary-foreground">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-muted flex items-center justify-center mb-6 mt-4 group-hover:bg-secondary/10 transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-secondary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
