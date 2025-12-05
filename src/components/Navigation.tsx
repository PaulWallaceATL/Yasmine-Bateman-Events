'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (offset / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(offset > 48);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const shellStyles = isScrolled
    ? 'bg-white/95 border-white/70 shadow-lg shadow-black/5'
    : 'bg-white/70 border-white/50 shadow-sm';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-[95vw] px-3 sm:max-w-[92vw] md:max-w-[85vw] lg:px-6">
          <div
            className={`mt-4 flex items-center justify-between rounded-2xl border backdrop-blur-xl transition-all duration-300 ${shellStyles}`}
          >
            <Link href="/" className="px-4 py-3" aria-label="YB Studio home">
              <Logo tone={isScrolled ? 'dark' : 'light'} />
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                key={link.href}
                  href={link.href}
                    className={`relative rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.35em] transition ${
                      isActive ? 'text-navy' : 'text-slate-500 hover:text-navy'
                  }`}
                >
                  {link.label}
                    {isActive && (
                      <span className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-gold to-rose-gold" />
                    )}
                </Link>
                );
              })}
              <Link
                href="/contact"
                className="ml-3 rounded-full bg-rose-gold px-6 py-2 text-[11px] uppercase tracking-[0.45em] text-charcoal transition hover:bg-gold"
              >
                Plan
              </Link>
            </nav>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="mr-4 rounded-full border border-black/10 bg-white/70 p-2 text-navy shadow-sm md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        <motion.span
          className="pointer-events-none block h-[2px] origin-left rounded-full bg-gradient-to-r from-rose-gold via-gold to-rose-gold"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-24 w-[min(420px,calc(100vw-2.5rem))] rounded-3xl border border-white/50 bg-white/95 p-8 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 text-xs font-semibold uppercase tracking-[0.5em] text-slate-500">
                Navigate
              </div>
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-sm font-semibold tracking-[0.2em] transition ${
                        isActive
                          ? 'border-gold/60 bg-gold/10 text-navy'
                          : 'border-slate-200 text-slate-600 hover:border-gold/40 hover:bg-gold/5'
                      }`}
                    >
                      {link.label}
                      <span className="text-xs text-slate-400">{isActive ? '●' : '○'}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Contact</p>
                <a href="tel:+16787615526" className="mt-3 block text-base font-semibold text-navy">
                  (678) 761-5526
                </a>
                <a
                  href="mailto:yasminebatemanpr@gmail.com"
                  className="mt-1 block text-sm text-slate-500"
                >
                  yasminebatemanpr@gmail.com
                </a>
                  <Link
                    href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 block rounded-2xl bg-rose-gold px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-charcoal"
                >
                  Start a project
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

