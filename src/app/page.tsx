'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Section from '@/components/Section';
import AnimatedCounter from '@/components/AnimatedCounter';
import ParticlesBackground from '@/components/ParticlesBackground';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const heroCollage = [
  {
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1100&q=80',
    title: 'Editorial Set, 7AM',
    location: 'Los Angeles',
    badge: 'Campaign BTS',
    height: 'h-72',
    priority: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80',
    title: 'Analog Diaries',
    location: 'Paris',
    badge: 'Film Story',
    height: 'h-96',
  },
  {
    src: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1100&q=80',
    title: 'Live Event Recap',
    location: 'Atlanta',
    badge: 'City Light',
    height: 'h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1100&q=80',
    title: 'Product Spotlight',
    location: 'Brooklyn',
    badge: 'Content Drop',
    height: 'h-80',
  },
];

const statHighlights = [
  { label: 'Community', value: 320, suffix: 'K+', subtext: 'Followers across YouTube, Instagram & TikTok' },
  { label: 'Campaign Reach', value: 48, suffix: 'M+', subtext: 'Organic impressions delivered in 2024' },
  { label: 'Avg Watch Time', value: 6.4, suffix: ' min', subtext: 'Per long-form video', decimals: 1 },
];

const signatureFormats = [
  {
    title: 'Editorial Diaries',
    description: 'Weekly docu-style stories blending fashion, beauty & culture with tactile film textures.',
    stat: '72% completion rate',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Analog film', 'Narrative voice'],
  },
  {
    title: 'City Immersions',
    description: 'On-location shoots that pair local gems with branded experiences in Atlanta, NYC & LA.',
    stat: '4.8M organic views',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    tags: ['Travel', 'Lifestyle'],
  },
  {
    title: 'Live Event Capsules',
    description: 'Same-day reels + mini docs that bring launches, dinners, and summits to life.',
    stat: '92% save rate',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    tags: ['Experiential', 'IRL to URL'],
  },
];

const galleryShots = [
  {
    title: 'Backstage Bloom',
    location: 'SoHo Studio',
    category: 'Beauty Drop',
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-2',
  },
  {
    title: 'Golden Hour Panel',
    location: 'Atlanta',
    category: 'Event Recap',
    src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-1',
  },
  {
    title: 'Editorial Lines',
    location: 'Brooklyn Loft',
    category: 'Campaign',
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-2',
  },
  {
    title: 'Modern Tablescape',
    location: 'Nashville',
    category: 'Hosting',
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-1',
  },
  {
    title: 'Studio Light',
    location: 'NYC',
    category: 'Product Story',
    src: 'https://images.unsplash.com/photo-1513077202514-b33f6439a5ba?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-1',
  },
  {
    title: 'City Soirée',
    location: 'Chicago',
    category: 'Partnership',
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-1',
  },
];

const platformBreakdown = [
  {
    platform: 'YouTube',
    followers: '130K',
    format: '8–12 min narrative films',
    highlights: ['72% completion', 'Average 6.4 min watch time'],
    color: 'from-rose-gold/15 via-transparent to-gold/10',
  },
  {
    platform: 'Instagram',
    followers: '110K',
    format: 'Editorial carousels & reels',
    highlights: ['6.8% engagement', 'Saves are 3× industry avg'],
    color: 'from-gold/15 via-transparent to-rose-gold/10',
  },
  {
    platform: 'TikTok',
    followers: '93K',
    format: 'Fast-cut POV & voiceovers',
    highlights: ['7.5% engagement', 'Trending audio lab'],
    color: 'from-rose-gold/10 via-transparent to-gold/5',
  },
];

const partnerLogos = ['Sephora', 'SKIMS', 'Madewell', 'Glossier', 'Nike', 'Away', 'Glow Recipe'];

export default function Home() {
  return (
    <main className="bg-pearl text-charcoal">
      <section className="relative overflow-hidden bg-navy text-cream pt-32 pb-24">
        <div className="absolute inset-0">
          <ParticlesBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-transparent to-rose-gold/25 mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid gap-14 lg:grid-cols-[1.05fr,0.95fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.5em] text-cream/70 mb-6">
                Content Director • Atlanta
              </p>
              <h1 className="text-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
                Cinematic content that feels like a journal entry and performs like a campaign.
              </h1>
              <p className="text-lg md:text-xl text-cream/80 max-w-2xl">
                I build immersive visual worlds for lifestyle, beauty, and fashion brands—pairing thoughtful
                storytelling with measurable performance. Every brief becomes a lived-in narrative across video,
                stills, and live experiences.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-navy font-sans text-xs tracking-[0.3em] uppercase shadow-xl hover:-translate-y-1 transition"
                >
                  Start a brief
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/40 text-white font-sans text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition"
                >
                  Watch the reel
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {statHighlights.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                    </div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cream/80">{stat.label}</p>
                    <p className="text-sm text-cream/65 mt-2 leading-relaxed">{stat.subtext}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {heroCollage.map((frame, index) => (
                <motion.div
                  key={frame.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className={`relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-md ${frame.height}`}
                >
                  <Image
                    src={frame.src}
                    alt={frame.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={frame.priority}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-white/70">
                      {frame.badge}
                    </span>
                    <div>
                      <p className="text-sm text-white/70">{frame.location}</p>
                      <p className="text-lg font-semibold">{frame.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-12 text-[11px] uppercase tracking-[0.5em] text-white/60">
            {partnerLogos.map((partner) => (
              <span key={partner} className="px-4 py-2 border border-white/25 rounded-full">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section background="pearl" padding="large">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-4">Signature Formats</p>
          <h2 className="text-display text-4xl md:text-5xl mb-4">
            Content systems that travel from social feeds to live experiences.
          </h2>
          <p className="text-lg text-charcoal/70">
            Each format is modular, meaning we capture long-form hero assets, cutdowns, stills, and interactive
            moments in one shoot day.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {signatureFormats.map((format, index) => (
            <motion.div
              key={format.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[32px] border border-gold/15 bg-white shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={format.image}
                  alt={format.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                <div className="absolute bottom-6 left-6 text-white uppercase tracking-[0.4em] text-xs">
                  {format.stat}
                </div>
              </div>

              <div className="p-8 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{format.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{format.description}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {format.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-pearl text-xs tracking-[0.3em] uppercase text-charcoal/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="beige" padding="large">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-3">Visual journal</p>
            <h2 className="text-display text-4xl md:text-5xl leading-tight">
              Scene-stealing imagery built for scroll-stopping carousels.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-charcoal/15 text-xs tracking-[0.3em] uppercase hover:-translate-y-1 transition"
          >
            View full archive
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[260px]">
          {galleryShots.map((shot, index) => (
            <motion.div
              key={shot.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-[32px] border border-charcoal/10 bg-white ${shot.span}`}
            >
              <Image
                src={shot.src}
                alt={shot.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">{shot.category}</p>
                <h3 className="text-2xl font-semibold">{shot.title}</h3>
                <p className="text-sm text-white/70">{shot.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="white" padding="large">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-4">Platform deep dive</p>
          <h2 className="text-display text-4xl md:text-5xl mb-4">
            One brief, tailored executions for every channel.
          </h2>
          <p className="text-charcoal/70">
            From long-form storytelling to short-form loops, we build narratives that respect each platform’s native rhythm.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {platformBreakdown.map((card, index) => (
            <motion.div
              key={card.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-[28px] border border-charcoal/10 bg-white shadow-lg p-8 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-60 pointer-events-none`} />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60 mb-3">{card.platform}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold">{card.followers}</span>
                  <span className="text-sm uppercase tracking-[0.4em]">Followers</span>
                </div>
                <p className="mt-4 text-charcoal/70">{card.format}</p>
                <ul className="mt-6 space-y-2 text-sm text-charcoal/80">
                  {card.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-charcoal/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="champagne" padding="large" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-20 right-0 w-72 h-72 bg-rose-gold/30 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-gold/30 blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-4">Proof of impact</p>
            <h2 className="text-display text-4xl md:text-5xl mb-4">Brands come back because the work converts.</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              From national retailers to boutique launches, collaborations include detailed reporting and creative iteration.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </Section>

      <Section background="white" padding="large">
        <div className="relative overflow-hidden rounded-[40px] border border-charcoal/10 bg-gradient-to-br from-rose-gold/20 via-pearl to-gold/15 p-12 md:p-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60 mb-4">Next launch</p>
            <h2 className="text-display text-4xl md:text-5xl mb-6">
              Let’s design a content ecosystem your audience wants to live in.
            </h2>
            <p className="text-lg text-charcoal/70 mb-10">
              Strategy, production, and performance insights under one roof. Share the creative brief or invite me into the
              ideation room—we’ll map stories that feel human and deliver metrics your team can celebrate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-navy text-white text-xs tracking-[0.3em] uppercase shadow-2xl hover:-translate-y-1 transition"
              >
                Plan a campaign
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-navy/30 text-xs tracking-[0.3em] uppercase hover:-translate-y-1 transition"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
