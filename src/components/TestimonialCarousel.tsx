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
    quote: "Yasmine orchestrated our company's annual gala with exceptional precision and creativity. Every detail was flawless, from the ambient lighting to the seamless flow. She exceeded our highest expectations.",
    author: "Marcus Hamilton",
    role: "CEO, Hamilton Industries",
    initial: "M"
  },
  {
    quote: "Working with Yasmine Bateman Events was the best decision we made for our corporate gala. Professional, creative, and flawlessly executed. Our clients were thoroughly impressed.",
    author: "Jennifer Chen",
    role: "Corporate Event, September 2024",
    initial: "J"
  },
  {
    quote: "The attention to detail was extraordinary. Yasmine took our vision for the product launch and created an immersive experience that perfectly captured our brand. Our stakeholders were thoroughly impressed.",
    author: "Victoria Sterling",
    role: "VP Marketing, Sterling Tech",
    initial: "V"
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Slower rotation - 10 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: {
      opacity: 0
    },
    center: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  return (
    <div className="relative mx-auto max-w-4xl">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="rounded-3xl border border-gold/15 bg-white/90 p-10 shadow-xl"
        >
          <div className="text-6xl text-gold/60">“</div>
          <p className="mt-4 text-xl text-charcoal/80 md:text-2xl">
            {testimonials[currentIndex].quote}
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-lg font-semibold text-gold">
              {testimonials[currentIndex].initial}
            </div>
            <div>
              <p className="text-lg font-semibold text-navy">{testimonials[currentIndex].author}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => paginate(-1)}
          className="rounded-full border border-gold/30 p-3 text-gold transition hover:bg-gold/10"
          aria-label="Previous testimonial"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
            onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-gold' : 'w-2.5 bg-gold/30 hover:bg-gold/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="rounded-full border border-gold/30 p-3 text-gold transition hover:bg-gold/10"
          aria-label="Next testimonial"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
}

