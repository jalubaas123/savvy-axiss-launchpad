import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderKanban, CheckCircle2, FileText, Users, Clock, Code2, Database, Globe, Smartphone, Brain, Shield, ArrowRight, Eye, GraduationCap, BookOpen, Send } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
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
  price: '₹2,499',
  description: 'Perfect for mini projects',
  features: ['Working project code', 'Basic documentation', 'Project demo video', 'Complete explanation', 'Viva assistance','Certificate included'],
  popular: false
}, {
  name: 'Standard',
  price: '₹3,999',
  description: 'Ideal for final year projects',
  features: ['Complete project with code', 'Complete documentation' ,'Project explanation session', 'Viva assistance ', 'Certificate included'],
  popular: true
}, {
  name: 'Premium',
  price: '₹7,999',
  description: 'For complex & research projects',
  features: ['Advanced project implementation','Working project code', 'Research paper guidance', 'Complete documentation set', 'Unlimited Doubt clearing sessions', 'Viva preparation support', 'Priority 24/7 support', 'Certificate included'],
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
  
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    if (activeCategory === 'Research Papers') {
      return researchPapers;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);
  
  const isResearchPaper = activeCategory === 'Research Papers';
  return <>
      <Helmet>
        <title>Final Year Projects for College Students | Savvy Axiss</title>
        <meta name="description" content="Get expert guidance for your final year college projects. We provide complete solutions with documentation, PPT, and project support in all domains." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-violet-900/50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0">
                <a href="https://wa.me/+919384902501?text=Hi, I need help with my final year project" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              All Domains
            </h2>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Projects in Every Technology
            </h3>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready-Made Projects
            </h2>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Browse Our Projects
            </h3>
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

          <motion.div 
            key={activeCategory}
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item: any) => {
            const discountPercent = item.originalPrice ? Math.round((item.originalPrice - item.price) / item.originalPrice * 100) : 0;
            const categoryLabel = isResearchPaper ? item.domain : item.category;
            return <motion.div key={item.id} variants={itemVariants} layout>
                  <Card className={`group overflow-hidden transition-all duration-300 card-hover h-full flex flex-col ${isResearchPaper ? 'hover:border-violet-500/50' : 'hover:border-secondary/50'}`}>
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${isResearchPaper ? 'from-violet-900/60' : 'from-primary/60'} to-transparent`} />
                      
                      {/* Category/Domain Badge */}
                      <Badge className={`absolute top-3 left-3 backdrop-blur-sm ${isResearchPaper ? 'bg-violet-500/80 text-white' : 'bg-primary/80 text-primary-foreground'}`}>
                        {categoryLabel}
                      </Badge>

                      {/* Discount Badge */}
                      {discountPercent > 0 && <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
                          {discountPercent}% OFF
                        </Badge>}
                    </div>

                    {/* Content */}
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <h3 className={`font-semibold text-lg text-foreground mb-2 transition-colors ${isResearchPaper ? 'line-clamp-2 group-hover:text-violet-500' : 'line-clamp-1 group-hover:text-secondary'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {item.description}
                      </p>

                      {/* Features for Research Papers */}
                      {isResearchPaper && item.features && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.features.slice(0, 3).map((feature: string) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-bold text-foreground">
                          {formatPrice(item.price)}
                        </span>
                        {item.originalPrice && <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(item.originalPrice)}
                          </span>}
                      </div>

                      {/* Action Button */}
                      {isResearchPaper ? (
                        <Button asChild className={`w-full ${isResearchPaper ? 'bg-violet-600 hover:bg-violet-700' : ''}`}>
                          <a href={`https://wa.me/+919384902501?text=Hi, I'm interested in the research paper: ${item.title}`} target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon className="w-4 h-4 mr-2" />
                            Enquire Now
                          </a>
                        </Button>
                      ) : (
                        <Button asChild className="w-full">
                          <Link to={`/projects/${item.slug}`}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </motion.div>

          {filteredItems.length === 0 && <div className="text-center py-12">
              <p className="text-muted-foreground">No {isResearchPaper ? 'research papers' : 'projects'} found in this category.</p>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Academic Research
            </h2>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Research Papers
            </h3>
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
                          <WhatsAppIcon className="w-4 h-4 mr-2" />
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              MBA Projects
            </h2>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              MBA Project Reports
            </h3>
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
                          <WhatsAppIcon className="w-4 h-4 mr-2" />
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Pricing
            </h2>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Choose Your Package
            </h3>
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

      {/* Custom Project Requirements Form Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4">
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
        }} className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Have Your Own Project Idea?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Share your project requirements with us. Fill out the form below and we'll get back to you with a customized quote and payment options.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <form id="custom-project-form" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                      placeholder="+91 93849 02501"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Domain *
                    </label>
                    <select
                      name="domain"
                      required
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select Domain</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Apps">Mobile Apps</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="IoT Projects">IoT Projects</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Title / Idea *
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    required
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                    placeholder="e.g., E-commerce Platform with Payment Gateway"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Requirements / Description *
                  </label>
                  <textarea
                    name="requirements"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground resize-none"
                    placeholder="Describe your project requirements, features needed, technologies preferred, timeline, etc."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      name="timeline"
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select Timeline</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="3-4 weeks">3-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="2-3 months">2-3 months</option>
                      <option value="3+ months">3+ months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      name="budget"
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select Budget</option>
                      <option value="Under ₹5,000">Under ₹5,000</option>
                      <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                      <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                      <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                      <option value="Above ₹50,000">Above ₹50,000</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree to receive project quotes and payment information via WhatsApp and email. 
                    I understand that payment can be made securely via WhatsApp payment link.
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      const form = document.getElementById('custom-project-form') as HTMLFormElement;
                      const formData = new FormData(form);
                      
                      // Build WhatsApp message
                      const message = `Hi, I need help with my project:\n\n` +
                        `Name: ${formData.get('name')}\n` +
                        `Email: ${formData.get('email')}\n` +
                        `Phone: ${formData.get('phone')}\n` +
                        `Domain: ${formData.get('domain')}\n` +
                        `Project Title: ${formData.get('projectTitle')}\n` +
                        `Requirements: ${formData.get('requirements')}\n` +
                        `Timeline: ${formData.get('timeline') || 'Not specified'}\n` +
                        `Budget: ${formData.get('budget') || 'Not specified'}\n\n` +
                        `Please share the quote and payment details.`;
                      
                      const whatsappUrl = `https://wa.me/919384902501?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2" />
                    Submit & Get Quote via WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1 border-white text-white hover:bg-white/10"
                  >
                    <a href="tel:+919384902501">Call: +91 93849 02501</a>
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
}