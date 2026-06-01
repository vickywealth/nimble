import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Star, TrendingUp, Users, Award, Zap,
  Building2, BarChart3, Calculator, Settings, Globe, Lightbulb,
  ChevronRight, Play, Shield, Clock, HeartHandshake
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// ─── Animated Counter ───────────────────────────────────────────
function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1800
          const step = (end / duration) * 16
          const timer = setInterval(() => {
            start += step
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count}{suffix}</span>
}

// ─── Scroll Reveal Hook ──────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Services Preview ────────────────────────────────────────────
const services = [
  { icon: Building2, title: 'Business Incorporation', desc: 'LLC formation, EIN registration, state filing, and compliance assistance.', color: 'hsl(221, 83%, 53%)' },
  { icon: BarChart3, title: 'Marketing Services', desc: 'SEO, social media, branding, paid advertising, and lead generation.', color: 'hsl(142, 71%, 45%)' },
  { icon: Calculator, title: 'Accounting & Bookkeeping', desc: 'Bookkeeping, payroll, tax prep, financial reports, and invoicing.', color: 'hsl(32, 100%, 50%)' },
  { icon: Settings, title: 'Business Operations', desc: 'CRM setup, workflow automation, and process optimization.', color: 'hsl(262, 83%, 58%)' },
  { icon: Globe, title: 'Website Development', desc: 'Corporate sites, e-commerce, booking systems, and mobile design.', color: 'hsl(187, 85%, 43%)' },
  { icon: Lightbulb, title: 'Startup Consulting', desc: 'Strategy, market positioning, pricing, and growth consulting.', color: 'hsl(350, 89%, 60%)' },
]

// ─── Testimonials ────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Marcus Johnson',
    title: 'CEO, TechLaunch Inc.',
    rating: 5,
    text: 'Nimble helped us incorporate our LLC, set up our accounting systems, and build our website — all within 30 days. Their team is incredibly professional and knows exactly what startups need.',
    initials: 'MJ',
    color: 'hsl(221, 83%, 53%)',
  },
  {
    name: 'Sarah Williams',
    title: 'Founder, BloomBakery',
    rating: 5,
    text: 'From zero to a fully operating business in 6 weeks. Nimble handled everything from registration to our online presence. I can\'t imagine doing this without them.',
    initials: 'SW',
    color: 'hsl(350, 89%, 60%)',
  },
  {
    name: 'David Chen',
    title: 'Owner, PrecisionFit Studio',
    rating: 5,
    text: 'The marketing team at Nimble transformed our social media presence. We saw a 340% increase in leads within the first 3 months. Exceptional results!',
    initials: 'DC',
    color: 'hsl(142, 71%, 45%)',
  },
]

// ─── Trust Badges ────────────────────────────────────────────────
const trustBadges = [
  { icon: Shield, label: 'Licensed & Bonded' },
  { icon: Award, label: 'Inc. 5000 Recognized' },
  { icon: Users, label: '500+ Businesses' },
  { icon: Star, label: '4.9/5 Rating' },
]

export default function HomePage() {
  useScrollReveal()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [videoPlaying, setVideoPlaying] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-bg">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, hsl(213, 94%, 68%), transparent)' }} />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, hsl(221, 83%, 53%), transparent)' }} />
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="section-container relative z-10 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                  style={{ background: 'hsl(0 0% 100% / 0.12)', color: 'white', border: '1px solid hsl(0 0% 100% / 0.2)' }}>
                  <Zap className="w-3 h-3" />
                  #1 Startup Consulting Firm in the US
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] animate-fade-up"
                style={{ fontFamily: '"Poppins", sans-serif', animationDelay: '0.1s' }}>
                Launch & Grow Your Business{' '}
                <span className="relative">
                  <span className="relative z-10" style={{ color: 'hsl(213, 94%, 78%)' }}>
                    With Confidence
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10 C60 4, 140 2, 298 6" stroke="hsl(213, 94%, 68%)" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-white/75 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Nimble helps entrepreneurs and small businesses start, manage, and grow with expert support in incorporation, marketing, accounting, operations, and web development.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Link to="/book" className="btn-white text-sm px-7 py-3.5 font-semibold">
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/book" className="btn-ghost-white text-sm px-7 py-3.5">
                  Get Free Consultation
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                {[
                  { value: '500+', label: 'Businesses' },
                  { value: '10+', label: 'Years Exp.' },
                  { value: '95%', label: 'Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: '"Poppins", sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero Visual */}
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Main card */}
                <div className="rounded-3xl overflow-hidden shadow-hero border"
                  style={{ borderColor: 'hsl(0 0% 100% / 0.15)', background: 'hsl(0 0% 100% / 0.05)' }}>
                  {/* Hero image if available, else illustrated dashboard */}
                  <div className="relative" style={{ background: 'hsl(224, 76%, 24%)' }}>
                    <img
                      src="/images/hero.png"
                      alt="Business consultant working with client"
                      className="w-full h-80 object-cover opacity-80"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                    {/* Overlay dashboard */}
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="w-full rounded-2xl p-4 space-y-3"
                        style={{ background: 'hsl(224, 64%, 10% / 0.85)', backdropFilter: 'blur(12px)', border: '1px solid hsl(0 0% 100% / 0.1)' }}>
                        <div className="flex items-center justify-between">
                          <span className="text-white/80 text-xs font-medium">Business Growth</span>
                          <span className="text-xs font-bold" style={{ color: 'hsl(142, 71%, 55%)' }}>↑ +127%</span>
                        </div>
                        <div className="flex items-end gap-1 h-10">
                          {[30, 45, 35, 60, 55, 75, 65, 85, 78, 95, 88, 100].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t-sm transition-all"
                              style={{
                                height: `${h}%`,
                                background: i >= 9 ? 'hsl(var(--primary-light))' : 'hsl(0 0% 100% / 0.2)',
                              }} />
                          ))}
                        </div>
                        <div className="text-xs text-white/50">Revenue — Last 12 months</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-6 -left-6 rounded-2xl p-4 shadow-card-hover animate-float"
                  style={{ background: 'white', border: '1px solid hsl(var(--border))' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-primary">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">LLC Registered!</div>
                      <div className="text-xs text-muted-foreground">Just now</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 rounded-2xl p-4 shadow-card-hover"
                  style={{ background: 'white', border: '1px solid hsl(var(--border))' }}>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['MJ', 'SW', 'DC'].map((init, i) => (
                        <div key={i} className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                          style={{ background: ['hsl(221,83%,53%)', 'hsl(350,89%,60%)', 'hsl(142,71%,45%)'][i] }}>
                          {init}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">500+ Happy Clients</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 star-filled" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 40C960 20 1200 50 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-10 bg-white border-b border-border">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="trust-badge gap-3">
                <Icon className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
            <div className="hidden lg:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Trusted by startups across all 50 states</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: '+', label: 'Businesses Supported', icon: Users, color: 'hsl(221, 83%, 53%)' },
              { value: 10, suffix: '+', label: 'Years of Experience', icon: Award, color: 'hsl(32, 100%, 50%)' },
              { value: 95, suffix: '%', label: 'Client Satisfaction', icon: HeartHandshake, color: 'hsl(142, 71%, 45%)' },
              { value: 48, suffix: 'h', label: 'Avg. Time to Launch', icon: Clock, color: 'hsl(262, 83%, 58%)' },
            ].map((stat) => (
              <div key={stat.label} className="animate-on-scroll text-center group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${stat.color}15` }}>
                  <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                </div>
                <div className="stat-number">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title mt-4 mb-5">
              Everything Your Business Needs,{' '}
              <span className="gradient-text">Under One Roof</span>
            </h2>
            <p className="section-subtitle mx-auto">
              From day one of incorporation to scaling your operations, Nimble provides the expert support your business needs at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="service-card bg-white rounded-3xl p-7 border border-border shadow-card animate-on-scroll group"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `${service.color}15` }}>
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
                <Link to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: 'hsl(var(--primary))' }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '8px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                >
                  Learn More <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/services" className="btn-primary text-sm px-8 py-3.5">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY NIMBLE ── */}
      <section className="section-padding bg-white">
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
                {[
                  { title: 'All-In-One Platform', desc: 'Every service your startup needs — legal, financial, marketing, operations — in one place.' },
                  { title: 'Expert Team', desc: 'Certified CPAs, marketing strategists, legal consultants, and tech specialists at your service.' },
                  { title: 'Proven Playbook', desc: 'A battle-tested framework built from 500+ successful business launches across all industries.' },
                  { title: 'Fast Turnaround', desc: 'From LLC filing to website launch, we move fast — your business can be operational in 48 hours.' },
                ].map((item) => (
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
                <Link to="/about" className="btn-primary text-sm px-6 py-3">
                  Learn About Us
                </Link>
                <Link to="/book" className="btn-outline text-sm px-6 py-3">
                  Book a Call
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
                  <TrendingUp className="w-4 h-4" style={{ color: 'hsl(142, 71%, 45%)' }} />
                  <span className="text-xs font-semibold text-foreground">Avg. Business Growth</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: 'hsl(142, 71%, 45%)' }}>+215%</div>
                <div className="text-xs text-muted-foreground">in first year with Nimble</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-eyebrow">Client Success</span>
            <h2 className="section-title mt-4 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="section-subtitle mx-auto">
              Don't take our word for it — here's what our clients say about working with Nimble.
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-3xl mx-auto">
            <div className="testimonial-card animate-on-scroll">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 star-filled" />
                ))}
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-6 font-medium">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: testimonials[activeTestimonial].color }}>
                  {testimonials[activeTestimonial].initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonials[activeTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeTestimonial].title}</div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeTestimonial ? '28px' : '8px',
                    height: '8px',
                    background: i === activeTestimonial ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-10 animate-on-scroll">
            <Link to="/testimonials" className="btn-outline text-sm px-7 py-3">
              Read All Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIDEO CTA ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="rounded-3xl overflow-hidden relative animate-on-scroll hero-bg">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, hsl(213, 94%, 68%), transparent)' }} />
            </div>
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 space-y-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                  style={{ background: 'hsl(0 0% 100% / 0.12)', color: 'white', border: '1px solid hsl(0 0% 100% / 0.2)' }}>
                  <Zap className="w-3 h-3" />
                  Start Today
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: '"Poppins", sans-serif' }}>
                  Ready to Launch Your Dream Business?
                </h2>
                <p className="text-white/75 leading-relaxed">
                  Join 500+ successful entrepreneurs who chose Nimble as their business partner. Your first consultation is completely free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/book" className="btn-white text-sm px-7 py-3.5">
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/checklist" className="btn-ghost-white text-sm px-7 py-3.5">
                    View Startup Checklist
                  </Link>
                </div>
              </div>

              {/* Video placeholder */}
              <div className="w-full md:w-72 flex-shrink-0">
                <div
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ aspectRatio: '16/9', background: 'hsl(0 0% 0% / 0.3)', border: '2px solid hsl(0 0% 100% / 0.2)' }}
                  onClick={() => setVideoPlaying(!videoPlaying)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-hero transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 ml-0.5" style={{ color: 'hsl(var(--primary))' }} fill="hsl(var(--primary))" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-center text-xs text-white/80">
                    Watch: How Nimble Helped TechLaunch Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { cat: 'Startup Tips', title: '10 Steps to Starting an LLC in 2025', date: 'May 15, 2025', read: '5 min read', color: 'hsl(221, 83%, 53%)' },
              { cat: 'Marketing', title: 'How to Build a $0 Marketing Strategy for Your Startup', date: 'May 10, 2025', read: '7 min read', color: 'hsl(350, 89%, 60%)' },
              { cat: 'Accounting', title: 'The Entrepreneur\'s Guide to Business Taxes in 2025', date: 'May 5, 2025', read: '9 min read', color: 'hsl(142, 71%, 45%)' },
            ].map((post, i) => (
              <Link
                key={post.title}
                to="/blog"
                className="blog-card bg-white rounded-3xl border border-border shadow-card overflow-hidden block animate-on-scroll"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-44 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${post.color}20, ${post.color}40)` }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: post.color }}>
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="badge mb-3">{post.cat}</span>
                  <h3 className="text-base font-semibold text-foreground mb-3 leading-snug line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.read}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
