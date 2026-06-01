import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Clock, User, TrendingUp, Send } from 'lucide-react'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const categories = ['All', 'Startup Tips', 'Business Growth', 'Marketing', 'Accounting', 'Operations', 'Entrepreneurship']

const posts = [
  { title: '10 Steps to Starting an LLC in 2025 (Complete Guide)', cat: 'Startup Tips', date: 'May 15, 2025', read: '5 min', author: 'Jonathan Reed', excerpt: 'Starting an LLC doesn\'t have to be complicated. Here\'s the definitive step-by-step guide to forming your LLC correctly and legally in 2025.', featured: true, color: 'hsl(221,83%,53%)' },
  { title: 'How to Build a $0 Marketing Strategy for Your Startup', cat: 'Marketing', date: 'May 10, 2025', read: '7 min', author: 'Priya Sharma', excerpt: 'You don\'t need a big budget to market your startup effectively. Here are 8 high-ROI marketing strategies that cost nothing but your time.', featured: true, color: 'hsl(350,89%,60%)' },
  { title: 'The Entrepreneur\'s Guide to Business Taxes in 2025', cat: 'Accounting', date: 'May 5, 2025', read: '9 min', author: 'Michael Torres', excerpt: 'Tax season doesn\'t have to be stressful. A CPA\'s complete guide to business taxes, deductions, and strategies for small business owners.', featured: true, color: 'hsl(32,100%,50%)' },
  { title: 'How to Scale Your Business from $0 to $1 Million', cat: 'Business Growth', date: 'Apr 28, 2025', read: '11 min', author: 'Jonathan Reed', excerpt: 'The proven framework for scaling a service-based business to 7 figures — including the key hiring decisions, systems, and growth levers.', featured: false, color: 'hsl(142,71%,45%)' },
  { title: 'Why Your Business Needs a CRM (And How to Choose One)', cat: 'Operations', date: 'Apr 22, 2025', read: '6 min', author: 'Lauren Kim', excerpt: 'A good CRM is the backbone of a growing business. Here\'s everything you need to know about choosing and implementing the right CRM for your team.', featured: false, color: 'hsl(262,83%,58%)' },
  { title: '5 Lessons From 500+ Business Launches', cat: 'Entrepreneurship', date: 'Apr 15, 2025', read: '8 min', author: 'Jonathan Reed', excerpt: 'After helping over 500 businesses launch, here are the five most common patterns we see separating the businesses that thrive from those that don\'t.', featured: false, color: 'hsl(187,85%,43%)' },
  { title: 'LLC vs S-Corp: Which Is Right for Your Business?', cat: 'Startup Tips', date: 'Apr 10, 2025', read: '7 min', author: 'Michael Torres', excerpt: 'The LLC vs S-Corp debate confuses many entrepreneurs. Here\'s a clear breakdown of the differences, tax implications, and which is best for you.', featured: false, color: 'hsl(221,83%,53%)' },
  { title: 'The Ultimate Small Business Bookkeeping Checklist', cat: 'Accounting', date: 'Apr 5, 2025', read: '5 min', author: 'Michael Torres', excerpt: 'Keep your finances organized with this monthly bookkeeping checklist used by 500+ successful small businesses managed by Nimble.', featured: false, color: 'hsl(32,100%,50%)' },
  { title: 'Social Media Marketing for Local Businesses in 2025', cat: 'Marketing', date: 'Mar 28, 2025', read: '8 min', author: 'Priya Sharma', excerpt: 'Local businesses have a massive advantage on social media that most don\'t use. Here\'s how to dominate your local market with organic social strategy.', featured: false, color: 'hsl(350,89%,60%)' },
]

export default function BlogPage() {
  useScrollReveal()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.cat === activeCategory
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.cat.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = posts.filter((p) => p.featured)

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 hero-bg overflow-hidden">
        <div className="section-container relative z-10 text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'hsl(0 0% 100% / 0.12)', color: 'white', border: '1px solid hsl(0 0% 100% / 0.2)' }}>
            Business Insights
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ fontFamily: '"Poppins", sans-serif' }}>
            The Nimble Business Blog
          </h1>
          <p className="text-xl text-white/75 max-w-2xl mx-auto mb-8">
            Practical guides, expert insights, and proven strategies for entrepreneurs at every stage.
          </p>
          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm outline-none"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ background: 'white', color: 'hsl(var(--foreground))', boxShadow: 'var(--shadow-hero)' }}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 40C960 20 1200 50 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Featured Posts */}
      {!search && activeCategory === 'All' && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="mb-10 animate-on-scroll">
              <span className="section-eyebrow">Featured</span>
              <h2 className="section-title mt-3">Editor's Picks</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featured.map((post, i) => (
                <div key={post.title} className={`blog-card rounded-3xl overflow-hidden border border-border shadow-card animate-on-scroll ${i === 0 ? 'lg:col-span-2' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={`flex items-center justify-center ${i === 0 ? 'h-56' : 'h-40'}`}
                    style={{ background: `linear-gradient(135deg, ${post.color}20, ${post.color}45)` }}>
                    <TrendingUp className="w-12 h-12" style={{ color: post.color, opacity: 0.6 }} />
                  </div>
                  <div className="p-6">
                    <span className="badge mb-3">{post.cat}</span>
                    <h3 className={`font-bold text-foreground mb-2 leading-snug ${i === 0 ? 'text-xl' : 'text-base'}`}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                        <span>·</span>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.read} read</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Posts */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className="px-4 py-2 rounded-xl text-sm font-medium border transition-all"
                    style={{
                      background: activeCategory === cat ? 'hsl(var(--primary))' : 'hsl(var(--background))',
                      color: activeCategory === cat ? 'white' : 'hsl(var(--foreground))',
                      borderColor: activeCategory === cat ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                    }}>
                    {cat}
                  </button>
                ))}
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filtered.map((post, i) => (
                    <div key={post.title} className="blog-card bg-white rounded-3xl overflow-hidden border border-border shadow-card animate-on-scroll"
                      style={{ animationDelay: `${i * 0.08}s` }}>
                      <div className="h-40 flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${post.color}15, ${post.color}35)` }}>
                        <TrendingUp className="w-10 h-10" style={{ color: post.color, opacity: 0.5 }} />
                      </div>
                      <div className="p-5">
                        <span className="badge mb-3">{post.cat}</span>
                        <h3 className="text-base font-semibold text-foreground mb-2 leading-snug line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.read} read</span>
                          </div>
                          <span className="text-xs font-semibold flex items-center gap-1" style={{ color: 'hsl(var(--primary))' }}>
                            Read <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Newsletter */}
              <div className="bg-white rounded-3xl border border-border shadow-card p-6 animate-on-scroll">
                <h3 className="font-bold text-foreground mb-2">Weekly Insights</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Get the best startup and business tips delivered every Tuesday.
                </p>
                {subscribed ? (
                  <div className="rounded-xl p-3 text-center text-sm font-semibold" style={{ background: 'hsl(142,71%,97%)', color: 'hsl(142,71%,35%)' }}>
                    You're subscribed!
                  </div>
                ) : (
                  <div className="space-y-2">
                    <input
                      type="email"
                      className="form-input text-sm"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      onClick={() => email && setSubscribed(true)}
                      className="btn-primary w-full justify-center text-sm py-2.5">
                      <Send className="w-3.5 h-3.5" />
                      Subscribe Free
                    </button>
                  </div>
                )}
              </div>

              {/* Categories */}
              <div className="bg-white rounded-3xl border border-border shadow-card p-6 animate-on-scroll">
                <h3 className="font-bold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.filter(c => c !== 'All').map((cat) => {
                    const count = posts.filter(p => p.cat === cat).length
                    return (
                      <button key={cat} onClick={() => setActiveCategory(cat)}
                        className="w-full flex items-center justify-between py-2 px-3 rounded-xl text-sm transition-colors hover:bg-accent"
                        style={{ color: activeCategory === cat ? 'hsl(var(--primary))' : 'hsl(var(--foreground))' }}>
                        <span className="font-medium">{cat}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-3xl hero-bg p-6 animate-on-scroll">
                <h3 className="font-bold text-white mb-2">Ready to launch?</h3>
                <p className="text-white/75 text-sm mb-4">Turn these insights into action with a free consultation.</p>
                <Link to="/book" className="btn-white w-full justify-center text-sm py-2.5">
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
