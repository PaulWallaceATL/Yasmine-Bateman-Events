'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Image from 'next/image';

type Category = 'all' | 'corporate' | 'social' | 'gala';

interface GalleryItem {
  src: string;
  title: string;
  category: Category;
  height: 'tall' | 'medium' | 'short';
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const galleryItems: GalleryItem[] = [
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070', title: 'Corporate Gala', category: 'corporate', height: 'tall' },
    { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069', title: 'Executive Summit', category: 'corporate', height: 'medium' },
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070', title: 'Evening Soirée', category: 'gala', height: 'tall' },
    { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062', title: 'Grand Ballroom Event', category: 'gala', height: 'medium' },
    { src: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2070', title: 'Milestone Celebration', category: 'social', height: 'short' },
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070', title: 'Intimate Gathering', category: 'social', height: 'tall' },
    { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069', title: 'Luxury Fundraiser', category: 'gala', height: 'medium' },
    { src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072', title: 'Product Launch Event', category: 'corporate', height: 'tall' },
    { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070', title: 'Anniversary Gala', category: 'social', height: 'medium' },
    { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070', title: 'Elegant Reception', category: 'gala', height: 'short' },
    { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070', title: 'Floral Design', category: 'gala', height: 'medium' },
    { src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070', title: 'Brand Activation', category: 'corporate', height: 'tall' },
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069', title: 'Luxury Dinner', category: 'social', height: 'short' },
    { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070', title: 'Conference Hall', category: 'corporate', height: 'medium' },
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070', title: 'Award Ceremony', category: 'gala', height: 'tall' },
  ];

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Events' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'gala', label: 'Galas' },
    { value: 'social', label: 'Social' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getHeightClass = (height: string) => {
    switch(height) {
      case 'tall': return 'h-[500px]';
      case 'medium': return 'h-[350px]';
      case 'short': return 'h-[250px]';
      default: return 'h-[350px]';
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Atlanta Event Portfolio"
        subtitle="A collection of our most memorable celebrations across Atlanta's premier venues"
        imageSrc="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070"
        imageAlt="Gallery"
        height="large"
      />

      {/* Gallery Section */}
      <Section background="white" padding="large">
        <div className="text-center mb-20 parallax-reveal">
          <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 block">Our Work</span>
          <h2 className="text-display text-5xl md:text-7xl font-bold text-navy mb-6 text-shadow-elegant">
            Event Portfolio
          </h2>
          <div className="ornamental-divider w-40 mx-auto mb-12"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-500 luxury-card ${
                  selectedCategory === category.value
                    ? 'gradient-rose text-white shadow-2xl transform scale-105'
                    : 'bg-pearl text-charcoal hover:bg-champagne border border-gold/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className={`break-inside-avoid luxury-card stagger-item group cursor-pointer ${getHeightClass(item.height)} relative overflow-hidden border-2 border-gold/10 hover:border-gold/40`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-115"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-8">
                <div className="h-1 w-20 gradient-gold mb-6 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"></div>
                <h3 className="text-white text-display text-2xl md:text-3xl mb-3 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {item.title}
                </h3>
                <p className="text-gold/90 text-xs uppercase tracking-[0.3em] transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {item.category}
                </p>
                <div className="h-1 w-20 gradient-gold mt-6 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-250"></div>
              </div>

              {/* Corner Ornaments on Hover */}
              <div className="absolute top-4 left-4 text-gold/0 group-hover:text-gold/60 transition-all duration-500 text-2xl">◆</div>
              <div className="absolute bottom-4 right-4 text-gold/0 group-hover:text-gold/60 transition-all duration-500 text-2xl">◆</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Events */}
      <Section background="pearl" padding="large">
        <div className="text-center mb-20 parallax-reveal">
          <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 block">Spotlight</span>
          <h2 className="text-display text-5xl md:text-7xl font-bold text-navy mb-6 text-shadow-elegant">
            Featured Projects
          </h2>
          <div className="ornamental-divider w-40 mx-auto mb-6"></div>
          <p className="text-elegant text-2xl text-charcoal/70 max-w-3xl mx-auto">
            Showcasing our most exceptional event experiences
          </p>
        </div>

        <div className="space-y-24 max-w-7xl mx-auto">
          {/* Featured Event 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center luxury-card bg-white p-8 shadow-2xl">
            <div className="stagger-item">
              <div className="relative h-[600px] w-full overflow-hidden image-overlay-gold border-glow">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
                  alt="Luxury Corporate Gala"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="stagger-item">
              <div className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-4">Corporate Gala</div>
              <h3 className="text-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Tech Fortune 500 Summit
              </h3>
              <div className="h-1 w-24 gradient-gold mb-8"></div>
              <p className="text-elegant text-xl text-charcoal/70 leading-relaxed mb-8">
                A prestigious corporate gathering at Atlanta's premier event venue featuring state-of-the-art 
                presentations, sophisticated networking lounges, and exquisite Southern-inspired dining experiences. 
                This event elevated the company's brand presence and fostered meaningful connections among tech leaders.
              </p>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="bg-champagne p-4">
                  <div className="font-sans text-navy font-semibold mb-2 tracking-wide">Location</div>
                  <div className="text-charcoal/70">Ventanas Atlanta</div>
                </div>
                <div className="bg-champagne p-4">
                  <div className="font-sans text-navy font-semibold mb-2 tracking-wide">Guest Count</div>
                  <div className="text-charcoal/70">350 Attendees</div>
                </div>
                <div className="bg-champagne p-4">
                  <div className="font-sans text-navy font-semibold mb-2 tracking-wide">Season</div>
                  <div className="text-charcoal/70">Fall 2025</div>
                </div>
                <div className="bg-champagne p-4">
                  <div className="font-sans text-navy font-semibold mb-2 tracking-wide">Style</div>
                  <div className="text-charcoal/70">Modern Luxury</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Event 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center luxury-card bg-white p-8 shadow-2xl">
            <div className="order-2 lg:order-1 stagger-item">
              <div className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-4">Fundraiser Gala</div>
              <h3 className="text-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Swan House Charity Gala
              </h3>
              <div className="h-1 w-24 gradient-gold mb-8"></div>
              <p className="text-elegant text-xl text-charcoal/70 leading-relaxed mb-8">
                An elegant fundraising gala at Atlanta's historic Swan House featuring live jazz entertainment, 
                silent auction displays, and sophisticated Southern-inspired dining. This landmark event raised 
                record contributions while providing guests with an unforgettable evening combining Atlanta history 
                with modern luxury.
              </p>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="bg-champagne p-4">
                  <div className="font-sans text-navy font-semibold mb-2 tracking-wide">Location</div>
                  <div className="text-charcoal/70">Swan House, Atlanta</div>
                </div>
                <div className="bg-champagne p-4">
                  <div className="font-sans text-navy font-semibold mb-2 tracking-wide">Guest Count</div>
                  <div className="text-charcoal/70">400 Attendees</div>
                </div>
                <div className="bg-champagne p-4">
                  <div className="font-sans text-navy font-semibold mb-2 tracking-wide">Season</div>
                  <div className="text-charcoal/70">Spring 2025</div>
                </div>
                <div className="bg-champagne p-4">
                  <div className="font-sans text-navy font-semibold mb-2 tracking-wide">Style</div>
                  <div className="text-charcoal/70">Classic Southern Elegance</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 stagger-item">
              <div className="relative h-[600px] w-full overflow-hidden image-overlay-gold border-glow">
                <Image
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
                  alt="Charity Fundraiser Gala"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="white" padding="large">
        <div className="max-w-4xl mx-auto text-center parallax-reveal relative">
          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 block">Let's Begin</span>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-8 text-shadow-elegant leading-tight">
              Ready to Create Your Own <span className="text-[#c9a96e]">Unforgettable</span> Event?
            </h2>
            <div className="ornamental-divider w-32 mx-auto mb-10"></div>
            <p className="text-elegant text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-12 font-light">
              Let's bring your vision to life with the same attention to detail and creative excellence.
            </p>
            <a 
              href="/contact"
              className="inline-block gradient-rose text-white px-16 py-7 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-2 border-glow"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

