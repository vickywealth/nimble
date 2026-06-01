import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa6'
import SEO from '../SEO'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function ContactPage() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: 'Hi there! 👋 Welcome to Nimble. How can I help you today?' }
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChatSend = () => {
    if (!chatMessage.trim()) return
    setChatMessages(prev => [
      ...prev,
      { from: 'user', text: chatMessage },
      { from: 'bot', text: 'Thanks for reaching out! A Nimble consultant will get back to you within 2 hours. In the meantime, feel free to book a free consultation.' }
    ])
    setChatMessage('')
  }

  return (
    <main className="pt-16">
      <SEO
        title="Contact Nimble - Get in Touch for Business Consulting"
        description="Contact Nimble Consulting: Phone, email, live chat, or visit us in person. We're here to help you launch and grow your business."
      />
      {/* Hero */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            alt="Contact and communication"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-primary/90" />
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 bg-white/10 backdrop-blur-md text-white border border-white/20">
            <Sparkles className="w-4 h-4" />
            We're Here to Help
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Have a question, need support, or ready to launch? Our expert team is here to guide you every step of the way.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: '< 2hrs', label: 'Response Time' },
              { value: '500+', label: 'Clients Served' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white relative -mt-16 z-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: 'Visit Our Office', lines: ['123 Business Ave, Suite 500', 'New York, NY 10001'], gradient: 'from-blue-500 to-blue-600' },
              { icon: Phone, title: 'Call Us Directly', lines: ['+1 (800) 555-NIMBLE', 'Mon-Fri 9AM-6PM EST'], gradient: 'from-green-500 to-green-600' },
              { icon: Mail, title: 'Email Us Anytime', lines: ['hello@nimbleconsulting.com', 'We respond within 2 hours'], gradient: 'from-orange-500 to-orange-600' },
              { icon: Clock, title: 'Business Hours', lines: ['Mon–Fri: 9:00 AM – 6:00 PM', 'Sat: 10:00 AM – 2:00 PM'], gradient: 'from-purple-500 to-purple-600' },
            ].map((item, index) => (
              <div 
                key={item.title} 
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`} />
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-3 text-base">{item.title}</h3>
                {item.lines.map((l, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-10 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                    className="btn-primary text-sm px-8 py-3">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                    <p className="text-muted-foreground">Fill out the form below and we'll respond promptly.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                        <input className="form-input transition-all focus:ring-2 focus:ring-primary/20" placeholder="John Doe" required
                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                        <input type="email" className="form-input transition-all focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" required
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                        <input type="tel" className="form-input transition-all focus:ring-2 focus:ring-primary/20" placeholder="+1 (555) 000-0000"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                        <input className="form-input transition-all focus:ring-2 focus:ring-primary/20" placeholder="Business Consultation" required
                          value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Your Message *</label>
                      <textarea className="form-input resize-none transition-all focus:ring-2 focus:ring-primary/20" rows={6}
                        placeholder="Tell us about your business goals and how we can help..."
                        required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center text-sm py-4 font-semibold shadow-lg hover:shadow-xl transition-all">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Map + Social */}
            <div className="space-y-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl" style={{ height: '320px' }}>
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                  {/* Simplified map illustration */}
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-primary to-primary-dark shadow-xl animate-float">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-base font-bold text-foreground mb-1">Nimble Headquarters</p>
                    <p className="text-sm text-muted-foreground mb-3">123 Business Ave, New York, NY 10001</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                      Open in Google Maps <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  {/* Decorative grid */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(221,83%,53%)" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapgrid)" />
                  </svg>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-foreground text-lg mb-1">Follow Our Journey</h3>
                  <p className="text-sm text-muted-foreground">Stay connected for daily business tips and insights</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: FaFacebookF, label: 'Facebook', handle: '@NimbleConsulting', color: '#1877F2', followers: '12K' },
                    { icon: FaXTwitter, label: 'Twitter / X', handle: '@NimbleBiz', color: '#000000', followers: '8.5K' },
                    { icon: FaLinkedinIn, label: 'LinkedIn', handle: 'Nimble Consulting', color: '#0A66C2', followers: '15K' },
                    { icon: FaInstagram, label: 'Instagram', handle: '@nimble.consulting', color: '#E1306C', followers: '9.2K' },
                    { icon: FaYoutube, label: 'YouTube', handle: 'Nimble Consulting', color: '#FF0000', followers: '18K' },
                  ].map(({ icon: Icon, label, color, followers }) => (
                    <a 
                      key={label} 
                      href="#"
                      className="group flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ background: `${color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{label}</div>
                        <div className="text-xs text-muted-foreground truncate">{followers} followers</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Book */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop')] opacity-10 bg-cover bg-center" />
                <div className="relative p-8">
                  <h3 className="font-bold text-white text-xl mb-2">Ready to Get Started?</h3>
                  <p className="text-white/85 text-sm mb-5">Skip the email and book your free 30-minute strategy session directly.</p>
                  <Link to="/book" className="btn-white text-sm px-6 py-3 font-semibold inline-flex items-center gap-2 group">
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="mb-3 w-80 rounded-3xl border border-border shadow-hero bg-white overflow-hidden animate-fade-up">
            <div className="p-4 flex items-center justify-between bg-gradient-primary">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Nimble Support</div>
                  <div className="text-white/75 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Online now
                  </div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/75 hover:text-white text-xl leading-none">×</button>
            </div>
            <div className="p-4 h-52 overflow-y-auto space-y-3">
              {chatMessages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm"
                    style={{
                      background: m.from === 'user' ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
                      color: m.from === 'user' ? 'white' : 'hsl(var(--foreground))',
                      borderBottomRightRadius: m.from === 'user' ? '4px' : undefined,
                      borderBottomLeftRadius: m.from === 'bot' ? '4px' : undefined,
                    }}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border flex gap-2">
              <input
                className="form-input flex-1 text-sm py-2"
                placeholder="Type a message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleChatSend()}
              />
              <button onClick={handleChatSend} className="btn-primary px-3 py-2 flex-shrink-0">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-hero transition-transform hover:scale-110"
          style={{ background: 'hsl(var(--primary))' }}
          aria-label="Open live chat"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    </main>
  )
}
