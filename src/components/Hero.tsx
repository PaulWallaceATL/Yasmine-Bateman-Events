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

const highlightCards = [
  { label: 'Studio Location', value: 'Atlanta, Georgia' },
  { label: 'Response Time', value: 'Within 24 hours' },
  { label: 'Platforms', value: 'YouTube • Instagram • TikTok' },
];

export default function Hero({
  title,
  subtitle,
  imageSrc = '/api/placeholder/1920/1080',
  imageAlt = 'Hero image',
  height = 'full',
  overlay = true,
}: HeroProps) {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  return (
    <section className={`relative isolate overflow-hidden ${heightClasses[height]}`}>
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/85" aria-hidden />
      )}

      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,176,124,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(216,143,124,0.2),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-between px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl text-white">
            <p className="text-xs uppercase tracking-[0.5em] text-white/70">Yasmine Bateman Studio</p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-4 text-lg text-white/80 md:text-xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          <div className="grid gap-3 text-sm text-white/80">
            {highlightCards.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur"
              >
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">{item.label}</p>
                <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 text-xs uppercase tracking-[0.4em] text-white/70"
        >
          <span>Atlanta • Global Partnerships</span>
          <span>{imageAlt}</span>
        </motion.div>
      </div>
    </section>
  );
}

