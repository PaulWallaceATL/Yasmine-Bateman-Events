import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const socials = [
  {
    href: 'https://www.instagram.com/yasminebateman/',
    label: 'Instagram',
    icon: <Instagram size={18} />,
  },
  {
    href: 'https://www.youtube.com/@yasminebateman',
    label: 'YouTube',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: 'https://www.tiktok.com/@yasminebateman',
    label: 'TikTok',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

const contactDetails = [
  {
    icon: <Mail className="h-4 w-4" />,
    label: 'Email',
    value: 'yasminebatemanpr@gmail.com',
    href: 'mailto:yasminebatemanpr@gmail.com',
  },
  {
    icon: <Phone className="h-4 w-4" />,
    label: 'Phone',
    value: '(678) 761-5526',
    href: 'tel:+16787615526',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-champagne text-charcoal">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-rose-gold/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr,0.9fr,0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-charcoal/50">Yasmine Bateman</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal">
              Content Creator & Event Partner
            </h2>
            <p className="mt-4 max-w-md text-base text-charcoal/70">
              Creating authentic lifestyle content and brand partnerships based in Atlanta, Georgia,
              serving a community of 300K+ engaged followers.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-gold/40 bg-white/80 text-charcoal transition hover:border-rose-gold hover:bg-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Navigate</p>
            <div className="mt-5 grid gap-3 text-sm text-charcoal/70">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 rounded-full border border-rose-gold/0 px-4 py-2 transition hover:border-rose-gold/50 hover:bg-white hover:text-charcoal"
                >
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gold/60" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Get in touch</p>
            <div className="mt-5 space-y-5">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl border border-rose-gold/30 px-4 py-3 text-sm text-charcoal/70 transition hover:border-rose-gold/60 hover:text-charcoal"
                >
                  <span className="rounded-full bg-white/70 p-2 text-gold">{item.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-rose-gold/40 pt-8 text-center">
          <p className="text-sm text-charcoal/60">
            &copy; {currentYear} Yasmine Bateman. All rights reserved. Atlanta, Georgia.
          </p>
        </div>
      </div>
    </footer>
  );
}

