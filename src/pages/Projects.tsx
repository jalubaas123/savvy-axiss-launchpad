import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderKanban, CheckCircle2, FileText, Users, Clock, Code2, Database, Globe, Smartphone, Brain, Shield, ArrowRight, MessageCircle, Eye, GraduationCap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects, researchPapers, mbaProjects, projectCategories } from '@/data/projectsData';
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
}, {
  icon: Shield,
  title: 'Budget Friendly',
  description: 'Affordable pricing with flexible payment options for students'
}, {
  icon: Code2,
  title: 'Code Explanation',
  description: 'Complete explanation for every line of code and documentation'
}, {
  icon: Smartphone,
  title: 'Installation Support',
  description: 'Full installation and setup assistance on your device'
}, {
  icon: Brain,
  title: 'Viva Assistance',
  description: 'Comprehensive viva preparation and practice sessions'
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
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);
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
                <a href="https://wa.me/+919384902501?text=Hi, I need help with my final year project" target="_blank" rel="noopener noreferrer">
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

      {/* Browse Projects Section with Category Filter */}
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
        }} className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Ready-Made Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Browse Our Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of ready-made projects with complete source code and documentation.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="flex justify-center mb-8">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-4xl">
              <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent p-0">
                {projectCategories.map(category => <TabsTrigger key={category} value={category} className="px-4 py-2 rounded-full border border-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:border-secondary bg-card hover:bg-muted transition-all">
                    {category}
                  </TabsTrigger>)}
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map(project => {
            const discountPercent = project.originalPrice ? Math.round((project.originalPrice - project.price) / project.originalPrice * 100) : 0;
            return <motion.div key={project.id} variants={itemVariants} layout>
                  <Card className="group overflow-hidden hover:border-secondary/50 transition-all duration-300 card-hover h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      
                      {/* Category Badge */}
                      <Badge className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-primary-foreground">
                        {project.category}
                      </Badge>

                      {/* Discount Badge */}
                      {discountPercent > 0 && <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
                          {discountPercent}% OFF
                        </Badge>}
                    </div>

                    {/* Content */}
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-bold text-foreground">
                          {formatPrice(project.price)}
                        </span>
                        {project.originalPrice && <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(project.originalPrice)}
                          </span>}
                      </div>

                      {/* View Details Button */}
                      <Button asChild className="w-full">
                        <Link to={`/projects/${project.slug}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </motion.div>

          {filteredProjects.length === 0 && <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>}
        </div>
      </section>

      {/* Research Papers Section */}
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
            <span className="inline-block px-4 py-1 rounded-full bg-violet-500/10 text-violet-500 text-sm font-medium mb-4">
              <BookOpen className="w-3 h-3 inline mr-1" />
              Academic Research
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Research Papers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get well-researched, IEEE format papers with complete references and plagiarism reports.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchPapers.map(paper => {
            const discountPercent = paper.originalPrice ? Math.round((paper.originalPrice - paper.price) / paper.originalPrice * 100) : 0;
            return <motion.div key={paper.id} variants={itemVariants}>
                  <Card className="group overflow-hidden hover:border-violet-500/50 transition-all duration-300 card-hover h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={paper.image} alt={paper.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent" />
                      <Badge className="absolute top-3 left-3 bg-violet-500/80 backdrop-blur-sm text-white">
                        {paper.domain}
                      </Badge>
                      {discountPercent > 0 && <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
                          {discountPercent}% OFF
                        </Badge>}
                    </div>

                    <CardContent className="p-5 flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-violet-500 transition-colors line-clamp-2">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {paper.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {paper.features.slice(0, 3).map(feature => <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>)}
                      </div>

                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-bold text-foreground">
                          {formatPrice(paper.price)}
                        </span>
                        {paper.originalPrice && <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(paper.originalPrice)}
                          </span>}
                      </div>

                      <Button asChild className="w-full bg-violet-600 hover:bg-violet-700">
                        <a href={`https://wa.me/+919384902501?text=Hi, I'm interested in the research paper: ${paper.title}`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Enquire Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </motion.div>
        </div>
      </section>

      {/* MBA Projects Section */}
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
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-4">
              <GraduationCap className="w-3 h-3 inline mr-1" />
              MBA Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              MBA Project Reports
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete MBA projects with case studies, analysis, and presentations for all specializations.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mbaProjects.map(project => {
            const discountPercent = project.originalPrice ? Math.round((project.originalPrice - project.price) / project.originalPrice * 100) : 0;
            return <motion.div key={project.id} variants={itemVariants}>
                  <Card className="group overflow-hidden hover:border-amber-500/50 transition-all duration-300 card-hover h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
                      <Badge className="absolute top-3 left-3 bg-amber-500/80 backdrop-blur-sm text-white">
                        {project.specialization}
                      </Badge>
                      {discountPercent > 0 && <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
                          {discountPercent}% OFF
                        </Badge>}
                    </div>

                    <CardContent className="p-5 flex-1 flex flex-col">
                      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.features.slice(0, 3).map(feature => <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>)}
                      </div>

                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-bold text-foreground">
                          {formatPrice(project.price)}
                        </span>
                        {project.originalPrice && <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(project.originalPrice)}
                          </span>}
                      </div>

                      <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                        <a href={`https://wa.me/+919384902501?text=Hi, I'm interested in the MBA project: ${project.title}`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Enquire Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Already Have a Project Title in Mind?
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
                <a href="tel:++919384902501">Call Now: +91 93849 02501</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
}