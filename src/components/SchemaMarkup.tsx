import { useEffect } from 'react'

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'faq' | 'review' | 'website' | 'article' | 'product'
  data: Record<string, any>
}

/**
 * SchemaMarkup Component
 * Injects JSON-LD structured data into the document head for SEO optimization.
 * Supports multiple schema types: Organization, LocalBusiness, FAQ, Review, Website, Article, Product
 */
export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    const schemaTypes: Record<string, string> = {
      organization: 'Organization',
      localBusiness: 'LocalBusiness',
      faq: 'FAQPage',
      review: 'Review',
      website: 'WebSite',
      article: 'Article',
      product: 'Product',
    }

    const schemaType = schemaTypes[type] || type

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      ...data,
    }

    // Create script element
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    script.id = `schema-${type}-${JSON.stringify(data).substring(0, 50).replace(/\s/g, '')}`

    // Remove existing schema of same type to prevent duplicates
    const existingScripts = document.querySelectorAll(`script[id^="schema-${type}"]`)
    existingScripts.forEach((s) => s.remove())

    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [type, data])

  return null
}
