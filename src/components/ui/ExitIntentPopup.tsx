import { useState, useEffect } from 'react'
import { X, Mail, Gift, CheckCircle, ArrowRight } from 'lucide-react'

/**
 * ExitIntentPopup Component
 * Triggers when user mouse leaves the viewport (desktop) or after time delay (mobile)
 * Offers a lead magnet to capture abandoning visitors
 */
interface ExitIntentPopupProps {
  shouldSuppress?: boolean;
}

export default function ExitIntentPopup({ shouldSuppress = false }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem('exitPopupDismissed')
    if (dismissed || shouldSuppress) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves at the top of the viewport
      if (e.clientY <= 0 && !isVisible && !isDismissed && !shouldSuppress) {
        setIsVisible(true)
        
        // Track event
        trackEvent('exit_intent_triggered')
      }
    }

    // For mobile: show after 45 seconds
    const mobileTimer = setTimeout(() => {
      if (!isVisible && !isDismissed && !shouldSuppress && window.innerWidth < 768) {
        setIsVisible(true)
        trackEvent('exit_intent_triggered_mobile')
      }
    }, 45000)

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [isVisible, isDismissed, shouldSuppress])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    
    // Simulate API call - replace with actual email service
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setLoading(false)
    setSubmitted(true)
    setEmail('')
    
    // Track conversion
    trackEvent('exit_intent_conversion', { email })
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
    sessionStorage.setItem('exitPopupDismissed', 'true')
    
    trackEvent('exit_intent_dismissed')
  }

  const trackEvent = (eventName: string, data?: any) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, {
          event_category: 'exit_intent',
          ...data
        })
      }
      
      // Facebook Pixel
      if ((window as any).fbq) {
        (window as any).fbq('trackCustom', eventName, data)
      }
    }
  }

  if (!isVisible || isDismissed || shouldSuppress) return null

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleDismiss}
        />
        
        {/* Success Modal */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full animate-fade-up">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleDismiss()
            }}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'hsl(var(--primary) / 0.1)' }}>
              <CheckCircle className="w-10 h-10" style={{ color: 'hsl(var(--primary))' }} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Poppins", sans-serif' }}>
              You're In! 🎉
            </h3>
            <p className="text-gray-600 mb-2">
              Check your email for your free resources.
            </p>
            <p className="text-sm text-gray-500">
              We'll also send you weekly business tips and exclusive offers.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />
      
      {/* Popup Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-up">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-2"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-light)), hsl(var(--primary)))'
          }}
        />

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleDismiss()
          }}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 lg:p-10">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ 
              background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-light)) 100%)',
              boxShadow: '0 8px 24px hsl(var(--primary) / 0.3)'
            }}>
            <Gift className="w-8 h-8 text-white" />
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Wait! Don't Miss Out
            </h3>
            <p className="text-gray-600 text-lg mb-2">
              Get our <span className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>FREE Startup Launch Checklist</span>
            </p>
            <p className="text-sm text-gray-500">
              Join 5,000+ entrepreneurs who launched successful businesses with our expert guides.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6 p-4 rounded-xl" style={{ background: 'hsl(var(--accent))' }}>
            {[
              'Step-by-step LLC formation guide',
              'Tax optimization checklist for 2025',
              'Marketing strategy templates',
              'Weekly business growth tips'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'hsl(var(--primary))' }}>
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your best email"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 text-base outline-none focus:border-primary transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl text-base font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-light)) 100%)',
                color: 'white',
                boxShadow: '0 8px 24px hsl(var(--primary) / 0.35)'
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Get My Free Checklist
                  <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </button>
          </form>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" style={{ color: 'hsl(var(--primary))' }} />
              No spam
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" style={{ color: 'hsl(var(--primary))' }} />
              Unsubscribe anytime
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" style={{ color: 'hsl(var(--primary))' }} />
              100% free
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
