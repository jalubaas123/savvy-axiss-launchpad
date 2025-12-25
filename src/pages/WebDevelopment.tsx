import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  CheckCircle2, 
  Zap,
  Smartphone,
  Search,
  Shield,
  Palette,
  ShoppingCart,
  ArrowRight,
  MessageCircle,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  { icon: Palette, name: 'Business Websites', description: 'Professional websites that showcase your brand and attract customers' },
  { icon: ShoppingCart, name: 'E-Commerce Stores', description: 'Online stores with payment integration and inventory management' },
  { icon: Smartphone, name: 'Landing Pages', description: 'High-converting landing pages for your campaigns and products' },
  { icon: Globe, name: 'Portfolio Sites', description: 'Stunning portfolio websites for freelancers and creatives' },
];

const features = [
  { icon: Smartphone, title: 'Mobile Responsive', description: 'Perfect on all devices' },
  { icon: Search, title: 'SEO Optimized', description: 'Rank higher on Google' },
  { icon: Zap, title: 'Fast Loading', description: 'Optimized performance' },
  { icon: Shield, title: 'Secure & Reliable', description: 'SSL & regular backups' },
];

const packages = [
  {
    name: 'Starter',
    price: '₹9,999',
    description: 'Perfect for personal & small businesses',
    features: [
      '5-page responsive website',
      'Mobile-friendly design',
      'Contact form',
      'Social media integration',
      'Basic SEO setup',
      '1 year free hosting',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹24,999',
    description: 'Ideal for growing businesses',
    features: [
      '10-page responsive website',
      'Custom design',
      'Blog integration',
      'Google Analytics',
      'Advanced SEO',
      'WhatsApp chat widget',
      '2 years free hosting',
      '3 months support',
    ],
    popular: true,
  },
  {
    name: 'E-Commerce',
    price: '₹49,999',
    description: 'Complete online store solution',
    features: [
      'Full e-commerce functionality',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking',
      'Admin dashboard',
      'Product catalog (up to 100)',
      '2 years free hosting',
      '6 months support',
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    business: 'Kumar Electronics',
    quote: 'Our sales increased 40% after launching our new website. Excellent work!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    business: 'Priya\'s Boutique',
    quote: 'Beautiful design and great support. They delivered exactly what I wanted.',
    rating: 5,
  },
  {
    name: 'Dr. Anil Mehta',
    business: 'Mehta Dental Clinic',
    quote: 'Professional team, on-time delivery. My patients find it easy to book appointments now.',
    rating: 5,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function WebDevelopment() {
  return (
    <>
      <Helmet>
        <title>Website Development for Small Businesses | Savvy Axiss</title>
        <meta name="description" content="Professional website development for small businesses. Get a stunning, mobile-responsive website that drives results. Affordable packages starting ₹9,999." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-emerald-900/50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              <Globe className="w-3 h-3 mr-1" />
              Website Development
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Stunning Websites for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> Small Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get a professional, mobile-responsive website that attracts customers and grows your business. 
              Affordable packages with no hidden costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-foreground/20 hover:bg-foreground/10">
                <a href="https://wa.me/919999999999?text=Hi, I need a website for my business" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Websites That Drive Results
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="group p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 text-center card-hover"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Every Website Includes
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Affordable Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden costs. Choose the package that fits your needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {packages.map((pkg) => (
              <motion.div key={pkg.name} variants={itemVariants}>
                <Card className={`relative h-full ${pkg.popular ? 'border-secondary shadow-glow' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={pkg.popular ? 'default' : 'outline'}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your website requirements. Get a free consultation and quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-emerald-600 hover:bg-white/90">
                <Link to="/contact">Request Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                <a href="tel:+919999999999">Call: +91 99999 99999</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
