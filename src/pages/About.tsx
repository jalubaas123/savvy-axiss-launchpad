import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Lightbulb, Shield, Facebook, Linkedin, Instagram, X } from 'lucide-react';
import { SEO_BASE_URL, CHENNAI_ADDRESS, createBreadcrumbSchema } from '@/lib/seo';

/** Meet Our Team: neumorphic cards, layered photo frames, public folder images, social links */
const teamMembers = [
  {
    id: 1,
    name: 'Shalini Baskaran',
    role: 'Founder & CEO',
    image: '/shalini.png',
    socialLinks: {
      facebook: 'https://www.facebook.com/share/akFQyk7tZLz9S1jX/',
      twitter: 'https://x.com/ShaliniBas50457',
      instagram: 'https://www.instagram.com/starlet_shals_official?igsh=NWZ6cHFlMXNvc3Bs',
      linkedin: 'https://www.linkedin.com/in/shalini-b-baskaran-21b744211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  },
  {
    id: 2,
    name: 'Varsha Sekar',
    role: 'President & Director',
    image: '/varsha.png',
    socialLinks: {
      facebook: 'https://www.facebook.com/varsha.sekar29?mibextid=ZbWKwL',
      twitter: 'https://x.com/__ahs__rav__?t=uvTshHfk4TBPsJxQeHryRQ&s=09',
      instagram: 'https://www.instagram.com/___ahs__rav___?igsh=MW1rMXJrMHZ1YnU3Ng==',
      linkedin: 'https://www.linkedin.com/in/varsha-sekar-314725221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  },
  {
    id: 3,
    name: 'Sakthi Jayavel',
    role: 'Co-Director & Instructor',
    image: '/sakthi.png',
    socialLinks: {
      facebook: 'https://www.facebook.com/sakthi.j.5249?mibextid=rS40aB7S9Ucbxw6v',
      twitter: 'https://x.com/sakthi_jayavel?t=uLiwpiBWekCx_I7gRLsj2w&s=08',
      instagram: 'https://www.instagram.com/s.a.k.t.h.i._/profilecard/?igsh=MWNkbzU0Z3NscTJzMA==',
      linkedin: 'https://www.linkedin.com/in/sakthi-j-b06a12265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  },
  {
    id: 4,
    name: 'Rajalakshmi Venkatesan',
    role: 'Softskill Trainer',                                                                                                                                                                                                                                                                                                                                                                                                                               
    image: '/rajalakshmi.png',
    socialLinks: {
      facebook: 'https://www.facebook.com/profile.php?id=100090665041671',
      twitter: 'https://x.com/Raji1308?t=MGb6CZ15QELu8ER0PemACw&s=09',
      instagram: 'https://www.instagram.com/r_a__j_i13/profilecard/?igsh=MWtnYmZ0OGo4cWtwcg==',
      linkedin: 'https://www.linkedin.com/in/rajalakshmi-s-v-237ab8214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  },
];

const aboutBreadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
]);

const schemaAboutPage = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'EducationalOrganization',
    name: 'Savvy Axiss',
    foundingDate: '2022',
    address: CHENNAI_ADDRESS,
    areaServed: [{ '@type': 'City', name: 'Chennai' }, { '@type': 'Country', name: 'India' }],
    employee: [
      { '@type': 'Person', name: 'Shalini Baskaran', jobTitle: 'Founder & CEO', description: 'Business development expert specializing in MS Office and digital marketing.' },
      { '@type': 'Person', name: 'Varsha Sekar', jobTitle: 'President & Director', description: 'Professor at Jeppiaar Engineering College specializing in Machine Learning, Deep Learning, and Python.', worksFor: { '@type': 'Organization', name: 'Jeppiaar Engineering College' } },
      { '@type': 'Person', name: 'Sakthi Jayavel', jobTitle: 'Co-Director & Instructor', description: 'Instructor at Savvy Axiss.' },
      { '@type': 'Person', name: 'Rajalakshmi Venkatesan', jobTitle: 'Co-Director & Trainer', description: 'Expert in web development, React, and full stack technologies.' },
    ],
  },
};

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

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Chennai-Based Tech Training Company | Savvy Axiss</title>
        <meta name="description" content="Savvy Axiss is a Chennai-based tech training company (Maduravoyal), founded in 2022. Meet our team: Shalini Baskaran, Varsha Sekar, Sakthi Jayavel, Rajalakshmi Venkatesan. Empowering tech professionals in Chennai & India." />
        <meta name="keywords" content="about Savvy Axiss, tech training company Chennai, Savvy Axiss Chennai, Maduravoyal, Shalini Baskaran, Varsha Sekar, Sakthi Jayavel, Rajalakshmi Venkatesan, education Chennai" />
        <link rel="canonical" href={`${SEO_BASE_URL}/about`} />
        <meta property="og:title" content="About Savvy Axiss - Chennai-Based Tech Training Company" />
        <meta property="og:description" content="Savvy Axiss Chennai - founded in 2022 in Maduravoyal. Hands-on tech training, final year projects & internships. Meet our expert team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SEO_BASE_URL}/about`} />
        <meta property="og:image" content={`${SEO_BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Savvy Axiss - Chennai-Based Tech Training Company" />
        <meta name="twitter:description" content="Savvy Axiss Chennai - founded in 2022. Tech training, projects & internships. Maduravoyal, Chennai." />
        <meta name="twitter:image" content={`${SEO_BASE_URL}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify(schemaAboutPage)}</script>
        <script type="application/ld+json">{JSON.stringify(aboutBreadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 hero-gradient overflow-hidden">
        {/* Decorative background — same palette, visible pattern and orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
          {/* Soft glowing orbs */}
          <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-2xl opacity-35" style={{ background: 'radial-gradient(circle, hsl(199, 55%, 28%) 0%, transparent 65%)' }} />
          <div className="absolute -bottom-20 right-1/4 w-[450px] h-[450px] rounded-full blur-2xl opacity-35" style={{ background: 'radial-gradient(circle, hsl(222, 50%, 25%) 0%, transparent 65%)' }} />
          <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full blur-2xl opacity-30" style={{ background: 'radial-gradient(circle, hsl(187, 55%, 22%) 0%, transparent 65%)' }} />
          <div className="absolute bottom-1/3 -left-20 w-[300px] h-[300px] rounded-full blur-2xl opacity-30" style={{ background: 'radial-gradient(circle, hsl(222, 47%, 20%) 0%, transparent 65%)' }} />
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1.5px, transparent 1.5px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Line grid for depth */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-4">
              We're on a mission to bridge the gap between education and industry 
              by providing hands-on training with real-world experience.
            </p>
            <p className="text-sm text-primary-foreground/60 max-w-2xl mx-auto">
              Explore our <Link to="/courses" className="text-secondary font-medium hover:underline">programming courses in Chennai</Link>,{' '}
              <Link to="/projects" className="text-secondary font-medium hover:underline">final year project solutions</Link>,{' '}
              <Link to="/internship" className="text-secondary font-medium hover:underline">internship programs in Chennai</Link>, and{' '}
              <Link to="/web-development" className="text-secondary font-medium hover:underline">website development services</Link>.{' '}
              <Link to="/contact" className="text-secondary font-medium hover:underline">Contact us</Link> ·{' '}
              <Link to="/apply" className="text-secondary font-medium hover:underline">Apply now</Link>.
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
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                  Our Story
                </span>
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                Our Story
              </h2>
              <h3 className="text-xl md:text-2xl font-heading font-medium text-foreground mt-6 mb-6 pl-4 border-l-4 border-secondary/70 flex flex-wrap items-baseline gap-x-2">
                <span className="text-muted-foreground/90">From</span>
                <span className="gradient-text font-semibold">Vision</span>
                <span className="text-muted-foreground/90">to</span>
                <span className="gradient-text font-semibold">Reality</span>
              </h3>
              <div className="space-y-4 text-muted-foreground mt-4 text-justify text-lg leading-relaxed">
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                  alt="Savvy Axiss team collaboration - Empowering Tech Professionals"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              What drives us
            </span>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Our <span className="gradient-text">Mission</span> & <span className="gradient-text">Vision</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-card p-8 lg:p-10 rounded-2xl border border-border overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 shadow-lg shadow-secondary/20">
                  <Target className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-2 pl-4 border-l-4 border-secondary">
                  Our <span className="gradient-text">Mission</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify mt-4">
                  To democratize tech education by providing affordable, industry-relevant, 
                  hands-on training that transforms learners into job-ready professionals. 
                  We aim to bridge the gap between academic knowledge and industry requirements.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-card p-8 lg:p-10 rounded-2xl border border-border overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  <Eye className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-2 pl-4 border-l-4 border-accent">
                  Our <span className="gradient-text">Vision</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify mt-4">
                  To become India's most trusted EdTech platform for practical tech education, 
                  known for our student success rates and industry partnerships. We envision 
                  a future where every motivated learner can access quality tech education.
                </p>
              </div>
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
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Our Core Values
            </h2>
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
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2" id={`value-${value.title.toLowerCase()}`}>
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

      {/* Meet Our Team — animated professional cards */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-14"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our Leadership
            </span>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full" />
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
              The <span className="gradient-text">Minds</span> Behind Savvy Axiss
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Experienced professionals dedicated to your growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/30 transition-shadow duration-300"
              >
                {/* Photo with zoom-on-hover */}
                <div className="relative w-full max-w-[260px] mx-auto pt-6 px-5">
                  <div className="aspect-square rounded-2xl overflow-hidden border-2 border-border/80 bg-muted shadow-md ring-2 ring-secondary/10 group-hover:ring-secondary/30 transition-all duration-300">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role} at Savvy Axiss`}
                        className="w-full h-full object-cover object-top"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-4 min-w-0 text-center sm:text-left">
                  <motion.h3
                    className="font-heading font-semibold text-foreground text-lg mb-1 break-words leading-tight"
                    title={member.name}
                    initial={false}
                    whileHover={{ x: 2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-secondary font-medium text-sm mb-4">
                    {member.role}
                  </p>

                  <motion.div
                    initial={false}
                    className="flex items-center justify-center gap-2 pt-4 border-t border-border/80"
                  >
                    {[
                      { Icon: Facebook, href: member.socialLinks.facebook, label: 'Facebook', color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/10' },
                      { Icon: X, href: member.socialLinks.twitter, label: 'X', color: 'hover:text-foreground hover:bg-muted' },
                      { Icon: Instagram, href: member.socialLinks.instagram, label: 'Instagram', color: 'hover:text-[#E1306C] hover:bg-[#E1306C]/10' },
                      { Icon: Linkedin, href: member.socialLinks.linkedin, label: 'LinkedIn', color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10' },
                    ].map(({ Icon, href, label, color }, i) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2.5 rounded-lg text-muted-foreground transition-colors duration-200 ${color}`}
                        aria-label={`${member.name} on ${label}`}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.96 }}
                        initial={{ opacity: 1 }}
                      >
                        <Icon className="w-5 h-5" strokeWidth={Icon === X ? 2.5 : 2} />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>

                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-secondary/0 to-secondary/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
