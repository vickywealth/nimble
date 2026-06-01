import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Building2, BarChart3, Calculator, Settings, Globe, Lightbulb, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'

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

const services = [
  'Business Incorporation', 'Marketing Services', 'Accounting & Bookkeeping',
  'Business Operations', 'Website Development', 'Startup Consulting', 'General Consultation',
]

const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM']

const businessTypes = ['Sole Proprietorship', 'LLC', 'S-Corporation', 'C-Corporation', 'Partnership', 'Non-Profit', 'Pre-Launch Startup']

const faqs = [
  { q: 'How long is the free consultation?', a: 'Your initial consultation is 30 minutes. During this time, a Nimble expert will assess your business needs and outline a clear action plan for moving forward.' },
  { q: 'What should I prepare before my consultation?', a: 'Come with a basic overview of your business idea or current situation. If you have questions written down, even better! No formal preparation is required.' },
  { q: 'Is the consultation really free?', a: 'Yes, completely free. No credit card required, no obligation. We believe in earning your business by delivering value first.' },
  { q: 'How quickly can Nimble get my business registered?', a: 'Most LLC formations are completed within 3-5 business days. Rush processing (24-48 hours) is available for an additional fee.' },
  { q: 'Can Nimble help me if I already have a business?', a: 'Absolutely. We work with businesses at every stage — from idea to 7-figure operations. We frequently onboard established businesses for marketing, accounting, and operations services.' },
  { q: 'Do you offer ongoing monthly support?', a: 'Yes! Most of our services are available as monthly retainers. Many clients use Nimble as their ongoing marketing, accounting, and operations team.' },
]

const processSteps = [
  { step: '01', title: 'Book Your Slot', desc: 'Choose your date, time, and service. Fill out the short form — it takes 2 minutes.' },
  { step: '02', title: 'Confirmation Email', desc: 'Receive a confirmation with meeting details, video link, and a brief pre-consultation questionnaire.' },
  { step: '03', title: 'Meet Your Expert', desc: 'A dedicated Nimble consultant meets with you to understand your goals and current situation.' },
  { step: '04', title: 'Get Your Roadmap', desc: 'Receive a personalized action plan with recommended services, timelines, and next steps.' },
]

function generateDates() {
  const dates = []
  const today = new Date()
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    const day = d.getDay()
    if (day !== 0 && day !== 6) {
      dates.push({
        date: d.getDate(),
        month: d.toLocaleString('default', { month: 'short' }),
        day: d.toLocaleString('default', { weekday: 'short' }),
        full: d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      })
    }
  }
  return dates.slice(0, 8)
}

export default function BookPage() {
  useScrollReveal()
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    service: '', businessType: '', message: '',
  })
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const dates = generateDates()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-primary shadow-button">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">Consultation Booked!</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Your free consultation has been scheduled. Check your email for confirmation details and a calendar invite.
          </p>
          <div className="rounded-2xl border border-border bg-white shadow-card p-5 text-left mb-8">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium">{form.firstName} {form.lastName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Service</span>
                <span className="font-medium">{form.service || 'General Consultation'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">{selectedDate !== null ? dates[selectedDate]?.full : 'Not selected'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Time</span>
                <span className="font-medium">{selectedTime} EST</span>
              </div>
            </div>
          </div>
          <Link to="/" className="btn-primary text-sm px-8 py-3">
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 hero-bg overflow-hidden">
        <div className="section-container relative z-10 text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'hsl(0 0% 100% / 0.12)', color: 'white', border: '1px solid hsl(0 0% 100% / 0.2)' }}>
            <Calendar className="w-3 h-3" /> Book Appointment
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Book Your Free Consultation
          </h1>
          <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            30 minutes with a Nimble expert could change the trajectory of your business. No obligation, no pressure — just real value.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 40C960 20 1200 50 1440 30V60H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white border-b border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <div key={s.step} className="text-center animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 bg-gradient-primary shadow-button">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-border shadow-card p-8 animate-on-scroll">
                <h2 className="text-2xl font-bold text-foreground mb-6">Schedule Your Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">First Name *</label>
                      <input className="form-input" placeholder="John" required
                        value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Last Name *</label>
                      <input className="form-input" placeholder="Smith" required
                        value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                      <input type="email" className="form-input" placeholder="john@example.com" required
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                      <input type="tel" className="form-input" placeholder="+1 (555) 000-0000"
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>

                  {/* Service & Business Type */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Service Interested In *</label>
                      <select className="form-input" required value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}>
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Business Type</label>
                      <select className="form-input" value={form.businessType}
                        onChange={(e) => setForm({ ...form, businessType: e.target.value })}>
                        <option value="">Select type</option>
                        {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2.5">
                      <Calendar className="w-4 h-4 inline mr-1.5" />
                      Select a Date *
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                      {dates.map((d, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedDate(i)}
                          className="flex flex-col items-center py-3 px-2 rounded-xl text-center text-xs font-medium transition-all border"
                          style={{
                            background: selectedDate === i ? 'hsl(var(--primary))' : 'hsl(var(--background))',
                            color: selectedDate === i ? 'white' : 'hsl(var(--foreground))',
                            borderColor: selectedDate === i ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                          }}
                        >
                          <span style={{ opacity: selectedDate === i ? 0.75 : undefined }}>{d.day}</span>
                          <span className="text-base font-bold mt-0.5">{d.date}</span>
                          <span style={{ opacity: selectedDate === i ? 0.75 : undefined }}>{d.month}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate !== null && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2.5">
                        <Clock className="w-4 h-4 inline mr-1.5" />
                        Select a Time *
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className="py-2.5 px-3 rounded-xl text-sm font-medium border transition-all"
                            style={{
                              background: selectedTime === t ? 'hsl(var(--primary))' : 'hsl(var(--background))',
                              color: selectedTime === t ? 'white' : 'hsl(var(--foreground))',
                              borderColor: selectedTime === t ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                            }}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Tell Us About Your Business</label>
                    <textarea className="form-input resize-none" rows={3} placeholder="Briefly describe your business and what you need help with..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-sm py-4 text-base font-semibold"
                    disabled={!selectedDate || !selectedTime}
                    style={{ opacity: (!selectedDate && selectedDate !== 0) || !selectedTime ? 0.5 : 1 }}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule My Free Consultation
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By scheduling, you agree to our Terms of Service. We'll never spam you.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits */}
              <div className="bg-white rounded-3xl border border-border shadow-card p-6 animate-on-scroll">
                <h3 className="font-bold text-foreground mb-5">What You'll Get</h3>
                <div className="space-y-3">
                  {[
                    'Personalized business assessment',
                    'Expert recommendations for your situation',
                    'Clear action plan and next steps',
                    'Transparent service pricing',
                    'No pressure, no obligation',
                    '30-minute dedicated session',
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                      <span className="text-sm text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Icons */}
              <div className="bg-white rounded-3xl border border-border shadow-card p-6 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-bold text-foreground mb-4">Services Covered</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Building2, label: 'Incorporation', color: 'hsl(221,83%,53%)' },
                    { icon: BarChart3, label: 'Marketing', color: 'hsl(350,89%,60%)' },
                    { icon: Calculator, label: 'Accounting', color: 'hsl(32,100%,50%)' },
                    { icon: Settings, label: 'Operations', color: 'hsl(262,83%,58%)' },
                    { icon: Globe, label: 'Websites', color: 'hsl(187,85%,43%)' },
                    { icon: Lightbulb, label: 'Consulting', color: 'hsl(142,71%,45%)' },
                  ].map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex flex-col items-center gap-1 text-center p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-accent transition-colors">
                      <Icon className="w-5 h-5" style={{ color }} />
                      <span className="text-xs font-medium text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="rounded-3xl hero-bg p-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-300 text-lg">★</span>)}
                </div>
                <p className="text-white text-sm leading-relaxed mb-3">
                  "Booked a free consultation on a Tuesday and had my LLC filed by Friday. The team at Nimble is world-class."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: 'hsl(0 0% 100% / 0.25)' }}>MJ</div>
                  <div>
                    <div className="text-white text-xs font-semibold">Marcus Johnson</div>
                    <div className="text-white/60 text-xs">CEO, TechLaunch Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title mt-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item animate-on-scroll ${openFaq === i ? 'open' : ''}`}
                style={{ animationDelay: `${i * 0.07}s` }}>
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                    : <ChevronDown className="w-4 h-4 flex-shrink-0 text-muted-foreground" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <p className="text-muted-foreground text-sm mb-4">Still have questions?</p>
            <Link to="/contact" className="btn-primary text-sm px-7 py-3">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
