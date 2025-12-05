'use client';

import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import AnimatedCounter from '@/components/AnimatedCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const statHighlights: Array<{
  label: string;
  value: number;
  suffix: string;
  subtext: string;
  decimals?: number;
}> = [
  {
    label: 'Regional Productions',
    value: 52,
    suffix: '',
    subtext: 'Corporate galas, summits, and civic showcases across Georgia since 2015',
    decimals: 0,
  },
  {
    label: 'Atlanta Footprint',
    value: 18,
    suffix: '',
    subtext: 'Neighborhoods activated from Downtown to Alpharetta + Savannah extensions',
    decimals: 0,
  },
  {
    label: 'Local Partners',
    value: 14,
    suffix: '',
    subtext: 'Atlanta caterers, stylists, AV houses, and cultural collaborators on-call',
    decimals: 0,
  },
];

const serviceSuites = [
  {
    title: 'Full-Service Planning & Production',
    description:
      'Atlanta metro strategy, budgeting, vendor management, and run-of-show leadership for corporate experiences.',
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
  },
  {
    title: 'Executive Dinner',
    location: 'Midtown Atlanta',
    category: 'Corporate',
    src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Editorial Install',
    location: 'Old Fourth Ward',
    category: 'Design Lab',
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Modern Tablescape',
    location: 'Inman Park',
    category: 'Social Experience',
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Studio Light Suite',
    location: 'Castleberry Hill',
    category: 'Content Capture',
    src: 'https://images.unsplash.com/photo-1513077202514-b33f6439a5ba?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'City Soirée',
    location: 'Savannah Historic District',
    category: 'Client Appreciation',
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
  },
];

const servicePillars = [
  {
    title: 'Regional Celebrations',
    highlight: 'Full planning, production, and guest experience management for milestone celebrations.',
    metric: '12-18 month roadmap',
    bullets: ['RSVP + guest comms portal', 'Design studies + floral labs', 'Weekend timeline management'],
  },
  {
    title: 'Corporate & Brand',
    highlight: 'Executive summits, client entertainment, and showcases produced with measurable rigor.',
    metric: 'Run-of-show ownership',
    bullets: ['Stage, lighting, & AV direction', 'Sponsorship + partner sourcing', 'VIP hosting teams'],
  },
  {
    title: 'Production & Technical',
    highlight: 'On-site stage management, cue-to-cue scripting, and vendor strike coordination.',
    metric: 'Dedicated production crew',
    bullets: ['Stage calling & show flow', 'Cue sheets & runbooks', 'Strike + load-out oversight'],
  },
];

const hostPromises = [
  {
    title: '24-hour replies',
    description: 'Every inquiry receives a tailored response, timeline outline, and curated inspiration deck.',
    meta: 'Fast, human communication',
  },
  {
    title: 'Mobile-friendly planning',
    description: 'Review timelines, renderings, and run-of-show documents directly from your phone.',
    meta: 'Built for busy hosts',
  },
  {
    title: 'On-site calm',
    description: 'Our team owns vendor calls, cue-to-cue, and guest flow so you can actually enjoy the event.',
    meta: 'White-glove execution',
  },
];

const journeyMoments = [
  {
    label: '01',
    title: 'Listen & align',
    detail: 'Share your date, guest count, and non-negotiables. Receive a planning roadmap within 48 hours.',
    deliverable: 'Discovery session + vision deck',
  },
  {
    label: '02',
    title: 'Design & source',
    detail: 'We translate mood boards into renders, budgets, and partner lists designed for your venue and audience.',
    deliverable: 'Design treatments + partner shortlist',
  },
  {
    label: '03',
    title: 'Produce & communicate',
    detail: 'Weekly updates, mobile hub for approvals, and vendor direction so you only sign off when it feels right.',
    deliverable: 'Host portal + vendor coordination',
  },
  {
    label: '04',
    title: 'Celebrate & recap',
    detail: 'Day-of run-of-show, guest hospitality, and post-event recap capturing metrics and gallery selects.',
    deliverable: 'On-site lead + recap dossier',
  },
];

const partnerLogos = [
  'Four Seasons',
  'Ritz-Carlton',
  'Swan House',
  'Moët Hennessy',
  'Porsche',
  'Chanel Beauté',
  'Cartier',
];

export default function Home() {
  return (
    <main className="bg-pearl text-charcoal">
      {/* Hero Section - World Class Immersive */}
      <section className="relative overflow-hidden bg-pearl text-charcoal pt-32 pb-28 lg:pt-40 lg:pb-36">
        {/* Cinematic Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff7f0] via-[#ffe9f2] to-[#fff7f0]" />
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(242,185,200,0.35),transparent_50%),radial-gradient(circle_at_85%_10%,rgba(243,207,214,0.3),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(242,168,189,0.25),transparent_40%)]" />
        </div>
        
        {/* Animated Accent Lines */}
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Desktop: Side-by-side layout | Mobile: Stack portrait under text */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:gap-16 items-center">
            {/* Left Column: Hero Copy + CTAs + Stats */}
            <div className="space-y-10">
              {/* Eyebrow with subtle glow */}
              <div className="inline-flex items-center gap-3 rounded-full border border-rose-gold/40 bg-white/80 px-5 py-2.5 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                <p className="text-[10px] uppercase tracking-[0.5em] text-charcoal/70 font-medium">
                  Luxury Event Studio • Atlanta
                </p>
              </div>

              {/* Hero Headline */}
              <h1 className="text-5xl font-bold leading-[1.1] text-charcoal md:text-6xl lg:text-7xl tracking-tight">
                Immersive celebrations designed with editorial precision and production care.
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-charcoal/80 md:text-xl leading-relaxed max-w-2xl">
                We plan multi-day summits, civic programs, and brand dinners that feel effortless for guests and
                measurable for hosts. Every touchpoint—from save-the-date to farewell brunch—is considered.
              </p>

              {/* CTA Buttons - Enhanced */}
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-charcoal shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(243,184,198,0.35)] sm:w-auto relative overflow-hidden border border-rose-gold/50"
                >
                  <span className="relative z-10">Plan your event</span>
                  <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/25 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-rose-gold/60 bg-rose-gold/15 px-8 py-5 text-xs font-bold uppercase tracking-[0.3em] text-charcoal backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-gold hover:bg-rose-gold/25 sm:w-auto"
                >
                  Explore services
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Stats Cards - Elevated Glass Design */}
              <div className="grid gap-5 sm:grid-cols-3">
                {statHighlights.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-[28px] border border-rose-gold/30 bg-white/80 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_20px_60px_rgba(243,184,198,0.35)]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <p className="relative text-4xl font-bold text-gold drop-shadow-lg md:text-5xl">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                    </p>
                    <p className="relative mt-3 text-[10px] uppercase tracking-[0.4em] text-charcoal/70 font-semibold">
                      {stat.label}
                    </p>
                    <p className="relative mt-3 text-sm leading-relaxed text-charcoal/70">{stat.subtext}</p>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-gold/25 to-transparent rounded-bl-3xl" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Yasmine Portrait - Desktop visible, Mobile hidden then shown below */}
            <div className="relative h-[580px] w-full overflow-hidden rounded-[40px] border-2 border-rose-gold/30 bg-white/80 shadow-2xl backdrop-blur-sm lg:sticky lg:top-32 group">
              <Image
                src="/yasmine-bateman.jpg"
                alt="Portrait of Yasmine Bateman"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Sophisticated overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-rose-gold/60" />
              
              {/* Name badge with glass morphism */}
              <div className="absolute inset-x-7 bottom-7 space-y-3 text-charcoal">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-gold/40 bg-white/80 px-4 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  <p className="text-[10px] uppercase tracking-[0.5em] text-charcoal/70 font-medium">Creative director</p>
                </div>
                <p className="text-3xl font-bold tracking-tight drop-shadow-lg">Yasmine Bateman</p>
                <p className="text-base text-charcoal/80 leading-relaxed">
                  Atlanta-based host of flawless events + better memories
                </p>
              </div>
              
              {/* Accent corner glow */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-gold/30 via-rose-gold/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Partner Logos Marquee */}
          <div className="mt-16 overflow-hidden">
            <div className="flex gap-6 text-[11px] uppercase tracking-[0.5em] text-charcoal/50 animate-marquee">
              {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                <span
                  key={`${partner}-${idx}`}
                  className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-rose-gold/30 bg-white/70 px-6 py-3 backdrop-blur-sm transition-all hover:border-rose-gold/60 hover:bg-white hover:text-charcoal"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Host Promises Section - Atelier Card System */}
      <Section background="pearl" padding="large">
        <div className="mx-auto max-w-4xl text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-gold/30 bg-rose-gold/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-gold animate-pulse" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-rose-gold font-semibold">Tailored host support</p>
          </div>
          <h2 className="text-4xl font-bold text-navy md:text-5xl lg:text-6xl tracking-tight leading-tight">
            What you can expect from us
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            Designed for founders, CMOs, and private hosts who need clarity fast—on desktop and on the go.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {hostPromises.map((promise, index) => (
            <div
              key={promise.title}
              className="group relative overflow-hidden rounded-[32px] border-2 border-charcoal/10 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-rose-gold/30 hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-rose-gold/20 to-transparent rounded-bl-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-gold/20 bg-rose-gold/5 px-4 py-1.5">
                  <p className="text-[10px] uppercase tracking-[0.45em] text-rose-gold/90 font-bold">{promise.meta}</p>
                </div>
                <h3 className="text-2xl font-bold text-navy leading-tight">{promise.title}</h3>
                <p className="text-base text-charcoal/70 leading-relaxed">{promise.description}</p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-rose-gold to-gold group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </Section>

      {/* Signature Services Section */}
      <Section background="white" padding="large">
        <div className="mx-auto max-w-4xl text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-gold/30 bg-rose-gold/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-gold animate-pulse" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-rose-gold font-semibold">Signature Services</p>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight leading-tight">
            From first inquiry to last toast, every service tier is bespoke.
          </h2>
          <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
            Planning, production, and storytelling live under one roof so you can stay focused on the guests.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {serviceSuites.map((format) => (
            <div
              key={format.title}
              className="group relative overflow-hidden rounded-[40px] border-2 border-gold/20 bg-white shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:border-gold/50 hover:shadow-[0_40px_90px_rgba(0,0,0,0.2)]"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={format.image}
                  alt={format.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-rose-gold/30 via-transparent to-[#f4d6df]/75" />
                
                {/* Stat badge with glass morphism */}
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-5 py-2.5 backdrop-blur-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                    <p className="text-[11px] uppercase tracking-[0.45em] text-white font-bold">{format.stat}</p>
                  </div>
                </div>
                
                {/* Spotlight effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/0 via-gold/20 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="relative space-y-5 p-10">
                <h3 className="text-3xl font-bold text-navy leading-tight">{format.title}</h3>
                <p className="text-lg text-charcoal/70 leading-relaxed">{format.description}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {format.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border-2 border-gold/30 bg-gold/5 px-5 py-2 text-xs uppercase tracking-[0.35em] font-semibold text-navy transition-all hover:border-gold/60 hover:bg-gold/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-rose-gold to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery Section - Spotlight Effect */}
      <Section background="pearl" padding="large">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-gold/30 bg-rose-gold/5 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-gold animate-pulse" />
              <p className="text-[10px] uppercase tracking-[0.5em] text-rose-gold font-semibold">Recent environments</p>
            </div>
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-3xl">
              Atlanta metro galas, summits, and neighborhood showcases in motion.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-rose-gold/50 bg-rose-gold/15 px-8 py-4 text-xs font-bold uppercase tracking-[0.35em] text-charcoal backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-gold hover:bg-rose-gold/25 hover:shadow-xl"
          >
            View full archive
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryShots.map((shot, index) => (
            <div
              key={shot.title}
              className="group relative h-96 overflow-hidden rounded-[32px] border-2 border-charcoal/10 shadow-xl transition-all duration-700 hover:-translate-y-3 hover:border-gold/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.2)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={shot.src}
                alt={shot.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-rose-gold/25 via-transparent to-[#f2cddc]/70" />
              
              {/* Spotlight overlay on hover */}
              <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute inset-x-6 bottom-6 space-y-2 text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/90 font-bold">{shot.category}</p>
                </div>
                <h3 className="text-2xl font-bold leading-tight drop-shadow-lg">{shot.title}</h3>
                <p className="text-sm text-white/80 font-medium">{shot.location}</p>
              </div>
              
              {/* Animated border accent */}
              <div className="absolute inset-0 rounded-[32px] border-2 border-gold/0 group-hover:border-gold/50 transition-all duration-700" />
            </div>
          ))}
        </div>
      </Section>

      {/* Client Journey Section */}
      <Section background="white" padding="large">
        <div className="mx-auto max-w-4xl text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-gold/30 bg-rose-gold/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-gold animate-pulse" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-rose-gold font-semibold">Client journey</p>
          </div>
          <h2 className="text-4xl font-bold text-navy md:text-5xl lg:text-6xl tracking-tight leading-tight">
            How we move from idea to celebration
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8">
          {journeyMoments.map((moment, index) => (
            <div
              key={moment.label}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-[32px] border-2 border-charcoal/10 bg-gradient-to-br from-white to-pearl/30 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] md:flex-row md:items-center md:gap-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Number badge */}
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-gradient-to-br from-gold/20 to-rose-gold/20 text-lg font-bold text-navy shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:border-gold/60 group-hover:shadow-xl md:h-20 md:w-20 md:text-xl">
                {moment.label}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="relative flex-1 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-charcoal/70 font-bold">{moment.deliverable}</p>
                </div>
                <h3 className="text-2xl font-bold text-navy leading-tight md:text-3xl">{moment.title}</h3>
                <p className="text-base text-charcoal/70 leading-relaxed md:text-lg">{moment.detail}</p>
              </div>
              
              {/* Progress line connector (hidden on last item) */}
              {index < journeyMoments.length - 1 && (
                <div className="absolute bottom-0 left-10 h-8 w-0.5 translate-y-full bg-gradient-to-b from-gold/50 to-transparent md:left-14" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Service Pillars Section */}
      <Section background="pearl" padding="large">
        <div className="mx-auto max-w-4xl text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-gold/30 bg-rose-gold/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-gold animate-pulse" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-rose-gold font-semibold">Service blueprints</p>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight leading-tight">
            Each celebration is anchored by planning, design, and production care.
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
            These pillars keep logistics calm, aesthetics cohesive, and guests cared for—whether it's 50 guests or 500.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {servicePillars.map((card, index) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-[32px] border-2 border-charcoal/10 bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-4 hover:border-gold/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-gold/20 to-transparent rounded-bl-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-charcoal/70 font-bold">{card.metric}</p>
                </div>
                <h3 className="text-2xl font-bold text-navy leading-tight md:text-3xl">{card.title}</h3>
                <p className="text-base text-charcoal/70 leading-relaxed">{card.highlight}</p>
                <ul className="space-y-3 pt-4 text-sm text-charcoal/80">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-rose-gold group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="champagne" padding="large">
        <div className="mx-auto max-w-4xl text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-gold/30 bg-rose-gold/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-gold animate-pulse" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-rose-gold font-semibold">Proof of experience</p>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight leading-tight">
            Hosts trust us with their most meaningful gatherings.
          </h2>
          <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
            From black-tie galas to board retreats, we stay until every last candle is out and every recap is delivered.
          </p>
        </div>
        <div className="mt-16">
          <TestimonialCarousel />
        </div>
      </Section>

      {/* Final CTA Section - Cinematic */}
      <Section background="white" padding="large">
        <div className="group relative overflow-hidden rounded-[48px] border-2 border-charcoal/15 bg-gradient-to-br from-rose-gold/20 via-pearl to-gold/15 p-12 shadow-2xl transition-all duration-700 hover:border-gold/40 hover:shadow-[0_40px_90px_rgba(0,0,0,0.15)] md:p-20">
          {/* Animated gradient mesh */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,176,124,0.4),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(216,143,124,0.3),transparent_45%)]" />
          </div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
          
          <div className="relative space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-white/60 px-5 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.5em] text-charcoal/80 font-bold">Next steps</p>
              </div>
              <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-4xl">
                Let's plan an event experience your guests will never forget.
              </h2>
              <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl">
                Share your date, guest count, and wish list—we'll build a planning roadmap, introduce key partners, and stay
                beside you through the final farewell.
              </p>
            </div>
            
            <div className="flex flex-col gap-5 pt-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-rose-gold px-12 py-5 text-xs font-bold uppercase tracking-[0.35em] text-charcoal shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(243,184,198,0.45)]"
              >
                <span className="relative z-10">Plan your event</span>
                <span aria-hidden className="relative z-10 transition-transform group-hover/btn:translate-x-1">
                  →
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/35 to-gold/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              </Link>
              <Link
                href="/about"
                className="group/btn inline-flex items-center justify-center gap-3 rounded-full border-2 border-rose-gold/60 bg-white/70 px-10 py-5 text-xs font-bold uppercase tracking-[0.35em] text-charcoal backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-gold hover:bg-white hover:shadow-xl"
              >
                Meet the team
                <span aria-hidden className="transition-transform group-hover/btn:translate-x-1">→</span>
              </Link>
            </div>
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-gold/30 to-transparent rounded-bl-[48px]" />
          <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-rose-gold/20 to-transparent rounded-tr-[48px]" />
        </div>
      </Section>
    </main>
  );
}
