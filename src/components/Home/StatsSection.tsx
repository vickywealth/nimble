import { Users, Award, HeartHandshake, Clock } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { clients } from '../../data/clients'
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

const stats = [
  { value: 500, suffix: '+', label: 'Businesses Supported', icon: Users, color: '#65b63d' },
  { value: 10, suffix: '+', label: 'Years of Experience', icon: Award, color: '#4a9a2d' },
  { value: 95, suffix: '%', label: 'Client Satisfaction', icon: HeartHandshake, color: '#3d8b24' },
  { value: 48, suffix: 'h', label: 'Avg. Time to Launch', icon: Clock, color: '#2f7a1a' },
]

export default function StatsSection() {
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
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #6b7280, transparent)', filter: 'blur(60px)' }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #374151, transparent)', filter: 'blur(60px)' }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ 
              background: 'rgba(34, 197, 94, 0.1)', 
              color: '#16a34a',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}>
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Numbers That Speak for Themselves
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Over a decade of empowering businesses with expert consulting and support
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="animate-on-scroll text-center group" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Icon Container */}
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ 
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                    boxShadow: `0 8px 32px ${stat.color}55`
                  }}>
                  <stat.icon className="w-9 h-9 text-white" />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle, ${stat.color}33, transparent 70%)`,
                    filter: 'blur(20px)'
                  }} />
              </div>
              
              {/* Counter */}
              <div className="stat-number mb-3">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Clients */}
        <div className="mt-16 pt-8 border-t border-border animate-on-scroll">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Trusted by Leading Companies
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {clients.map((client, index) => (
                <a
                  key={client.name}
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:opacity-80 animate-on-scroll w-32 sm:w-36 md:w-40"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  title={`Visit ${client.name}`}
                >
                  {/* Logo */}
                  <div className="w-20 h-20 flex items-center justify-center mb-2 overflow-hidden">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement
                        // Fallback to placeholder
                        img.src = `https://via.placeholder.com/80x80/f3f4f6/6b7280?text=${encodeURIComponent(client.name.split(' ').map(n => n[0]).join('').substring(0, 2))}`
                      }}
                    />
                  </div>
                  
                  {/* Company Name */}
                  <span className="text-xs font-semibold text-gray-700 text-center truncate w-full">
                    {client.name}
                  </span>
                  
                  {/* Industry */}
                  <span className="text-xs text-gray-500 mt-0.5">
                    {client.industry}
                  </span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
