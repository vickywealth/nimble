import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, CheckCircle2, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'

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

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']



const faqs = [
  { q: 'How long is the consultation?', a: '30 minutes with a Nimble expert. We\'ll assess your needs and outline a clear action plan.' },
  { q: 'What should I prepare?', a: 'Just come with your business questions. No formal preparation needed.' },
  { q: 'Is it really free?', a: 'Completely free. No credit card, no obligation. We deliver value first.' },
  { q: 'How quickly can you register my business?', a: 'Most LLC formations complete in 3-5 business days. Rush processing available.' },
  { q: 'Do you work with existing businesses?', a: 'Yes — from startups to 7-figure operations. We help at every stage.' },
  { q: 'Do you offer ongoing support?', a: 'Yes! Most services available as monthly retainers for continuous support.' },
]





export default function BookPage() {
  useScrollReveal()
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    service: '', businessType: '', message: '',
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [calendarMonth, setCalendarMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day)
      const isPast = currentDate < today
      const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6
      days.push({ date: currentDate, isPast, isWeekend })
    }

    return days
  }

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  const prevMonth = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const calendarDays = getDaysInMonth(calendarMonth)

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
                <span className="font-medium">{selectedDate?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
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
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop"
            alt="Business consultation and planning session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55" />
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(255, 255, 255, 0.15)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
              <Calendar className="w-3.5 h-3.5" /> Free Consultation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: '"Poppins", sans-serif', lineHeight: '1.1' }}>
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              30 minutes with a Nimble expert could change the trajectory of your business. Get personalized advice, clear action steps, and expert guidance — completely free.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">30</div>
                <div className="text-xs text-white/80">Minutes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-white/80">Free</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">0</div>
                <div className="text-xs text-white/80">Obligation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-border shadow-card p-8 md:p-12 animate-on-scroll">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Schedule Your Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input className="form-input" placeholder="John" required
                        value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input className="form-input" placeholder="Smith" required
                        value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input type="email" className="form-input" placeholder="john@example.com" required
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone (Optional)</label>
                      <input type="tel" className="form-input" placeholder="+1 (555) 000-0000"
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service</label>
                    <select className="form-input" value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Select a Date
                    </label>
                    <div className="border border-border rounded-lg p-2.5">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-2">
                        <button
                          type="button"
                          onClick={prevMonth}
                          className="p-1 hover:bg-accent rounded transition-colors"
                        >
                          <ChevronLeft className="w-3 h-3" />
                        </button>
                        <h3 className="text-xs font-semibold text-foreground">
                          {calendarMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </h3>
                        <button
                          type="button"
                          onClick={nextMonth}
                          className="p-1 hover:bg-accent rounded transition-colors"
                        >
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Day Names */}
                      <div className="grid grid-cols-7 gap-0.5 mb-1">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                          <div key={day} className="text-center text-[9px] font-medium text-muted-foreground">
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-0.5">
                        {calendarDays.map((day, index) => {
                          if (!day) {
                            return <div key={`empty-${index}`} />
                          }

                          const isSelected = selectedDate && isSameDay(day.date, selectedDate)
                          const isDisabled = day.isPast || day.isWeekend

                          return (
                            <button
                              key={index}
                              type="button"
                              onClick={() => !isDisabled && setSelectedDate(day.date)}
                              disabled={isDisabled}
                              className="w-full aspect-square flex items-center justify-center text-[11px] rounded transition-all"
                              style={{
                                background: isSelected ? 'hsl(var(--primary))' : 'transparent',
                                color: isDisabled ? 'hsl(var(--muted-foreground) / 0.4)' : isSelected ? 'white' : 'hsl(var(--foreground))',
                                cursor: isDisabled ? 'not-allowed' : 'pointer',
                              }}
                              onMouseEnter={(e) => {
                                if (!isDisabled && !isSelected) {
                                  e.currentTarget.style.background = 'hsl(var(--accent))'
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isDisabled && !isSelected) {
                                  e.currentTarget.style.background = 'transparent'
                                }
                              }}
                            >
                              {day.date.getDate()}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate !== null && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        Select a Time
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className="py-2.5 px-3 rounded-lg text-sm border transition-all"
                            style={{
                              background: selectedTime === t ? 'hsl(var(--primary))' : 'transparent',
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
                    <label className="block text-sm font-medium text-foreground mb-2">Tell Us About Your Business (Optional)</label>
                    <textarea className="form-input resize-none" rows={3} placeholder="Brief description of your business and what you need help with..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-4"
                    disabled={!selectedDate || !selectedTime}
                    style={{ opacity: (!selectedDate && selectedDate !== 0) || !selectedTime ? 0.5 : 1 }}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Consultation
                  </button>
                </form>
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
