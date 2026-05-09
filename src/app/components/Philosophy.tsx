import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Beaker, Gauge, Infinity, Network } from 'lucide-react';

const PJS = 'Plus Jakarta Sans, sans-serif';

const principles = [
  { icon: Network, title: 'Lean Intelligent Pods', body: 'Small, focused teams augmented by AI operate 10× faster than traditional project squads. We eliminate coordination overhead and replace it with execution velocity.', color: '#6C54FF', metric: '10×', metricLabel: 'faster than traditional delivery' },
  { icon: Beaker, title: 'Rapid Experimentation', body: 'We deploy measurable pilots before committing to full systems. Every decision is tested against reality — not based on theory or trend-chasing.', color: '#8875FF', metric: '2–4', metricLabel: 'week pilot cycles' },
  { icon: Gauge, title: 'Measurable Outcomes', body: 'We define success metrics before we start. Every system we build is tracked against business KPIs — not project deliverables or deployment milestones.', color: '#9B8CFF', metric: '100%', metricLabel: 'outcome-oriented engagement' },
  { icon: Infinity, title: 'Iterative Systems Evolution', body: "We don't hand over and walk away. We stay in the system, iterating and evolving the intelligence layer as your business and market change.", color: 'rgba(255,255,255,0.7)', metric: '∞', metricLabel: 'continuous compounding value' },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 md:py-36 px-6 overflow-hidden" style={{ background: '#1A1A1A' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(108,84,255,0.3), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(108,84,255,0.04), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full mb-5" style={{ border: '1px solid rgba(108,84,255,0.25)', background: 'rgba(108,84,255,0.06)' }}>
              <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(108,84,255,0.8)' }}>Operating Philosophy</span>
            </div>
            {/* H2 — 800 */}
            <h2 className="text-white" style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '640px', margin: '0 auto' }}>
              How we operate.{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>How we deliver.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <FadeIn key={p.title} delay={0.08 + i * 0.08}>
              <div className="relative p-7 rounded-2xl h-full group transition-all duration-300 hover:scale-[1.02]" style={{ background: 'rgba(24,24,24,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}08, transparent 70%)` }} />
                <div className="relative z-10">
                  {/* Metric — 800 */}
                  <div className="mb-1" style={{ fontFamily: PJS, fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.045em', background: `linear-gradient(135deg, ${p.color}, ${p.color}80)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{p.metric}</div>
                  {/* Metric label — 400 muted */}
                  <p className="mb-5" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 400, color: p.color, opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.metricLabel}</p>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: `${p.color}12`, border: `1px solid ${p.color}20` }}>
                    <p.icon size={15} style={{ color: p.color }} />
                  </div>
                  {/* Title — 700 */}
                  <h4 className="text-white mb-3" style={{ fontFamily: PJS, fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.3 }}>{p.title}</h4>
                  {/* Body — 400 */}
                  <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400, lineHeight: 1.65 }}>{p.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
