import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
const navLinks = [{
  name: 'Home',
  href: '/'
}, {
  name: 'About',
  href: '/about'
}, {
  name: 'Projects',
  href: '/projects'
}, {
  name: 'Courses',
  href: '/courses'
}, {
  name: 'Web Development',
  href: '/web-development'
}, {
  name: 'Internship',
  href: '/internship'
}, {
  name: 'Contact',
  href: '/contact'
}];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return <>
      <motion.header initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5
    }} className="">
        <nav className="container mx-auto px-4 lg:px-8 bg-primary-foreground">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold text-blue-900">
                Savvy<span className="text-orange-600">Axiss</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-sm font-medium transition-colors duration-300 link-underline ${location.pathname === link.href ? 'text-secondary' : 'text-foreground/80 hover:text-secondary'}`}>
                  {link.name}
                </Link>)}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="hero" size="default" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-foreground hover:text-secondary transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        x: '100%'
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: '100%'
      }} transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div className="absolute right-0 top-0 h-full w-80 max-w-full bg-card shadow-2xl" initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          duration: 0.3
        }}>
              <div className="flex flex-col h-full pt-20 px-6 pb-8">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => <motion.div key={link.name} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }}>
                      <Link to={link.href} className={`block py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${location.pathname === link.href ? 'bg-secondary/10 text-secondary' : 'text-foreground hover:bg-muted hover:text-secondary'}`}>
                        {link.name}
                      </Link>
                    </motion.div>)}
                </nav>
                <div className="mt-8">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};