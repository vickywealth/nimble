import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SchemaMarkup from './SchemaMarkup'

interface SEOProps {
  title: string
  description: string
  pathname?: string
  keywords?: string
  schemaMarkup?: Array<{
    type: 'organization' | 'localBusiness' | 'faq' | 'review' | 'website' | 'article' | 'product'
    data: Record<string, any>
  }>
}

const SITE_URL = 'https://nimbleconsulting.com'
const SITE_NAME = 'Nimble Consulting'
const DEFAULT_KEYWORDS = 'startup consulting, business formation, LLC formation, business growth, marketing services, accounting, bookkeeping, web development, business operations'

export default function SEO({ title, description, pathname, keywords = DEFAULT_KEYWORDS, schemaMarkup }: SEOProps) {
  const location = useLocation()
  const currentPath = pathname || location.pathname
  const fullUrl = `${SITE_URL}${currentPath}`
  const fullTitle = `${title} | ${SITE_NAME}`

  useEffect(() => {
    // Update document title
    document.title = fullTitle

    // Helper to set or update meta tag
    const setMeta = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Primary meta tags
    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('robots', 'index, follow')
    setMeta('revisit-after', '7 days')
    setMeta('author', SITE_NAME)
    setMeta('language', 'English')

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)

    // Open Graph tags
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', fullUrl, 'property')
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:image', '/og-image.png', 'property')
    setMeta('og:site_name', SITE_NAME, 'property')
    setMeta('og:locale', 'en_US', 'property')

    // Twitter tags
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:url', fullUrl, 'property')
    setMeta('twitter:title', fullTitle, 'property')
    setMeta('twitter:description', description, 'property')
    setMeta('twitter:image', '/og-image.png', 'property')
    
    // Geo meta tags (for local SEO)
    setMeta('geo.region', 'US')
    setMeta('geo.placename', 'United States')
  }, [fullTitle, description, fullUrl, keywords])

  return (
    <>
      {schemaMarkup?.map((schema, index) => (
        <SchemaMarkup key={index} type={schema.type} data={schema.data} />
      ))}
    </>
  )
}
