import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Check
} from 'lucide-react'
import SEO from '../SEO'

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
    title: 'Business Incorporation',
    tagline: 'Start legally, start right.',
    color: 'hsl(221, 83%, 53%)',
    bgColor: 'hsl(221, 83%, 53%, 0.08)',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop',
    desc: 'We handle every step of your business formation — from selecting the right entity type to state filing and ongoing compliance. Get your LLC, S-Corp, or C-Corp set up quickly and correctly.',
    features: ['LLC Formation', 'EIN Registration', 'State Filing & Processing', 'Compliance Assistance', 'Operating Agreements', 'Registered Agent Service'],
    price: 'From $299',
  },
  {
    id: 'marketing',
    title: 'Marketing Services',
    tagline: 'Be seen. Be heard. Convert.',
    color: 'hsl(350, 89%, 60%)',
    bgColor: 'hsl(350, 89%, 60%, 0.08)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
    desc: 'Our marketing team develops comprehensive strategies that build brand awareness, generate leads, and convert customers. From organic growth to paid campaigns — we make every dollar count.',
    features: ['Social Media Management', 'SEO & Content Strategy', 'Brand Identity Design', 'Paid Advertising (Google/Meta)', 'Lead Generation Funnels', 'Email Marketing Campaigns'],
    price: 'From $799/mo',
  },
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    tagline: 'Know your numbers. Grow with confidence.',
    color: 'hsl(32, 100%, 50%)',
    bgColor: 'hsl(32, 100%, 50%, 0.08)',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
    desc: 'Our certified CPAs and bookkeepers keep your finances organized, compliant, and optimized. Stop worrying about taxes and financial reports — we handle it all so you can focus on growth.',
    features: ['Monthly Bookkeeping', 'Payroll Processing', 'Tax Preparation & Filing', 'Financial Reports & P&L', 'Invoicing & AR Management', 'QuickBooks Setup & Support'],
    price: 'From $499/mo',
  },
  {
    id: 'operations',
    title: 'Business Operations',
    tagline: 'Systems that scale with you.',
    color: 'hsl(262, 83%, 58%)',
    bgColor: 'hsl(262, 83%, 58%, 0.08)',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
    desc: 'We design, implement, and optimize the operational systems your business needs to run efficiently at any stage. From CRM to workflow automation — we build the infrastructure for growth.',
    features: ['CRM Setup & Configuration', 'Workflow Automation', 'Operations Management', 'Business Systems Design', 'Process Optimization', 'Team Onboarding & SOPs'],
    price: 'From $649/mo',
  },
  {
    id: 'websites',
    title: 'Website Development',
    tagline: 'A website that works as hard as you do.',
    color: 'hsl(187, 85%, 43%)',
    bgColor: 'hsl(187, 85%, 43%, 0.08)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop',
    desc: 'We design and build professional websites that represent your brand, capture leads, and convert visitors into customers. Modern, fast, responsive, and SEO-optimized — built to impress.',
    features: ['Corporate & Business Websites', 'Landing Page Development', 'Booking & Scheduling Systems', 'E-commerce Websites', 'Mobile Responsive Design', 'SEO-Optimized Architecture'],
    price: 'From $1,499',
  },
  {
    id: 'consulting',
    title: 'Startup Consulting',
    tagline: 'Strategy that moves the needle.',
    color: 'hsl(142, 71%, 45%)',
    bgColor: 'hsl(142, 71%, 45%, 0.08)',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop',
    desc: 'Our experienced consultants work directly with founders and business owners to develop winning strategies. Whether you\'re pre-launch or scaling to 7 figures — we bring the expertise you need.',
    features: ['Business Strategy & Planning', 'Startup Launch Planning', 'Market Analysis & Positioning', 'Pricing Strategy', 'Investor Pitch Prep', 'Business Growth Consulting'],
    price: 'From $350/session',
  },
]

export default function ServicesPage() {
  useScrollReveal()

  return (
    <main className="pt-16">
      <SEO
        title="Business Consulting Services - LLC, Marketing, Accounting & More"
        description="Comprehensive business services: LLC formation, digital marketing, accounting, operations management, web development, and startup consulting. Everything you need to launch and grow."
      />
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
            alt="Business services and consulting team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55" />
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(255, 255, 255, 0.15)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: '"Poppins", sans-serif', lineHeight: '1.1' }}>
              Everything Your Startup Needs
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Six core service areas designed to cover every aspect of starting and growing a successful business in the United States.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">6</div>
                <div className="text-xs text-white/80">Core Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-xs text-white/80">Clients Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-xs text-white/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Service Sections */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0
        return (
          <section
            key={service.id}
            id={service.id}
            className="section-padding"
            style={{ background: isEven ? 'white' : 'hsl(214, 100%, 97%)' }}
          >
            <div className="section-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className={`animate-on-scroll ${!isEven ? 'lg:order-2' : ''}`}>
                  <div
                    className="rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      boxShadow: `0 20px 60px ${service.color}25`,
                      aspectRatio: '4/3',
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`animate-on-scroll ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-5">
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
              </div>
            </div>
          </section>
        )
      })}

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
