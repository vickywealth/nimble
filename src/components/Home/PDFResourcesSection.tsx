import { ArrowRight, FileText, Download } from 'lucide-react'
import { useEffect } from 'react'
import { resources } from '../../data/resources'

export default function PDFResourcesSection() {
  const resourceImages = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop', // Startup checklist - business planning
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop', // Tax guide - accounting/finance
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'  // Marketing playbook - digital marketing
  ]

  const handleDownloadClick = (resource: typeof resources[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Direct download - trigger the PDF download directly
    if (resource.file) {
      const link = document.createElement('a')
      link.href = resource.file
      link.download = resource.file.split('/').pop() || resource.slug
      link.click()
    }
    
    // Track event
    trackEvent('download_initiated', { resource: resource.title })
  }



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
    <section id="pdf-resources" className="py-12 lg:py-16 bg-white">
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
                    onClick={(e) => handleDownloadClick(resource, e)}
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

      </div>
    </section>
  )
}
