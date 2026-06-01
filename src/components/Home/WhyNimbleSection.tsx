import { Link } from 'react-router-dom'
import { CheckCircle2, TrendingUp } from 'lucide-react'
import { useEffect } from 'react'

const features = [
  { title: 'All-In-One Platform', desc: 'Every service your startup needs — legal, financial, marketing, operations — in one place.' },
  { title: 'Expert Team', desc: 'Certified CPAs, marketing strategists, legal consultants, and tech specialists at your service.' },
  { title: 'Proven Playbook', desc: 'A battle-tested framework built from 500+ successful business launches across all industries.' },
  { title: 'Fast Turnaround', desc: 'From LLC filing to website launch, we move fast — your business can be operational in 48 hours.' },
]

export default function WhyNimbleSection() {
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

  const trackEvent = (eventName: string, data?: any) => {
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, {
          event_category: 'engagement',
          ...data
        })
      }
    }
  }

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <span className="section-eyebrow">Why Choose Nimble</span>
            <h2 className="section-title mt-4 mb-6">
              The Smarter Way to Build Your Business
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Most entrepreneurs waste months figuring out incorporation, taxes, marketing, and operations. Nimble streamlines everything so you can focus on what matters most — building your business.
            </p>
            <div className="space-y-4">
              {features.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'hsl(var(--primary))' }}>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-0.5">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <Link to="/about" className="btn-primary text-sm px-6 py-3"
                onClick={() => trackEvent('why_nimble_cta', { cta: 'learn_about_us' })}>
                Learn About Us
              </Link>
              <Link to="/book" className="btn-outline text-sm px-6 py-3"
                onClick={() => trackEvent('why_nimble_cta', { cta: 'book_call' })}>
                Book a Call <span className="ml-1 text-xs opacity-80">(Free)</span>
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-3xl overflow-hidden shadow-hero">
              <img
                src="/images/about.png"
                alt="Nimble consulting team at work"
                className="w-full h-96 object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.style.display = 'none'
                  el.parentElement!.style.background = 'var(--gradient-hero)'
                  el.parentElement!.style.height = '384px'
                  el.parentElement!.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;"><svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='none' viewBox='0 0 24 24'><path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' stroke='white' strokeWidth='1.5' strokeLinecap='round'/><circle cx='9' cy='7' r='4' stroke='white' strokeWidth='1.5'/><path d='M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' stroke='white' strokeWidth='1.5' strokeLinecap='round'/></svg></div>`
                }}
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute top-6 right-6 rounded-2xl p-4 shadow-card-hover"
              style={{ background: 'white', border: '1px solid hsl(var(--border))' }}>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                <span className="text-xs font-semibold text-foreground">Avg. Business Growth</span>
              </div>
              <div className="text-2xl font-bold" style={{ color: 'hsl(var(--primary))' }}>+215%</div>
              <div className="text-xs text-muted-foreground">in first year with Nimble</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
