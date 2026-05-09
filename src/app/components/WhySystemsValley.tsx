import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, X } from 'lucide-react';

const PJS = 'Plus Jakarta Sans, sans-serif';

const comparisons = [
  { attribute: 'Engagement model', them: 'Project-based delivery', us: 'Systems-based transformation' },
  { attribute: 'Primary differentiator', them: 'Headcount & capacity', us: 'Intelligence architecture' },
  { attribute: 'Success metric', them: 'Deliverables completed', us: 'Business outcomes achieved' },
  { attribute: 'Approach to AI', them: 'AI as an add-on feature', us: 'AI as foundational layer' },
  { attribute: 'Workflow design', them: 'Process documentation', us: 'Intelligent workflow orchestration' },
  { attribute: 'Iteration model', them: 'New contract per change', us: 'Continuous systems evolution' },
];

const differentiators = [
  { title: 'Systems-first thinking', body: 'We see the business as an interconnected system before we see it as a list of problems to solve. This changes what we recommend, how we prioritize, and what we build.', color: '#6C54FF' },
  { title: 'Business outcome orientation', body: 'Every system we engineer is anchored to a commercial outcome — increased conversion, reduced operational cost, faster execution, or compounding customer value.', color: '#8875FF' },
  { title: 'UX + Business + AI integration', body: 'We are rare in that we combine human-centered design, strategic business thinking, and AI-native execution into a single coherent capability.', color: '#9B8CFF' },
  { title: 'Operational intelligence', body: "We don't just automate — we embed intelligence. Systems that learn, adapt, and improve over time rather than static deployments that require constant management.", color: 'rgba(255,255,255,0.7)' },
];

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function WhySystemsValley() {
  return (
    <section id="why" className="relative py-28 md:py-36 px-6 overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(108,84,255,0.3), transparent)' }} />
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full mb-5" style={{ border: '1px solid rgba(108,84,255,0.25)', background: 'rgba(108,84,255,0.06)' }}>
              <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(108,84,255,0.8)' }}>Why Systems Valley</span>
            </div>
            {/* H2 — 800 */}
            <h2 className="text-white" style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '640px', margin: '0 auto' }}>
              Built different.{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Operates different.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl overflow-hidden mb-14" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {/* Table header — 500 */}
            <div className="grid grid-cols-3 px-6 py-4" style={{ background: 'rgba(24,24,24,0.9)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span className="text-white/25" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Attribute</span>
              <span className="text-white/25" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Traditional vendors</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#6C54FF', boxShadow: '0 0 6px #6C54FF' }} />
                <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8875FF' }}>Systems Valley</span>
              </div>
            </div>
            {comparisons.map((row, i) => (
              <motion.div key={row.attribute} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i, duration: 0.5 }} className="grid grid-cols-3 px-6 py-4 items-center" style={{ background: i % 2 === 0 ? 'rgba(22,22,22,0.7)' : 'rgba(18,18,18,0.5)', borderBottom: i < comparisons.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <span className="text-white/50" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 500 }}>{row.attribute}</span>
                <div className="flex items-center gap-2">
                  <X size={13} className="text-white/20 flex-shrink-0" />
                  <span className="text-white/25" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400 }}>{row.them}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={13} style={{ color: '#8875FF', flexShrink: 0 }} />
                  <span className="text-white/70" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 500 }}>{row.us}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {differentiators.map((d, i) => (
            <FadeIn key={d.title} delay={0.1 + i * 0.07}>
              <div className="p-7 rounded-2xl group transition-all duration-300 hover:scale-[1.01]" style={{ background: 'rgba(24,24,24,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: d.color, boxShadow: `0 0 8px ${d.color}` }} />
                  <div>
                    {/* Title — 700 */}
                    <h4 className="text-white mb-2" style={{ fontFamily: PJS, fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.015em' }}>{d.title}</h4>
                    {/* Body — 400 */}
                    <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '13.5px', fontWeight: 400, lineHeight: 1.7 }}>{d.body}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
