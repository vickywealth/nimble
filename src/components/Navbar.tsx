import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Startup Checklist', href: '/checklist' },
  {
    label: 'More',
    children: [
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  const isActive = (href: string) => location.pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-primary shadow-button">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Nimble
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div 
                  key={link.label} 
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg transition-colors font-medium ${
                      isActive(link.href!) ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`absolute top-full right-0 mt-1 w-48 bg-white rounded-2xl border border-border shadow-card-hover py-2 animate-fade-in ${
                      dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-primary rounded-lg mx-1 ${
                          isActive(child.href) ? 'text-primary bg-accent' : 'text-foreground'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href!}
                  className={`nav-link px-3 py-2 rounded-lg transition-colors font-medium ${
                    isActive(link.href!) ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="text-sm font-medium transition-colors text-gray-700 hover:text-primary">
              Contact
            </Link>
            <Link to="/book" className="btn-primary text-sm px-5 py-2.5">
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mobile-menu-enter bg-white border-t border-border py-4 px-2 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-2">
                    More Pages
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                        isActive(child.href) ? 'bg-accent text-primary' : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href!}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive(link.href!) ? 'bg-accent text-primary' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 pb-1 space-y-2 border-t border-border mt-2">
              <Link to="/contact" className="block w-full text-center px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-xl transition-colors">
                Contact Us
              </Link>
              <Link to="/book" className="btn-primary w-full justify-center text-sm">
                Book Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
