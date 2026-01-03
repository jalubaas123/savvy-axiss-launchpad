import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Lightbulb, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from curriculum design to student support.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about education and believe in the transformative power of learning.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build a supportive community where students help each other grow and succeed.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly innovate our teaching methods to keep pace with industry changes.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest standards of integrity in all our interactions and promises.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'We envision a world where quality education is accessible to everyone, everywhere.',
  },
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Academics',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Amit Patel',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Sneha Reddy',
    role: 'Student Success Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Savvy Axiss | Empowering Tech Professionals</title>
        <meta 
          name="description" 
          content="Learn about Savvy Axiss - our mission to empower the next generation of tech professionals through live training and real-world internships." 
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Empowering the Next Generation of{' '}
              <span className="gradient-text">Tech Professionals</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              We're on a mission to bridge the gap between education and industry 
              by providing hands-on training with real-world experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-start mb-4">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                  Our Story
                </span>
              </div>
              <div className="flex justify-start mb-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                From Vision to Reality
              </h3>
              <div className="space-y-4 text-muted-foreground mt-8">
                <p>
                  Savvy Axiss was founded in 2022 with a simple yet powerful vision: 
                  to make quality tech education accessible and practical. We noticed 
                  a significant gap between what traditional education offers and what 
                  the industry demands.
                </p>
                <p>
                  So we built Savvy Axiss as a hands-on learning space where you don’t just learn concepts, 
                  you actually do the work. From real projects to guided mentorship, 
                  we help learners build skills that matter and confidence that lasts.
                </p>
                <p>
                  We’re a growing startup, learning and improving every day — just like our students.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 lg:p-10 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 shadow-glow">
                <Target className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize tech education by providing affordable, industry-relevant, 
                hands-on training that transforms learners into job-ready professionals. 
                We aim to bridge the gap between academic knowledge and industry requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 lg:p-10 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 shadow-glow">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted EdTech platform for practical tech education, 
                known for our student success rates and industry partnerships. We envision 
                a future where every motivated learner can access quality tech education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                Our Values
              </span>
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              What We Stand For
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
              These core values guide everything we do and shape how we serve our students and community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-secondary/50 transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                Our Team
              </span>
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Meet the Leaders
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
