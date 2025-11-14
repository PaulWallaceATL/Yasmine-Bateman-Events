import Hero from '@/components/Hero';
import Section from '@/components/Section';
import EnhancedContactForm from '@/components/EnhancedContactForm';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Let’s Create Magic Together"
        subtitle="Begin your journey to an unforgettable celebration"
        imageSrc="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072"
        imageAlt="Contact us"
        height="large"
      />

      {/* Contact Form Section */}
      <Section background="white" padding="large">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr,1.2fr]">
          <div className="rounded-[32px] border border-charcoal/10 bg-pearl p-8">
            <h2 className="text-3xl font-semibold text-navy">Get In Touch</h2>
            <p className="mt-4 text-charcoal/70">
              We’d love to hear about your event vision. Schedule a consultation to discuss how we can bring your
              celebration to life.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'yasminebatemanpr@gmail.com', href: 'mailto:yasminebatemanpr@gmail.com' },
                { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '(678) 761-5526', href: 'tel:+16787615526' },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  label: 'Office',
                  value: 'Buckhead, Atlanta • Georgia 30305 • Available by Appointment',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-white/0 bg-white/70 p-4">
                  <span className="rounded-full bg-gold/15 p-2 text-gold">{item.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-navy hover:text-rose-gold">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-navy">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/0 bg-white/80 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Office Hours</p>
              <div className="mt-4 space-y-2 text-sm text-charcoal/70">
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

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Connect with me</p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.instagram.com/yasminebateman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-navy transition hover:bg-gold/10"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@yasminebateman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-navy transition hover:bg-gold/10"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@yasminebateman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-navy transition hover:bg-gold/10"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
              <a
                href="https://linktr.ee/Yasminebateman"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-rose-gold underline"
              >
                View All Links
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-charcoal/10 bg-white/90 p-6 shadow-xl md:p-12">
            <h3 className="text-3xl font-semibold text-navy">Let’s Connect</h3>
            <p className="mt-3 text-charcoal/70">Fill out the form below and I’ll get back to you within 24 hours.</p>
            <div className="mt-8">
              <EnhancedContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="cream" padding="large">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-gold">Frequently Asked Questions</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Working together</h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {[
            {
              question: 'How can brands work with you?',
              answer:
                'I offer sponsored content, event hosting, and long-term brand partnerships. Reach out through the contact form with details about your brand and collaboration goals.',
            },
            {
              question: 'What platforms do you create content for?',
              answer:
                'I create content for YouTube (130K+ subscribers), Instagram (100K+ followers), and TikTok (93K+ followers). I can tailor content specifically for each platform.',
            },
            {
              question: 'What types of content do you create?',
              answer:
                'I specialize in lifestyle, fashion, beauty, and wellness content including “Get Ready With Me” videos, product reviews, tutorials, vlogs, and authentic brand integrations.',
            },
            {
              question: 'What is your engagement rate?',
              answer:
                'My average engagement rate is 7%+ across platforms, which is excellent for influencer marketing. My content consistently reaches hundreds of thousands of views.',
            },
            {
              question: 'Do you host events outside of Atlanta?',
              answer:
                'While I’m based in Atlanta, I’m available for events and collaborations throughout Georgia and can travel for the right partnerships.',
            },
          ].map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-white/0 bg-white/80 p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-navy">{faq.question}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
