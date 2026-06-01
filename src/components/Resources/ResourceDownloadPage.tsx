import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FileText, CheckCircle, Zap } from 'lucide-react'
import SEO from '../SEO'
import LeadCaptureForm from '../ui/LeadCaptureForm'
import { getResourceBySlug } from '../../data/resources'

export default function ResourceDownloadPage() {
  const { slug } = useParams<{ slug: string }>()
  const resource = getResourceBySlug(slug || '')

  if (!resource) {
    return (
      <main className="section-padding bg-white">
        <div className="section-container text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Resource Not Found</h1>
          <Link to="/resources" className="btn-primary">
            Back to Resources
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <SEO
        title={`${resource.title} - Free Download`}
        description={resource.description}
      />

      {/* Back Button */}
      <div className="section-container pt-24 pb-8">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </Link>
      </div>

      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{ 
                  background: 'hsl(var(--accent))',
                  color: resource.coverColor,
                  border: `1px solid ${resource.coverColor}30`
                }}>
                <FileText className="w-3 h-3" />
                {resource.category} • {resource.pages} Pages
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
                {resource.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {resource.longDescription}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">What's Inside:</h3>
                {resource.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                  <span>5,000+ downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                  <span>Updated 2025</span>
                </div>
              </div>
            </div>

            {/* Right: Cover + CTA */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {/* Cover Preview */}
              <div className="rounded-3xl overflow-hidden mb-8 shadow-strong"
                style={{ 
                  background: `linear-gradient(135deg, ${resource.coverColor}20, ${resource.coverColor}40)`,
                  aspectRatio: '3/4'
                }}>
                <div className="w-full h-full flex flex-col items-center justify-center p-12">
                  <div className="w-32 h-32 rounded-3xl flex items-center justify-center mb-6"
                    style={{ background: resource.coverColor }}>
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center text-foreground mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {resource.pages} pages • {resource.category}
                  </p>
                </div>
              </div>

              {/* Download CTA */}
              <LeadCaptureForm
                title="Download This Free Resource"
                subtitle="Enter your email to get instant access"
                buttonText="Download Now"
                variant="compact"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
