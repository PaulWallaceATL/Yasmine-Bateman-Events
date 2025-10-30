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
    title: '10 Timeless Wedding Trends That Never Go Out of Style',
    excerpt: 'Discover the classic elements that continue to define elegant weddings year after year. From romantic florals to candlelit ambiance, these trends stand the test of time.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    date: 'October 15, 2024',
    category: 'Wedding Planning',
    readTime: '8 min read',
    slug: 'timeless-wedding-trends'
  };

  const blogPosts: BlogPost[] = [
    {
      title: 'The Art of Creating an Unforgettable Guest Experience',
      excerpt: 'Learn how thoughtful details and personalized touches can transform your event into an extraordinary experience for every guest.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069',
      date: 'October 12, 2024',
      category: 'Event Tips',
      readTime: '6 min read',
      slug: 'unforgettable-guest-experience'
    },
    {
      title: 'Seasonal Color Palettes for Luxury Events',
      excerpt: 'Explore sophisticated color combinations that capture the essence of each season while maintaining timeless elegance.',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070',
      date: 'October 8, 2024',
      category: 'Design & Styling',
      readTime: '5 min read',
      slug: 'seasonal-color-palettes'
    },
    {
      title: 'Corporate Event Planning: Strategies for Success',
      excerpt: 'Essential tips for organizing professional events that impress clients, motivate employees, and achieve business objectives.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
      date: 'October 5, 2024',
      category: 'Corporate Events',
      readTime: '7 min read',
      slug: 'corporate-event-strategies'
    },
    {
      title: 'Choosing the Perfect Venue: A Comprehensive Guide',
      excerpt: 'Navigate the venue selection process with confidence using our expert advice on location, capacity, amenities, and more.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070',
      date: 'October 1, 2024',
      category: 'Venue Selection',
      readTime: '10 min read',
      slug: 'choosing-perfect-venue'
    },
    {
      title: 'Sustainable Event Planning: Luxury Meets Responsibility',
      excerpt: 'Discover how to create stunning events while minimizing environmental impact through thoughtful planning and eco-conscious choices.',
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062',
      date: 'September 28, 2024',
      category: 'Sustainability',
      readTime: '6 min read',
      slug: 'sustainable-event-planning'
    },
    {
      title: 'The Rise of Intimate Celebrations: Less is More',
      excerpt: 'Why smaller gatherings are becoming the gold standard for meaningful celebrations and how to make them extraordinary.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070',
      date: 'September 25, 2024',
      category: 'Trends',
      readTime: '5 min read',
      slug: 'intimate-celebrations'
    },
    {
      title: 'Floral Design 101: Creating Stunning Arrangements',
      excerpt: 'A deep dive into the principles of floral design, from selecting blooms to creating cohesive arrangements that wow.',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070',
      date: 'September 20, 2024',
      category: 'Design & Styling',
      readTime: '9 min read',
      slug: 'floral-design-guide'
    },
    {
      title: 'Destination Weddings: Planning Your Dream Celebration',
      excerpt: 'Everything you need to know about planning a destination wedding, from logistics to creating an unforgettable experience.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069',
      date: 'September 15, 2024',
      category: 'Wedding Planning',
      readTime: '12 min read',
      slug: 'destination-weddings-guide'
    },
    {
      title: 'Lighting Design: Setting the Perfect Mood',
      excerpt: 'Learn how strategic lighting transforms spaces and creates the perfect ambiance for your celebration.',
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2070',
      date: 'September 10, 2024',
      category: 'Design & Styling',
      readTime: '7 min read',
      slug: 'lighting-design-guide'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Insights & Inspiration"
        subtitle="Expert advice, trends, and stories from the world of luxury events"
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
                className="inline-block bg-navy text-white px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-sage transition-colors duration-300"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white group cursor-pointer overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-charcoal/60 mb-3">
                  <span className="text-sage font-semibold">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-sage transition-colors leading-tight">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Wedding Planning', count: '24 articles' },
              { name: 'Design & Styling', count: '18 articles' },
              { name: 'Corporate Events', count: '12 articles' },
              { name: 'Event Tips', count: '21 articles' },
              { name: 'Venue Selection', count: '15 articles' },
              { name: 'Trends', count: '19 articles' },
              { name: 'Sustainability', count: '8 articles' },
              { name: 'Real Events', count: '32 articles' }
            ].map((category, index) => (
              <Link 
                key={index}
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-beige p-6 text-center hover:bg-sage/20 transition-colors duration-300 group"
              >
                <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-sage transition-colors">
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
              className="flex-1 px-6 py-4 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-sage"
              required
            />
            <button
              type="submit"
              className="bg-sage text-white px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-navy transition-colors duration-300 whitespace-nowrap"
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

