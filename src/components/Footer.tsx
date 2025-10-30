import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

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
            <h2 className="text-4xl font-bold mb-4">
              Yasmine Bateman
              <span className="block text-sm font-light tracking-[0.2em] uppercase mt-2 text-[#c9a96e]">Content Creator</span>
            </h2>
            <div className="h-1 w-24 gradient-gold mb-6"></div>
            <p className="text-lg text-cream/80 leading-relaxed max-w-md">
              Creating authentic lifestyle content and brand partnerships. 
              Based in Atlanta, Georgia with a community of 300K+ engaged followers.
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
              <li className="pt-4 flex space-x-3">
                <a href="https://www.instagram.com/yasminebateman/" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all duration-300 group" aria-label="Instagram">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.youtube.com/@yasminebateman" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all duration-300 group" aria-label="YouTube">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@yasminebateman" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all duration-300 group" aria-label="TikTok">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 text-center relative">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e]/50 to-transparent mb-8"></div>
          <p className="text-cream/60 text-sm tracking-wide">
            &copy; {currentYear} Yasmine Bateman. All rights reserved.
          </p>
          <p className="text-[#c9a96e]/40 text-xs mt-2">Atlanta, Georgia</p>
        </div>
      </div>
    </footer>
  );
}

