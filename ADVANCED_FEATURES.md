# Advanced Features & Technology Stack

## 🚀 Production-Ready Technology Stack

### Core Framework
- **Next.js 15** with App Router - SSR, static generation, and optimized performance
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework

### Advanced Animation Libraries
- **Framer Motion** - Smooth UI animations, page transitions, and micro-interactions
- **GSAP with ScrollTrigger** - High-performance scroll-based parallax effects
- **React Three Fiber** - 3D graphics with Three.js integration
- **@react-three/drei** - Useful helpers for React Three Fiber

### Enhanced User Experience
- **Lenis** - Buttery smooth scrolling with momentum
- **React Hook Form** - Performant form handling with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **Lucide React** - Beautiful, consistent icon library

### Utility Libraries
- **clsx & tailwind-merge** - Intelligent className merging

## ✨ Implemented Features

### 1. 3D Loading Animation
**Location:** `/src/components/LoadingAnimation.tsx`

A stunning 3D geometric loading screen that appears on initial page load:
- Floating octahedron with metallic sage green material
- Animated torus ring in navy blue
- Smooth fade-out transition after 2.5 seconds
- Creates an immediate luxury impression

**Tech:** React Three Fiber, Framer Motion, @react-three/drei

### 2. Smooth Scroll Experience
**Location:** `/src/components/SmoothScroll.tsx`

Lenis-powered smooth scrolling throughout the entire site:
- Natural momentum-based scrolling
- Configurable duration and easing
- Works seamlessly with GSAP ScrollTrigger
- Enhances the premium feel of the site

**Tech:** Lenis

### 3. Parallax Hero Sections
**Location:** `/src/components/ParallaxHero.tsx`

GSAP-powered parallax effect on hero images:
- Background images move at different speeds during scroll
- Smooth, performant animations using GSAP ScrollTrigger
- Staggered text animations with Framer Motion
- Animated scroll indicator

**Tech:** GSAP, ScrollTrigger, Framer Motion

**Usage:**
```tsx
<ParallaxHero
  title="Your Title"
  subtitle="Your subtitle"
  imageSrc="your-image-url"
  height="full"  // or "large" or "medium"
/>
```

### 4. Animated Navigation
**Location:** `/src/components/Navigation.tsx`

Sophisticated navigation with smooth interactions:
- Sticky header with background fade-in on scroll
- Animated mobile menu with staggered item reveals
- Smooth color transitions
- Active page indicators with animated underlines
- Lucide React icons for menu toggle

**Tech:** Framer Motion, Lucide React

### 5. Enhanced Contact Form
**Location:** `/src/components/EnhancedContactForm.tsx`

Professional form with real-time validation:
- React Hook Form for optimal performance
- Zod schema validation
- Real-time error messages
- Loading states with animated spinner
- Success message with auto-dismiss
- Accessible form controls
- Focus states with colored borders

**Tech:** React Hook Form, Zod, Framer Motion, Lucide React

**Validation Rules:**
- First/Last name: minimum 2 characters
- Email: valid email format
- Event type: required selection
- Message: minimum 10 characters

### 6. Page Transitions
**Location:** `/src/components/PageTransition.tsx`

Smooth transitions between pages:
- Fade and slide animations
- Custom easing curves
- Maintains scroll position
- Works with Next.js App Router

**Tech:** Framer Motion

### 7. Scroll-Based Animations
**Location:** `/src/components/AnimateOnScroll.tsx`

Components animate as they enter the viewport:
- Intersection Observer-based detection
- Multiple animation types: fade-up, fade-in, slide-left, slide-right, scale-up
- Configurable delay
- Performant - only animates once
- Automatic cleanup

**Usage:**
```tsx
<AnimateOnScroll animation="fade-up" delay={200}>
  <YourContent />
</AnimateOnScroll>
```

### 8. Custom Utility Functions
**Location:** `/src/lib/utils.ts`

Smart className merging:
```tsx
import { cn } from '@/lib/utils';

<div className={cn('base-classes', condition && 'conditional-classes')} />
```

### 9. Form Validation Schemas
**Location:** `/src/lib/validations.ts`

Type-safe form validation with Zod:
- Reusable validation schemas
- TypeScript type inference
- Clear error messages
- Easy to extend

## 🎨 Design System

### Colors
```css
--navy: #1a2332      /* Primary brand color */
--sage: #a8b5a0      /* Accent color */
--cream: #f8f6f3     /* Warm background */
--beige: #e8e3dc     /* Subtle background */
--charcoal: #3a3a3a  /* Body text */
--gold: #c9a96e      /* Optional accent */
```

### Typography
- **Headings:** Playfair Display (Serif)
- **Body:** Montserrat (Sans-serif)
- **Tracking:** Widened for uppercase text
- **Leading:** Generous for readability

### Animations
All animations use performance-optimized properties (transform, opacity):
- Duration: 0.6s - 1s
- Easing: Custom cubic-bezier curves
- Stagger: 0.1s - 0.2s between items
- Threshold: 0.1 for Intersection Observer

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Mobile-specific features:
- Hamburger menu with slide-in animation
- Touch-optimized tap targets
- Optimized font sizes
- Simplified layouts

## 🎯 Performance Optimizations

1. **Next.js Image Optimization** - Automatic image optimization and lazy loading
2. **Font Optimization** - Self-hosted Google Fonts with `next/font`
3. **Code Splitting** - Automatic code splitting by route
4. **Smooth Scroll** - Lenis uses requestAnimationFrame for 60fps scrolling
5. **GSAP Performance** - Hardware-accelerated CSS transforms
6. **Form Performance** - React Hook Form minimizes re-renders
7. **Animation Performance** - Transform and opacity only
8. **Lazy Loading** - Images load as they approach viewport

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 🎭 Animation Library Comparison

### When to Use Each

**Framer Motion:**
- UI micro-interactions (hover, tap)
- Page transitions
- Simple scroll animations
- React component animations
- Layout animations

**GSAP:**
- Complex timeline animations
- Scroll-based parallax
- High-performance sequences
- SVG path animations
- Cross-browser consistency

**React Three Fiber:**
- 3D graphics and visualizations
- Loading animations
- Interactive 3D elements
- WebGL effects

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## 🎨 Customization Guide

### Adding New Animations

1. **Framer Motion Animation:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

2. **GSAP Scroll Animation:**
```tsx
useEffect(() => {
  gsap.to(elementRef.current, {
    y: 100,
    scrollTrigger: {
      trigger: elementRef.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  });
}, []);
```

3. **Scroll-Based Component:**
```tsx
<AnimateOnScroll animation="fade-up" delay={300}>
  <YourComponent />
</AnimateOnScroll>
```

### Modifying the Loading Animation

Edit `/src/components/LoadingAnimation.tsx`:
- Change duration: modify `setTimeout` value (line 48)
- Change 3D object: replace `octahedronGeometry` with other geometries
- Change colors: modify `color` props in materials
- Disable: remove `<LoadingAnimation />` from layout

### Customizing Smooth Scroll

Edit `/src/components/SmoothScroll.tsx`:
```tsx
const lenis = new Lenis({
  duration: 1.5,  // Increase for slower scroll
  easing: (t) => t,  // Change easing function
  smoothWheel: true,  // Disable for no smoothing
});
```

## 🔐 Environment Variables

Create `.env.local` for sensitive data:
```env
NEXT_PUBLIC_SITE_URL=https://yasminebateman.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
EMAIL_SERVICE_API_KEY=your-email-service-key
```

## 🎯 Future Enhancements

Potential additions to consider:
- Individual blog post pages with MDX
- CMS integration (Sanity, Contentful)
- Image gallery lightbox with Framer Motion
- Video backgrounds in hero sections
- Advanced GSAP timeline animations
- 3D product showcases
- Interactive event timeline
- Real-time form submission to backend API
- Newsletter integration (Mailchimp, ConvertKit)
- Analytics dashboard
- SEO optimization with next/head
- Sitemap generation
- robots.txt configuration

---

**Built with cutting-edge web technologies for maximum performance and user delight** ✨

