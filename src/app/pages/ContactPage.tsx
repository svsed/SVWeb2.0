import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Mail, MapPin, MessageCircle } from 'lucide-react';

const PJS = 'Plus Jakarta Sans, sans-serif';

const challenges = ['Demand & Lead Generation', 'Conversion Optimization', 'Operational Productivity', 'Workflow Automation', 'AI Adoption Strategy', 'Customer Experience', 'ERP / Systems Implementation', 'Something else'];

const nextSteps = [
  { number: '01', title: 'Initial conversation', body: "We schedule a 45-minute call to understand your business, current state, and what outcomes you're trying to achieve." },
  { number: '02', title: 'Systems audit proposal', body: 'We share a scoped audit proposal — typically a 2-3 week diagnostic engagement to map your current operational architecture.' },
  { number: '03', title: 'Transformation roadmap', body: 'We deliver a prioritized systems transformation roadmap with clear business cases for each recommended system.' },
  { number: '04', title: 'Pilot engagement', body: 'We begin with a focused, time-boxed pilot on the highest-leverage system — validating impact before full deployment.' },
];

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function ContactPage() {
  const [selectedChallenge, setSelectedChallenge] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputStyle: React.CSSProperties = {
    fontFamily: PJS,
    fontSize: '14px',
    fontWeight: 400,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'white',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    padding: '12px 16px',
  };

  return (
    <div style={{ background: '#111111', minHeight: '100vh' }}>
      {/* Hero */}
      <div className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,84,255,0.09), transparent 60%)' }} />
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full mb-6" style={{ border: '1px solid rgba(108,84,255,0.3)', background: 'rgba(108,84,255,0.08)' }}>
              <span className="text-white/50" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Let's Talk</span>
            </div>
            {/* H1 — 800 */}
            <h1 className="text-white mb-5" style={{ fontFamily: PJS, fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.06 }}>
              Start your{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>transformation.</span>
            </h1>
            {/* Lead — 400 */}
            <p className="text-white/45 mx-auto" style={{ fontFamily: PJS, fontSize: '17px', fontWeight: 400, lineHeight: 1.7, maxWidth: '500px' }}>
              No commitments. No boilerplate proposals. A real conversation about your business and what's possible.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 mb-2" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 500, letterSpacing: '0.03em' }}>Full name</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-white/40 mb-2" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 500, letterSpacing: '0.03em' }}>Company</label>
                      <input type="text" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 mb-2" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 500, letterSpacing: '0.03em' }}>Email address</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" style={inputStyle} />
                  </div>

                  <div>
                    <label className="block text-white/40 mb-3" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 500, letterSpacing: '0.03em' }}>Primary challenge</label>
                    <div className="flex flex-wrap gap-2">
                      {challenges.map((c) => (
                        <button key={c} type="button" onClick={() => setSelectedChallenge(c)} className="px-3.5 py-1.5 rounded-full transition-all duration-200" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 500, border: selectedChallenge === c ? '1px solid rgba(108,84,255,0.6)' : '1px solid rgba(255,255,255,0.09)', background: selectedChallenge === c ? 'rgba(108,84,255,0.15)' : 'rgba(255,255,255,0.03)', color: selectedChallenge === c ? '#8875FF' : 'rgba(255,255,255,0.45)' }}>
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 mb-2" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 500, letterSpacing: '0.03em' }}>Tell us about your situation</label>
                    <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are you trying to achieve? What's the biggest operational challenge you're facing right now?" style={{ ...inputStyle, resize: 'none' }} />
                  </div>

                  <button type="submit" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 600, background: 'linear-gradient(135deg, #6C54FF, #8875FF)', boxShadow: '0 0 25px rgba(108,84,255,0.3)' }}>
                    Send Message <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-10 rounded-2xl text-center" style={{ background: 'rgba(22,18,40,0.7)', border: '1px solid rgba(108,84,255,0.25)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(108,84,255,0.15)', border: '1px solid rgba(108,84,255,0.3)' }}>
                    <MessageCircle size={22} style={{ color: '#8875FF' }} />
                  </div>
                  {/* Confirmation heading — 700 */}
                  <h3 className="text-white mb-3" style={{ fontFamily: PJS, fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.025em' }}>Message received.</h3>
                  <p className="text-white/45" style={{ fontFamily: PJS, fontSize: '15px', fontWeight: 400, lineHeight: 1.7 }}>We'll review your message and reach out within 1-2 business days. Looking forward to the conversation.</p>
                </motion.div>
              )}
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn delay={0.15}>
              <div className="p-6 rounded-2xl" style={{ background: 'rgba(24,24,24,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="text-white mb-5" style={{ fontFamily: PJS, fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.015em' }}>Direct contact</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@systemsvalley.com" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(108,84,255,0.1)', border: '1px solid rgba(108,84,255,0.2)' }}>
                      <Mail size={14} style={{ color: '#8875FF' }} />
                    </div>
                    <span style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400 }}>hello@systemsvalley.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/50">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(108,84,255,0.1)', border: '1px solid rgba(108,84,255,0.2)' }}>
                      <MapPin size={14} style={{ color: '#8875FF' }} />
                    </div>
                    <span style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400 }}>Bangalore, India</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: 'rgba(24,24,24,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="text-white mb-5" style={{ fontFamily: PJS, fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.015em' }}>What happens next</h3>
                <div className="space-y-4">
                  {nextSteps.map((step) => (
                    <div key={step.number} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5" style={{ background: 'rgba(108,84,255,0.1)', border: '1px solid rgba(108,84,255,0.2)' }}>
                        <span style={{ fontFamily: PJS, fontSize: '9px', fontWeight: 700, color: '#8875FF' }}>{step.number}</span>
                      </div>
                      <div>
                        {/* Step title — 600 */}
                        <div className="text-white/70 mb-0.5" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 600 }}>{step.title}</div>
                        {/* Step body — 300 */}
                        <div className="text-white/30" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 300, lineHeight: 1.55 }}>{step.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
