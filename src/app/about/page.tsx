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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="slide-up">
            <div className="relative h-[700px] w-full luxury-card overflow-hidden border-2 border-[#c9a96e]/30 shadow-2xl bg-gradient-to-br from-[#ffc0cb] via-[#ffb6c1] to-[#ff69b4]">
              <Image
                src="/yasmine-bateman.jpg"
                alt="Yasmine Bateman - Event Planner"
                fill
                className="object-cover object-center"
                priority
                onError={(e) => {
                  // Fallback to placeholder if image not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Elegant frame effect */}
              <div className="absolute inset-0 border-8 border-white/10 pointer-events-none"></div>
              
              {/* Placeholder text if image not loaded */}
              <div className="absolute inset-0 flex items-center justify-center text-white/80 text-center p-8">
                <div>
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-sm tracking-wider">Photo: Save yasmine-bateman.jpg to /public/</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-up">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-4 block">Atlanta Lifestyle Influencer & Event Curator</span>
            <h2 className="text-display text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
              Meet Yasmine Bateman
            </h2>
            <div className="h-1 w-24 gradient-gold mb-8"></div>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Born and raised in Mableton, Georgia, Yasmine Bateman has become one of Atlanta's most influential voices 
              in lifestyle, fashion, and beauty. With over 130,000 YouTube subscribers, 100,000+ Instagram followers, 
              and 93,000 TikTok fans, she's built a devoted community that looks to her for inspiration, authenticity, 
              and that perfect Atlanta vibe.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              What started as a passion for sharing "get ready with me" videos and workout routines has evolved into a 
              full-fledged brand. Yasmine now curates exclusive events, collaborates with premium brands, and hosts 
              unforgettable experiences throughout Atlanta. From intimate influencer meetups to large-scale brand activations, 
              she brings her signature aesthetic and authentic Southern charm to every occasion.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              What sets Yasmine apart is her genuine connection to Atlanta's culture and her ability to create content 
              that resonates. Whether she's filming travel vlogs, hosting brand events at Atlanta's hottest venues like 
              Ponce City Market, or collaborating with fellow influencers, her engaging personality and creative eye make 
              every experience memorable. Her content has garnered millions of views, with her most popular video reaching 
              over 400,000 views.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Today, Yasmine works with brands across beauty, fashion, wellness, and lifestyle sectors, creating authentic 
              content and hosting events that connect with her engaged community. From Buckhead brand launches to Midtown 
              influencer gatherings, she brings Atlanta's vibrant energy and Southern hospitality to every collaboration. 
              As both a content creator and event curator, she's redefining what it means to be a lifestyle influencer in 
              the modern age.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section background="cream" padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Philosophy
          </h2>
          <div className="w-24 h-0.5 bg-sage mx-auto mb-12"></div>
          <p className="text-xl text-charcoal/80 leading-relaxed mb-8 italic">
            "Luxury is in each detail. Perfection is in the harmony of every element working together 
            to create an experience that feels effortless, yet unforgettable."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-sage" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Creative Vision</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We see beyond the ordinary to create experiences that are truly extraordinary. 
              Every event is approached with fresh eyes and innovative thinking, ensuring your 
              celebration stands out and resonates with authentic emotion.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-sage" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Heartfelt Passion</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our genuine love for celebration drives everything we do. We don't just plan events; 
              we pour our hearts into creating moments that matter, ensuring every detail reflects 
              the joy and significance of your special occasion.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-sage" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Unwavering Excellence</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We hold ourselves to the highest standards in every aspect of planning and execution. 
              From vendor selection to day-of coordination, our commitment to excellence ensures 
              sophisticated events that consistently exceed expectations.
            </p>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section background="white" padding="large">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Process
          </h2>
          <div className="w-24 h-0.5 bg-sage mx-auto mb-4"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            A seamless journey from initial consultation to the final celebration
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {[
            {
              number: '01',
              title: 'Discovery & Consultation',
              description: 'We begin with an in-depth consultation to understand your vision, preferences, budget, and goals. This initial meeting allows us to learn about your style, the atmosphere you want to create, and any specific requirements or dreams you have for your event. We discuss everything from guest experience to design aesthetics, ensuring we capture the essence of what makes your celebration unique.'
            },
            {
              number: '02',
              title: 'Design & Conceptualization',
              description: 'Our creative team develops a comprehensive design concept tailored to your vision. This includes detailed mood boards, color palettes, lighting plans, floral concepts, and spatial layouts. We present multiple design directions, refining them based on your feedback until we achieve the perfect aesthetic that reflects your personality and event objectives.'
            },
            {
              number: '03',
              title: 'Curation & Coordination',
              description: 'We carefully select and coordinate with the finest vendors in the industry, from florists and caterers to musicians and photographers. Each vendor is chosen for their expertise and ability to execute your vision flawlessly. We handle all negotiations, contracts, and logistics, ensuring every element seamlessly aligns with your overall design and budget.'
            },
            {
              number: '04',
              title: 'Execution & Management',
              description: 'On the day of your event, our team arrives early to oversee setup and manage every detail from start to finish. We coordinate vendor arrivals, troubleshoot any issues, manage the timeline, and ensure everything runs smoothly. You can relax and be fully present with your guests, knowing that every aspect of your celebration is in expert hands.'
            }
          ].map((step, index) => (
            <div key={index} className="flex gap-8 mb-12 last:mb-0">
              <div className="flex-shrink-0">
                <div className="font-serif text-5xl font-bold text-sage/30">{step.number}</div>
              </div>
              <div className="pt-2">
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section background="beige" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              What We Believe
            </h2>
            <div className="w-24 h-0.5 bg-sage mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Authenticity Above All',
                description: 'Every event should be a genuine reflection of who you are—your story, your style, your vision. We reject cookie-cutter templates and trending aesthetics in favor of creating celebrations that are uniquely and unmistakably yours. Your event should feel personal, meaningful, and true to your values and relationships.'
              },
              {
                title: 'Uncompromising Quality',
                description: 'We partner exclusively with the finest vendors in the industry—those who share our commitment to excellence and attention to detail. From premium linens and exquisite florals to world-class cuisine and exceptional entertainment, every element is carefully selected to meet our exacting standards and exceed your expectations.'
              },
              {
                title: 'Thoughtful Innovation',
                description: 'While we honor timeless elegance and classic design principles, we constantly seek fresh perspectives and creative solutions. We stay ahead of industry trends, embrace new technologies, and explore innovative approaches to create events that feel both sophisticated and contemporary, ensuring your celebration is memorable for all the right reasons.'
              },
              {
                title: 'Absolute Integrity',
                description: 'Transparency, honesty, and ethical practices form the foundation of our business. We provide clear communication, realistic budgets, and honest advice throughout the planning process. Our relationships with clients and vendors are built on mutual respect and trust, ensuring a collaborative and stress-free experience from start to finish.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8">
                <h3 className="font-serif text-2xl font-bold text-navy mb-4">{value.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Awards & Recognition */}
      <Section background="white" padding="large">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Recognition
          </h2>
          <div className="w-24 h-0.5 bg-sage mx-auto mb-4"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Honored to be recognized by industry leaders and publications
          </p>
        </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto items-center">
            {[
              { title: 'Best Event Planner 2024', org: 'Luxury Events Magazine' },
              { title: 'Top 10 Event Designers', org: 'Venue Report' },
              { title: 'Excellence in Events', org: 'Special Events Awards' },
              { title: 'Preferred Vendor', org: 'Luxury Network' }
            ].map((award, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-sage" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-sm text-charcoal/70 font-sans font-semibold">{award.title}</p>
              <p className="text-xs text-charcoal/50 font-sans mt-1">{award.org}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

