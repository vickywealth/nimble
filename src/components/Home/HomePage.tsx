import SEO from '../SEO'
import HeroSection from './HeroSection'
import TrustBadgesSection from './TrustBadgesSection'
import StatsSection from './StatsSection'
import ServicesPreviewSection from './ServicesPreviewSection'
import WhyNimbleSection from './WhyNimbleSection'
import TestimonialsSection from './TestimonialsSection'
import VideoCTASection from './VideoCTASection'
import PDFResourcesSection from './PDFResourcesSection'
import FAQSection from './FAQSection'
import BlogPreviewSection from './BlogPreviewSection'
import FloatingCTA from '../ui/FloatingCTA'
import ExitIntentPopup from '../ui/ExitIntentPopup'
import { useState } from 'react'

export default function HomePage() {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false)

  return (
    <main>
      <SEO 
        title="Startup Consulting & Business Formation Services | Launch in 48 Hours"
        description="Nimble helps 500+ entrepreneurs start, manage, and grow businesses with expert LLC formation, marketing, accounting, web development & operations consulting. Free consultation."
        keywords="startup consulting, business formation, LLC formation, EIN registration, business incorporation, marketing services, accounting, bookkeeping, web development, business operations, tax preparation, startup launch"
        schemaMarkup={[
          {
            type: 'organization',
            data: {
              name: 'Nimble Consulting',
              url: 'https://nimbleconsulting.com',
              logo: 'https://nimbleconsulting.com/logo.png',
              sameAs: [
                'https://facebook.com/nimbleconsulting',
                'https://twitter.com/nimbleconsulting',
                'https://linkedin.com/company/nimbleconsulting',
                'https://instagram.com/nimbleconsulting'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-XXX-XXX-XXXX',
                contactType: 'customer service',
                availableLanguage: ['English']
              }
            }
          },
          {
            type: 'localBusiness',
            data: {
              name: 'Nimble Consulting',
              description: 'Comprehensive business consulting services including LLC formation, marketing, accounting, and web development for startups and small businesses.',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US'
              },
              openingHours: 'Mo-Fr 09:00-18:00',
              paymentAccepted: 'Cash, Credit Card',
              currenciesAccepted: 'USD'
            }
          },
          {
            type: 'website',
            data: {
              name: 'Nimble Consulting - Startup & Business Growth Partner',
              url: 'https://nimbleconsulting.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://nimbleconsulting.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            }
          }
        ]}
      />
      <HeroSection />
      <TrustBadgesSection />
      <StatsSection />
      <ServicesPreviewSection />
      <WhyNimbleSection />
      <TestimonialsSection />
      <PDFResourcesSection onModalStateChange={setIsPDFModalOpen} />
      <VideoCTASection />
      <FAQSection />
      <BlogPreviewSection />
      <FloatingCTA />
      <ExitIntentPopup shouldSuppress={isPDFModalOpen} />
    </main>
  )
}
