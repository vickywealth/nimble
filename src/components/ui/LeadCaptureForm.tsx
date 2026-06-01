import { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Zap } from 'lucide-react'

interface LeadCaptureFormProps {
  title?: string
  subtitle?: string
  incentive?: string
  buttonText?: string
  variant?: 'default' | 'compact' | 'hero'
}

export default function LeadCaptureForm({
  title = 'Get Free Business Growth Resources',
  subtitle = 'Join 5,000+ entrepreneurs receiving weekly tips, templates, and exclusive guides.',
  incentive = 'Plus: Get our Startup Launch Checklist FREE',
  buttonText = 'Get Free Resources',
  variant = 'default'
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    
    // Simulate API call - replace with actual email service integration
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setLoading(false)
    setSubmitted(true)
    setEmail('')
    
    // Track conversion event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lead_capture', {
        event_category: 'conversion',
        event_label: variant
      })
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl p-8 text-center border border-border/50 bg-white">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'hsl(var(--primary) / 0.1)' }}>
          <CheckCircle className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">You're In! 🎉</h3>
        <p className="text-muted-foreground">Check your email for your free resources.</p>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="rounded-xl p-6 border border-border/50 bg-white shadow-soft">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl border border-border/50 text-sm outline-none focus:border-primary transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary px-6 py-3 flex items-center gap-2 whitespace-nowrap disabled:opacity-50"
            style={{
              background: 'hsl(var(--primary))',
              boxShadow: '0 4px 14px 0 hsl(var(--primary) / 0.35)'
            }}
          >
            {loading ? 'Sending...' : buttonText}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="rounded-3xl p-8 lg:p-12 border border-border/50 bg-white shadow-medium relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--primary-light)), transparent)',
          filter: 'blur(40px)'
        }} />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ 
              background: 'hsl(var(--accent))',
              color: 'hsl(var(--primary))',
              border: '1px solid hsl(var(--primary) / 0.15)'
            }}>
            <Zap className="w-3 h-3" />
            Free Resources
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: '"Poppins", sans-serif' }}>
            {title}
          </h3>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-2">
            {subtitle}
          </p>
          <p className="text-sm font-medium" style={{ color: 'hsl(var(--primary))' }}>
            {incentive}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your best email"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border/50 text-base outline-none focus:border-primary transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary px-8 py-4 text-base font-semibold whitespace-nowrap disabled:opacity-50 animate-pulse-glow"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {buttonText}
                  <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </button>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" style={{ color: 'hsl(var(--primary))' }} />
              No spam, ever
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" style={{ color: 'hsl(var(--primary))' }} />
              Unsubscribe anytime
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" style={{ color: 'hsl(var(--primary))' }} />
              Free forever
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
