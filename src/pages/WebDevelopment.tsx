import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, CheckCircle2, Zap, Smartphone, Search, Shield, Palette, ShoppingCart, 
  ArrowRight, Star, CheckCircle, TrendingUp, Users, Clock, 
  Code2, Database, Layers, Rocket, BarChart3, Target, Award, FileText, 
  Settings, Monitor, Tablet, Mail, CreditCard, Lock, Cloud, RefreshCw,
  ChevronRight, HelpCircle, Lightbulb, Briefcase, Home, Store, Camera,
  GraduationCap, Stethoscope, Building2, Wrench, Coffee, Music, Heart
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Statistics Data
const stats = [
  { value: '95%', label: 'Consumers search online for local businesses', icon: Search },
  { value: '200-700%', label: 'Average ROI on website investment', icon: TrendingUp },
  { value: '74%', label: 'Website visits come from mobile devices', icon: Smartphone },
  { value: '2.35%', label: 'Global average website conversion rate', icon: Target },
];

// Why Websites Matter
const whyWebsites = [
  {
    icon: Globe,
    title: '24/7 Online Presence',
    description: 'Your website works around the clock, attracting customers even when you\'re closed. Never miss a potential sale.',
    stat: '95% of consumers search online before making a purchase'
  },
  {
    icon: TrendingUp,
    title: 'Credibility & Trust',
    description: 'A professional website builds trust. 75% of consumers judge a business\'s credibility based on website design.',
    stat: '75% of users judge credibility by website design'
  },
  {
    icon: Target,
    title: 'Increased Sales',
    description: 'Websites drive conversions. Businesses with optimized websites see 200-700% ROI within 12-24 months.',
    stat: 'Average 200-700% ROI within first year'
  },
  {
    icon: Users,
    title: 'Reach More Customers',
    description: 'Expand beyond your local area. Reach customers globally and grow your business without geographical limits.',
    stat: 'Unlimited reach potential'
  },
];

// Types of Websites
const websiteTypes = [
  {
    icon: Briefcase,
    name: 'Business Websites',
    description: 'Professional websites that showcase your brand, services, and build customer trust',
    features: ['Service pages', 'About us', 'Contact forms', 'Testimonials', 'Blog integration'],
    bestFor: 'Small businesses, startups, service providers'
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce Stores',
    description: 'Complete online stores with shopping cart, payment gateway, and inventory management',
    features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Order tracking', 'Admin dashboard'],
    bestFor: 'Retailers, online sellers, product-based businesses'
  },
  {
    icon: Target,
    name: 'Landing Pages',
    description: 'High-converting single-page websites designed to capture leads and drive specific actions',
    features: ['Lead capture', 'A/B testing', 'Fast loading', 'Mobile optimized', 'Conversion focused'],
    bestFor: 'Marketing campaigns, product launches, lead generation'
  },
  {
    icon: Camera,
    name: 'Portfolio Websites',
    description: 'Stunning showcase websites for creatives, freelancers, and professionals to display their work',
    features: ['Gallery showcase', 'Project portfolios', 'Client testimonials', 'Contact integration', 'Social links'],
    bestFor: 'Photographers, designers, freelancers, artists'
  },
  {
    icon: GraduationCap,
    name: 'Educational Websites',
    description: 'Learning platforms, course websites, and educational institutions with student portals',
    features: ['Course management', 'Student portals', 'Payment integration', 'Progress tracking', 'Certificates'],
    bestFor: 'Schools, coaching centers, online courses, training institutes'
  },
  {
    icon: Stethoscope,
    name: 'Healthcare Websites',
    description: 'Medical practice websites with appointment booking, patient portals, and service information',
    features: ['Appointment booking', 'Patient portal', 'Service listings', 'Doctor profiles', 'Health blogs'],
    bestFor: 'Hospitals, clinics, doctors, medical practices'
  },
  {
    icon: Building2,
    name: 'Real Estate Websites',
    description: 'Property listing websites with search filters, virtual tours, and inquiry management',
    features: ['Property listings', 'Search filters', 'Virtual tours', 'Inquiry forms', 'Agent profiles'],
    bestFor: 'Real estate agents, property developers, brokers'
  },
  {
    icon: Coffee,
    name: 'Restaurant Websites',
    description: 'Food & beverage websites with online ordering, menu display, and reservation systems',
    features: ['Menu display', 'Online ordering', 'Reservation system', 'Gallery', 'Location map'],
    bestFor: 'Restaurants, cafes, food delivery, catering services'
  },
];

// Complete Development Process
const developmentProcess = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We understand your business, goals, target audience, and requirements',
    activities: ['Business analysis', 'Competitor research', 'User persona creation', 'Sitemap planning', 'Technology selection'],
    icon: Lightbulb,
    duration: '1-2 days'
  },
  {
    step: 2,
    title: 'Design & Prototyping',
    description: 'Create stunning designs and interactive prototypes that match your brand',
    activities: ['Wireframing', 'UI/UX design', 'Brand integration', 'Design approval', 'Responsive mockups'],
    icon: Palette,
    duration: '3-5 days'
  },
  {
    step: 3,
    title: 'Development & Coding',
    description: 'Build your website with clean, optimized code using modern technologies',
    activities: ['Frontend development', 'Backend setup', 'Database integration', 'API integration', 'Third-party tools'],
    icon: Code2,
    duration: '5-10 days'
  },
  {
    step: 4,
    title: 'Content Integration',
    description: 'Add your content, images, and optimize for SEO and user experience',
    activities: ['Content writing', 'Image optimization', 'SEO optimization', 'Meta tags setup', 'Schema markup'],
    icon: FileText,
    duration: '2-3 days'
  },
  {
    step: 5,
    title: 'Testing & Quality Assurance',
    description: 'Thorough testing across devices, browsers, and functionality to ensure perfection',
    activities: ['Cross-browser testing', 'Mobile testing', 'Performance testing', 'Security audit', 'Bug fixing'],
    icon: Shield,
    duration: '2-3 days'
  },
  {
    step: 6,
    title: 'Deployment & Launch',
    description: 'Deploy your website to production with hosting, SSL, and domain setup',
    activities: ['Hosting setup', 'SSL certificate', 'Domain configuration', 'DNS setup', 'Go live'],
    icon: Rocket,
    duration: '1 day'
  },
  {
    step: 7,
    title: 'Training & Handover',
    description: 'Train you on managing your website and provide complete documentation',
    activities: ['CMS training', 'Content management', 'Update procedures', 'Documentation', 'Support setup'],
    icon: GraduationCap,
    duration: '1 day'
  },
  {
    step: 8,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, backups, and optimization to keep your site running smoothly',
    activities: ['Regular backups', 'Security updates', 'Performance monitoring', 'Content updates', 'Technical support'],
    icon: RefreshCw,
    duration: 'Ongoing'
  },
];

// Technology Stack
const techStack = {
  frontend: [
    { name: 'HTML5', description: 'Modern semantic markup' },
    { name: 'CSS3', description: 'Advanced styling & animations' },
    { name: 'JavaScript', description: 'Interactive functionality' },
    { name: 'React', description: 'Modern UI framework' },
    { name: 'Next.js', description: 'Server-side rendering' },
    { name: 'Tailwind CSS', description: 'Utility-first styling' },
  ],
  backend: [
    { name: 'Node.js', description: 'JavaScript runtime' },
    { name: 'Python', description: 'Django/Flask frameworks' },
    { name: 'PHP', description: 'WordPress & Laravel' },
    { name: 'Express.js', description: 'Web application framework' },
  ],
  database: [
    { name: 'MySQL', description: 'Relational database' },
    { name: 'PostgreSQL', description: 'Advanced SQL database' },
    { name: 'MongoDB', description: 'NoSQL database' },
    { name: 'Firebase', description: 'Real-time database' },
  ],
  tools: [
    { name: 'Git', description: 'Version control' },
    { name: 'Docker', description: 'Containerization' },
    { name: 'AWS/Vercel', description: 'Cloud hosting' },
    { name: 'CI/CD', description: 'Automated deployment' },
  ],
};

// Essential Features
const essentialFeatures = [
  {
    category: 'Design & User Experience',
    features: [
      { name: 'Responsive Design', description: 'Perfect on all devices - mobile, tablet, desktop', icon: Monitor },
      { name: 'Modern UI/UX', description: 'Beautiful, intuitive interfaces that users love', icon: Palette },
      { name: 'Fast Loading', description: 'Optimized for speed - loads in under 2 seconds', icon: Zap },
      { name: 'Accessibility', description: 'WCAG compliant for all users', icon: Users },
    ]
  },
  {
    category: 'SEO & Marketing',
    features: [
      { name: 'SEO Optimized', description: 'Rank higher on Google with proper SEO', icon: Search },
      { name: 'Google Analytics', description: 'Track visitors, behavior, and conversions', icon: BarChart3 },
      { name: 'Social Media Integration', description: 'Connect with Facebook, Instagram, LinkedIn', icon: Globe },
      { name: 'Blog System', description: 'Content marketing platform built-in', icon: FileText },
    ]
  },
  {
    category: 'Security & Performance',
    features: [
      { name: 'SSL Certificate', description: 'Secure HTTPS connection included', icon: Lock },
      { name: 'Regular Backups', description: 'Automated daily backups for safety', icon: Cloud },
      { name: 'Security Updates', description: 'Regular security patches and updates', icon: Shield },
      { name: 'CDN Integration', description: 'Fast global content delivery', icon: Zap },
    ]
  },
  {
    category: 'Business Features',
    features: [
      { name: 'Contact Forms', description: 'Lead capture and inquiry forms', icon: Mail },
      { name: 'WhatsApp Integration', description: 'Direct chat widget for instant communication', icon: Smartphone },
      { name: 'Payment Gateway', description: 'Accept online payments securely', icon: CreditCard },
      { name: 'Admin Dashboard', description: 'Easy content management system', icon: Settings },
    ]
  },
];

// Pricing Packages (Enhanced)
const packages = [
  {
    name: 'Starter',
    price: '₹9,999',
    originalPrice: '₹14,999',
    description: 'Perfect for personal & small businesses',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'Contact form',
      'Social media integration',
      'Basic SEO setup',
      'Google Analytics',
      'SSL certificate',
      '1 year free hosting',
      'Email support',
      'Basic training',
    ],
    popular: false,
    deliveryTime: '7-10 days',
    idealFor: 'Startups, freelancers, small businesses'
  },
  {
    name: 'Professional',
    price: '₹24,999',
    originalPrice: '₹34,999',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 10 pages',
      'Custom design',
      'Blog integration',
      'Advanced SEO',
      'Google Analytics & Search Console',
      'WhatsApp chat widget',
      'Social media integration',
      'Contact & inquiry forms',
      '2 years free hosting',
      '3 months support',
      'CMS training',
      'Performance optimization',
    ],
    popular: true,
    deliveryTime: '10-15 days',
    idealFor: 'Growing businesses, service providers, agencies'
  },
  {
    name: 'E-Commerce',
    price: '₹49,999',
    originalPrice: '₹69,999',
    description: 'Complete online store solution',
    features: [
      'Unlimited pages',
      'Full e-commerce functionality',
      'Payment gateway integration (Razorpay/Stripe)',
      'Product catalog (up to 100 products)',
      'Shopping cart & checkout',
      'Order management system',
      'Inventory management',
      'Admin dashboard',
      'Customer accounts',
      'Email notifications',
      '2 years free hosting',
      '6 months support',
      'Advanced SEO',
      'Performance optimization',
    ],
    popular: false,
    deliveryTime: '15-20 days',
    idealFor: 'Online stores, retailers, product sellers'
  },
];

// Testimonials (Enhanced)
const testimonials = [
  {
    name: 'Rajesh Kumar',
    business: 'Kumar Electronics',
    role: 'Business Owner',
    quote: 'Our sales increased 40% after launching our new website. The team understood our needs perfectly and delivered beyond expectations. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    results: '40% increase in sales'
  },
  {
    name: 'Priya Sharma',
    business: 'Priya\'s Boutique',
    role: 'Fashion Designer',
    quote: 'Beautiful design and great support. They delivered exactly what I wanted and helped me understand how to manage my website. My online presence has never been better!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    results: '3x more online inquiries'
  },
  {
    name: 'Dr. Anil Mehta',
    business: 'Mehta Dental Clinic',
    role: 'Dentist',
    quote: 'Professional team, on-time delivery. My patients find it easy to book appointments now. The website has significantly improved our patient engagement.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop',
    results: '60% more appointments'
  },
  {
    name: 'Amit Patel',
    business: 'Patel Real Estate',
    role: 'Real Estate Agent',
    quote: 'The property listing website they built has transformed my business. I can now showcase properties effectively and get inquiries 24/7. Excellent work!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    results: '5x more property inquiries'
  },
];

// FAQ
const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Typically, a starter website takes 7-10 days, professional websites take 10-15 days, and e-commerce sites take 15-20 days. Complex custom projects may take longer. We provide a detailed timeline during the planning phase.'
  },
  {
    question: 'Do I need to provide content and images?',
    answer: 'You can provide your own content and images, or we can help create professional content and source high-quality images. We offer content writing services as an add-on.'
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices. Mobile-first design is our standard approach.'
  },
  {
    question: 'Can I update the website myself?',
    answer: 'Yes! We provide a user-friendly Content Management System (CMS) and comprehensive training so you can easily update content, add pages, and manage your website independently.'
  },
  {
    question: 'What about hosting and domain?',
    answer: 'We include free hosting for 1-2 years depending on your package. You can use your existing domain or we can help you purchase a new one. Domain registration is separate.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! All packages include support periods (1-6 months depending on package). We also offer monthly maintenance plans for ongoing updates, backups, and technical support.'
  },
  {
    question: 'Can you integrate payment gateways?',
    answer: 'Yes! We integrate popular payment gateways like Razorpay, Stripe, PayPal, and others. E-commerce packages include payment integration by default.'
  },
  {
    question: 'Will my website rank on Google?',
    answer: 'We implement SEO best practices including proper meta tags, schema markup, fast loading, mobile optimization, and clean code structure. We also provide guidance on content marketing for better rankings.'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function WebDevelopment() {
  return <>
    <Helmet>
      <title>Professional Website Development Services | Savvy Axiss</title>
      <meta name="description" content="Complete website development services for businesses. From design to deployment, we build stunning, mobile-responsive websites that drive results. Get your website today!" />
      <meta name="keywords" content="website development, web design, e-commerce website, business website, responsive website, SEO optimized website" />
    </Helmet>

    {/* Hero Section */}
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Globe className="w-3 h-3 mr-1" />
            Complete Website Development Services
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 text-white leading-tight">
            Build Your Dream Website
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
              That Drives Real Results
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            From stunning design to powerful functionality. We create websites that attract customers, 
            build trust, and grow your business. <strong>200-700% ROI guaranteed.</strong>
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <stat.icon className="w-6 h-6 text-white/80 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/70 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-0" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0" asChild>
              <a href="https://wa.me/+919384902501?text=Hi, I need a website for my business" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Websites Matter */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            Why Your Business Needs a Website
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Your Digital Storefront
            <span className="block text-emerald-600">Works 24/7</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In today's digital world, a website isn't optional—it's essential for business success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyWebsites.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="h-full border-2 hover:border-emerald-500/50 transition-all duration-300 card-hover">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{item.stat}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Types of Websites */}
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Websites We Build
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From simple business sites to complex e-commerce platforms, we build websites for every industry and need.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {websiteTypes.map((type, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 hover:border-emerald-500/50 transition-all duration-300 card-hover group">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-1">{type.name}</CardTitle>
                  <CardDescription className="text-sm mb-2">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1.5 mb-3">
                    {type.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {type.bestFor}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Complete Development Process */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            End-to-End Website Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final launch, we guide you through every step of the website development journey.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {developmentProcess.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <Card className="border-2 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl">
                        {process.step}
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground text-center md:text-left">
                        {process.duration}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <process.icon className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-xl font-heading font-bold text-foreground">{process.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{process.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {process.activities.map((activity, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Technology Stack */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Modern Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build fast, secure, and scalable websites.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {Object.entries(techStack).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg capitalize">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {items.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Code2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm text-foreground">{item.name}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Essential Features */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Every Website Includes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive features that ensure your website performs, converts, and grows your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {essentialFeatures.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <feature.icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{feature.name}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* HARI Section */}
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-500/20 text-emerald-700 border-emerald-500/30">
            Complete Solution
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            HARI - Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            HARI stands for Hosting, Analytics, Responsive, and Integration - the four pillars of a successful website.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Cloud,
              title: 'Hosting',
              description: 'Free hosting included for 1-2 years. Fast, reliable servers with 99.9% uptime guarantee.',
              features: ['Free hosting 1-2 years', 'SSL certificate', '99.9% uptime', 'Regular backups']
            },
            {
              icon: BarChart3,
              title: 'Analytics',
              description: 'Track performance with Google Analytics. Understand visitors and make data-driven decisions.',
              features: ['Google Analytics', 'Traffic monitoring', 'Conversion tracking', 'Performance reports']
            },
            {
              icon: Smartphone,
              title: 'Responsive',
              description: 'Perfect on all devices - desktop, tablet, and mobile. Mobile-first design approach.',
              features: ['Mobile-responsive', 'Tablet optimized', 'Touch-friendly', 'Fast mobile loading']
            },
            {
              icon: Layers,
              title: 'Integration',
              description: 'Seamless integration with WhatsApp, social media, payment gateways, and business tools.',
              features: ['WhatsApp widget', 'Social media', 'Payment gateway', 'Contact forms']
            },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 hover:border-emerald-500/50 transition-all duration-300 card-hover">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable packages with no hidden costs. All prices include hosting, SSL, and support.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`relative h-full border-2 ${pkg.popular ? 'border-emerald-500 shadow-2xl scale-105' : 'border-border'} transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="mb-4">{pkg.description}</CardDescription>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-foreground">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through ml-2">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Delivery: {pkg.deliveryTime}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-2">{pkg.idealFor}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? 'default' : 'outline'}
                    size="lg"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses. See how our websites have transformed their online presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-500/20">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {testimonial.results}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Got Questions? We've Got Answers
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg mb-4 px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Ready to Transform Your Business Online?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of successful businesses who trust us with their online presence. 
            Get a free consultation and custom quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+919384902501">Call: +91 93849 02501</a>
            </Button>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-0"
              asChild
            >
              <a href="https://wa.me/+919384902501?text=Hi, I need a website for my business" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>No Hidden Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </>;
}
