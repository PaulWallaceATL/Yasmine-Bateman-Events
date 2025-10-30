import Hero from '@/components/Hero';
import Section from '@/components/Section';
import EnhancedContactForm from '@/components/EnhancedContactForm';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

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
                      123 Elegant Avenue<br />
                      Suite 456<br />
                      New York, NY 10001
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
                <h3 className="font-sans text-sm tracking-wider uppercase text-navy mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-colors"
                     aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage hover:text-white transition-colors"
                     aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                </div>
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
                question: 'Do you plan destination events?',
                answer: 'Absolutely! We love planning destination events and have experience coordinating celebrations across the country and internationally. Travel expenses are included in our planning fee.'
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
