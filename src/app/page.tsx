'use client';

import ParallaxHero from '@/components/ParallaxHero';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounter from '@/components/AnimatedCounter';
import ParticlesBackground from '@/components/ParticlesBackground';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      {/* Hero Section with Parallax & Particles */}
      <div className="relative">
        <ParticlesBackground />
        <ParallaxHero
          title="Atlanta's Lifestyle Influencer & Event Curator"
          subtitle="Creating unforgettable experiences, authentic content, and meaningful connections throughout Atlanta"
          imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Luxury event"
          height="full"
        />
      </div>

      {/* Statistics Section */}
      <Section background="white" padding="large">
        <div className="relative overflow-hidden gradient-mesh particles-bg">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-rose-gold/5"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl float-smooth"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-rose-gold/10 rounded-full blur-3xl float-smooth" style={{animationDelay: '3s'}}></div>
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group perspective-container"
            >
              <div className="mb-4 inline-block card-3d p-6 neumorphic magnetic">
                <div className="text-5xl md:text-7xl font-bold text-gradient-flow mb-2">
                  <AnimatedCounter end={300} suffix="K+" />
                </div>
                <div className="h-1 w-20 gradient-gold mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <p className="text-elegant text-lg md:text-xl text-charcoal/70 font-semibold">
                Total Followers
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group perspective-container"
            >
              <div className="mb-4 inline-block card-3d p-6 neumorphic magnetic">
                <div className="text-5xl md:text-7xl font-bold text-gradient-flow mb-2">
                  <AnimatedCounter end={130} suffix="K+" />
                </div>
                <div className="h-1 w-20 gradient-gold mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <p className="text-elegant text-lg md:text-xl text-charcoal/70 font-semibold">
                YouTube Subscribers
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group perspective-container"
            >
              <div className="mb-4 inline-block card-3d p-6 neumorphic magnetic">
                <div className="text-5xl md:text-7xl font-bold text-gradient-flow mb-2">
                  <AnimatedCounter end={5} suffix="M+" />
                </div>
                <div className="h-1 w-20 gradient-gold mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <p className="text-elegant text-lg md:text-xl text-charcoal/70 font-semibold">
                Total Video Views
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group perspective-container"
            >
              <div className="mb-4 inline-block card-3d p-6 neumorphic magnetic">
                <div className="text-5xl md:text-7xl font-bold text-gradient-flow mb-2">
                  <AnimatedCounter end={7} suffix="%" />
                </div>
                <div className="h-1 w-20 gradient-gold mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <p className="text-elegant text-lg md:text-xl text-charcoal/70 font-semibold">
                Engagement Rate
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Introduction Section */}
      <Section background="white" padding="large">
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#c9a96e]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#b76e79]/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 block">About Yasmine</span>
                <h2 className="text-display text-4xl md:text-6xl font-bold text-navy mb-6 text-shadow-elegant leading-tight">
                  Atlanta's <span className="text-gradient-flow">Influencer Icon</span>
                </h2>
                <div className="h-1 w-24 gradient-gold mb-8"></div>
                <p className="text-elegant text-xl text-charcoal/80 leading-relaxed mb-6">
                  From Mableton to the heart of Atlanta's influencer scene, Yasmine Bateman has built a community of over 300,000 
                  followers across YouTube, Instagram, and TikTok. Her authentic approach to lifestyle content, fashion, beauty, 
                  and wellness has made her one of Atlanta's most trusted voices in the digital space.
                </p>
                <p className="text-elegant text-xl text-charcoal/80 leading-relaxed mb-8">
                  Beyond creating engaging content, Yasmine curates unforgettable brand experiences and events throughout Atlanta. 
                  Whether hosting intimate influencer gatherings at Ponce City Market or collaborating on major brand activations 
                  at Atlanta's hottest venues, she brings authentic Southern hospitality and creative vision to every project.
                </p>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-3 gradient-rose text-white px-12 py-5 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-1 group"
                >
                  <span>Discover Our Story</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              {/* Right: Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative perspective-container"
              >
                <div className="relative h-[600px] hover-lift animated-border overflow-hidden ripple-effect">
                  <Image
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
                    alt="Luxury event planning"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute bottom-8 left-8 right-8 frosted-glass-ultra p-6 shadow-2xl"
                  >
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-[#c9a96e] mb-1">500+</div>
                        <div className="text-xs uppercase tracking-wider text-charcoal/70">Events</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#c9a96e] mb-1">15+</div>
                        <div className="text-xs uppercase tracking-wider text-charcoal/70">Years</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#c9a96e] mb-1">98%</div>
                        <div className="text-xs uppercase tracking-wider text-charcoal/70">Satisfaction</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#c9a96e]/30 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#c9a96e]/20 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>


      {/* Featured Gallery */}
      <Section background="white" padding="large">
        <div className="text-center mb-20 parallax-reveal">
          <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-display text-5xl md:text-7xl font-bold text-navy mb-6 text-shadow-elegant">
            Signature Events
          </h2>
          <div className="ornamental-divider w-40 mx-auto mb-6"></div>
          <p className="text-elegant text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            A curated selection of extraordinary moments we've crafted for discerning clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', title: 'Corporate Gala', category: 'Corporate' },
            { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', title: 'Executive Summit', category: 'Corporate' },
            { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', title: 'Evening Soirée', category: 'Social' },
            { src: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&q=80', title: 'Milestone Celebration', category: 'Social' },
            { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80', title: 'Luxury Fundraiser', category: 'Gala' },
            { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80', title: 'Grand Ballroom Event', category: 'Gala' },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="hover-lift stacked-cards group relative h-[500px] overflow-hidden cursor-pointer border-2 border-gold/20 hover:border-gold/60 spotlight diagonal-split"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-1 w-20 gradient-gold mb-6"
                ></motion.div>
                <h3 className="text-white text-display text-3xl mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-gold/90 text-xs uppercase tracking-[0.3em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.category}
                </p>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="h-1 w-20 gradient-gold mt-6"
                ></motion.div>
              </div>
              {/* Corner ornaments */}
              <div className="absolute top-4 left-4 text-gold/0 group-hover:text-gold/70 transition-all duration-500 text-3xl">◆</div>
              <div className="absolute bottom-4 right-4 text-gold/0 group-hover:text-gold/70 transition-all duration-500 text-3xl">◆</div>
            </motion.div>
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

      {/* Testimonials Carousel */}
      <Section background="champagne" padding="large">
        <div className="text-center mb-16 parallax-reveal">
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
          <h2 className="text-display text-4xl md:text-6xl font-bold text-navy mb-6 text-shadow-elegant">
            Kind Words
          </h2>
          <div className="ornamental-divider w-32 mx-auto mb-4"></div>
          <p className="text-elegant text-xl text-charcoal/70 max-w-2xl mx-auto">
            Hear from our delighted clients about their extraordinary experiences
          </p>
        </div>

        <TestimonialCarousel />
      </Section>

      {/* Social Media Platforms Showcase */}
      <Section background="white" padding="large">
        <div className="bg-navy -mx-6 md:-mx-12 px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">Connect Everywhere</span>
          <h2 className="text-display text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-elegant">
            Multi-Platform <span className="holographic">Presence</span>
          </h2>
          <div className="ornamental-divider w-32 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              platform: 'YouTube', 
              followers: '130K+', 
              icon: 'yt',
              color: 'from-red-500 to-red-700',
              engagement: 'High Views'
            },
            { 
              platform: 'Instagram', 
              followers: '100K+', 
              icon: 'ig',
              color: 'from-pink-500 via-purple-500 to-orange-500',
              engagement: '6.3% Engagement'
            },
            { 
              platform: 'TikTok', 
              followers: '93K+', 
              icon: 'tt',
              color: 'from-cyan-400 to-pink-500',
              engagement: '7.5% Engagement'
            }
          ].map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="perspective-container"
            >
              <div className="card-3d frosted-glass-ultra p-8 text-center hover-lift magnetic">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white text-4xl font-bold shadow-2xl blob-morph`}>
                  {social.icon === 'yt' && '▶'}
                  {social.icon === 'ig' && '📷'}
                  {social.icon === 'tt' && '♪'}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-gradient-flow">{social.platform}</h3>
                <div className="text-4xl font-bold text-gold mb-2 neon-glow">{social.followers}</div>
                <p className="text-white/70 text-sm">{social.engagement}</p>
                <div className="h-1 w-16 gradient-gold mx-auto mt-4"></div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      {/* Call to Action - Redesigned */}
      <Section background="white" padding="large">
        <div className="relative overflow-hidden gradient-mesh">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a96e] rounded-full blur-3xl float-smooth"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b76e79] rounded-full blur-3xl float-smooth" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-6 block glitch-effect">Let's Collaborate</span>
              <h2 className="text-display text-5xl md:text-7xl lg:text-8xl font-bold text-navy mb-8 text-shadow-elegant leading-tight">
                Your Brand.<br/>
                <span className="holographic">My Influence.</span><br/>
                <span className="text-gradient-flow">Explosive Growth.</span>
              </h2>
              <div className="ornamental-divider w-48 mx-auto mb-12"></div>
              <p className="text-elegant text-2xl md:text-3xl text-charcoal/80 leading-relaxed mb-16 font-light max-w-4xl mx-auto">
                Transform your next event into an extraordinary experience that resonates with sophistication and leaves a lasting impression.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/contact"
                  className="group inline-flex items-center gap-4 gradient-rose text-white px-16 py-7 font-sans text-sm tracking-widest uppercase hover:shadow-2xl glow-effect transition-all duration-500 transform hover:-translate-y-2 ripple-effect magnetic pulse-ring"
                >
                  <span>Partner With Me</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  href="/gallery"
                  className="inline-flex items-center gap-4 bg-white border-2 border-[#c9a96e] text-[#c9a96e] px-12 py-7 font-sans text-sm tracking-widest uppercase hover:bg-[#c9a96e] hover:text-white transition-all duration-500 transform hover:-translate-y-2 shadow-lg magnetic hover-lift"
                >
                  <span>View Portfolio</span>
                </Link>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-sm text-charcoal/50 mt-12 tracking-wide"
              >
                Proudly serving Atlanta, Georgia • From Buckhead to Virginia-Highland
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Section>
    </main>
  );
}
