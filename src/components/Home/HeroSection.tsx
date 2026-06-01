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
            <Link to="/resources" className="block group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-3"
                style={{ 
                  width: '380px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}>
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-light)))' }} />
                
                {/* Header Section */}
                <div className="relative p-7 pb-5">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                        style={{ 
                          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-light)) 100%)',
                          boxShadow: '0 8px 24px hsl(var(--primary) / 0.3)'
                        }}>
                        <FileText className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 mb-0.5" style={{ fontFamily: '"Poppins", sans-serif' }}>Free Resources</div>
                        <div className="text-xs text-gray-500 font-medium">Expert guides & checklists</div>
                      </div>
                    </div>
                    {/* Premium badge */}
                    <div className="px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-md"
                      style={{ 
                        background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-light)))',
                        boxShadow: '0 4px 12px hsl(var(--primary) / 0.3)'
                      }}>
                      FREE
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="flex items-center gap-4 mb-5 px-4 py-3 rounded-xl"
                    style={{ background: 'hsl(var(--accent))' }}>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                      <span className="text-xs font-bold text-gray-700">5,000+</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300" />
                    <div className="text-xs text-gray-600 font-medium">Downloads</div>
                    <div className="ml-auto flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3.5 h-3.5" style={{ color: '#F59E0B' }} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resource Preview Cards */}
                <div className="relative px-7 space-y-3 pb-6">
                  <div className="group/item flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-x-1 cursor-pointer"
                    style={{ 
                      background: 'white',
                      borderColor: 'hsl(var(--border))',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                    }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110"
                      style={{ 
                        background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-light)) 100%)',
                        boxShadow: '0 4px 12px hsl(var(--primary) / 0.25)'
                      }}>
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-gray-900 mb-1 truncate">Startup Launch Checklist</div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-semibold">12 pages</span>
                        <span className="w-1 h-1 rounded-full bg-gray-400" />
                        <span className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>PDF</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover/item:text-primary group-hover/item:translate-x-1" />
                  </div>

                  <div className="group/item flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-x-1 cursor-pointer"
                    style={{ 
                      background: 'white',
                      borderColor: 'hsl(var(--border))',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                    }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110"
                      style={{ 
                        background: 'linear-gradient(135deg, hsl(32, 100%, 50%) 0%, hsl(32, 100%, 60%) 100%)',
                        boxShadow: '0 4px 12px hsl(32, 100%, 50% / 0.25)'
                      }}>
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-gray-900 mb-1 truncate">Tax Guide 2025</div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-semibold">24 pages</span>
                        <span className="w-1 h-1 rounded-full bg-gray-400" />
                        <span className="font-semibold" style={{ color: 'hsl(32, 100%, 50%)' }}>PDF</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover/item:translate-x-1" style={{ color: 'hsl(32, 100%, 50%)' }} />
                  </div>
                </div>

                {/* CTA Button */}
                <div className="relative px-7 pb-7">
                  <div className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-light)) 100%)',
                      color: 'white',
                      boxShadow: '0 8px 24px hsl(var(--primary) / 0.35)'
                    }}>
                    <Download className="w-4 h-4" />
                    <span>Download All Free Resources</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
