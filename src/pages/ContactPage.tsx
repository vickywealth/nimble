import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Twitter, Linkedin, Instagram, Send, CheckCircle2, ArrowRight } from 'lucide-react'

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
      {/* Hero */}
      <section className="relative py-24 hero-bg overflow-hidden">
        <div className="section-container relative z-10 text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'hsl(0 0% 100% / 0.12)', color: 'white', border: '1px solid hsl(0 0% 100% / 0.2)' }}>
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Let's Talk Business
          </h1>
          <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Have a question, need support, or ready to start? Our team is here to help Monday through Friday.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 40C960 20 1200 50 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 bg-white border-b border-border">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MapPin, title: 'Office Address', lines: ['123 Business Ave, Suite 500', 'New York, NY 10001'], color: 'hsl(221,83%,53%)' },
              { icon: Phone, title: 'Phone Number', lines: ['+1 (800) 555-NIMBLE', 'Toll-free US & Canada'], color: 'hsl(142,71%,45%)' },
              { icon: Mail, title: 'Email Address', lines: ['hello@nimbleconsulting.com', 'support@nimbleconsulting.com'], color: 'hsl(32,100%,50%)' },
              { icon: Clock, title: 'Business Hours', lines: ['Mon–Fri: 9:00 AM – 6:00 PM EST', 'Sat: 10:00 AM – 2:00 PM EST'], color: 'hsl(262,83%,58%)' },
            ].map((item) => (
              <div key={item.title} className="service-card bg-white rounded-3xl p-6 border border-border shadow-card text-center animate-on-scroll">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${item.color}15` }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                {item.lines.map((l, i) => <p key={i} className="text-sm text-muted-foreground">{l}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              {submitted ? (
                <div className="bg-white rounded-3xl border border-border shadow-card p-10 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-gradient-primary">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                    className="btn-outline text-sm px-6 py-2.5">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-border shadow-card p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input className="form-input" placeholder="Your name" required
                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                        <input type="email" className="form-input" placeholder="your@email.com" required
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                        <input type="tel" className="form-input" placeholder="+1 (555) 000-0000"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                        <input className="form-input" placeholder="How can we help?" required
                          value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea className="form-input resize-none" rows={5}
                        placeholder="Tell us about your business and what you need..."
                        required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center text-sm py-3.5">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Map + Social */}
            <div className="space-y-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden border border-border shadow-card" style={{ height: '300px' }}>
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, hsl(214,100%,95%), hsl(214,100%,88%))' }}>
                  {/* Simplified map illustration */}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-gradient-primary shadow-button animate-float">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>Nimble HQ</p>
                    <p className="text-xs text-muted-foreground">123 Business Ave, New York, NY</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold"
                      style={{ color: 'hsl(var(--primary))' }}>
                      Open in Google Maps <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  {/* Decorative grid */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mapgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(221,83%,53%)" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapgrid)" />
                  </svg>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl border border-border shadow-card p-6">
                <h3 className="font-bold text-foreground mb-4">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook', handle: '@NimbleConsulting', color: '#1877F2' },
                    { icon: Twitter, label: 'Twitter / X', handle: '@NimbleBiz', color: '#1DA1F2' },
                    { icon: Linkedin, label: 'LinkedIn', handle: 'Nimble Consulting', color: '#0A66C2' },
                    { icon: Instagram, label: 'Instagram', handle: '@nimble.consulting', color: '#E1306C' },
                  ].map(({ icon: Icon, label, handle, color }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-accent transition-colors cursor-pointer">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}>
                        <Icon className="w-4 h-4" style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">{label}</div>
                        <div className="text-xs text-muted-foreground">{handle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Book */}
              <div className="rounded-3xl hero-bg p-6">
                <h3 className="font-bold text-white mb-2">Ready for a consultation?</h3>
                <p className="text-white/75 text-sm mb-4">Skip the email and book your free 30-minute session directly.</p>
                <Link to="/book" className="btn-white text-sm px-6 py-3">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
