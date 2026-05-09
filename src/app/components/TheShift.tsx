import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingDown, Zap, BarChart3, Cpu } from 'lucide-react';

const PJS = 'Plus Jakarta Sans, sans-serif';

const shifts = [
  { icon: TrendingDown, title: 'Manpower is no longer the moat.', body: 'Traditional IT services competed on headcount and delivery capacity. AI has commoditized execution. The differentiator now is intelligence architecture.', color: '#6C54FF' },
  { icon: Zap, title: 'Businesses demand leverage, not labour.', body: "Leaders don't want more vendors. They need operational systems that compound — automating workflows, accelerating decisions, and multiplying output.", color: '#8875FF' },
  { icon: Cpu, title: 'AI is rewriting the operating system of business.', body: 'Every function — marketing, ops, service delivery, product — is being restructured around intelligence layers. The organizations that adapt early will define the next decade.', color: '#9B8CFF' },
  { icon: BarChart3, title: 'Outcomes have replaced deliverables.', body: 'The era of project-based IT delivery is closing. What matters now is measurable business impact — productivity multipliers, conversion velocity, operational intelligence.', color: 'rgba(255,255,255,0.7)' },
];

const stats = [
  { value: '73%', label: 'of executives say AI will fundamentally change how they operate' },
  { value: '4×', label: 'productivity multiplier for AI-assisted workflows vs. traditional execution' },
  { value: '2026', label: 'predicted year most enterprise workflows become AI-augmented' },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function TheShift() {
  return (
    <section id="the-shift" className="relative py-28 md:py-36 px-6 overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(108,84,255,0.45), transparent)' }} />
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          {/* Eyebrow — weight 500 */}
          <div className="mb-5">
            <span className="text-white/30" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              The Paradigm Shift
            </span>
          </div>
          {/* Section h2 — weight 800 */}
          <h2 className="text-white mb-4" style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '700px' }}>
            The rules of business transformation have{' '}
            <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              changed permanently.
            </span>
          </h2>
          {/* Body — weight 400 */}
          <p className="text-white/45" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.7, maxWidth: '520px' }}>
            AI has not just disrupted delivery models — it has collapsed the economics of traditional IT services and raised the bar for what transformation actually means.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 mb-16 grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
            {stats.map((s) => (
              <div key={s.value} className="px-8 py-7" style={{ background: 'rgba(26,26,26,0.8)' }}>
                {/* Metric — weight 800 */}
                <div className="mb-2" style={{ fontFamily: PJS, fontSize: '2.2rem', fontWeight: 800, background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.04em' }}>
                  {s.value}
                </div>
                {/* Caption — weight 300 */}
                <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 300, lineHeight: 1.55 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {shifts.map((s, i) => (
            <FadeIn key={s.title} delay={0.1 + i * 0.08}>
              <div className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-[1.01]" style={{ background: 'rgba(26,26,26,0.7)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 30% 30%, ${s.color}08, transparent 70%)` }} />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                    <s.icon size={18} style={{ color: s.color }} />
                  </div>
                  {/* Card h3 — weight 700 */}
                  <h3 className="text-white mb-3" style={{ fontFamily: PJS, fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.35 }}>{s.title}</h3>
                  {/* Card body — weight 400 */}
                  <p className="text-white/45" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}>{s.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
