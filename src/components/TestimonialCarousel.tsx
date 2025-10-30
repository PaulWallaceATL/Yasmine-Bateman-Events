'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Yasmine transformed our wedding into an absolute dream. Every detail was perfect, from the flowers to the lighting. She understood our vision completely and brought it to life in ways we couldn't have imagined.",
    author: "Sarah & Michael",
    role: "June 2024 Wedding",
    initial: "S"
  },
  {
    quote: "Working with Yasmine Bateman Events was the best decision we made for our corporate gala. Professional, creative, and flawlessly executed. Our clients were thoroughly impressed.",
    author: "Jennifer Chen",
    role: "Corporate Event, September 2024",
    initial: "J"
  },
  {
    quote: "The attention to detail was extraordinary. Yasmine took our vague ideas and created a stunning celebration that exceeded all expectations. Our guests are still talking about it!",
    author: "David & Emma Rodriguez",
    role: "Anniversary Celebration, August 2024",
    initial: "D"
  },
  {
    quote: "An absolute master of her craft. Yasmine's ability to balance elegance with warmth made our event feel both luxurious and intimate. Truly a once-in-a-lifetime experience.",
    author: "Alexandra Thompson",
    role: "Milestone Birthday, October 2024",
    initial: "A"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="luxury-card bg-white p-12 shadow-2xl"
        >
          <div className="text-gold text-7xl mb-6 font-serif leading-none">"</div>
          <p className="text-elegant text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-8 italic">
            {testimonials[currentIndex].quote}
          </p>
          <div className="h-[2px] bg-gradient-to-r from-gold/50 via-gold to-gold/50 mb-6"></div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-white text-2xl font-serif">
              {testimonials[currentIndex].initial}
            </div>
            <div>
              <p className="text-display text-xl text-navy font-semibold">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-charcoal/60 tracking-wide">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? 'w-12 h-3 bg-gradient-gold rounded-full'
                : 'w-3 h-3 bg-gold/30 rounded-full hover:bg-gold/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

