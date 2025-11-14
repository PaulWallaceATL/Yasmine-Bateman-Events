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
    src: 'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=1200&q=80',
    title: 'Midtown Skyline Gala',
    location: 'Atlanta, GA',
    badge: 'Corporate Gala',
    height: 'h-72',
    priority: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    title: 'BeltLine Sunset Mixer',
    location: 'Atlanta BeltLine',
    badge: 'City Series',
    height: 'h-96',
  },
  {
    src: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80',
    title: 'Buckhead Leadership Summit',
    location: 'Buckhead, Atlanta',
    badge: 'Executive Summit',
    height: 'h-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80',
    title: 'Savannah Riverfront Showcase',
    location: 'Savannah, GA',
    badge: 'Statewide Tour',
    height: 'h-80',
  },
];

const statHighlights: Array<{
  label: string;
  value: number;
  suffix: string;
  subtext: string;
  decimals?: number;
}> = [
  { label: 'Regional Productions', value: 520, suffix: '+', subtext: 'Corporate galas, summits, and civic showcases across Georgia since 2015', decimals: 0 },
  { label: 'Atlanta Footprint', value: 18, suffix: '', subtext: 'Neighborhoods activated from Downtown to Alpharetta + Savannah extensions', decimals: 0 },
  { label: 'Local Partners', value: 140, suffix: '+', subtext: 'Atlanta caterers, stylists, AV houses, and cultural collaborators on-call', decimals: 0 },
];

const serviceSuites = [
  {
    title: 'Full-Service Planning & Production',
    description: 'Atlanta metro strategy, budgeting, vendor management, and run-of-show leadership for corporate experiences.',
    stat: 'End-to-end direction',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    tags: ['Budget stewardship', 'Creative direction'],
  },
];

const galleryShots = [
  {
    title: 'Skyline Preview Party',
    location: 'Ponce City Market',
    category: 'Metro Launch',
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-2',
  },
  {
    title: 'Executive Dinner',
    location: 'Midtown Atlanta',
    category: 'Corporate',
    src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-1',
  },
  {
    title: 'Editorial Install',
    location: 'Old Fourth Ward',
    category: 'Design Lab',
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-2',
  },
  {
    title: 'Modern Tablescape',
    location: 'Inman Park',
    category: 'Social Experience',
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-1',
  },
  {
    title: 'Studio Light Suite',
    location: 'Castleberry Hill',
    category: 'Content Capture',
    src: 'https://images.unsplash.com/photo-1513077202514-b33f6439a5ba?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-1',
  },
  {
    title: 'City Soirée',
    location: 'Savannah Historic District',
    category: 'Client Appreciation',
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
    span: 'row-span-1',
  },
];

const servicePillars = [
  {
    title: 'Regional Celebrations',
    highlight: 'Full planning, production, and guest experience management for milestone celebrations.',
    metric: '12-18 month roadmap',
    bullets: [
      'RSVP + guest comms portal',
      'Design studies + floral labs',
      'Weekend timeline management',
    ],
    color: 'from-gold/15 via-transparent to-rose-gold/10',
  },
  {
    title: 'Corporate & Brand',
    highlight: 'Executive summits, client entertainment, and showcases produced with measurable rigor.',
    metric: 'Run-of-show ownership',
    bullets: [
      'Stage, lighting, & AV direction',
      'Sponsorship + partner sourcing',
      'VIP hosting teams',
    ],
    color: 'from-rose-gold/15 via-transparent to-gold/10',
  },
  {
    title: 'Production & Technical',
    highlight: 'On-site stage management, cue-to-cue scripting, and vendor strike coordination.',
    metric: 'Dedicated production crew',
    bullets: [
      'Stage calling & show flow',
      'Cue sheets & runbooks',
      'Strike + load-out oversight',
    ],
    color: 'from-gold/10 via-transparent to-rose-gold/5',
  },
];

const partnerLogos = ['Four Seasons', 'Ritz-Carlton', 'Swan House', 'Moët Hennessy', 'Porsche', 'Chanel Beauté', 'Cartier'];

export default function Home() {
  return (
    <main className="bg-white text-charcoal">
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
                Luxury Event Studio • Atlanta
              </p>
              <h1 className="text-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
                Immersive celebrations designed with editorial precision and production care.
              </h1>
              <p className="text-lg md:text-xl text-cream/80 max-w-2xl">
                We plan multi-day summits, civic programs, and brand dinners that feel effortless for guests and
                measurable for hosts. Every touchpoint—from save-the-date to farewell brunch—is considered.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-navy font-sans text-xs tracking-[0.3em] uppercase shadow-xl hover:-translate-y-1 transition"
                >
                  Plan your event
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/40 text-white font-sans text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition"
                >
                  Explore services
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
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-4">Signature Services</p>
          <h2 className="text-display text-4xl md:text-5xl mb-4">
            From first inquiry to last toast, every service tier is bespoke.
          </h2>
          <p className="text-lg text-charcoal/70">
            Planning, production, and storytelling live under one roof so you can stay focused on the guests.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {serviceSuites.map((format, index) => (
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
            <p className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-3">Recent environments</p>
            <h2 className="text-display text-4xl md:text-5xl leading-tight">
              Atlanta metro galas, summits, and neighborhood showcases in motion.
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
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-4">Service blueprints</p>
          <h2 className="text-display text-4xl md:text-5xl mb-4">
            Each celebration is anchored by planning, design, and production care.
          </h2>
          <p className="text-charcoal/70">
            These pillars keep logistics calm, aesthetics cohesive, and guests cared for—whether it’s 50 guests or 500.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {servicePillars.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-[28px] border border-charcoal/10 bg-white shadow-lg p-8 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-60 pointer-events-none`} />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60 mb-3">{card.metric}</p>
                <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                <p className="text-charcoal/70">{card.highlight}</p>
                <ul className="mt-6 space-y-2 text-sm text-charcoal/80">
                  {card.bullets.map((item) => (
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
            <p className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-4">Proof of experience</p>
            <h2 className="text-display text-4xl md:text-5xl mb-4">Hosts trust us with their most meaningful gatherings.</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              From black-tie galas to board retreats, we stay until every last candle is out and every recap is delivered.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </Section>

      <Section background="white" padding="large">
        <div className="relative overflow-hidden rounded-[40px] border border-charcoal/10 bg-gradient-to-br from-rose-gold/20 via-pearl to-gold/15 p-12 md:p-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60 mb-4">Next steps</p>
            <h2 className="text-display text-4xl md:text-5xl mb-6">
              Let’s plan an event experience your guests will never forget.
            </h2>
            <p className="text-lg text-charcoal/70 mb-10">
              Share your date, guest count, and wish list—we’ll build a planning roadmap, introduce key partners, and stay
              beside you through the final farewell.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-navy text-white text-xs tracking-[0.3em] uppercase shadow-2xl hover:-translate-y-1 transition"
              >
                Plan your event
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
