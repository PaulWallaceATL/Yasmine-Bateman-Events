import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

export default function Blog() {
  const featuredPost: BlogPost = {
    title: 'Atlanta\'s Most Spectacular Event Venues for 2025',
    excerpt: 'From the historic elegance of the Georgian Terrace to the modern sophistication of Ventanas, discover Atlanta\'s premier venues that are transforming luxury celebrations. We share insider tips from our recent events at these iconic locations.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    date: 'October 28, 2025',
    category: 'Atlanta Events',
    readTime: '8 min read',
    slug: 'atlanta-spectacular-venues-2025'
  };

  const blogPosts: BlogPost[] = [
    {
      title: 'Ponce City Market: Atlanta\'s Hottest Event Space Trend',
      excerpt: 'Inside look at how we transformed the historic Ponce City Market rooftop for a stunning fall gala. Learn why Atlanta\'s most iconic mixed-use development is becoming the go-to venue for memorable celebrations.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069',
      date: 'October 25, 2025',
      category: 'Atlanta Events',
      readTime: '6 min read',
      slug: 'ponce-city-market-event-space'
    },
    {
      title: 'Holiday Events in Atlanta: 2025 Seasonal Trends',
      excerpt: 'From Buckhead galas to Midtown celebrations, discover the color palettes and design themes dominating Atlanta\'s luxury holiday events this year. Plus, our top vendor recommendations.',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070',
      date: 'October 20, 2025',
      category: 'Atlanta Events',
      readTime: '5 min read',
      slug: 'atlanta-holiday-events-2025'
    },
    {
      title: 'Corporate Excellence: Atlanta Tech Hub Events',
      excerpt: 'How Atlanta\'s booming tech scene is redefining corporate celebrations. Featuring our recent successes with Fortune 500 companies at the Atlanta Tech Village and Terminus.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
      date: 'October 18, 2025',
      category: 'Corporate Events',
      readTime: '7 min read',
      slug: 'atlanta-tech-corporate-events'
    },
    {
      title: 'The Beltline Effect: Unique Atlanta Event Venues',
      excerpt: 'Explore how Atlanta\'s Beltline has opened up incredible new event possibilities. From intimate gatherings at Krog Street Market to grand affairs at Ponce City rooftop.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070',
      date: 'October 15, 2025',
      category: 'Atlanta Venues',
      readTime: '10 min read',
      slug: 'atlanta-beltline-venues'
    },
    {
      title: 'Eco-Luxury Events in Atlanta\'s Piedmont Park',
      excerpt: 'Creating stunning sustainable celebrations in Atlanta\'s most beloved green space. Our latest event featured locally-sourced florals and zero-waste catering from Atlanta\'s finest vendors.',
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062',
      date: 'October 12, 2025',
      category: 'Sustainability',
      readTime: '6 min read',
      slug: 'atlanta-sustainable-events'
    },
    {
      title: 'Intimate Atlanta Celebrations: Historic Home Venues',
      excerpt: 'Why Inman Park and Virginia-Highland mansions are perfect for smaller, meaningful gatherings. Plus exclusive access tips for these coveted private venues.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070',
      date: 'October 8, 2025',
      category: 'Atlanta Events',
      readTime: '5 min read',
      slug: 'atlanta-intimate-historic-venues'
    },
    {
      title: 'Atlanta Florists We Love: Southern Botanical Design',
      excerpt: 'Spotlight on Atlanta\'s premier floral designers bringing Southern charm to luxury events. Featuring arrangements from our recent Swan House gala and tips for working with local blooms.',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070',
      date: 'October 5, 2025',
      category: 'Design & Styling',
      readTime: '9 min read',
      slug: 'atlanta-luxury-florists'
    },
    {
      title: 'Georgia Aquarium After Dark: Underwater Elegance',
      excerpt: 'Planning the ultimate Atlanta celebration at the world\'s largest aquarium. Our insider guide to creating magical moments with whale sharks as your backdrop.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069',
      date: 'October 2, 2025',
      category: 'Atlanta Venues',
      readTime: '12 min read',
      slug: 'georgia-aquarium-events'
    },
    {
      title: 'Atlanta Spring Event Season: 2026 Planning Guide',
      excerpt: 'Book now for Atlanta\'s most sought-after spring dates. From dogwood season celebrations to Derby Day parties, here\'s how to plan ahead for Atlanta\'s most beautiful time of year.',
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2070',
      date: 'September 28, 2025',
      category: 'Atlanta Events',
      readTime: '7 min read',
      slug: 'atlanta-spring-planning-2026'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Lifestyle & Influence"
        subtitle="Fashion, beauty, wellness tips, and Atlanta lifestyle insights from your favorite influencer"
        imageSrc="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069"
        imageAlt="Blog"
        height="large"
      />

      {/* Featured Post */}
      <Section background="white" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sage text-sm tracking-widest uppercase mb-4">Featured Article</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Latest Insights
            </h2>
            <div className="w-24 h-0.5 bg-sage mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] w-full group cursor-pointer overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div>
              <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4">
                <span className="text-sage font-semibold">{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="inline-block bg-rose-gold text-charcoal px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-gold transition-colors duration-300"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* All Posts Grid */}
      <Section background="cream" padding="large">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Recent Articles
          </h2>
          <div className="w-24 h-0.5 bg-sage mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden bg-cream">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-charcoal/60 mb-3">
                  <span className="text-sage font-semibold">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-rose-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-charcoal/60">{post.date}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-sage font-sans text-sm tracking-wider uppercase hover:text-navy transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section background="white" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              Browse by Category
            </h2>
            <div className="w-24 h-0.5 bg-sage mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Atlanta Events', count: '32 articles' },
              { name: 'Atlanta Venues', count: '24 articles' },
              { name: 'Corporate Events', count: '18 articles' },
              { name: 'Design & Styling', count: '21 articles' },
              { name: 'Buckhead Galas', count: '15 articles' },
              { name: 'Midtown Events', count: '19 articles' },
              { name: 'Sustainability', count: '12 articles' },
              { name: 'Georgia Celebrations', count: '28 articles' }
            ].map((category, index) => (
              <Link 
                key={index}
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-beige p-4 md:p-6 text-center rounded-lg hover:bg-gold/10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-sm md:text-lg font-bold text-navy mb-2 group-hover:text-rose-gold transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-charcoal/60">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section background="beige" padding="large">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Stay Inspired
          </h2>
          <div className="w-24 h-0.5 bg-sage mx-auto mb-8"></div>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
            Subscribe to our newsletter for exclusive event planning tips, industry insights, and 
            inspiration delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-gold/20 font-sans text-sm focus:outline-none focus:border-gold hover:border-gold/40 transition-all duration-300"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="gradient-rose text-white px-8 py-4 rounded-lg font-sans text-sm tracking-widest uppercase hover:shadow-xl transition-all duration-300 whitespace-nowrap transform hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-charcoal/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>
    </main>
  );
}

