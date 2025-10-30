import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Collaborations & Services"
        subtitle="Brand partnerships, content creation, and unforgettable event experiences across Atlanta"
        imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2072"
        imageAlt="Luxury event services"
        height="large"
      />

      {/* Services Introduction */}
      <Section background="white" padding="large">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 block">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
            How We Can Work Together
          </h2>
          <div className="h-1 w-24 gradient-gold mx-auto mb-10"></div>
          <p className="text-xl text-charcoal/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            I partner with brands to create authentic content for my 300K+ followers across YouTube, Instagram, and TikTok.
          </p>
          <p className="text-lg text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
            From sponsored videos to event hosting and long-term partnerships, I help brands connect with an engaged audience 
            through genuine, relatable content.
          </p>
        </div>
      </Section>

      {/* Luxury Galas & Fundraisers */}
      <Section background="pearl" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-4 block">Content Creation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Sponsored Content
            </h2>
            <div className="h-1 w-24 gradient-gold mb-8"></div>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              I create authentic sponsored content across YouTube, Instagram, and TikTok. From dedicated videos 
              to "Get Ready With Me" integrations, I showcase products in a natural way that my followers trust.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              My content gets high engagement (7%+ average) with videos reaching hundreds of thousands of views. 
              I focus on beauty, fashion, wellness, and lifestyle content that feels genuine and connects with my audience.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'YouTube sponsored videos & integrations',
                'Instagram posts, reels & stories',
                'TikTok content & trending videos',
                'Product reviews & unboxing videos',
                '"Get Ready With Me" brand integrations',
                'Tutorial & how-to content featuring products',
                'Multi-platform campaign coordination'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-[#c9a96e] mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-charcoal/70 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 gradient-rose text-white px-10 py-4 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-1"
            >
              <span>Partner With Me</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[700px] w-full luxury-card overflow-hidden border-2 border-[#c9a96e]/20">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
                alt="Luxury gala planning"
                fill
                className="object-cover"
              />
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 shadow-2xl max-w-xs">
                <div className="text-[#c9a96e] text-sm tracking-wider uppercase mb-2">Popular Content</div>
                <div className="text-2xl font-bold text-navy mb-1">400K+</div>
                <div className="text-sm text-charcoal/70">Views on top video</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Corporate Events */}
      <Section background="white" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div>
            <div className="relative h-[700px] w-full luxury-card overflow-hidden border-2 border-[#c9a96e]/20">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
                alt="Corporate events"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 shadow-2xl">
                <div className="text-[#c9a96e] text-sm tracking-wider uppercase mb-2">Recent Success</div>
                <div className="text-2xl font-bold text-navy mb-1">Fortune 500</div>
                <div className="text-sm text-charcoal/70">Client portfolio includes top-tier companies</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-4 block">Event Hosting</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Brand Events
            </h2>
            <div className="h-1 w-24 gradient-gold mb-8"></div>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              I host brand events and activations throughout Atlanta, from product launches to influencer meetups. 
              I bring my community to your event and create buzz across all platforms.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              Event hosting includes promotion before, during, and after your activation with content across 
              YouTube, Instagram, and TikTok to maximize reach and engagement.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Product launch event hosting',
                'Brand pop-up shop appearances',
                'Influencer meetups & fan events',
                'Store opening celebrations',
                'Brand partnership announcements',
                'VIP shopping events & previews',
                'Launch party hosting & MC services'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-[#c9a96e] mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-charcoal/70 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 gradient-rose text-white px-10 py-4 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-1"
            >
              <span>Book Event Hosting</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Private Celebrations */}
      <Section background="pearl" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-4 block">Long-Term</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Brand Partnerships
            </h2>
            <div className="h-1 w-24 gradient-gold mb-8"></div>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              I work with brands on long-term ambassador partnerships, creating regular content and building 
              authentic relationships with products I genuinely love and use.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              Ambassador partnerships include ongoing content creation, event appearances, and integration into my 
              daily lifestyle content for consistent brand presence with my audience.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Multi-month campaign partnerships',
                'Exclusive product line representation',
                'Regular content featuring brand',
                'Brand event appearances',
                'Product development collaboration',
                'Social media takeovers',
                'Affiliate & discount code programs'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-[#c9a96e] mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-charcoal/70 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 gradient-rose text-white px-10 py-4 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-1"
            >
              <span>Explore Partnerships</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[700px] w-full luxury-card overflow-hidden border-2 border-[#c9a96e]/20">
              <Image
                src="https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2070"
                alt="Private celebrations"
                fill
                className="object-cover"
              />
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm p-6 shadow-2xl max-w-xs">
                <div className="text-[#c9a96e] text-sm tracking-wider uppercase mb-2">Engagement</div>
                <div className="text-2xl font-bold text-navy mb-1">7.5%</div>
                <div className="text-sm text-charcoal/70">Average engagement rate</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Services */}
      <Section background="white" padding="large">
        <div className="text-center mb-20">
          <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 block">Comprehensive Solutions</span>
          <h2 className="text-display text-5xl md:text-7xl font-bold text-navy mb-6 text-shadow-elegant">
            Specialized Services
          </h2>
          <div className="ornamental-divider w-40 mx-auto mb-6"></div>
          <p className="text-elegant text-2xl text-charcoal/70 max-w-3xl mx-auto">
            End-to-end support for every element of your perfect event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: 'Floral & Botanical Design',
              description: 'Stunning arrangements from luxury florists that transform spaces and create breathtaking focal points.',
              icon: '🌸'
            },
            {
              title: 'Lighting & Ambiance',
              description: 'Theatrical lighting design that sets the perfect mood and highlights architectural features.',
              icon: '💡'
            },
            {
              title: 'Branding & Signage',
              description: 'Custom graphics, displays, and branded elements that reinforce your message and aesthetic.',
              icon: '🎨'
            },
            {
              title: 'Premium Rentals',
              description: 'Curated furniture, linens, tableware, and décor from top luxury rental partners.',
              icon: '✨'
            },
            {
              title: 'Entertainment & Production',
              description: 'World-class performers, DJs, bands, and production technology for unforgettable moments.',
              icon: '🎭'
            },
            {
              title: 'Culinary Experiences',
              description: 'Gourmet catering, custom menus, and beverage programs from award-winning culinary teams.',
              icon: '🍽️'
            }
          ].map((service, index) => (
            <div key={index} className="luxury-card bg-white p-10 border border-[#c9a96e]/20 hover:border-[#c9a96e]/60">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-display text-2xl font-bold text-navy mb-4 group-hover:text-[#c9a96e] transition-colors">
                {service.title}
              </h3>
              <div className="h-1 w-16 bg-[#c9a96e] mb-4"></div>
              <p className="text-elegant text-lg text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Planning Packages */}
      <Section background="champagne" padding="large">
        <div className="text-center mb-20">
          <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 block">Investment Options</span>
          <h2 className="text-display text-5xl md:text-7xl font-bold text-navy mb-6 text-shadow-elegant">
            Service Packages
          </h2>
          <div className="ornamental-divider w-40 mx-auto mb-6"></div>
          <p className="text-elegant text-2xl text-charcoal/70 max-w-3xl mx-auto">
            Flexible planning solutions tailored to your timeline, budget, and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Day-Of Coordination',
              description: 'Perfect for those who have planned most details but need professional coordination to ensure flawless execution on the event day.',
              features: [
                'Final vendor confirmations (2 weeks prior)',
                'Detailed timeline creation & management',
                '10-12 hours of day-of coordination',
                'Setup & breakdown supervision',
                'Real-time problem resolution',
                'Guest assistance & direction',
                'Emergency kit & backup planning'
              ]
            },
            {
              name: 'Partial Planning',
              description: 'Ideal for those who want professional guidance and support for key aspects of planning while maintaining some involvement.',
              features: [
                'Everything in Day-Of package',
                'Curated vendor recommendations & coordination',
                'Comprehensive design consultation',
                'Budget development & management',
                'Monthly planning meetings (6-8 sessions)',
                'Contract review & negotiation assistance',
                'RSVP tracking & guest management'
              ],
              featured: true
            },
            {
              name: 'Full-Service Planning',
              description: 'Comprehensive, white-glove support from initial concept to final execution for a completely stress-free, luxury experience.',
              features: [
                'Everything in Partial package',
                'Unlimited consultations & meetings',
                'Complete vendor sourcing & management',
                'Full design, styling & conceptualization',
                'Comprehensive guest management & hospitality',
                'Rehearsal coordination & family prep',
                'Custom welcome packages & signage',
                'Post-event vendor management & thank-you coordination'
              ]
            }
          ].map((pkg, index) => (
            <div 
              key={index} 
              className={`luxury-card bg-white p-10 ${pkg.featured ? 'border-2 border-[#c9a96e] transform md:-translate-y-6 shadow-2xl' : 'border border-[#c9a96e]/20'}`}
            >
              {pkg.featured && (
                <div className="gradient-gold text-white text-xs tracking-widest uppercase px-6 py-3 inline-block mb-6 shadow-md">
                  Most Popular
                </div>
              )}
              <h3 className="text-display text-3xl font-bold text-navy mb-4">{pkg.name}</h3>
              <div className="h-1 w-20 bg-[#c9a96e] mb-6"></div>
              <p className="text-elegant text-lg text-charcoal/70 mb-8 leading-relaxed">{pkg.description}</p>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-[#c9a96e] mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-charcoal/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 w-full py-4 font-sans text-sm tracking-widest uppercase transition-all duration-500 transform hover:-translate-y-1 ${
                  pkg.featured 
                    ? 'gradient-rose text-white hover:shadow-2xl glow-effect' 
                    : 'border-2 border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white'
                }`}
              >
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="white" padding="large">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/5 via-transparent to-[#b76e79]/5 blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-6 block">Next Steps</span>
            <h2 className="text-display text-5xl md:text-7xl font-bold text-navy mb-8 text-shadow-elegant leading-tight">
              Let's Create Your<br/>
              <span className="text-[#c9a96e]">Perfect Event</span>
            </h2>
            <div className="ornamental-divider w-48 mx-auto mb-12"></div>
            <p className="text-elegant text-2xl md:text-3xl text-charcoal/80 leading-relaxed mb-16 max-w-4xl mx-auto">
              Schedule a complimentary consultation to discuss your vision, objectives, and how we can exceed your expectations.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-4 gradient-rose text-white px-16 py-7 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-2"
            >
              <span>Schedule Consultation</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}

