import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, Target, Layers, Users, Code2, TrendingUp
} from 'lucide-react'
import { useEffect } from 'react'

const services = [
  { 
    icon: Zap,
    title: 'Business Incorporation', 
    desc: 'LLC formation, EIN registration, state filing, and compliance assistance.',
    color: 'hsl(var(--primary))'
  },
  { 
    icon: TrendingUp,
    title: 'Marketing Services', 
    desc: 'SEO, social media, branding, paid advertising, and lead generation.',
    color: 'hsl(142, 71%, 45%)'
  },
  { 
    icon: Target,
    title: 'Accounting & Bookkeeping', 
    desc: 'Bookkeeping, payroll, tax prep, financial reports, and invoicing.',
    color: 'hsl(32, 100%, 50%)'
  },
  { 
    icon: Layers,
    title: 'Business Operations', 
    desc: 'CRM setup, workflow automation, and process optimization.',
    color: 'hsl(262, 83%, 58%)'
  },
  { 
    icon: Code2,
    title: 'Website Development', 
    desc: 'Corporate sites, e-commerce, booking systems, and mobile design.',
    color: 'hsl(187, 85%, 43%)'
  },
  { 
    icon: Users,
    title: 'Startup Consulting', 
    desc: 'Strategy, market positioning, pricing, and growth consulting.',
    color: 'hsl(350, 89%, 60%)'
  },
]

export default function ServicesPreviewSection() {
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
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="section-container">
        {/* Header - Top of Section */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ 
              background: 'hsl(var(--accent))', 
              color: 'hsl(var(--primary))',
              border: '1px solid hsl(var(--primary) / 0.15)'
            }}>
            What We Do
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Everything Your Business Needs,
            <span className="block mt-2" style={{ color: 'hsl(var(--primary))' }}>Under One Roof</span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            From day one of incorporation to scaling your operations, Nimble provides the expert support your business needs at every stage.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Illustration */}
          <div className="lg:col-span-4 animate-on-scroll">
            {/* Illustration */}
            <div className="mt-10">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" 
                alt="Business consulting illustration"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="group animate-on-scroll"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            background: `${service.color}15`,
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: service.color }} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA Button - Below Services */}
        <div className="text-center mt-12 animate-on-scroll">
          <Link to="/services" 
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ 
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              color: 'white',
              boxShadow: '0 8px 24px hsl(217 91% 55% / 0.3)'
            }}
            onClick={() => trackEvent('services_preview_cta')}
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
