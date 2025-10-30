# Yasmine Bateman Events - Luxury Event Planning Website

A sophisticated, luxury event planning website inspired by the elegant design principles of MindyWeiss.com.

## Design Philosophy

### Color Palette
- **Navy Blue** (#1a2332) - Primary brand color
- **Sage Green** (#a8b5a0) - Accent color for CTAs and highlights
- **Cream** (#f8f6f3) - Warm neutral background
- **Beige** (#e8e3dc) - Subtle background variation
- **Charcoal** (#3a3a3a) - Body text
- **Gold** (#c9a96e) - Optional accent

### Typography
- **Playfair Display** - Serif font for headings (elegant, editorial)
- **Montserrat** - Sans-serif for body text (clean, modern)

### Key Design Elements
- **Image-First Approach**: Large, full-width professional photography
- **Generous White Space**: Uncluttered layouts that breathe
- **Subtle Animations**: Gentle fade-ins and smooth transitions
- **Masonry Grid**: For gallery layouts
- **Editorial Quality**: High-end, magazine-style presentation

## Site Structure

### Pages

#### 1. **Home** (`/`)
- Full-screen hero with captivating imagery
- Introduction to Yasmine Bateman Events
- Services preview with three main categories
- Featured gallery grid with 6 recent events
- Testimonials section
- Call-to-action

#### 2. **About** (`/about`)
- About hero section
- Meet Yasmine with professional photo
- Philosophy section with three core values
- Four-step process overview
- Core values grid
- Awards and recognition

#### 3. **Services** (`/services`)
- Services overview
- **Wedding Planning & Design** - Full section with details
- **Corporate Events** - Complete offerings
- **Social Celebrations** - Milestone events
- Additional services grid (6 services)
- Three planning packages (Day-Of, Partial, Full-Service)
- CTA section

#### 4. **Gallery** (`/gallery`)
- Filterable portfolio by category (All, Weddings, Corporate, Social)
- Masonry grid layout with variable heights
- Hover effects revealing event titles
- Featured events section with detailed information
- CTA section

#### 5. **Blog** (`/blog`)
- Featured article highlight
- Grid of recent articles (9 posts)
- Category browsing (8 categories)
- Newsletter signup form
- Article metadata (date, read time, category)

#### 6. **Contact** (`/contact`)
- Contact information sidebar with:
  - Email, phone, office location
  - Office hours
  - Social media links
- Comprehensive booking form with fields:
  - Name, email, phone
  - Event type, date, guest count
  - Budget range
  - Vision/message
- FAQ section (5 common questions)

## Components

### Shared Components

- **Navigation** - Sticky header with smooth scroll, mobile menu
- **Footer** - Brand info, quick links, contact, social media
- **Hero** - Reusable hero component with customizable heights
- **Section** - Wrapper component with background and padding options
- **AnimateOnScroll** - Intersection Observer-based animation component

## Features

### User Experience
- Smooth scroll behavior
- Responsive design (mobile, tablet, desktop)
- Hover effects on images and links
- Form validation
- Scroll-triggered animations
- Custom scrollbar styling
- Text selection styling

### Performance
- Next.js App Router
- Image optimization with Next.js Image component
- Google Fonts optimization
- Lazy loading images
- Efficient CSS with Tailwind v4

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Playfair Display, Montserrat)
- **Images**: Unsplash (placeholder images)

## Getting Started

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Replacing Images
All images currently use Unsplash URLs. To replace with your own:

1. Add images to `/public/images/` folder
2. Update image sources in page files
3. Maintain aspect ratios for best results

### Updating Content
- **Contact Information**: Edit `/src/components/Footer.tsx` and `/src/app/contact/page.tsx`
- **Services**: Edit `/src/app/services/page.tsx`
- **About Story**: Edit `/src/app/about/page.tsx`
- **Testimonials**: Edit `/src/app/page.tsx`

### Color Customization
Edit color variables in `/src/app/globals.css` under `:root`

### Typography
Update font imports in `/src/app/layout.tsx` and CSS variables in `/src/app/globals.css`

## Best Practices

1. **Images**: Use high-resolution, professional photography (minimum 2000px wide)
2. **Content**: Keep text concise and elegant
3. **White Space**: Don't be afraid of empty space
4. **Consistency**: Maintain the established color palette
5. **Mobile**: Test all features on mobile devices

## Future Enhancements

Potential additions:
- Blog post individual pages
- Client portal for event management
- Real-time availability calendar
- Instagram feed integration
- Multi-language support
- Dark mode option
- Video backgrounds for hero sections
- Vendor directory
- Payment integration

## Credits

- Design inspiration: MindyWeiss.com
- Images: Unsplash
- Icons: Heroicons (via SVG)
- Fonts: Google Fonts

---

**Built with ❤️ for Yasmine Bateman Events**

