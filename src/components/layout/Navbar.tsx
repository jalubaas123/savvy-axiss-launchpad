import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
  name: 'Resources',
  href: '/blog'
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
    }} className="sticky top-0 z-50 bg-primary-foreground shadow-sm">
        <nav className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 bg-primary-foreground">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">
            {/* Left Section: Logo + Text (close together) */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center gap-1 sm:gap-1.5 md:gap-2 group">
                <img 
                  src="/logo.png" 
                  alt="Savvy Axiss Logo" 
                  className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
                />
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-heading font-bold text-blue-900 hidden sm:inline-block">
                  Savvy<span className="text-orange-600">Axiss</span>
                </span>
              </Link>
            </div>

            {/* Center Section: Navigation Menu (perfectly centered) */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4 absolute left-1/2 -translate-x-1/2">
              {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-sm xl:text-base font-medium transition-colors duration-300 link-underline whitespace-nowrap ${location.pathname === link.href ? 'text-secondary' : 'text-foreground/80 hover:text-secondary'}`}>
                  {link.name}
                </Link>)}
            </nav>

            {/* Right Section: CTA Button / Mobile Menu */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Desktop CTA Button */}
              <div className="hidden lg:flex items-center">
                <Button variant="hero" size="default" className="text-xs xl:text-sm px-4 xl:px-5 h-9 xl:h-10" asChild>
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-1.5 sm:p-2 text-foreground hover:text-secondary transition-colors" aria-label="Toggle menu">
                {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
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
      }} className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div className="absolute right-0 top-0 h-full w-[85vw] sm:w-80 max-w-sm bg-card shadow-2xl overflow-y-auto" initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          duration: 0.3
        }}>
              <div className="flex flex-col h-full pt-16 sm:pt-20 px-4 sm:px-6 pb-6 sm:pb-8">
                <nav className="flex flex-col gap-1 sm:gap-2">
                  {navLinks.map((link, index) => <motion.div key={link.name} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }}>
                      <Link to={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 ${location.pathname === link.href ? 'bg-secondary/10 text-secondary' : 'text-foreground hover:bg-muted hover:text-secondary'}`}>
                        {link.name}
                      </Link>
                    </motion.div>)}
                </nav>
                <div className="mt-6 sm:mt-8">
                  <Button variant="hero" size="default" className="w-full text-sm sm:text-base" asChild>
                    <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};