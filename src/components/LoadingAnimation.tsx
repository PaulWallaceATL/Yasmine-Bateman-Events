'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const [sparkles] = useState(() =>
    Array.from({ length: 6 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#ffc0cb] via-[#ffb6c1] to-[#ff69b4] flex items-center justify-center"
        >
          {/* Bow SVG Animation */}
          <div className="relative">
            <svg 
              width="200" 
              height="200" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              {/* Gift Box */}
              <motion.rect
                x="60"
                y="90"
                width="80"
                height="80"
                fill="#1a2332"
                rx="4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              
              {/* Vertical Ribbon */}
              <motion.rect
                x="95"
                y="90"
                width="10"
                height="80"
                fill="#000000"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ transformOrigin: 'center' }}
              />
              
              {/* Horizontal Ribbon */}
              <motion.rect
                x="60"
                y="125"
                width="80"
                height="10"
                fill="#000000"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ transformOrigin: 'center' }}
              />

              {/* Left Bow Loop - Unties outward */}
              <motion.path
                d="M 95 90 Q 60 60, 50 90 Q 60 100, 95 90"
                fill="#000000"
                stroke="#000000"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0, x: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 1, 0],
                  x: [0, 0, 0, -30],
                  y: [0, 0, 0, -20]
                }}
                transition={{ 
                  pathLength: { duration: 0.8, delay: 0.8 },
                  opacity: { duration: 1.5, delay: 0.8, times: [0, 0.3, 0.8, 1] },
                  x: { duration: 1, delay: 1.8 },
                  y: { duration: 1, delay: 1.8 }
                }}
              />

              {/* Right Bow Loop - Unties outward */}
              <motion.path
                d="M 105 90 Q 140 60, 150 90 Q 140 100, 105 90"
                fill="#000000"
                stroke="#000000"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0, x: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 1, 0],
                  x: [0, 0, 0, 30],
                  y: [0, 0, 0, -20]
                }}
                transition={{ 
                  pathLength: { duration: 0.8, delay: 0.8 },
                  opacity: { duration: 1.5, delay: 0.8, times: [0, 0.3, 0.8, 1] },
                  x: { duration: 1, delay: 1.8 },
                  y: { duration: 1, delay: 1.8 }
                }}
              />

              {/* Left Ribbon Tail - Falls down */}
              <motion.path
                d="M 90 90 L 70 110 L 75 115"
                fill="#000000"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 1, 0],
                  y: [0, 0, 0, 30],
                  rotate: [0, 0, 0, -15]
                }}
                transition={{ 
                  pathLength: { duration: 0.8, delay: 0.9 },
                  opacity: { duration: 1.5, delay: 0.9, times: [0, 0.3, 0.8, 1] },
                  y: { duration: 1, delay: 1.8 },
                  rotate: { duration: 1, delay: 1.8 }
                }}
                style={{ transformOrigin: '80px 100px' }}
              />

              {/* Right Ribbon Tail - Falls down */}
              <motion.path
                d="M 110 90 L 130 110 L 125 115"
                fill="#000000"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 1, 0],
                  y: [0, 0, 0, 30],
                  rotate: [0, 0, 0, 15]
                }}
                transition={{ 
                  pathLength: { duration: 0.8, delay: 0.9 },
                  opacity: { duration: 1.5, delay: 0.9, times: [0, 0.3, 0.8, 1] },
                  y: { duration: 1, delay: 1.8 },
                  rotate: { duration: 1, delay: 1.8 }
                }}
                style={{ transformOrigin: '120px 100px' }}
              />

              {/* Center Bow Knot */}
              <motion.circle
                cx="100"
                cy="90"
                r="8"
                fill="#000000"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  scale: { duration: 1.5, delay: 1.2, times: [0, 0.3, 0.8, 1] },
                  opacity: { duration: 1.5, delay: 1.2, times: [0, 0.3, 0.8, 1] }
                }}
              />
            </svg>

            {/* Sparkle Effects */}
            {sparkles.map(({ top, left }, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 1 + i * 0.2,
                  repeat: 0,
                }}
              />
            ))}
          </div>
          
          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
          >
            <p className="font-display text-lg tracking-[0.3em] uppercase text-[#1a2332] mb-2">
              Opening Your Experience
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
              className="h-1 w-48 bg-gradient-to-r from-transparent via-[#1a2332] to-transparent"
              style={{ transformOrigin: 'center' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

