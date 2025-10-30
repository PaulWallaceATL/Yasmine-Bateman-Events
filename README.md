# Yasmine Bateman Events - Luxury Event Planning Website

A sophisticated, production-ready event planning website built with cutting-edge web technologies. Inspired by the elegant design principles of MindyWeiss.com, this site showcases advanced animations, 3D graphics, and a premium user experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### Design & UX
- 🎨 **Luxury Design** - Sophisticated color palette (Navy, Sage, Cream) with elegant typography
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🖼️ **Image-First Layout** - Large, full-width professional photography
- 💫 **Smooth Animations** - Framer Motion & GSAP powered interactions
- 📜 **Buttery Smooth Scroll** - Lenis smooth scrolling throughout

### Advanced Features
- 🎭 **3D Loading Animation** - React Three Fiber powered geometric intro
- 🌊 **Parallax Effects** - GSAP ScrollTrigger parallax hero sections
- ✨ **Scroll Animations** - Components animate elegantly as they enter viewport
- 🎯 **Page Transitions** - Smooth transitions between routes
- 📝 **Advanced Forms** - React Hook Form with Zod validation
- 🎨 **Modern Icons** - Lucide React icon library

### Pages
- 🏠 **Home** - Hero, services preview, gallery highlights, testimonials
- 👤 **About** - Story, philosophy, process, values, awards
- 💼 **Services** - Detailed offerings, planning packages
- 🖼️ **Gallery** - Filterable masonry grid portfolio
- 📰 **Blog** - Articles grid with categories and newsletter signup
- 📧 **Contact** - Validated booking form with office information

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd yasmine-bateman-events

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🛠️ Technology Stack

### Core
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling

### Animation & Graphics
- **Framer Motion** - UI animations and page transitions
- **GSAP + ScrollTrigger** - Scroll-based parallax effects
- **React Three Fiber** - 3D graphics with Three.js
- **@react-three/drei** - Three.js helpers
- **Lenis** - Smooth scrolling library

### Forms & Validation
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation

### UI & Icons
- **Lucide React** - Beautiful icon library
- **clsx & tailwind-merge** - Intelligent className merging

## 📁 Project Structure

```
yasmine-bateman-events/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── services/          # Services page
│   │   ├── gallery/           # Gallery page
│   │   ├── blog/              # Blog page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Sticky nav with animations
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero.tsx           # Standard hero component
│   │   ├── ParallaxHero.tsx   # GSAP parallax hero
│   │   ├── Section.tsx        # Section wrapper
│   │   ├── LoadingAnimation.tsx # 3D loading screen
│   │   ├── SmoothScroll.tsx   # Lenis scroll provider
│   │   ├── AnimateOnScroll.tsx # Scroll animation HOC
│   │   ├── EnhancedContactForm.tsx # Validated form
│   │   └── PageTransition.tsx # Route transitions
│   └── lib/                   # Utilities & validation
│       ├── utils.ts           # Helper functions
│       └── validations.ts     # Zod schemas
├── public/                    # Static assets
├── SITE_OVERVIEW.md          # Detailed site documentation
├── ADVANCED_FEATURES.md      # Advanced features guide
└── README.md                 # This file
```

## 🎨 Design System

### Color Palette
```css
Navy Blue:  #1a2332  /* Primary brand */
Sage Green: #a8b5a0  /* Accent color */
Cream:      #f8f6f3  /* Warm background */
Beige:      #e8e3dc  /* Subtle background */
Charcoal:   #3a3a3a  /* Body text */
Gold:       #c9a96e  /* Optional accent */
```

### Typography
- **Headings:** Playfair Display (Serif)
- **Body Text:** Montserrat (Sans-serif)
- **Tracking:** Widened for uppercase elements
- **Leading:** Generous spacing for readability

## 🔧 Customization

### Updating Colors
Edit color variables in `/src/app/globals.css`:
```css
:root {
  --navy: #1a2332;
  --sage: #a8b5a0;
  /* ... */
}
```

### Changing Fonts
Modify font imports in `/src/app/layout.tsx`:
```tsx
const customHeading = YourFont({
  variable: "--font-heading",
  subsets: ["latin"],
});
```

### Replacing Images
1. Add images to `/public/images/`
2. Update image sources in page files
3. Use Next.js `<Image>` component for optimization

### Modifying Forms
Edit validation schema in `/src/lib/validations.ts`:
```tsx
export const contactFormSchema = z.object({
  // Add or modify fields
});
```

## 📚 Documentation

- **[SITE_OVERVIEW.md](./SITE_OVERVIEW.md)** - Complete site structure and features
- **[ADVANCED_FEATURES.md](./ADVANCED_FEATURES.md)** - Advanced features and usage guide

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

The site is optimized for:
- Vercel
- Netlify
- AWS Amplify
- Google Cloud Platform
- Any Node.js hosting

## ⚡ Performance

- ✅ Optimized images with Next.js Image
- ✅ Self-hosted fonts for privacy & speed
- ✅ Automatic code splitting
- ✅ 60fps smooth scrolling
- ✅ Hardware-accelerated CSS animations
- ✅ Lazy loading for images and components
- ✅ Static page generation where possible

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Acknowledgments

- Design inspiration: [MindyWeiss.com](https://mindyweiss.com)
- Images: [Unsplash](https://unsplash.com)
- Icons: [Lucide](https://lucide.dev)
- Fonts: Google Fonts

## 📞 Support

For questions or issues:
1. Check the [documentation](./ADVANCED_FEATURES.md)
2. Review the [site overview](./SITE_OVERVIEW.md)
3. Open an issue on GitHub

---

**Built with ❤️ using cutting-edge web technologies**

Crafted to showcase the best of modern web development: stunning visuals, smooth animations, and exceptional user experience.
