import { Link } from 'react-router-dom'
import { ArrowRight, Zap, CheckCircle2, Star, TrendingUp, Download, FileText } from 'lucide-react'
import { useEffect } from 'react'

export default function HeroSection() {
  useEffect(() => {
    // Trigger hero animations immediately on mount
    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-fade-up, .animate-fade-in').forEach((el) => {
        el.classList.add('visible')
      })
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const trackEvent = (eventName: string, data?: any) => {
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, {
          event_category: 'conversion',
          ...data
        })
      }
      if ((window as any).fbq) {
        (window as any).fbq('trackCustom', eventName, data)
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Corporate Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          alt="Startup team collaborating in modern office"
          className="w-full h-full object-cover"
          onError={(e) => {
            const el = e.target as HTMLImageElement
            el.style.display = 'none'
            el.parentElement!.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
          }}
        />
        {/* Dark overlay for text readability - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="animate-fade-up mb-8" style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  color: 'white', 
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}>
                <Zap className="w-3.5 h-3.5" style={{ color: 'hsl(var(--primary-light))' }} />
                <span className="text-white/90">Trusted by 500+ Businesses Nationwide</span>
              </span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8"
              style={{ 
                fontFamily: '"Poppins", sans-serif',
                letterSpacing: '-0.02em'
              }}>
              <span className="inline-block animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Expert Startup Consulting
              </span>
              <br />
              <span className="inline-block animate-fade-up" style={{ 
                color: 'hsl(var(--primary-light))', 
                animationDelay: '0.35s',
                textShadow: '0 0 30px hsl(var(--primary-light) / 0.4), 0 0 60px hsl(var(--primary-light) / 0.2)'
              }}>& Business Formation</span>
            </h1>

            {/* Subheadline - Enhanced with urgency */}
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mb-10 animate-fade-up" 
              style={{ animationDelay: '0.5s' }}>
                Launch your LLC in 48 hours with expert consulting in incorporation, marketing, accounting, and operations. 
                Everything you need to start and scale your business — all under one roof. <span className="font-semibold text-white/90">Free consultation available now.</span>
            </p>

            {/* CTA Buttons - Optimized for conversion */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.65s' }}>
              <Link to="/book" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 bg-white text-gray-900 hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-0.5" 
                onClick={() => trackEvent('hero_cta_click', { cta: 'book_consultation' })}>
                Book Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold backdrop-blur-sm transition-all duration-300 border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                onClick={() => trackEvent('hero_cta_click', { cta: 'explore_services' })}>
                Explore Services
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              {[
                { value: '500+', label: 'Businesses Launched', icon: TrendingUp },
                { value: '95%', label: 'Client Satisfaction', icon: Star },
                { value: '10+', label: 'Years Experience', icon: CheckCircle2 },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}>
                    <stat.icon className="w-5 h-5" style={{ color: 'hsl(var(--primary-light))' }} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: '"Poppins", sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: PDF Resource Card */}
          <div className="hidden xl:flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={() => {
                const section = document.getElementById('pdf-resources')
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="block group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2"
                style={{ 
                  width: '360px',
                  background: 'white',
                  border: '1px solid hsl(var(--border))'
                }}>
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--muted))' }}>
                      <FileText className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-foreground" style={{ fontFamily: '"Poppins", sans-serif' }}>Free Resources</div>
                      <div className="text-xs text-muted-foreground">Guides & checklists</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5" style={{ color: 'hsl(var(--primary))' }} />
                      <span className="font-medium">5,000+ downloads</span>
                    </div>
                  </div>
                </div>

                {/* Resource List */}
                <div className="px-6 pb-4 space-y-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-gray-50">
                    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--muted))' }}>
                      <FileText className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">Startup Launch Checklist</div>
                      <div className="text-xs text-muted-foreground">12 pages</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-gray-50">
                    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--muted))' }}>
                      <FileText className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">Tax Guide 2025</div>
                      <div className="text-xs text-muted-foreground">24 pages</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-gray-50">
                    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--muted))' }}>
                      <FileText className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">Marketing Playbook</div>
                      <div className="text-xs text-muted-foreground">18 pages</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-all"
                    style={{ 
                      background: 'hsl(var(--primary))',
                      color: 'white'
                    }}>
                    <Download className="w-4 h-4" />
                    <span>Download All Free</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
