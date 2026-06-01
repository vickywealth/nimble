import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

const testimonials = [
  {
    name: 'Marcus Johnson',
    title: 'CEO, TechLaunch Inc.',
    rating: 5,
    text: 'Nimble helped us incorporate our LLC, set up our accounting systems, and build our website — all within 30 days. Their team is incredibly professional and knows exactly what startups need.',
    initials: 'MJ',
    color: 'hsl(var(--primary))',
  },
  {
    name: 'Sarah Williams',
    title: 'Founder, BloomBakery',
    rating: 5,
    text: 'From zero to a fully operating business in 6 weeks. Nimble handled everything from registration to our online presence. I can\'t imagine doing this without them.',
    initials: 'SW',
    color: 'hsl(350, 89%, 60%)',
  },
  {
    name: 'David Chen',
    title: 'Owner, PrecisionFit Studio',
    rating: 5,
    text: 'The marketing team at Nimble transformed our social media presence. We saw a 340% increase in leads within the first 3 months. Exceptional results!',
    initials: 'DC',
    color: 'hsl(142, 71%, 45%)',
  },
  {
    name: 'Jennifer Davis',
    title: 'Owner, Davis Legal PLLC',
    rating: 5,
    text: 'As a solo attorney, I had no time to manage my books or build systems. Nimble stepped in and took care of everything. My financials are clean, my workflows are automated, and I actually have time to practice law.',
    initials: 'JD',
    color: 'hsl(262, 83%, 58%)',
  },
]

export default function TestimonialsSection() {
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

  return (
    <section className="py-12 lg:py-16" style={{ background: 'hsl(var(--accent))' }}>
      <div className="section-container">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="section-eyebrow">Client Success</span>
          <h2 className="section-title mt-4 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="section-subtitle mx-auto">
            Don't take our word for it — here's what our clients say about working with Nimble.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="testimonial-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 star-filled" />
                ))}
              </div>
              <p className="text-base text-foreground leading-relaxed mb-6 font-medium">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: testimonial.color }}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <Link to="/testimonials" className="btn-outline text-sm px-7 py-3">
            Read All Stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
