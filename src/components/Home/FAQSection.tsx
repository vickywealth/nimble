import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import SchemaMarkup from '../SchemaMarkup'

const faqs = [
  {
    question: 'What services does Nimble offer for startups?',
    answer: 'Nimble provides comprehensive business consulting services including LLC/corporation formation, EIN registration, marketing strategy, accounting & bookkeeping, website development, business operations optimization, and startup consulting. We\'re your all-in-one partner for launching and scaling your business.'
  },
  {
    question: 'How long does it take to incorporate a business?',
    answer: 'With Nimble, most businesses can be fully incorporated and operational within 48 hours. We handle all the paperwork, state filings, EIN registration, and compliance setup. Some states may take 3-5 business days for official processing, but we start your operations immediately.'
  },
  {
    question: 'Do you offer ongoing support after business formation?',
    answer: 'Absolutely! Business formation is just the beginning. We provide continuous support including quarterly tax planning, annual report filings, marketing campaigns, financial reporting, and strategic consulting. Many of our clients stay with us for years as their trusted business partner.'
  },
  {
    question: 'What\'s included in the free consultation?',
    answer: 'Our free 30-minute consultation covers your business goals, recommended structure (LLC, S-Corp, etc.), initial compliance requirements, and a customized roadmap for your first 90 days. There\'s no obligation, and you\'ll leave with actionable insights regardless of whether you choose to work with us.'
  },
  {
    question: 'How much does Nimble\'s services cost?',
    answer: 'We offer flexible pricing based on your needs. Business incorporation starts at $299 plus state fees. Marketing, accounting, and consulting services are available as monthly packages starting at $499/month. We also offer à la carte services. Book a free consultation for a custom quote tailored to your business.'
  },
  {
    question: 'Can you help with existing businesses, not just startups?',
    answer: 'Yes! While we specialize in helping new businesses launch, we also work with established companies looking to optimize operations, improve marketing ROI, restructure for tax efficiency, or scale operations. Our clients range from day-one startups to businesses with 7-figure revenue.'
  },
  {
    question: 'Do I need to be in the US to use your services?',
    answer: 'We primarily serve US-based businesses due to state-specific incorporation requirements and tax regulations. However, we do help international entrepreneurs form US LLCs and corporations. Book a consultation to discuss your specific situation.'
  },
  {
    question: 'What makes Nimble different from other consulting firms?',
    answer: 'Three things: (1) We\'re truly all-in-one — legal, financial, marketing, and tech under one roof. (2) We move fast — your business can be operational in 48 hours. (3) We have a proven playbook from 500+ successful launches. Most firms only handle one aspect; we handle everything so you can focus on building your business.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema markup data for FAQ
  const faqSchemaData = {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <section className="section-padding" style={{ background: 'hsl(var(--accent))' }}>
      <SchemaMarkup type="faq" data={faqSchemaData} />
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ 
              background: 'hsl(var(--accent))', 
              color: 'hsl(var(--primary))',
              border: '1px solid hsl(var(--primary) / 0.15)'
            }}>
            FAQ
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Frequently Asked
            <span className="block mt-2" style={{ color: 'hsl(var(--primary))' }}>Questions</span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about working with Nimble. Can't find what you're looking for? Book a free consultation.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll rounded-2xl border border-border bg-white shadow-soft overflow-hidden transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    style={{ color: 'hsl(var(--primary))' }}
                  />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/book"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ 
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              color: 'white',
              boxShadow: '0 8px 24px hsl(217 91% 55% / 0.3)'
            }}
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
