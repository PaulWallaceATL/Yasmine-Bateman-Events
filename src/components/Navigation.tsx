'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm ${
        isScrolled 
          ? 'bg-white/95 shadow-xl py-3 border-b border-gold/10' 
          : 'bg-gradient-to-b from-black/30 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative">
            <motion.h1 
              className={`text-display text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-300 ${
                isScrolled ? 'text-navy' : 'text-white drop-shadow-lg'
              } group-hover:text-[#c9a96e]`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Yasmine Bateman
              <span className="block text-xs lg:text-sm font-light tracking-[0.3em] uppercase font-sans">
                Events
              </span>
            </motion.h1>
            <div className="absolute -bottom-1 left-0 h-[2px] w-0 gradient-gold group-hover:w-full transition-all duration-500"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`relative font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 px-4 py-2 rounded-sm group ${
                    pathname === link.href 
                      ? 'text-[#c9a96e] font-semibold' 
                      : isScrolled 
                        ? 'text-charcoal hover:text-[#c9a96e]' 
                        : 'text-white hover:text-[#c9a96e] drop-shadow-md'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c9a96e] to-[#b76e79] transition-all duration-300 ${
                    pathname === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></span>
                  <motion.span
                    className="absolute inset-0 bg-[#c9a96e]/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  ></motion.span>
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className={`ml-4 gradient-rose text-white px-6 py-2.5 font-sans text-xs tracking-widest uppercase hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-block ${
                  pathname === '/contact' ? 'shadow-xl' : ''
                }`}
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-50 p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-navy bg-gold/10' : 'text-white bg-white/10 backdrop-blur-sm'
            }`}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-white to-cream shadow-2xl overflow-hidden border-t border-gold/20"
            >
              <div className="py-8 px-6 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-4 px-4 font-sans text-base tracking-wide uppercase transition-all duration-300 rounded-lg mb-2 ${
                        pathname === link.href 
                          ? 'text-[#c9a96e] bg-gold/10 font-semibold border-l-4 border-gold' 
                          : 'text-charcoal hover:text-[#c9a96e] hover:bg-gold/5 hover:translate-x-2'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 pt-6 border-t border-gold/20"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full gradient-rose text-white text-center px-8 py-4 font-sans text-sm tracking-widest uppercase hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Book Your Event
                  </Link>
                </motion.div>
                
                {/* Contact Info in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6 pt-6 border-t border-gold/20 text-center"
                >
                  <p className="text-xs tracking-wider text-charcoal/60 uppercase mb-2">Contact Us</p>
                  <a href="tel:+16787615526" className="block text-sm text-charcoal/80 hover:text-gold transition-colors mb-1">
                    (678) 761-5526
                  </a>
                  <a href="mailto:yasminebatemanpr@gmail.com" className="block text-sm text-charcoal/80 hover:text-gold transition-colors">
                    yasminebatemanpr@gmail.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

