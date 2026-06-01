import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Play } from 'lucide-react'
import { useState, useEffect } from 'react'
import LeadCaptureForm from '../ui/LeadCaptureForm'

export default function VideoCTASection() {
  const [videoPlaying, setVideoPlaying] = useState(false)

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
    <section className="py-12 lg:py-16 bg-white">
      <div className="section-container">
        <div className="rounded-3xl overflow-hidden relative animate-on-scroll" 
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #65b63d, transparent)' }} />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
          </div>
          
          <div className="relative z-10 px-8 py-14 md:px-14 md:py-18">
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Left Content */}
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{ background: 'hsl(0 0% 100% / 0.1)', color: 'white', border: '1px solid hsl(0 0% 100% / 0.15)' }}>
                  <Zap className="w-3.5 h-3.5" />
                  Start Today
                </span>
                
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white leading-tight" style={{ fontFamily: '"Poppins", sans-serif' }}>
                  Ready to Launch Your Dream Business?
                </h2>
                
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Join 500+ successful entrepreneurs who chose Nimble as their business partner. <span className="font-semibold text-white/90">Limited spots available this week — book your free consultation today.</span>
                </p>
                
                {/* CTA Buttons - Enhanced with urgency */}
                <div className="flex flex-wrap gap-3">
                  <Link to="/book" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-105"
                    style={{ background: 'white', color: '#0f3460', boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)' }}
                    onClick={() => trackEvent('video_cta_click', { cta: 'book_consultation' })}>
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/checklist" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/10"
                    style={{ background: 'transparent', color: 'white', border: '1.5px solid hsl(0 0% 100% / 0.3)' }}
                    onClick={() => trackEvent('video_cta_click', { cta: 'view_checklist' })}>
                    View Startup Checklist
                  </Link>
                </div>
                
                {/* Inline Lead Capture */}
                <div className="pt-2">
                  <LeadCaptureForm
                    title="Get Free Weekly Business Tips"
                    subtitle="Join 2,000+ entrepreneurs"
                    buttonText="Subscribe"
                    variant="compact"
                  />
                </div>
              </div>

              {/* Right Content - Video */}
              <div>
                {/* YouTube Video */}
                <div className="w-full">
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    style={{ aspectRatio: '16/9', border: '2px solid #ffffff' }}
                  >
                    {!videoPlaying ? (
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                        onClick={() => setVideoPlaying(true)}
                      >
                        <img 
                          src="https://img.youtube.com/vi/180KJQryGwc/maxresdefault.jpg"
                          alt="Nimble Client Success Story - TechLaunch Inc."
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        <div className="relative z-10 w-20 h-14 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ background: '#ff0000', boxShadow: '0 4px 12px rgba(255, 0, 0, 0.4)' }}>
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    ) : (
                      <iframe
                        src="https://www.youtube.com/embed/180KJQryGwc?autoplay=1&rel=0"
                        title="Nimble Client Success Story"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
