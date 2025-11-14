'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingStatements = [
  'Storyboard in progress',
  'Securing creative partners',
  'Dialing in guest flow',
  'Styling the final details',
];

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statementIndex, setStatementIndex] = useState(0);
  const [sparkles] = useState(() =>
    Array.from({ length: 6 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) return undefined;
    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 4, 100));
    }, 120);
    return () => clearInterval(progressTimer);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) return undefined;
    const statementTimer = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % loadingStatements.length);
    }, 700);
    return () => clearInterval(statementTimer);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-navy via-[#060918] to-navy"
        >
          <div className="relative flex flex-col items-center gap-10 px-6 text-center text-white">
            <div className="relative h-40 w-40">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-gold/50 to-gold/40 blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-3 rounded-[36px] border border-white/15 bg-white/5 backdrop-blur"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute inset-6 rounded-[28px] border border-white/30"
                animate={{ rotate: [0, 6, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-2xl font-semibold tracking-[0.6em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                YB
              </motion.div>
              {sparkles.map(({ top, left }, i) => (
                <motion.div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-white/70"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                  }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
                />
              ))}
            </div>

            <div className="space-y-4 max-w-sm">
              <motion.p
                key={statementIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm uppercase tracking-[0.4em] text-cream/70"
              >
                {loadingStatements[statementIndex]}
              </motion.p>
              <div className="h-1 w-60 overflow-hidden rounded-full bg-white/10">
                <motion.span
                  className="block h-full bg-gradient-to-r from-rose-gold to-gold"
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

