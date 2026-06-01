import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2, BarChart3, Calculator, Settings, Globe, Lightbulb,
  ChevronRight, ArrowRight, Check
} from 'lucide-react'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const services = [
  {
    id: 'incorporation',
    icon: Building2,
    title: 'Business Incorporation',
    tagline: 'Start legally, start right.',
    color: 'hsl(221, 83%, 53%)',
    bgColor: 'hsl(221, 83%, 53%, 0.08)',
    desc: 'We handle every step of your business formation — from selecting the right entity type to state filing and ongoing compliance. Get your LLC, S-Corp, or C-Corp set up quickly and correctly.',
    features: ['LLC Formation', 'EIN Registration', 'State Filing & Processing', 'Compliance Assistance', 'Operating Agreements', 'Registered Agent Service'],
    price: 'From $299',
  },
  {
    id: 'marketing',
    icon: BarChart3,
    title: 'Marketing Services',
    tagline: 'Be seen. Be heard. Convert.',
    color: 'hsl(350, 89%, 60%)',
    bgColor: 'hsl(350, 89%, 60%, 0.08)',
    desc: 'Our marketing team develops comprehensive strategies that build brand awareness, generate leads, and convert customers. From organic growth to paid campaigns — we make every dollar count.',
    features: ['Social Media Management', 'SEO & Content Strategy', 'Brand Identity Design', 'Paid Advertising (Google/Meta)', 'Lead Generation Funnels', 'Email Marketing Campaigns'],
    price: 'From $799/mo',
  },
  {
    id: 'accounting',
    icon: Calculator,
    title: 'Accounting & Bookkeeping',
    tagline: 'Know your numbers. Grow with confidence.',
    color: 'hsl(32, 100%, 50%)',
    bgColor: 'hsl(32, 100%, 50%, 0.08)',
    desc: 'Our certified CPAs and bookkeepers keep your finances organized, compliant, and optimized. Stop worrying about taxes and financial reports — we handle it all so you can focus on growth.',
    features: ['Monthly Bookkeeping', 'Payroll Processing', 'Tax Preparation & Filing', 'Financial Reports & P&L', 'Invoicing & AR Management', 'QuickBooks Setup & Support'],
    price: 'From $499/mo',
  },
  {
    id: 'operations',
    icon: Settings,
    title: 'Business Operations',
    tagline: 'Systems that scale with you.',
    color: 'hsl(262, 83%, 58%)',
    bgColor: 'hsl(262, 83%, 58%, 0.08)',
    desc: 'We design, implement, and optimize the operational systems your business needs to run efficiently at any stage. From CRM to workflow automation — we build the infrastructure for growth.',
    features: ['CRM Setup & Configuration', 'Workflow Automation', 'Operations Management', 'Business Systems Design', 'Process Optimization', 'Team Onboarding & SOPs'],
    price: 'From $649/mo',
  },
  {
    id: 'websites',
    icon: Globe,
    title: 'Website Development',
    tagline: 'A website that works as hard as you do.',
    color: 'hsl(187, 85%, 43%)',
    bgColor: 'hsl(187, 85%, 43%, 0.08)',
    desc: 'We design and build professional websites that represent your brand, capture leads, and convert visitors into customers. Modern, fast, responsive, and SEO-optimized — built to impress.',
    features: ['Corporate & Business Websites', 'Landing Page Development', 'Booking & Scheduling Systems', 'E-commerce Websites', 'Mobile Responsive Design', 'SEO-Optimized Architecture'],
    price: 'From $1,499',
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Startup Consulting',
    tagline: 'Strategy that moves the needle.',
    color: 'hsl(142, 71%, 45%)',
    bgColor: 'hsl(142, 71%, 45%, 0.08)',
    desc: 'Our experienced consultants work directly with founders and business owners to develop winning strategies. Whether you\'re pre-launch or scaling to 7 figures — we bring the expertise you need.',
    features: ['Business Strategy & Planning', 'Startup Launch Planning', 'Market Analysis & Positioning', 'Pricing Strategy', 'Investor Pitch Prep', 'Business Growth Consulting'],
    price: 'From $350/session',
  },
]

export default function ServicesPage() {
  useScrollReveal()
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 hero-bg overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, hsl(213,94%,68%), transparent)' }} />
        </div>
        <div className="section-container relative z-10 text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'hsl(0 0% 100% / 0.12)', color: 'white', border: '1px solid hsl(0 0% 100% / 0.2)' }}>
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Everything Your Startup Needs
            </h1>
            <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Six core service areas designed to cover every aspect of starting and growing a successful business in the United States.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 40C960 20 1200 50 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 bg-white border-b border-border sticky top-16 z-40 shadow-nav">
        <div className="section-container">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: 'hsl(var(--muted))',
                  color: 'hsl(var(--foreground))',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = `${s.color}15`
                  ;(e.currentTarget as HTMLAnchorElement).style.color = s.color
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'hsl(var(--muted))'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'hsl(var(--foreground))'
                }}
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="section-padding"
          style={{ background: index % 2 === 0 ? 'white' : 'hsl(214, 100%, 97%)' }}
        >
          <div className="section-container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`animate-on-scroll ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${service.color}15` }}>
                    <service.icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>
                  <span className="section-eyebrow">{service.tagline}</span>
                </div>
                <h2 className="section-title mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${service.color}20` }}>
                        <Check className="w-3 h-3" style={{ color: service.color }} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link to="/book" className="btn-primary text-sm px-6 py-3">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-sm font-semibold" style={{ color: service.color }}>
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Visual Card */}
              <div className={`animate-on-scroll ${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                style={{ animationDelay: '0.2s' }}>
                <div
                  className="rounded-3xl p-8 border transition-all duration-300 cursor-pointer"
                  style={{
                    background: activeService === service.id ? `${service.color}08` : 'white',
                    borderColor: activeService === service.id ? `${service.color}30` : 'hsl(var(--border))',
                    boxShadow: activeService === service.id ? `0 12px 40px ${service.color}20` : 'var(--shadow-card)',
                  }}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${service.color}15` }}>
                      <service.icon className="w-7 h-7" style={{ color: service.color }} />
                    </div>
                    <span className="text-lg font-bold" style={{ color: service.color }}>{service.price}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.tagline}</p>

                  <div className="space-y-2.5">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${service.color}20` }}>
                          <Check className="w-3 h-3" style={{ color: service.color }} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Link
                      to="/book"
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: service.color }}
                    >
                      Book a Consultation <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="rounded-3xl hero-bg p-10 md:p-16 text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Not Sure Which Services You Need?
            </h2>
            <p className="text-white/75 max-w-xl mx-auto mb-8 leading-relaxed">
              Book a free 30-minute consultation and one of our experts will assess your business needs and recommend the right package for you.
            </p>
            <Link to="/book" className="btn-white text-sm px-8 py-3.5">
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
