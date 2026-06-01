import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowRight, Quote } from 'lucide-react'

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

const testimonials = [
  { name: 'Marcus Johnson', title: 'CEO, TechLaunch Inc.', initials: 'MJ', color: 'hsl(221,83%,53%)', rating: 5, service: 'Business Incorporation', text: 'Nimble helped us incorporate our LLC, set up our accounting systems, and build our website — all within 30 days. Their team is incredibly professional and knows exactly what startups need. I\'d recommend them to any entrepreneur.', before: 'Unregistered idea with no legal structure', after: 'Fully incorporated LLC with EIN and operating systems' },
  { name: 'Sarah Williams', title: 'Founder, BloomBakery', initials: 'SW', color: 'hsl(350,89%,60%)', rating: 5, service: 'Marketing + Website', text: 'From zero to a fully operating business in 6 weeks. Nimble handled everything from registration to our online presence. I can\'t imagine doing this without them. Our website is stunning and our social media is actually working.', before: 'Zero online presence, no website', after: '2,400+ monthly visitors and $18k in online orders' },
  { name: 'David Chen', title: 'Owner, PrecisionFit Studio', initials: 'DC', color: 'hsl(142,71%,45%)', rating: 5, service: 'Marketing Services', text: 'The marketing team at Nimble transformed our social media presence. We saw a 340% increase in leads within the first 3 months. Their paid ads strategy alone paid for their services 10x over.', before: '12 social followers, no ad strategy', after: '4,500+ followers, 340% lead growth' },
  { name: 'Jennifer Davis', title: 'Owner, Davis Legal PLLC', initials: 'JD', color: 'hsl(262,83%,58%)', rating: 5, service: 'Accounting & Operations', text: 'As a solo attorney, I had no time to manage my books or build systems. Nimble stepped in and took care of everything. My financials are clean, my workflows are automated, and I actually have time to practice law.', before: 'Manual bookkeeping, chaotic operations', after: 'Automated accounting + streamlined workflows' },
  { name: 'Robert Martinez', title: 'Co-Founder, GreenLeaf Roofing', initials: 'RM', color: 'hsl(32,100%,50%)', rating: 5, service: 'Startup Consulting', text: 'We came to Nimble with a roofing business idea and they helped us structure everything from pricing to hiring. In our first year, we hit $400k in revenue. The strategy sessions with Jonathan were game-changing.', before: 'Unstructured idea with no business plan', after: '$400k revenue in year one' },
  { name: 'Alicia Thompson', title: 'Founder, Bloom & Co. Events', initials: 'AT', color: 'hsl(187,85%,43%)', rating: 5, service: 'Website + Marketing', text: 'My website is absolutely gorgeous. The Nimble team nailed my brand perfectly. And then they set up my booking system and ran my first ad campaign — I was fully booked within 3 weeks of launch.', before: 'DIY website, zero paid bookings', after: 'Fully booked calendar within 3 weeks' },
]

const videoTestimonials = [
  { name: 'Marcus Johnson', title: 'TechLaunch Inc.', initials: 'MJ', color: 'hsl(221,83%,53%)', duration: '2:14' },
  { name: 'Sarah Williams', title: 'BloomBakery', initials: 'SW', color: 'hsl(350,89%,60%)', duration: '3:05' },
  { name: 'David Chen', title: 'PrecisionFit Studio', initials: 'DC', color: 'hsl(142,71%,45%)', duration: '1:58' },
]

export default function TestimonialsPage() {
  useScrollReveal()
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? testimonials : testimonials.filter(t => t.service === filter)

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop"
            alt="Happy clients and success stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55" />
        </div>
        
        <div className="section-container relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(255, 255, 255, 0.15)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
            Client Success Stories
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Real Businesses. Real Results.
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            Over 500 entrepreneurs have trusted Nimble to launch and grow their businesses. Here are their stories.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[['500+', 'Businesses Served'], ['4.9★', 'Avg. Rating'], ['95%', 'Satisfaction Rate'], ['$50M+', 'Client Revenue Generated']].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-bold text-white">{v}</div>
                <div className="text-white/60 text-sm mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-eyebrow">Video Stories</span>
            <h2 className="section-title mt-4">Hear It From Our Clients</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {videoTestimonials.map((v, i) => (
              <div key={v.name} className="service-card rounded-3xl overflow-hidden border border-border shadow-card animate-on-scroll cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="h-44 flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${v.color}20, ${v.color}40)` }}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-button"
                      style={{ background: v.color }}>
                      {v.initials}
                    </div>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-card bg-white">
                      <div className="w-0 h-0 border-y-[8px] border-l-[14px] border-y-transparent ml-0.5"
                        style={{ borderLeftColor: v.color }} />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg text-xs font-bold text-white"
                    style={{ background: 'hsl(0 0% 0% / 0.6)' }}>
                    {v.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-semibold text-foreground">{v.name}</div>
                  <div className="text-sm text-muted-foreground">{v.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4 animate-on-scroll">
            <div>
              <span className="section-eyebrow">Written Reviews</span>
              <h2 className="section-title mt-3">What Our Clients Say</h2>
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll">
            {['All', ...Array.from(new Set(testimonials.map(t => t.service)))].map((s) => (
              <button key={s} onClick={() => setFilter(s)}
                className="px-4 py-2 rounded-xl text-sm font-medium border transition-all"
                style={{
                  background: filter === s ? 'hsl(var(--primary))' : 'hsl(var(--background))',
                  color: filter === s ? 'white' : 'hsl(var(--foreground))',
                  borderColor: filter === s ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                }}>
                {s}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <div key={t.name} className="testimonial-card animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: t.color }} />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 star-filled" />)}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-5">"{t.text}"</p>
                <span className="badge mb-4">{t.service}</span>

                {/* Before/After */}
                <div className="rounded-2xl overflow-hidden border border-border mb-5">
                  <div className="grid grid-cols-2">
                    <div className="p-3" style={{ background: 'hsl(0,84%,97%)' }}>
                      <div className="text-xs font-semibold mb-1" style={{ color: 'hsl(0,72%,51%)' }}>Before</div>
                      <p className="text-xs text-foreground leading-snug">{t.before}</p>
                    </div>
                    <div className="p-3" style={{ background: 'hsl(142,71%,97%)' }}>
                      <div className="text-xs font-semibold mb-1" style={{ color: 'hsl(142,71%,35%)' }}>After</div>
                      <p className="text-xs text-foreground leading-snug">{t.after}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { v: '340%', l: 'Avg. Lead Growth', c: 'hsl(142,71%,45%)' },
              { v: '$50M+', l: 'Client Revenue Generated', c: 'hsl(221,83%,53%)' },
              { v: '48hr', l: 'Avg. LLC Formation', c: 'hsl(32,100%,50%)' },
              { v: '4.9/5', l: 'Average Client Rating', c: 'hsl(262,83%,58%)' },
            ].map((s) => (
              <div key={s.l} className="text-center animate-on-scroll service-card rounded-3xl p-6 border border-border shadow-card">
                <div className="text-3xl font-bold mb-2" style={{ color: s.c }}>{s.v}</div>
                <div className="text-sm text-muted-foreground font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container animate-on-scroll">
          <div className="rounded-3xl hero-bg p-10 md:p-14 text-center">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-300 fill-yellow-300" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-white/75 max-w-xl mx-auto mb-8">
              Join 500+ entrepreneurs who chose Nimble to launch and grow their businesses. Your free consultation is waiting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book" className="btn-white text-sm px-8 py-3.5">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-ghost-white text-sm px-8 py-3.5">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
