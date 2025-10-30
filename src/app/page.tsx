'use client';

import ParallaxHero from '@/components/ParallaxHero';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        title="Crafting Unforgettable Moments"
        subtitle="Luxury event planning and design for those who seek perfection in every detail"
        imageSrc="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069"
        imageAlt="Elegant celebration"
        height="full"
      />

      {/* Introduction Section */}
      <Section background="white" padding="large">
        <div className="max-w-4xl mx-auto text-center parallax-reveal">
          <h2 className="text-display text-4xl md:text-6xl font-bold text-navy mb-6 text-shadow-elegant">
            Where Vision Meets Reality
          </h2>
          <div className="ornamental-divider w-32 mx-auto mb-8"></div>
          <p className="text-elegant text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-6 font-light">
            Yasmine Bateman Events specializes in creating bespoke celebrations that reflect your unique story. 
            With an unwavering commitment to excellence and an eye for the extraordinary, we transform your 
            dreams into meticulously crafted experiences.
          </p>
          <p className="text-elegant text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-10 font-light">
            From intimate gatherings to grand celebrations, every detail is thoughtfully curated to ensure 
            your event is nothing short of spectacular.
          </p>
          <Link 
            href="/about"
            className="inline-block gradient-rose text-white px-12 py-5 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-1"
          >
            Discover Our Story
          </Link>
        </div>
      </Section>

      {/* Services Preview */}
      <Section background="pearl" padding="large">
        <div className="text-center mb-16 parallax-reveal">
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Services</span>
          <h2 className="text-display text-4xl md:text-6xl font-bold text-navy mb-6 text-shadow-elegant">
            Our Expertise
          </h2>
          <div className="ornamental-divider w-32 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Wedding Planning */}
          <div className="luxury-card stagger-item group text-center bg-white p-8 shadow-lg">
            <div className="relative h-96 mb-8 overflow-hidden image-overlay-gold">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069"
                alt="Wedding planning"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="h-1 w-16 gradient-gold mx-auto mb-6"></div>
            <h3 className="text-display text-3xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">Wedding Planning</h3>
            <p className="text-elegant text-lg text-charcoal/70 leading-relaxed mb-6">
              From intimate ceremonies to grand celebrations, we bring your wedding vision to life with 
              impeccable attention to detail.
            </p>
            <Link href="/services" className="text-rose-gold font-sans text-sm tracking-wider uppercase hover:text-navy transition-colors inline-flex items-center gap-2">
              Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          {/* Corporate Events */}
          <div className="luxury-card stagger-item group text-center bg-white p-8 shadow-lg">
            <div className="relative h-96 mb-8 overflow-hidden image-overlay-gold">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
                alt="Corporate events"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="h-1 w-16 gradient-gold mx-auto mb-6"></div>
            <h3 className="text-display text-3xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">Corporate Events</h3>
            <p className="text-elegant text-lg text-charcoal/70 leading-relaxed mb-6">
              Elevate your brand with sophisticated corporate events that leave lasting impressions on 
              clients and colleagues alike.
            </p>
            <Link href="/services" className="text-rose-gold font-sans text-sm tracking-wider uppercase hover:text-navy transition-colors inline-flex items-center gap-2">
              Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          {/* Social Celebrations */}
          <div className="luxury-card stagger-item group text-center bg-white p-8 shadow-lg">
            <div className="relative h-96 mb-8 overflow-hidden image-overlay-gold">
              <Image
                src="https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2070"
                alt="Social celebrations"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="h-1 w-16 gradient-gold mx-auto mb-6"></div>
            <h3 className="text-display text-3xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">Social Celebrations</h3>
            <p className="text-elegant text-lg text-charcoal/70 leading-relaxed mb-6">
              Mark life's milestones with elegantly designed celebrations that capture the joy and 
              significance of your special moments.
            </p>
            <Link href="/services" className="text-rose-gold font-sans text-sm tracking-wider uppercase hover:text-navy transition-colors inline-flex items-center gap-2">
              Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Gallery */}
      <Section background="white" padding="large">
        <div className="text-center mb-16 parallax-reveal">
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-display text-4xl md:text-6xl font-bold text-navy mb-6 text-shadow-elegant">
            Recent Celebrations
          </h2>
          <div className="ornamental-divider w-32 mx-auto mb-4"></div>
          <p className="text-elegant text-xl text-charcoal/70 max-w-2xl mx-auto">
            A glimpse into the extraordinary events we've had the privilege to create
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069', title: 'Garden Wedding' },
            { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070', title: 'Elegant Reception' },
            { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070', title: 'Floral Design' },
            { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070', title: 'Evening Celebration' },
            { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070', title: 'Intimate Ceremony' },
            { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062', title: 'Grand Ballroom' },
          ].map((item, index) => (
            <div key={index} className="stagger-item luxury-card group relative h-[500px] overflow-hidden cursor-pointer border-glow">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                <div className="h-1 w-16 gradient-gold mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <span className="text-white text-display text-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </span>
                <div className="h-1 w-16 gradient-gold mt-4 transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/gallery"
            className="inline-block gradient-rose text-white px-14 py-6 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-1"
          >
            View Full Gallery
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="champagne" padding="large">
        <div className="text-center mb-16 parallax-reveal">
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
          <h2 className="text-display text-4xl md:text-6xl font-bold text-navy mb-6 text-shadow-elegant">
            Kind Words
          </h2>
          <div className="ornamental-divider w-32 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="luxury-card bg-white p-12 shadow-xl stagger-item">
            <div className="text-gold text-7xl mb-6 font-serif leading-none">"</div>
            <p className="text-elegant text-xl text-charcoal/80 leading-relaxed mb-8 italic">
              Yasmine transformed our wedding into an absolute dream. Every detail was perfect, 
              from the flowers to the lighting. She understood our vision completely and brought 
              it to life in ways we couldn't have imagined.
            </p>
            <div className="h-[2px] bg-gradient-to-r from-gold/50 via-gold to-gold/50 mb-6"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-white text-xl font-serif">S</div>
              <div>
                <p className="text-display text-lg text-navy font-semibold">Sarah & Michael</p>
                <p className="text-sm text-charcoal/60 tracking-wide">June 2024 Wedding</p>
              </div>
            </div>
          </div>

          <div className="luxury-card bg-white p-12 shadow-xl stagger-item">
            <div className="text-gold text-7xl mb-6 font-serif leading-none">"</div>
            <p className="text-elegant text-xl text-charcoal/80 leading-relaxed mb-8 italic">
              Working with Yasmine Bateman Events was the best decision we made for our corporate gala. 
              Professional, creative, and flawlessly executed. Our clients were thoroughly impressed.
            </p>
            <div className="h-[2px] bg-gradient-to-r from-gold/50 via-gold to-gold/50 mb-6"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-white text-xl font-serif">J</div>
              <div>
                <p className="text-display text-lg text-navy font-semibold">Jennifer Chen</p>
                <p className="text-sm text-charcoal/60 tracking-wide">Corporate Event, September 2024</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="white" padding="large">
        <div className="max-w-4xl mx-auto text-center parallax-reveal relative">
          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-rose-gold/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Let's Connect</span>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-8 text-shadow-elegant leading-tight">
              Let's Create Something <span className="text-gold">Beautiful</span> Together
            </h2>
            <div className="ornamental-divider w-32 mx-auto mb-10"></div>
            <p className="text-elegant text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-12 font-light">
              Ready to begin planning your unforgettable event? We'd love to hear about your vision 
              and explore how we can bring it to life.
            </p>
            <Link 
              href="/contact"
              className="inline-block gradient-rose text-white px-16 py-7 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-2 border-glow"
            >
              Start Your Journey
            </Link>
            <p className="text-sm text-charcoal/60 mt-8 tracking-wide">Luxury event planning services available nationwide</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
