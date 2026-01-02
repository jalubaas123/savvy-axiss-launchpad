import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle2, Users, Trophy, Clock, FileCheck, Lightbulb, Rocket, ArrowRight, MessageCircle, GraduationCap, Code2, BarChart3, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const internshipDomains = [{
  icon: Code2,
  name: 'Web Development',
  duration: '1-3 months',
  description: 'React, Node.js, Full Stack'
}, {
  icon: BarChart3,
  name: 'Data Science',
  duration: '1-3 months',
  description: 'Python, ML, Analytics'
}, {
  icon: Palette,
  name: 'UI/UX Design',
  duration: '2 months',
  description: 'Figma, User Research'
}, {
  icon: Lightbulb,
  name: 'Digital Marketing',
  duration: '1-3 months',
  description: 'SEO, Social Media, Ads'
}];
const benefits = [{
  icon: Briefcase,
  title: 'Real Project Experience',
  description: 'Work on actual client projects, not dummy assignments'
}, {
  icon: Users,
  title: 'Industry Mentorship',
  description: 'Learn from experienced professionals in your field'
}, {
  icon: FileCheck,
  title: 'Certificate & LOR',
  description: 'Get official internship certificate and Letter of Recommendation'
}, {
  icon: Trophy,
  title: 'Portfolio Building',
  description: 'Build impressive projects to showcase to employers'
}, {
  icon: Clock,
  title: 'Flexible Timing',
  description: 'Part-time options available for college students'
}, {
  icon: Rocket,
  title: 'Job Placement Support',
  description: 'Top performers get job referrals and placement assistance'
}];
const internshipProcess = [{
  step: 1,
  title: 'Apply',
  description: 'Fill out the application form with your details and preferences'
}, {
  step: 2,
  title: 'Quick Interview',
  description: 'A brief conversation to understand your goals and potential'
}, {
  step: 3,
  title: 'Onboarding',
  description: 'Meet your mentor and get access to learning resources'
}, {
  step: 4,
  title: 'Learn & Build',
  description: 'Work on real projects with guidance from mentors'
}, {
  step: 5,
  title: 'Certificate',
  description: 'Receive your certificate and Letter of Recommendation'
}];
const packages = [{
  name: 'Basic Internship',
  price: '₹1,999',
  duration: '1 Month',
  features: ['Work on 1 real project', 'Weekly mentor sessions', 'Internship certificate', 'Basic project guidance', 'Community access'],
  popular: false
}, {
  name: 'Standard Internship',
  price: '₹2,999',
  duration: '2 Months',
  features: ['Work on 2-3 real projects', 'Bi-weekly 1-on-1 mentorship', 'Certificate + LOR', 'Resume building session', 'LinkedIn optimization', 'Priority community access'],
  popular: true
}, {
  name: 'Premium Internship',
  price: '₹3,999',
  duration: '3 Months',
  features: ['Work on 4+ real projects', 'Weekly 1-on-1 mentorship', 'Certificate + LOR + Recommendation', 'Job placement assistance', 'Mock interviews', 'Lifetime community access', 'Freelancing guidance'],
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
export default function Internship() {
  return <>
      <Helmet>
        <title>Internship Programs for Students | Savvy Axiss</title>
        <meta name="description" content="Join our internship programs and gain real-world experience. Work on live projects, get mentorship from industry experts, and earn certificates with LOR." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-orange-900/50" />
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
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              <Briefcase className="w-3 h-3 mr-1" />
              Internship Programs
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-warning">
              Kickstart Your Career with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400"> Real Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Work on real projects, learn from industry mentors, and build a portfolio that 
              stands out. Get certified with Letter of Recommendation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/apply">
                  Apply for Internship
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-foreground/20 hover:bg-foreground/10">
                <a href="https://wa.me/+919384902501?text=Hi, I want to know more about internship programs" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask Questions
                </a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="flex flex-wrap justify-center gap-8 mt-12">
              {[{
              icon: Users,
              label: 'Interns Trained',
              value: '50+'
            }, {
              icon: Briefcase,
              label: 'Projects Completed',
              value: '320+'
            }, {
              icon: Trophy,
              label: 'Placed Successfully',
              value: '85%'
            }].map(stat => <div key={stat.label} className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-border/50">
                  <stat.icon className="w-5 h-5 text-orange-700" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-orange-600">{stat.label}</p>
                  </div>
                </div>)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internship Domains */}
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
              Domains
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Choose Your Internship Domain
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internshipDomains.map(domain => <motion.div key={domain.name} variants={itemVariants} className="group p-6 rounded-xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300 card-hover">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <domain.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{domain.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{domain.description}</p>
                <Badge variant="secondary">{domain.duration}</Badge>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              What You'll Get
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(benefit => <motion.div key={benefit.title} variants={itemVariants} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4 border border-orange-500/20">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Your Journey to Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to kickstart your internship experience with us
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="hidden md:block relative max-w-5xl mx-auto">
            {/* Connecting Line Background */}
            <div className="absolute top-16 left-[10%] right-[10%] h-1 bg-border rounded-full overflow-hidden">
              {/* Animated flowing gradient */}
              <motion.div className="h-full w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" initial={{
              x: '-100%'
            }} animate={{
              x: '100%'
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }} />
            </div>
            {/* Static gradient overlay */}
            <div className="absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-500/30 via-orange-500/60 to-orange-500/30 rounded-full" />
            
            <div className="grid grid-cols-5 gap-4">
              {internshipProcess.map((item, index) => <motion.div key={item.step} variants={itemVariants} className="flex flex-col items-center text-center group">
                  {/* Step Number with Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/40 transition-all duration-300 rotate-3 group-hover:rotate-0">
                      {item.step}
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-2xl bg-orange-500/20 animate-ping opacity-0 group-hover:opacity-100" style={{
                  animationDuration: '1.5s'
                }} />
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-card border border-border rounded-xl p-4 shadow-sm group-hover:shadow-md group-hover:border-orange-500/30 transition-all duration-300 h-full w-full">
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Mobile Timeline */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="md:hidden relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border overflow-hidden">
              <motion.div className="w-full h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent" initial={{
              y: '-100%'
            }} animate={{
              y: '100%'
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }} />
            </div>
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-500/40 via-amber-500/60 to-orange-500/20" />
            
            <div className="space-y-6">
              {internshipProcess.map((item, index) => <motion.div key={item.step} variants={itemVariants} className="flex items-start gap-4 relative">
                  {/* Step Number */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30">
                      {item.step}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-card border border-border rounded-xl p-4 shadow-sm">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
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
              Internship Packages
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map(pkg => <motion.div key={pkg.name} variants={itemVariants}>
                <Card className={`relative h-full ${pkg.popular ? 'border-orange-500 shadow-glow' : ''}`}>
                  {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-orange-500 text-white">Most Popular</Badge>
                    </div>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.duration}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
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
                      <Link to="/apply">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <GraduationCap className="w-16 h-16 mx-auto text-white/80 mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ students who've transformed their careers through our internship programs. 
              Limited seats available for this batch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-white/90">
                <Link to="/apply">Apply for Internship</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                <a href="https://wa.me/+919384902501" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
}