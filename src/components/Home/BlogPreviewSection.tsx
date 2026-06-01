import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { useEffect } from 'react'

const blogPosts = [
  { 
    cat: 'Startup Tips', 
    title: '10 Steps to Starting an LLC in 2025', 
    date: 'May 15, 2025', 
    read: '5 min read', 
    excerpt: 'Starting an LLC doesn\'t have to be complicated. Here\'s the definitive step-by-step guide to forming your LLC correctly and legally in 2025.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    color: 'hsl(221, 83%, 53%)'
  },
  { 
    cat: 'Marketing', 
    title: 'How to Build a $0 Marketing Strategy for Your Startup', 
    date: 'May 10, 2025', 
    read: '7 min read', 
    excerpt: 'You don\'t need a big budget to market your startup effectively. Here are 8 high-ROI marketing strategies that cost nothing but your time.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop',
    color: 'hsl(350, 89%, 60%)'
  },
  { 
    cat: 'Accounting', 
    title: 'The Entrepreneur\'s Guide to Business Taxes in 2025', 
    date: 'May 5, 2025', 
    read: '9 min read', 
    excerpt: 'Tax season doesn\'t have to be stressful. A CPA\'s complete guide to business taxes, deductions, and strategies for small business owners.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop',
    color: 'hsl(32, 100%, 50%)'
  },
]

export default function BlogPreviewSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 lg:py-16" style={{ background: 'hsl(var(--accent))' }}>
      <div className="section-container">
        <div className="flex items-end justify-between mb-12 animate-on-scroll">
          <div>
            <span className="section-eyebrow">Business Insights</span>
            <h2 className="section-title mt-4">
              Latest from Our Blog
            </h2>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>
            View All Posts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Link
              key={post.title}
              to="/blog"
              className="group animate-on-scroll block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-2xl border border-border bg-white shadow-soft overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full flex flex-col">
                {/* Cover Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm"
                      style={{ color: post.color }}>
                      {post.cat}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.read}</span>
                    </div>
                  </div>

                  {/* Read More CTA */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border"
                    style={{ color: post.color }}>
                    <span className="text-sm font-semibold">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-auto transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
