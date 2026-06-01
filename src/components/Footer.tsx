import { Link } from 'react-router-dom'
import {
  Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram,
  ArrowRight, Send
} from 'lucide-react'
import { useState } from 'react'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/contact' },
  ],
  Services: [
    { label: 'Business Incorporation', href: '/services' },
    { label: 'Marketing Services', href: '/services' },
    { label: 'Accounting & Bookkeeping', href: '/services' },
    { label: 'Business Operations', href: '/services' },
    { label: 'Website Development', href: '/services' },
    { label: 'Startup Consulting', href: '/services' },
  ],
  Resources: [
    { label: 'Startup Checklist', href: '/checklist' },
    { label: 'Book Appointment', href: '/book' },
    { label: 'Free Consultation', href: '/book' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/contact' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer style={{ background: 'hsl(224, 64%, 10%)' }}>
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-primary shadow-button">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold text-white" style={{ fontFamily: '"Poppins", sans-serif' }}>
                Nimble
              </span>
            </Link>

            <p className="text-sm leading-relaxed" style={{ color: 'hsl(214, 32%, 70%)' }}>
              Nimble is your all-in-one startup consulting and business operations partner. We help entrepreneurs and small businesses start strong, operate efficiently, and grow with confidence.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm" style={{ color: 'hsl(214, 32%, 70%)' }}>
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--primary-light))' }} />
                <span>123 Business Ave, Suite 500, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'hsl(214, 32%, 70%)' }}>
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--primary-light))' }} />
                <span>+1 (800) 555-NIMBLE</span>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'hsl(214, 32%, 70%)' }}>
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--primary-light))' }} />
                <span>hello@nimbleconsulting.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: 'hsl(221, 83%, 53% / 0.15)', color: 'hsl(214, 32%, 70%)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'hsl(var(--primary))'
                    ;(e.currentTarget as HTMLButtonElement).style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(59, 130, 246, 0.15)'
                    ;(e.currentTarget as HTMLButtonElement).style.color = 'hsl(214, 32%, 70%)'
                  }}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors duration-200 hover:text-white flex items-center gap-1.5 group"
                      style={{ color: 'hsl(214, 32%, 65%)' }}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-10 border-t" style={{ borderColor: 'hsl(224, 30%, 20%)' }}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                Stay ahead of the curve
              </h3>
              <p className="text-sm" style={{ color: 'hsl(214, 32%, 65%)' }}>
                Get weekly business tips, startup insights, and growth strategies.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl" style={{ background: 'hsl(var(--primary) / 0.15)', color: 'hsl(var(--primary-light))' }}>
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">You're subscribed! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full lg:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 lg:w-64 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2"
                  style={{
                    background: 'hsl(224, 30%, 18%)',
                    border: '1px solid hsl(224, 30%, 28%)',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary px-5 py-2.5 flex-shrink-0 flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: 'hsl(224, 30%, 16%)' }}>
        <div className="section-container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: 'hsl(214, 20%, 50%)' }}>
              © 2025 Nimble Consulting LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: 'hsl(214, 20%, 50%)' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
