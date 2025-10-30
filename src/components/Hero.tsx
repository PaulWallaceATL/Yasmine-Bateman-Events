'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  height?: 'full' | 'large' | 'medium';
  overlay?: boolean;
}

export default function Hero({ 
  title, 
  subtitle, 
  imageSrc = '/api/placeholder/1920/1080',
  imageAlt = 'Hero image',
  height = 'full',
  overlay = true 
}: HeroProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[80vh]',
    medium: 'h-[60vh]'
  };

  return (
    <div className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      {/* Background Image with Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient overlay for text readability */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/40 to-navy/70"></div>
        )}
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 shimmer opacity-20"></div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45 opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-gold/20 rotate-12 opacity-30"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6 z-10">
        <div className="max-w-5xl">
          {/* Ornamental Top Divider */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '120px', opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          ></motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight text-shadow-elegant"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-elegant text-xl md:text-2xl lg:text-3xl text-cream/95 max-w-3xl mx-auto leading-relaxed tracking-wide font-light">
                {subtitle}
              </p>
            </motion.div>
          )}

          {/* Ornamental Bottom Divider */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '120px', opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8"
          ></motion.div>
        </div>
      </div>

      {/* Scroll Indicator with Enhanced Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <span className="text-white/80 text-xs tracking-widest uppercase mb-2 font-sans">Scroll</span>
          <svg className="w-6 h-6 text-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

