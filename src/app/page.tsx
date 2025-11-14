'use client';

import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import AnimatedCounter from '@/components/AnimatedCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const heroCollage = [
  {
    src: 'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=1200&q=80',
    title: 'Midtown Skyline Gala',
    location: 'Atlanta, GA',
    badge: 'Corporate Gala',
    priority: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    title: 'BeltLine Sunset Mixer',
    location: 'Atlanta BeltLine',
    badge: 'City Series',
  },
  {
    src: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80',
    title: 'Buckhead Leadership Summit',
    location: 'Buckhead, Atlanta',
    badge: 'Executive Summit',
  },
  {
    src: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80',
    title: 'Savannah Riverfront Showcase',
    location: 'Savannah, GA',
    badge: 'Statewide Tour',
  },
];

const statHighlights: Array<{
  label: string;
  value: number;
  suffix: string;
  subtext: string;
  decimals?: number;
}> = [
  {
    label: 'Regional Productions',
    value: 520,
    suffix: '+',
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
    value: 140,
    suffix: '+',
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
      <section className="relative overflow-hidden bg-navy text-cream pt-28 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0f1422] to-[#050816]" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,176,124,0.3),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(216,143,124,0.25),transparent_40%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.5em] text-cream/70">Luxury Event Studio • Atlanta</p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
                Immersive celebrations designed with editorial precision and production care.
              </h1>
              <p className="mt-4 text-base text-cream/80 md:text-lg">
                We plan multi-day summits, civic programs, and brand dinners that feel effortless for guests and
                measurable for hosts. Every touchpoint—from save-the-date to farewell brunch—is considered.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-navy shadow-xl transition hover:-translate-y-1 sm:w-auto"
                >
                  Plan your event
                  <span aria-hidden>↗</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Explore services
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {statHighlights.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
                    <p className="text-3xl font-semibold text-gold md:text-4xl">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-cream/70">{stat.label}</p>
                    <p className="mt-3 text-sm text-cream/70">{stat.subtext}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroCollage.map((frame) => (
                <div
                  key={frame.title}
                  className="relative min-h-[220px] overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={frame.src}
                    alt={frame.title}
                    fill
                    priority={frame.priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">{frame.badge}</span>
                    <div>
                      <p className="text-sm text-white/70">{frame.location}</p>
                      <p className="text-lg font-semibold">{frame.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.5em] text-white/60">
            {partnerLogos.map((partner) => (
              <span key={partner} className="rounded-full border border-white/20 px-4 py-2">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section background="pearl" padding="large">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Tailored host support</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">What you can expect from us</h2>
          <p className="mt-4 text-charcoal/70">
            Designed for founders, CMOs, and private hosts who need clarity fast—on desktop and on the go.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {hostPromises.map((promise) => (
            <div key={promise.title} className="rounded-3xl border border-charcoal/10 bg-white/90 p-6 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.4em] text-rose-gold/80">{promise.meta}</p>
              <h3 className="mt-3 text-xl font-semibold text-navy">{promise.title}</h3>
              <p className="mt-3 text-sm text-charcoal/70">{promise.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="pearl" padding="large">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Signature Services</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            From first inquiry to last toast, every service tier is bespoke.
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            Planning, production, and storytelling live under one roof so you can stay focused on the guests.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {serviceSuites.map((format) => (
            <div key={format.title} className="overflow-hidden rounded-3xl border border-gold/15 bg-white shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={format.image}
                  alt={format.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
                <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.4em] text-white">
                  {format.stat}
                </p>
              </div>

              <div className="space-y-4 p-8">
                <h3 className="text-2xl font-semibold">{format.title}</h3>
                <p className="text-charcoal/70">{format.description}</p>
                <div className="flex flex-wrap gap-3">
                  {format.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gold/20 px-4 py-1 text-xs uppercase tracking-[0.3em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white" padding="large">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Recent environments</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Atlanta metro galas, summits, and neighborhood showcases in motion.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition hover:-translate-y-1"
          >
            View full archive
            <span aria-hidden>↗</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryShots.map((shot) => (
            <div key={shot.title} className="relative h-72 overflow-hidden rounded-3xl border border-charcoal/10">
              <Image
                src={shot.src}
                alt={shot.title}
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
              <div className="absolute inset-x-5 bottom-5 text-white">
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">{shot.category}</p>
                <h3 className="text-xl font-semibold">{shot.title}</h3>
                <p className="text-sm text-white/70">{shot.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white" padding="large">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Client journey</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">How we move from idea to celebration</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6">
          {journeyMoments.map((moment) => (
            <div
              key={moment.label}
              className="flex flex-col gap-4 rounded-3xl border border-charcoal/10 bg-white/80 p-6 shadow-sm md:flex-row md:items-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-navy">
                {moment.label}
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.35em] text-charcoal/50">{moment.deliverable}</p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{moment.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{moment.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="pearl" padding="large">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Service blueprints</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Each celebration is anchored by planning, design, and production care.
          </h2>
          <p className="mt-4 text-charcoal/70">
            These pillars keep logistics calm, aesthetics cohesive, and guests cared for—whether it’s 50 guests or 500.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {servicePillars.map((card) => (
            <div key={card.title} className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-charcoal/50">{card.metric}</p>
              <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-charcoal/70">{card.highlight}</p>
              <ul className="mt-6 space-y-2 text-sm text-charcoal/80">
                {card.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-charcoal/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section background="champagne" padding="large">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Proof of experience</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Hosts trust us with their most meaningful gatherings.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/70">
            From black-tie galas to board retreats, we stay until every last candle is out and every recap is delivered.
          </p>
        </div>
        <div className="mt-10">
          <TestimonialCarousel />
        </div>
      </Section>

      <Section background="white" padding="large">
        <div className="rounded-[36px] border border-charcoal/10 bg-gradient-to-br from-rose-gold/15 via-pearl to-gold/10 p-12 md:p-16">
          <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">Next steps</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Let’s plan an event experience your guests will never forget.
          </h2>
          <p className="mt-6 text-lg text-charcoal/70">
            Share your date, guest count, and wish list—we’ll build a planning roadmap, introduce key partners, and stay
            beside you through the final farewell.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-navy px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-xl transition hover:-translate-y-1"
            >
              Plan your event
              <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full border border-navy/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] transition hover:-translate-y-1"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
