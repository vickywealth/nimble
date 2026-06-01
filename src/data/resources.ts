export interface Resource {
  slug: string
  title: string
  description: string
  longDescription: string
  pages: number
  file: string
  category: 'Checklist' | 'Guide' | 'Playbook' | 'Template'
  benefits: string[]
  coverColor: string
}

export const resources: Resource[] = [
  {
    slug: 'startup-launch-checklist',
    title: 'Complete Startup Launch Checklist',
    description: 'Step-by-step guide to launching your business in 30 days',
    longDescription: 'Our comprehensive 12-page checklist covers everything from business registration to your first sale. Used by 500+ successful entrepreneurs to launch with confidence.',
    pages: 12,
    file: '/pdfs/startup-checklist.pdf',
    category: 'Checklist',
    benefits: [
      'LLC/Corp formation checklist',
      'EIN & tax registration steps',
      'Business banking setup guide',
      'First 90-day action plan',
      'Legal compliance checklist'
    ],
    coverColor: 'hsl(var(--primary))'
  },
  {
    slug: 'tax-guide-2025',
    title: 'Small Business Tax Guide 2025',
    description: 'Everything you need to know about business taxes and deductions',
    longDescription: 'A comprehensive 24-page guide covering federal and state tax requirements, deductions you might be missing, and strategies to minimize your tax burden legally.',
    pages: 24,
    file: '/pdfs/tax-guide-2025.pdf',
    category: 'Guide',
    benefits: [
      '2025 tax bracket breakdown',
      '50+ deductible expenses list',
      'Quarterly tax calculator',
      'S-Corp vs LLC tax comparison',
      'Audit-proof record keeping tips'
    ],
    coverColor: 'hsl(32, 100%, 50%)'
  },
  {
    slug: 'marketing-playbook',
    title: 'Zero-Budget Marketing Playbook',
    description: 'Grow your business without spending on ads',
    longDescription: 'Learn the exact strategies we used to help clients generate 340% more leads without paid advertising. 18 pages of actionable tactics you can implement today.',
    pages: 18,
    file: '/pdfs/marketing-playbook.pdf',
    category: 'Playbook',
    benefits: [
      'Social media content calendar',
      'SEO quick-win strategies',
      'Email marketing templates',
      'Referral program framework',
      'Partnership outreach scripts'
    ],
    coverColor: 'hsl(142, 71%, 45%)'
  }
]

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(r => r.slug === slug)
}
