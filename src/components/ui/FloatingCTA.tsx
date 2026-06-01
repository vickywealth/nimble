import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Calendar, ArrowRight, X } from 'lucide-react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      
      // Show when user scrolls to approximately 40% of the page
      const triggerPoint = documentHeight * 0.4
      
      if (scrollPosition > triggerPoint && !isDismissed) {
        setIsVisible(true)
      } else if (scrollPosition < triggerPoint * 0.8) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (isDismissed) return null

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-3 sm:px-4 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)'
        }}
      >
        {/* Subtle gradient accent at top */}
        <div className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-light)), hsl(var(--primary)))'
          }}
        />

        {/* Mobile Layout */}
        <div className="flex sm:hidden items-start gap-3 p-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: 'hsl(var(--accent))',
              border: '1px solid hsl(var(--primary) / 0.15)'
            }}>
            <Calendar className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-gray-900 mb-1.5 leading-tight"
              style={{ fontFamily: '"Poppins", sans-serif' }}>
              Limited Offer: Free 30-Minute Strategy Session
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              Only 3 spots left this week — Book now before they're gone
            </p>

            {/* Mobile CTA Row */}
            <div className="flex items-center gap-2">
              <Link 
                to="/book" 
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-light)) 100%)',
                  color: 'white',
                  boxShadow: '0 4px 16px hsl(var(--primary) / 0.3)'
                }}
              >
                Book
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleDismiss}
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center gap-4 p-5 sm:p-6">
          {/* Icon */}
          <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              background: 'hsl(var(--accent))',
              border: '1px solid hsl(var(--primary) / 0.15)'
            }}>
            <Calendar className="w-7 h-7" style={{ color: 'hsl(var(--primary))' }} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1"
              style={{ fontFamily: '"Poppins", sans-serif' }}>
              Limited Offer: Free 30-Minute Strategy Session
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Only 3 spots left this week — Book now before they're gone
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link 
              to="/book" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-light)) 100%)',
                color: 'white',
                boxShadow: '0 8px 24px hsl(var(--primary) / 0.35)'
              }}
            >
              Book Free Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
