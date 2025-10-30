import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive event planning tailored to your unique vision"
        imageSrc="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072"
        imageAlt="Services"
        height="large"
      />

      {/* Services Introduction */}
      <Section background="white" padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Bespoke Event Planning Services
          </h2>
          <div className="w-24 h-0.5 bg-sage mx-auto mb-8"></div>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            From intimate gatherings of 20 to grand celebrations of 500+, we offer comprehensive planning services 
            designed to bring your vision to life with precision and artistry. Every event is unique, and our 
            approach is meticulously tailored to meet your specific needs, preferences, and style.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Whether you're planning a corporate gala, milestone celebration, or luxury social event, our team 
            brings decades of combined experience, industry connections, and creative vision to ensure your 
            event is executed flawlessly and exceeds all expectations.
          </p>
        </div>
      </Section>

      {/* Wedding Planning */}
      <Section background="cream" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Wedding Planning & Design
            </h2>
            <div className="w-24 h-0.5 bg-sage mb-8"></div>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Your wedding day should be a perfect reflection of your love story. We specialize in 
              creating sophisticated, personalized weddings that capture your unique style and vision. 
              From intimate elopements to grand celebrations, we handle every detail with care, ensuring 
              your special day is everything you've dreamed of and more.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Our wedding planning services include complete design conceptualization, venue sourcing and 
              selection, vendor management, budget oversight, timeline creation, and full day-of coordination. 
              We work closely with you from engagement to send-off, providing guidance, support, and expertise 
              every step of the way.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Full-service wedding planning',
                'Venue selection and coordination',
                'Design concept and styling',
                'Vendor management and negotiation',
                'Timeline and logistics planning',
                'Day-of coordination and management',
                'Destination wedding services'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-sage mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-charcoal/70">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/contact"
              className="inline-block bg-navy text-white px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-sage transition-colors duration-300"
            >
              Inquire About Wedding Planning
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[600px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
                alt="Wedding planning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Corporate Events */}
      <Section background="white" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div>
            <div className="relative h-[600px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
                alt="Corporate events"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Corporate Events
            </h2>
            <div className="w-24 h-0.5 bg-sage mb-8"></div>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Elevate your brand with sophisticated corporate events that leave lasting impressions on clients, 
              employees, and stakeholders. From executive retreats and shareholder meetings to product launches 
              and brand activations, we create experiences that align with your business objectives while 
              showcasing your company's values and culture.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              We understand that corporate events serve multiple purposes—building relationships, celebrating 
              achievements, launching initiatives, and strengthening company culture. Our approach combines 
              strategic thinking with creative execution to deliver events that are professional, engaging, 
              and memorable, ensuring your message resonates long after the event concludes.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Corporate galas and award ceremonies',
                'Product launches and brand activations',
                'Executive retreats and team building',
                'Board meetings and conferences',
                'Holiday parties and celebrations',
                'Client appreciation events',
                'Trade shows and exhibitions'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-sage mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-charcoal/70">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/contact"
              className="inline-block bg-navy text-white px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-sage transition-colors duration-300"
            >
              Inquire About Corporate Events
            </Link>
          </div>
        </div>
      </Section>

      {/* Social Celebrations */}
      <Section background="cream" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Social Celebrations
            </h2>
            <div className="w-24 h-0.5 bg-sage mb-8"></div>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Life's milestones deserve to be celebrated with style, sophistication, and joy. We create 
              memorable social events that honor your special moments and bring together the people 
              you love most. Whether it's a landmark birthday, anniversary celebration, or any significant 
              life achievement, we design experiences that reflect the significance of the occasion and 
              the personality of the honoree.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              From intimate dinner parties to lavish themed celebrations, we handle all aspects of planning 
              and execution. Our social event services include venue selection, theme development, decor design, 
              entertainment booking, catering coordination, and complete event management. We create atmospheres 
              where memories are made and celebrations feel truly special.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Milestone birthday celebrations',
                'Anniversary parties',
                'Engagement parties',
                'Baby showers and gender reveals',
                'Graduation celebrations',
                'Retirement parties',
                'Holiday gatherings'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-sage mr-3 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-charcoal/70">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/contact"
              className="inline-block bg-navy text-white px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-sage transition-colors duration-300"
            >
              Inquire About Social Events
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[600px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2070"
                alt="Social celebrations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Services */}
      <Section background="white" padding="large">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Additional Services
          </h2>
          <div className="w-24 h-0.5 bg-sage mx-auto mb-4"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Comprehensive planning support to ensure every detail is perfect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Floral Design',
              description: 'Bespoke floral arrangements that complement your event aesthetic and bring natural beauty to your celebration.'
            },
            {
              title: 'Lighting Design',
              description: 'Strategic lighting solutions to create ambiance, highlight key areas, and transform your venue.'
            },
            {
              title: 'Stationery & Paper Goods',
              description: 'Custom invitations, programs, menus, and signage designed to match your event style.'
            },
            {
              title: 'Rentals Coordination',
              description: 'Selection and coordination of furniture, linens, tableware, and decorative elements.'
            },
            {
              title: 'Entertainment Booking',
              description: 'Sourcing and managing musicians, DJs, performers, and other entertainment options.'
            },
            {
              title: 'Catering Management',
              description: 'Menu development, vendor selection, and coordination with top culinary professionals.'
            }
          ].map((service, index) => (
            <div key={index} className="bg-cream p-8 group hover:bg-sage/10 transition-colors duration-300">
              <h3 className="font-serif text-xl font-bold text-navy mb-4 group-hover:text-sage transition-colors">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Planning Packages */}
      <Section background="beige" padding="large">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Planning Packages
          </h2>
          <div className="w-24 h-0.5 bg-sage mx-auto mb-4"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Flexible options designed to meet your specific needs and level of support
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
              className={`bg-white p-8 ${pkg.featured ? 'ring-2 ring-sage transform md:-translate-y-4' : ''}`}
            >
              {pkg.featured && (
                <div className="bg-sage text-white text-xs tracking-widest uppercase px-4 py-2 inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">{pkg.name}</h3>
              <p className="text-charcoal/70 mb-6 leading-relaxed">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-sage mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-charcoal/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className={`block text-center py-3 font-sans text-sm tracking-widest uppercase transition-colors duration-300 ${
                  pkg.featured 
                    ? 'bg-sage text-white hover:bg-navy' 
                    : 'border-2 border-navy text-navy hover:bg-navy hover:text-white'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="white" padding="large">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Ready to Start Planning?
          </h2>
          <div className="w-24 h-0.5 bg-sage mx-auto mb-8"></div>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
            Let's schedule a consultation to discuss your event vision and how we can bring it to life.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-sage text-white px-12 py-5 font-sans text-sm tracking-widest uppercase hover:bg-navy transition-colors duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </Section>
    </main>
  );
}

