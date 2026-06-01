import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TrustBadgesSection() {
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
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story Content */}
          <div className="animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ 
                background: 'hsl(var(--accent))', 
                color: 'hsl(var(--primary))',
                border: '1px solid hsl(var(--primary) / 0.15)'
              }}>
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Built for Entrepreneurs, by Entrepreneurs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Nimble was founded in 2015 by a team of entrepreneurs who knew firsthand how overwhelming it was to start a business. From confusing state filing requirements to building an online presence from scratch — the early stages of a startup were unnecessarily complicated.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We built Nimble to change that. Today, we're a comprehensive consulting and operations firm helping hundreds of entrepreneurs across the United States launch, manage, and scale their businesses with confidence — and with less stress.
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: CheckCircle2, label: '500+ Businesses' },
                { icon: CheckCircle2, label: '50 States' },
                { icon: CheckCircle2, label: '4.9/5 Rating' },
                { icon: CheckCircle2, label: 'Since 2015' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-3xl overflow-hidden shadow-medium">
              <img
                src="/images/about.png"
                alt="Nimble team in modern office"
                className="w-full h-96 object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.parentElement!.style.background = 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-light)))'
                  el.parentElement!.style.height = '384px'
                  el.style.display = 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
