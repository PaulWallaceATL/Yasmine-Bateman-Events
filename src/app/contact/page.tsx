import Hero from '@/components/Hero';
import Section from '@/components/Section';
import EnhancedContactForm from '@/components/EnhancedContactForm';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Let's Create Magic Together"
        subtitle="Begin your journey to an unforgettable celebration"
        imageSrc="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072"
        imageAlt="Contact us"
        height="large"
      />

      {/* Contact Form Section */}
      <Section background="white" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">
                Get In Touch
              </h2>
              <div className="w-24 h-0.5 bg-sage mb-8"></div>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
                We'd love to hear about your event vision. Schedule a consultation to discuss 
                how we can bring your celebration to life.
              </p>

              {/* Contact Details */}
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <div className="font-sans text-sm tracking-wider uppercase text-navy mb-1">Email</div>
                    <a href="mailto:yasminebatemanpr@gmail.com" className="text-charcoal/70 hover:text-[#c9a96e] transition-colors">
                      yasminebatemanpr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <div className="font-sans text-sm tracking-wider uppercase text-navy mb-1">Phone</div>
                    <a href="tel:+16787615526" className="text-charcoal/70 hover:text-[#c9a96e] transition-colors">
                      (678) 761-5526
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <div className="font-sans text-sm tracking-wider uppercase text-navy mb-1">Office</div>
                    <p className="text-charcoal/70">
                      Buckhead, Atlanta<br />
                      Georgia 30305<br />
                      Available by Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-cream p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm text-charcoal/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-sans text-sm tracking-wider uppercase text-navy mb-4">Connect With Me</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <a href="https://www.instagram.com/yasminebateman/" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] hover:text-white transition-all duration-300 group"
                     aria-label="Instagram">
                    <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.youtube.com/@yasminebateman" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] hover:text-white transition-all duration-300 group"
                     aria-label="YouTube">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@yasminebateman" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] hover:text-white transition-all duration-300 group"
                     aria-label="TikTok">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
                <a href="https://linktr.ee/Yasminebateman" target="_blank" rel="noopener noreferrer" 
                   className="text-[#c9a96e] hover:text-navy transition-colors text-sm underline">
                  View All Links
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-cream p-8 md:p-12">
              <h3 className="font-serif text-3xl font-bold text-navy mb-2">
                Start Your Journey
              </h3>
              <p className="text-charcoal/70 mb-8">
                Fill out the form below and we'll be in touch within 24 hours.
              </p>

              <EnhancedContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="cream" padding="large">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-0.5 bg-sage mx-auto"></div>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How far in advance should I book your services?',
                answer: 'We recommend booking 12-18 months in advance for weddings and 6-12 months for other events. However, we understand that timelines vary and will do our best to accommodate shorter notice when possible.'
              },
              {
                question: 'Do you plan events outside of Atlanta?',
                answer: 'Absolutely! While we\'re based in Atlanta, we plan events throughout Georgia and the Southeast. We have experience coordinating celebrations in Savannah, Athens, and across the state. Travel expenses are included in our planning fee.'
              },
              {
                question: 'What is your planning process like?',
                answer: 'Our process begins with an initial consultation to understand your vision. From there, we develop a comprehensive plan, source and manage vendors, create design concepts, and oversee every detail through execution day.'
              },
              {
                question: 'Can I customize a planning package?',
                answer: 'Yes! While we offer standard packages, we understand every event is unique. We\'re happy to create a custom package that perfectly fits your needs and budget.'
              },
              {
                question: 'Do you have preferred vendors?',
                answer: 'We have established relationships with exceptional vendors across all categories. While we\'re happy to work with your chosen vendors, our preferred partners have proven track records of excellence.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
