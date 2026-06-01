import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Circle, Download, ArrowRight, Trophy } from 'lucide-react'

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

const checklistItems = [
  { id: 1, title: 'Choose Your Business Name', desc: 'Research and reserve a unique business name that reflects your brand and is available in your state.', category: 'Foundation', icon: '1️⃣' },
  { id: 2, title: 'Register Your Business Entity', desc: 'File your LLC, S-Corp, or C-Corp with the appropriate state agency. Nimble handles all filing paperwork.', category: 'Legal', icon: '2️⃣' },
  { id: 3, title: 'Apply for Your EIN', desc: 'Get your Employer Identification Number (EIN) from the IRS — required for taxes, banking, and hiring.', category: 'Legal', icon: '3️⃣' },
  { id: 4, title: 'Open a Business Bank Account', desc: 'Keep personal and business finances separate. We can recommend partner banks that work great for startups.', category: 'Finance', icon: '4️⃣' },
  { id: 5, title: 'Set Up Bookkeeping System', desc: 'Establish your accounting software and processes from day one. Clean books = less stress at tax time.', category: 'Finance', icon: '5️⃣' },
  { id: 6, title: 'Build Your Website', desc: 'Launch a professional website that represents your brand and converts visitors into customers.', category: 'Digital', icon: '6️⃣' },
  { id: 7, title: 'Create Your Brand Identity', desc: 'Develop your logo, color palette, fonts, and brand guidelines for consistent, professional recognition.', category: 'Brand', icon: '7️⃣' },
  { id: 8, title: 'Launch Your Marketing Strategy', desc: 'Set up social media profiles, SEO foundation, and your first marketing campaigns to start generating leads.', category: 'Marketing', icon: '8️⃣' },
  { id: 9, title: 'Set Up Business Operations', desc: 'Implement your CRM, workflow tools, and operational systems to manage your business efficiently from day one.', category: 'Operations', icon: '9️⃣' },
  { id: 10, title: 'Book a Consultation with Nimble', desc: 'Get a free strategy session with a Nimble expert and let us help you complete your business launch roadmap.', category: 'Nimble', icon: '🚀', isNimble: true },
]

const categoryColors: Record<string, string> = {
  Foundation: 'hsl(221, 83%, 53%)',
  Legal: 'hsl(262, 83%, 58%)',
  Finance: 'hsl(32, 100%, 50%)',
  Digital: 'hsl(187, 85%, 43%)',
  Brand: 'hsl(350, 89%, 60%)',
  Marketing: 'hsl(142, 71%, 45%)',
  Operations: 'hsl(221, 83%, 40%)',
  Nimble: 'hsl(221, 83%, 53%)',
}

export default function ChecklistPage() {
  useScrollReveal()
  const [checked, setChecked] = useState<Set<number>>(new Set())

  const toggle = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const progress = Math.round((checked.size / checklistItems.length) * 100)

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ minHeight: '600px' }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
            alt="Startup planning and checklist"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-5" style={{ background: 'white' }} />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-5" style={{ background: 'white' }} />
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(10px)' }}>
              Startup Roadmap
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: '"Poppins", sans-serif', lineHeight: '1.1' }}>
              Your Complete Startup Launch Checklist
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Follow this proven 10-step checklist to launch your business correctly, legally, and with momentum from day one.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">10</div>
                <div className="text-xs text-white/80">Key Steps</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">7</div>
                <div className="text-xs text-white/80">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-white/80">Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Checklist */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between mb-8 animate-on-scroll">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">10-Step Launch Checklist</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    {checked.size} of {checklistItems.length} completed • {100 - progress}% remaining
                  </p>
                </div>
                {checked.size > 0 && (
                  <button
                    onClick={() => setChecked(new Set())}
                    className="text-xs px-3 py-1.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {checklistItems.map((item, i) => {
                const isChecked = checked.has(item.id)
                const color = categoryColors[item.category]
                return (
                  <div
                    key={item.id}
                    className={`checklist-item animate-on-scroll ${isChecked ? 'checked' : ''}`}
                    style={{ animationDelay: `${i * 0.06}s` }}
                    onClick={() => toggle(item.id)}
                    role="checkbox"
                    aria-checked={isChecked}
                  >
                    <div className="flex-shrink-0">
                      {isChecked ? (
                        <CheckCircle2 className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-base font-semibold transition-all ${isChecked ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                          {item.title}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                          style={{ background: `${color}15`, color: color }}>
                          {item.category}
                        </span>
                        {item.isNimble && (
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-hsl(98, 50%, 47%) to-hsl(98, 50%, 55%) text-white">
                            ✓ Free Consultation
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.desc}</p>
                      {item.isNimble && !isChecked && (
                        <Link
                          to="/book"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-md"
                          style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Book Your Free Session <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Progress Card */}
              <div className="bg-gradient-to-br from-white to-hsl(98, 50%, 98%) rounded-3xl border border-border shadow-lg p-6 animate-on-scroll sticky top-24">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10"/>
                      <circle
                        cx="60" cy="60" r="50" fill="none"
                        stroke="url(#progressGradient)" strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 50}`}
                        strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
                        style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                      />
                      <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(98, 50%, 47%)" />
                          <stop offset="100%" stopColor="hsl(217, 91%, 55%)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-4xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(98, 50%, 47%), hsl(217, 91%, 55%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{progress}%</span>
                      <span className="text-xs text-muted-foreground font-medium">Complete</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Your Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    {progress === 100 ? '🎉 Ready to launch!' : `${10 - checked.size} steps remaining`}
                  </p>
                </div>

                {progress === 100 && (
                  <div className="rounded-2xl p-4 text-center mb-4 bg-gradient-to-r from-hsl(142, 71%, 45%, 0.1) to-hsl(142, 71%, 50%, 0.15) border border-hsl(142, 71%, 45%, 0.25)">
                    <Trophy className="w-8 h-8 mx-auto mb-2" style={{ color: 'hsl(142, 71%, 45%)' }} />
                    <p className="text-sm font-bold" style={{ color: 'hsl(142, 71%, 45%)' }}>
                      Congratulations! 🚀
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'hsl(142, 71%, 45%)' }}>
                      Your business is ready to launch!
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  {progress < 100 && (
                    <p className="text-xs text-muted-foreground text-center font-medium">
                      ✓ Check items off as you complete them
                    </p>
                  )}
                  <Link to="/book" className="btn-primary w-full justify-center text-sm py-3.5">
                    Get Expert Help
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Download Guide Card */}
              <div className="rounded-3xl p-6 bg-gradient-to-br from-hsl(98, 50%, 47%) to-hsl(217, 91%, 55%) animate-on-shadow hover:shadow-xl transition-all" style={{ animationDelay: '0.2s' }}>
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <Download className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Free Startup Guide</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  Download our comprehensive 40-page startup guide with templates, checklists, and expert tips.
                </p>
                <button className="btn-white w-full justify-center text-sm py-3 font-semibold">
                  <Download className="w-4 h-4" />
                  Download Free Guide
                </button>
              </div>

              {/* Category Legend */}
              <div className="bg-white rounded-3xl border border-border shadow-md p-6 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Categories</h3>
                <div className="space-y-2.5">
                  {Object.entries(categoryColors).filter(([k]) => k !== 'Nimble').map(([cat, color]) => (
                    <div key={cat} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-3 h-3 rounded-full flex-shrink-0 transition-transform group-hover:scale-125" style={{ background: color }} />
                      <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">{cat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding" style={{ background: 'hsl(214, 100%, 97%)' }}>
        <div className="section-container animate-on-scroll">
          <div className="rounded-3xl hero-bg p-10 md:p-14 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Need Help Completing Your Checklist?
            </h2>
            <p className="text-white/75 max-w-xl mx-auto mb-8">
              Let Nimble handle the heavy lifting. Book a free consultation and we'll walk through every step with you.
            </p>
            <Link to="/book" className="btn-white text-sm px-8 py-3.5">
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
