import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-display text-4xl font-bold mb-4">
              Yasmine Bateman
              <span className="block text-sm font-light tracking-[0.3em] uppercase mt-2 font-sans text-[#c9a96e]">Events</span>
            </h2>
            <div className="h-1 w-24 gradient-gold mb-6"></div>
            <p className="text-elegant text-lg text-cream/80 leading-relaxed max-w-md">
              Creating unforgettable moments through sophisticated event design and meticulous planning. 
              Let us bring your vision to life with elegance and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase mb-6 text-[#c9a96e] font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-cream/80 hover:text-[#c9a96e] transition-all duration-300 text-sm group inline-flex items-center gap-2">
                  <span className="w-0 h-[2px] bg-[#c9a96e] group-hover:w-4 transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/80 hover:text-[#c9a96e] transition-all duration-300 text-sm group inline-flex items-center gap-2">
                  <span className="w-0 h-[2px] bg-[#c9a96e] group-hover:w-4 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-cream/80 hover:text-[#c9a96e] transition-all duration-300 text-sm group inline-flex items-center gap-2">
                  <span className="w-0 h-[2px] bg-[#c9a96e] group-hover:w-4 transition-all duration-300"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-cream/80 hover:text-[#c9a96e] transition-all duration-300 text-sm group inline-flex items-center gap-2">
                  <span className="w-0 h-[2px] bg-[#c9a96e] group-hover:w-4 transition-all duration-300"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-[#c9a96e] transition-all duration-300 text-sm group inline-flex items-center gap-2">
                  <span className="w-0 h-[2px] bg-[#c9a96e] group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase mb-6 text-[#c9a96e] font-semibold">Get In Touch</h3>
            <ul className="space-y-4 text-cream/80 text-sm">
              <li>
                <a href="mailto:yasminebatemanpr@gmail.com" className="hover:text-[#c9a96e] transition-all duration-300 group inline-flex items-center gap-2">
                  <span className="w-0 h-[2px] bg-[#c9a96e] group-hover:w-4 transition-all duration-300"></span>
                  yasminebatemanpr@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+16787615526" className="hover:text-[#c9a96e] transition-all duration-300 group inline-flex items-center gap-2">
                  <span className="w-0 h-[2px] bg-[#c9a96e] group-hover:w-4 transition-all duration-300"></span>
                  (678) 761-5526
                </a>
              </li>
              <li className="pt-4 flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all duration-300 group" aria-label="Instagram">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all duration-300 group" aria-label="Facebook">
                  <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:yasminebatemanpr@gmail.com" 
                   className="w-10 h-10 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all duration-300 group" aria-label="Email">
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 text-center relative">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e]/50 to-transparent mb-8"></div>
          <p className="text-cream/60 text-sm tracking-wide">
            &copy; {currentYear} Yasmine Bateman Events. All rights reserved.
          </p>
          <p className="text-[#c9a96e]/40 text-xs mt-2 tracking-widest">CRAFTED WITH PASSION</p>
        </div>
      </div>
    </footer>
  );
}

