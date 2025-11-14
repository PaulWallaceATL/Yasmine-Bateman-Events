'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Image from 'next/image';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Our Story"
        subtitle="A passion for perfection, a commitment to excellence"
        imageSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
        imageAlt="About Yasmine Bateman Events"
        height="large"
      />

      {/* About Introduction */}
      <Section background="white" padding="large">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-gold/20 bg-gradient-to-br from-pearl to-champagne">
            <Image
              src="/yasmine-bateman.jpg"
              alt="Yasmine Bateman - Event Planner"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 border border-white/20" />
            <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/20 bg-white/60 p-4 text-sm text-charcoal">
              <p className="text-[11px] uppercase tracking-[0.3em] text-charcoal/60">Studio Details</p>
              <p className="mt-2 font-semibold">Atlanta, Georgia • Available worldwide</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">About Me</p>
            <h2 className="text-4xl font-semibold text-navy md:text-5xl">Meet Yasmine</h2>
            <p className="text-lg text-charcoal/80">
              I’m Yasmine, a content creator from Atlanta, Georgia. I share lifestyle content including fashion,
              beauty, wellness, and everyday moments with over 300,000 followers across YouTube, Instagram, and TikTok.
            </p>
            <p className="text-lg text-charcoal/80">
              What started as sharing “get ready with me” videos and workout routines has grown into working with
              amazing brands and hosting events. I love creating content that feels authentic and connecting with my
              community through genuine partnerships.
            </p>
            <p className="text-lg text-charcoal/80">
              My content ranges from beauty tutorials to travel vlogs, and I’ve been lucky enough to reach millions of
              people. My most popular video has over 400,000 views, and I’m grateful for every person who watches and
              engages with my content.
            </p>
            <p className="text-lg text-charcoal/80">
              I work with brands in beauty, fashion, wellness, and lifestyle to create content that resonates with my
              audience. Based in Atlanta, I’m always looking for new partnerships and opportunities to collaborate with
              brands I believe in.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section background="cream" padding="large">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Our Philosophy</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Every detail holds intention</h2>
          <p className="mt-6 text-lg text-charcoal/70">
            “Luxury is in each detail. Perfection is in the harmony of every element working together to create an
            experience that feels effortless, yet unforgettable.”
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            {
              title: 'Creative Vision',
              copy:
                'We see beyond the ordinary to create experiences that are truly extraordinary. Every celebration is approached with fresh eyes and innovative thinking.',
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ),
            },
            {
              title: 'Heartfelt Passion',
              copy:
                'Our genuine love for celebration drives everything we do. We don’t just plan events; we pour our hearts into creating moments that matter.',
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ),
            },
            {
              title: 'Unwavering Excellence',
              copy:
                'We hold ourselves to the highest standards in planning and execution. From vendor selection to day-of coordination, quality is non-negotiable.',
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((card) => (
            <div key={card.title} className="rounded-3xl border border-cream/50 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                {card.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy">{card.title}</h3>
              <p className="mt-3 text-charcoal/70">{card.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="white" padding="large">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Our Process</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">
            A seamless journey from consultation to celebration
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6">
          {[
            {
              number: '01',
              title: 'Discovery & Consultation',
              description:
                'We begin with an in-depth consultation to understand your vision, preferences, budget, and goals. Every detail, from guest experience to design aesthetics, is discussed to capture what makes your celebration unique.',
            },
            {
              number: '02',
              title: 'Design & Conceptualization',
              description:
                'Our creative team develops mood boards, color palettes, lighting plans, floral concepts, and spatial layouts. We refine the direction with you until the aesthetic reflects your objectives perfectly.',
            },
            {
              number: '03',
              title: 'Curation & Coordination',
              description:
                'We select and manage the finest vendors—florists, caterers, musicians, photographers—handling negotiations, contracts, and logistics so every element aligns with the overall design and budget.',
            },
            {
              number: '04',
              title: 'Execution & Management',
              description:
                'On event day we oversee setup, manage the timeline, coordinate vendors, and troubleshoot discreetly. You remain fully present with guests while we handle every detail.',
            },
          ].map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 rounded-3xl border border-charcoal/10 bg-white/70 p-6 shadow-sm md:flex-row"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-lg font-semibold text-navy">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-charcoal/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section background="beige" padding="large">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">What We Believe</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Values behind every engagement</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Authenticity Above All',
                description:
                  'Every event should be a genuine reflection of who you are—your story, your style, your vision. We reject templates in favor of celebrations that feel personal and meaningful.',
              },
              {
                title: 'Uncompromising Quality',
                description:
                  'We partner exclusively with vendors who share our devotion to excellence. From linens and florals to cuisine and entertainment, every element is curated for peak quality.',
              },
              {
                title: 'Thoughtful Innovation',
                description:
                  'We honor timeless elegance while exploring fresh perspectives and technologies to keep every experience sophisticated, contemporary, and memorable.',
              },
              {
                title: 'Absolute Integrity',
                description:
                  'Transparency, honest guidance, and mutual respect guide every conversation. Clients and partners trust us because communication is clear and grounded in integrity.',
              },
            ].map((value) => (
              <div key={value.title} className="rounded-3xl border border-white/0 bg-white/80 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-navy">{value.title}</h3>
                <p className="mt-3 text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Awards & Recognition */}
      <Section background="white" padding="large">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Recognition</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Noted by industry leaders</h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/70">
            Honored to be recognized by publications and partners who value intentional, detail-driven events.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Best Event Planner 2024', org: 'Luxury Events Magazine' },
            { title: 'Top 10 Event Designers', org: 'Venue Report' },
            { title: 'Excellence in Events', org: 'Special Events Awards' },
            { title: 'Preferred Vendor', org: 'Luxury Network' },
          ].map((award) => (
            <div
              key={award.title}
              className="rounded-3xl border border-charcoal/10 bg-white/80 p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-navy">{award.title}</p>
              <p className="mt-1 text-xs text-charcoal/60">{award.org}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

