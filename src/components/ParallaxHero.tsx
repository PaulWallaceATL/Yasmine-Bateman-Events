'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  height?: 'full' | 'large' | 'medium';
  overlay?: boolean;
}

export default function ParallaxHero({ 
  title, 
  subtitle, 
  imageSrc = '/api/placeholder/1920/1080',
  imageAlt = 'Hero image',
  height = 'full',
  overlay = true 
}: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const heightClasses = {
    full: 'h-screen',
    large: 'h-[80vh]',
    medium: 'h-[60vh]'
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${heightClasses[height]} w-full overflow-hidden`}
    >
      {/* Parallax Background Image */}
      <div 
        ref={imageRef}
        role="img"
        aria-label={imageAlt}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/40 to-navy/70"></div>
        )}
        {/* Luxury shimmer overlay */}
        <div className="absolute inset-0 shimmer opacity-20"></div>
      </div>

      {/* Decorative Luxury Elements - Removed seizure-inducing floating animation */}
      <div className="absolute top-16 left-8 w-40 h-40 border-2 border-rose-gold/20 rotate-45 opacity-40"></div>
      <div className="absolute bottom-24 right-12 w-32 h-32 border border-rose-gold/30 rotate-12 opacity-50"></div>
      
      {/* Elegant corner ornaments */}
      <div className="absolute top-8 right-8 text-rose-gold/40 text-6xl">✦</div>
      <div className="absolute bottom-8 left-8 text-rose-gold/40 text-6xl">✦</div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6 z-10">
        <div className="max-w-5xl">
          {/* Top Ornamental Divider */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '150px', opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mx-auto mb-10 relative"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-gold text-sm">◆</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 leading-tight text-shadow-elegant"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-elegant text-xl md:text-3xl lg:text-4xl text-cream/95 max-w-4xl mx-auto leading-relaxed tracking-wide font-light">
                {subtitle}
              </p>
            </motion.div>
          )}

          {/* Bottom Ornamental Divider */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '150px', opacity: 1 }}
            transition={{ duration: 1.8, delay: 2, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mx-auto mt-10 relative"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-gold text-sm">◆</span>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <span className="text-white/90 text-xs tracking-[0.3em] uppercase mb-3 font-sans">Scroll</span>
          <div className="w-6 h-10 border-2 border-rose-gold/60 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-rose-gold rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}


