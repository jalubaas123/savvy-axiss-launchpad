import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Apply Now', href: '/apply' },
  ],
  courses: [
    { name: 'Full Stack Development', href: '/courses/full-stack-development' },
    { name: 'Data Science', href: '/courses/data-science' },
    { name: 'Digital Marketing', href: '/courses/digital-marketing' },
    { name: 'UI/UX Design', href: '/courses/ui-ux-design' },
    { name: 'Cloud Computing', href: '/courses/cloud-computing' },
  ],
  
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">
                Savvy<span className="text-secondary">Axiss</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              Empowering the next generation of tech professionals through live training, 
              real-time internships, and industry-recognized certifications.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  38 4th Block MMDA Colony<br />
                  Maduravoyal, Chennai-600095<br /> 
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@savvyaxiss.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">info@savvyaxiss.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919384902501"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm">+91 93849 02501</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Savvy Axiss. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
