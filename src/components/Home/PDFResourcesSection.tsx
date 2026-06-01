import { ArrowRight, FileText, Download, X, CheckCircle, Mail, Phone } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import { resources } from '../../data/resources'

interface PDFResourcesSectionProps {
  onModalStateChange?: (isOpen: boolean) => void;
}

export default function PDFResourcesSection({ onModalStateChange }: PDFResourcesSectionProps) {
  const [selectedResource, setSelectedResource] = useState<typeof resources[0] | null>(null)
  const [formData, setFormData] = useState({ email: '', phone: '', agreeTerms: false })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const resourceImages = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop', // Startup checklist - business planning
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop', // Tax guide - accounting/finance
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'  // Marketing playbook - digital marketing
  ]

  const handleDownloadClick = useCallback((resource: typeof resources[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    setSelectedResource(resource)
    setFormData({ email: '', phone: '', agreeTerms: false })
    setSubmitted(false)
    setIsModalOpen(true)
    onModalStateChange?.(true)
    
    // Track event
    trackEvent('download_initiated', { resource: resource.title })
  }, [onModalStateChange])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.agreeTerms) return

    setLoading(true)
    
    // Simulate API call - replace with actual email service integration
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // TODO: Integrate with email service (Mailchimp, SendGrid, etc.)
    // Send email with PDF attachment to user
    // Add user to newsletter list
    
    setLoading(false)
    setSubmitted(true)
    
    // Track conversion
    trackEvent('download_completed', { 
      resource: selectedResource?.title,
      email: formData.email 
    })
  }

  const closeModal = useCallback(() => {
    setSelectedResource(null)
    setFormData({ email: '', phone: '', agreeTerms: false })
    setSubmitted(false)
    setIsModalOpen(false)
    onModalStateChange?.(false)
  }, [onModalStateChange])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

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
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ 
              background: 'hsl(var(--accent))', 
              color: 'hsl(var(--primary))',
              border: '1px solid hsl(var(--primary) / 0.15)'
            }}>
            <FileText className="w-3.5 h-3.5" />
            Free Resources
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Expert Guides & Checklists,
            <span className="block mt-2" style={{ color: 'hsl(var(--primary))' }}>100% Free</span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Download our comprehensive business resources trusted by 5,000+ entrepreneurs. From startup checklists to tax guides, we've got you covered.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div
              key={resource.slug}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="rounded-2xl border border-border bg-white shadow-soft overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full flex flex-col"
              >
                {/* Cover Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={resourceImages[index]}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Pages Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-gray-700 shadow-sm">
                    {resource.pages} pages
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm"
                      style={{ color: resource.coverColor }}>
                      {resource.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {resource.description}
                  </p>

                  {/* Benefits Preview */}
                  <div className="space-y-2 mb-4">
                    {resource.benefits.slice(0, 2).map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: resource.coverColor }} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                    {resource.benefits.length > 2 && (
                      <div className="text-xs font-semibold" style={{ color: resource.coverColor }}>
                        +{resource.benefits.length - 2} more
                      </div>
                    )}
                  </div>

                  {/* Download CTA */}
                  <button
                    type="button"
                    onClick={(e) => {
                      handleDownloadClick(resource, e)
                    }}
                    className="flex items-center gap-2 pt-4 border-t border-border w-full text-left cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ color: resource.coverColor }}
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-semibold">Download Free</span>
                    <ArrowRight className="w-4 h-4 ml-auto transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Resources CTA */}
        <div className="text-center animate-on-scroll">
          <a 
            href="/resources"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ 
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              color: 'white',
              boxShadow: '0 8px 24px hsl(217 91% 55% / 0.3)'
            }}
          >
            Browse All Resources <span className="ml-1 opacity-90">(5,000+ Downloads)</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Download Modal */}
      {isModalOpen && selectedResource && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            closeModal()
          }}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitted ? (
              <>
                {/* Modal Header */}
                <div className="relative p-6 pb-4" style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--primary) / 0.1))' }}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      closeModal()
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/50 transition-colors z-10"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" 
                      style={{ background: selectedResource.coverColor }}>
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: '"Poppins", sans-serif' }}>
                        Get Your Free Resource
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedResource.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleFormSubmit} className="p-6 pt-4 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Enter your details below and we'll email you the <strong>{selectedResource.title}</strong> right away. Please provide a valid email address — your free resource will be sent there.
                  </p>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      <Mail className="w-3.5 h-3.5 inline mr-1.5" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border/50 text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      <Phone className="w-3.5 h-3.5 inline mr-1.5" />
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-border/50 text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Newsletter Consent */}
                  <div className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'hsl(var(--accent))' }}>
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      required
                      className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
                    />
                    <label htmlFor="newsletter" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                      Yes, I'd like to receive promotional emails, newsletters, and exclusive business tips from Nimble. You can unsubscribe at any time.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading || !formData.agreeTerms}
                    className="w-full btn-primary py-3.5 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2 justify-center">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 justify-center">
                        <Mail className="w-4 h-4" />
                        Email Me the Free Resource
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                  style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                  <CheckCircle className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: '"Poppins", sans-serif' }}>
                  Check Your Email! 🎉
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We've sent <strong>{selectedResource.title}</strong> to <strong>{formData.email}</strong>. It should arrive in the next few minutes.
                </p>
                <div className="p-4 rounded-xl mb-6 text-left" style={{ background: 'hsl(var(--accent))' }}>
                  <p className="text-xs text-muted-foreground">
                    <strong>Didn't receive it?</strong> Check your spam folder or make sure you entered the correct email address.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    closeModal()
                  }}
                  className="btn-primary px-8 py-3 text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
