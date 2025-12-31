import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderKanban, CheckCircle2, FileText, Users, Clock, Code2, Database, Globe, Smartphone, Brain, Shield, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const projectDomains = [{
  icon: Code2,
  name: 'Web Development',
  description: 'React, Angular, Node.js, PHP, Python Django'
}, {
  icon: Smartphone,
  name: 'Mobile Apps',
  description: 'Android, iOS, React Native, Flutter'
}, {
  icon: Brain,
  name: 'Machine Learning',
  description: 'Python, TensorFlow, Deep Learning, NLP'
}, {
  icon: Database,
  name: 'Data Science',
  description: 'Python, R, Analytics, Visualization'
}, {
  icon: Shield,
  name: 'Cyber Security',
  description: 'Network Security, Ethical Hacking'
}, {
  icon: Globe,
  name: 'IoT Projects',
  description: 'Arduino, Raspberry Pi, Sensors'
}];
const whyChooseUs = [{
  icon: CheckCircle2,
  title: 'Original Projects',
  description: 'Unique, plagiarism-free projects tailored to your requirements'
}, {
  icon: FileText,
  title: 'Complete Documentation',
  description: 'IEEE format documentation, PPT, and all supporting materials'
}, {
  icon: Users,
  title: 'Expert Guidance',
  description: 'One-on-one mentorship from experienced developers'
}, {
  icon: Clock,
  title: 'On-Time Delivery',
  description: 'We understand deadlines and deliver on schedule'
}];
const projectPackages = [{
  name: 'Basic',
  price: '₹4,999',
  description: 'Perfect for mini projects',
  features: ['Working project code', 'Basic documentation', 'Project demo video', '1 revision included', 'Email support'],
  popular: false
}, {
  name: 'Standard',
  price: '₹9,999',
  description: 'Ideal for final year projects',
  features: ['Complete project with code', 'IEEE format documentation', 'Synopsis & PPT presentation', 'Project explanation session', '3 revisions included', 'WhatsApp support'],
  popular: true
}, {
  name: 'Premium',
  price: '₹19,999',
  description: 'For complex & research projects',
  features: ['Advanced project implementation', 'Research paper guidance', 'Complete documentation set', 'Unlimited revisions', 'Viva preparation support', 'Priority 24/7 support', 'Certificate included'],
  popular: false
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
export default function Projects() {
  return <>
      <Helmet>
        <title>Final Year Projects for College Students | Savvy Axiss</title>
        <meta name="description" content="Get expert guidance for your final year college projects. We provide complete solutions with documentation, PPT, and project support in all domains." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-violet-900/50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-violet-500/20 text-violet-300 border-violet-500/30">
              <FolderKanban className="w-3 h-3 mr-1" />
              Final Year Projects
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-violet-400">
              Score Top Grades with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400"> Expert Project Support</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get complete final year project solutions with documentation, presentation, 
              and expert guidance. All domains covered, plagiarism-free guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-foreground/20 hover:bg-foreground/10">
                <a href="https://wa.me/919999999999?text=Hi, I need help with my final year project" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Domains */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              All Domains
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Projects in Every Technology
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whatever your specialization, we've got you covered with expert project support.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projectDomains.map(domain => <motion.div key={domain.name} variants={itemVariants} className="group p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 text-center card-hover">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <domain.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{domain.name}</h3>
                <p className="text-xs text-muted-foreground">{domain.description}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Students Trust Us
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map(item => <motion.div key={item.title} variants={itemVariants} className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Choose Your Package
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible packages designed to meet your project requirements and budget.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projectPackages.map(pkg => <motion.div key={pkg.name} variants={itemVariants}>
                <Card className={`relative h-full ${pkg.popular ? 'border-secondary shadow-glow' : ''}`}>
                  {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
                    </div>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground"> onwards</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map(feature => <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>)}
                    </ul>
                    <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'} asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Need Help with Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Share your project requirements with us and get a free consultation. 
              We'll help you understand the scope, timeline, and cost.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-violet-600 hover:bg-white/90">
                <Link to="/contact">Share Your Requirements</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                <a href="tel:+919999999999">Call Now: +91 99999 99999</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
}