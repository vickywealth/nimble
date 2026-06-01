import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { CheckCircle2, ArrowRight, Target, Eye, Heart, Zap, TrendingUp, Award } from 'lucide-react'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const team = [
  { name: 'Jonathan Reed', title: 'CEO & Lead Consultant', bio: 'Former Fortune 500 executive with 15+ years in business strategy and startup development.', initials: 'JR', color: 'hsl(221, 83%, 53%)' },
  { name: 'Priya Sharma', title: 'Director of Marketing', bio: 'Digital marketing expert who has grown brands from 0 to 7-figure revenues using data-driven strategies.', initials: 'PS', color: 'hsl(262, 83%, 58%)' },
  { name: 'Michael Torres', title: 'Head of Accounting', bio: 'Certified CPA with expertise in small business taxation, bookkeeping, and financial planning.', initials: 'MT', color: 'hsl(142, 71%, 45%)' },
  { name: 'Lauren Kim', title: 'Operations Manager', bio: 'Systems and process optimization specialist with a background in lean management and SaaS operations.', initials: 'LK', color: 'hsl(350, 89%, 60%)' },
]

const values = [
  { icon: Heart, title: 'Integrity', desc: 'We operate with complete transparency and honesty in everything we do. Our clients always come first.', color: 'hsl(350, 89%, 60%)' },
  { icon: Zap, title: 'Innovation', desc: 'We stay ahead of industry trends and use cutting-edge tools to deliver modern solutions that work.', color: 'hsl(32, 100%, 50%)' },
  { icon: TrendingUp, title: 'Growth', desc: 'We measure our success by your growth. Every strategy we build is designed to scale with your business.', color: 'hsl(142, 71%, 45%)' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards. Good enough is never enough — we deliver exceptional results.', color: 'hsl(221, 83%, 53%)' },
]

export default function AboutPage() {
  useScrollReveal()
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
              About Nimble
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Your All-In-One Business Partner
            </h1>
            <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              We're more than a consulting firm — we're the team behind your business's success, from day one through every milestone.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 40C960 20 1200 50 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title mt-4 mb-6">Built for Entrepreneurs, by Entrepreneurs</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Nimble was founded in 2015 by a team of entrepreneurs who knew firsthand how overwhelming it was to start a business. From confusing state filing requirements to building an online presence from scratch — the early stages of a startup were unnecessarily complicated.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We built Nimble to change that. Today, we're a comprehensive consulting and operations firm helping hundreds of entrepreneurs across the United States launch, manage, and scale their businesses with confidence — and with less stress.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Businesses Launched' },
                  { value: '10+', label: 'Years in Business' },
                  { value: '50', label: 'States Served' },
                  { value: '95%', label: 'Client Retention' },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl border border-border bg-white shadow-card text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                    <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-3xl overflow-hidden shadow-hero">
                <img
                  src="/images/about.png"
                  alt="Nimble team in modern office"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.parentElement!.style.background = 'var(--gradient-hero)'
                    el.parentElement!.style.height = '384px'
                    el.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-eyebrow">Our Purpose</span>
            <h2 className="section-title mt-4">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                color: 'hsl(221, 83%, 53%)',
                label: 'Our Mission',
                title: 'Empowering Every Entrepreneur',
                desc: 'To make business ownership accessible and achievable for every entrepreneur by providing expert consulting, operational support, and end-to-end business services — all under one roof. We remove the barriers that prevent great ideas from becoming great businesses.',
              },
              {
                icon: Eye,
                color: 'hsl(262, 83%, 58%)',
                label: 'Our Vision',
                title: 'The Future of Business Building',
                desc: 'To become the most trusted and comprehensive business launch platform in the United States — the place every entrepreneur turns to when they\'re ready to turn their vision into reality. A world where starting and growing a business is simple, supported, and successful.',
              },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-3xl p-8 border border-border shadow-card animate-on-scroll">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${item.color}15` }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <span className="badge mb-3">{item.label}</span>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-eyebrow">What We Stand For</span>
            <h2 className="section-title mt-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title}
                className="service-card text-center p-8 rounded-3xl border border-border bg-white shadow-card animate-on-scroll"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${v.color}15` }}>
                  <v.icon className="w-7 h-7" style={{ color: v.color }} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="section-eyebrow">The People Behind Nimble</span>
            <h2 className="section-title mt-4">Meet Our Experts</h2>
            <p className="section-subtitle mx-auto mt-4">
              A team of certified professionals dedicated to helping your business succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={member.name}
                className="service-card bg-white rounded-3xl p-6 border border-border shadow-card text-center animate-on-scroll"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5 shadow-button"
                  style={{ background: member.color }}>
                  {member.initials}
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: 'hsl(var(--primary))' }}>{member.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                <div className="mt-4 flex items-center justify-center">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="rounded-3xl hero-bg p-10 md:p-16 animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                  style={{ background: 'hsl(0 0% 100% / 0.12)', color: 'white', border: '1px solid hsl(0 0% 100% / 0.2)' }}>
                  Why Choose Us
                </span>
                <h2 className="text-3xl font-bold text-white mb-5" style={{ fontFamily: '"Poppins", sans-serif' }}>
                  The Nimble Difference
                </h2>
                <p className="text-white/75 leading-relaxed mb-6">
                  We don't just consult — we become an extension of your team, working alongside you to ensure every decision moves your business forward.
                </p>
                <div className="space-y-3">
                  {[
                    'Dedicated account manager for every client',
                    'Transparent pricing — no hidden fees',
                    '48-hour response guarantee on all requests',
                    'Monthly performance reviews and strategy calls',
                    'Access to our full network of business partners',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white" />
                      <span className="text-sm text-white/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="inline-block rounded-2xl p-8 text-center"
                  style={{ background: 'hsl(0 0% 100% / 0.1)', border: '1px solid hsl(0 0% 100% / 0.15)' }}>
                  <div className="text-6xl font-bold text-white mb-2">4.9</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-300 text-xl">★</span>)}
                  </div>
                  <div className="text-white/75 text-sm">Average Client Rating</div>
                  <div className="text-white/50 text-xs mt-1">Based on 300+ reviews</div>
                </div>
                <div className="mt-6">
                  <Link to="/book" className="btn-white text-sm px-8 py-3.5">
                    Work With Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
