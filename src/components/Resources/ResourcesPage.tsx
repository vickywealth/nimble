import { Link } from 'react-router-dom'
import { ArrowRight, Download, FileText, CheckCircle } from 'lucide-react'
import SEO from '../SEO'
import { resources } from '../../data/resources'

export default function ResourcesPage() {
  return (
    <main className="pt-16">
      <SEO
        title="Free Business Resources & Guides"
        description="Download free startup checklists, tax guides, and marketing playbooks. Expert resources to help you launch and grow your business."
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-hsl(217, 91%, 55%) via-hsl(221, 83%, 53%) to-hsl(98, 50%, 47%)" />
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-white rounded-full" />
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ 
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)'
              }}>
              <Download className="w-3.5 h-3.5" />
              Free Business Resources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: '"Poppins", sans-serif', lineHeight: '1.1' }}>
              Expert Guides & Resources,
              <span className="block mt-2" style={{ color: 'hsl(98, 50%, 85%)' }}>100% Free</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Download comprehensive guides, checklists, and playbooks used by 5,000+ entrepreneurs to launch and scale successful businesses.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                <div className="text-sm font-bold text-white">5,000+</div>
                <div className="text-xs text-white/75">Downloads</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                <div className="text-sm font-bold text-white">2025</div>
                <div className="text-xs text-white/75">Updated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                <div className="text-sm font-bold text-white">Expert</div>
                <div className="text-xs text-white/75">Reviewed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-hsl(214, 32%, 98%)">
        <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-foreground mb-3">Available Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Choose from our collection of expert-created guides and download instantly</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={resource.slug}
                to={`/resources/${resource.slug}`}
                className="group block rounded-3xl border border-border/50 bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Cover */}
                <div className="h-56 flex items-center justify-center relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${resource.coverColor}15, ${resource.coverColor}35)`
                  }}>
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20" style={{ background: resource.coverColor }} />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15" style={{ background: resource.coverColor }} />
                  
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${resource.coverColor}, ${resource.coverColor}dd)` }}>
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-sm shadow-sm"
                    style={{ color: resource.coverColor }}>
                    {resource.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-2">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{resource.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-bold transition-all group-hover:gap-2"
                      style={{ color: 'hsl(var(--primary))' }}>
                      Download Free
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust Signals */}
          <div className="mt-16 text-center animate-on-scroll">
            <div className="inline-flex items-center gap-6 flex-wrap justify-center">
              {[
                'Used by 5,000+ entrepreneurs',
                'Updated for 2025',
                'Expert-reviewed content'
              ].map((signal) => (
                <div key={signal} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="rounded-3xl bg-gradient-to-br from-hsl(98, 50%, 47%) to-hsl(217, 91%, 55%) p-10 md:p-16 text-center animate-on-scroll relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 bg-white" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10 bg-white" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
                Need Personalized Guidance?
              </h2>
              <p className="text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
                Book a free consultation with our experts and get a customized roadmap for your business success.
              </p>
              <Link to="/book" className="btn-white text-sm px-8 py-3.5 font-semibold">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
