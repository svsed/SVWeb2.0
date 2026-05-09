import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

const PJS = 'Plus Jakarta Sans, sans-serif';
const visionPillars = ['AI-native organizations', 'Intelligent business ecosystems', 'Autonomous operational layers', 'Interconnected business systems', 'Future-ready enterprises'];

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function HorizonVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height: '220px' }}>
      <svg viewBox="0 0 900 220" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="horizonGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6C54FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#6C54FF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#6C54FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#6C54FF" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#8875FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {Array.from({ length: 9 }).map((_, i) => <motion.line key={i} x1="0" y1={30 + i * 20} x2="900" y2={30 + i * 20} stroke="rgba(108,84,255,0.07)" strokeWidth="0.5" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }} />)}
        {Array.from({ length: 13 }).map((_, i) => <motion.line key={i} x1={75 * i} y1="0" x2={75 * i} y2="220" stroke="rgba(108,84,255,0.05)" strokeWidth="0.5" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 + i * 0.03, duration: 0.5 }} />)}
        <motion.line x1="0" y1="110" x2="900" y2="110" stroke="url(#lineGrad)" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} animate={inView ? { pathLength: 1, opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.3 }} />
        {[120, 220, 340, 450, 570, 680, 800].map((x, i) => {
          const ys = [95, 80, 72, 60, 55, 48, 40];
          return <g key={i}><motion.circle cx={x} cy={ys[i]} r={3.5} fill={i % 2 === 0 ? '#6C54FF' : '#8875FF'} fillOpacity="0.9" initial={{ cy: 110, opacity: 0 }} animate={inView ? { cy: ys[i], opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }} /><motion.line x1={x} y1={110} x2={x} y2={ys[i]} stroke={i % 2 === 0 ? '#6C54FF' : '#8875FF'} strokeOpacity="0.2" strokeWidth="1" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }} /></g>;
        })}
        <motion.polyline points="120,95 220,80 340,72 450,60 570,55 680,48 800,40" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" strokeOpacity="0.6" initial={{ pathLength: 0, opacity: 0 }} animate={inView ? { pathLength: 1, opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.8 }} />
        <motion.polygon points="120,95 220,80 340,72 450,60 570,55 680,48 800,40 800,110 120,110" fill="url(#horizonGrad)" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.2, duration: 0.8 }} />
      </svg>
    </div>
  );
}

export function FutureVision() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section ref={ref} className="relative py-28 md:py-36 px-6 overflow-hidden" style={{ background: '#1A1A1A' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(108,84,255,0.35), rgba(136,117,255,0.35), transparent)' }} />
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(108,84,255,0.07), transparent)' }} />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full mb-5" style={{ border: '1px solid rgba(108,84,255,0.25)', background: 'rgba(108,84,255,0.07)' }}>
              <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(108,84,255,0.8)' }}>Future Vision</span>
            </div>
            {/* Display H2 — 800 */}
            <h2 className="text-white mb-6" style={{ fontFamily: PJS, fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.06, maxWidth: '780px', margin: '0 auto 1.5rem' }}>
              The future belongs to{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF 0%, #6C54FF 60%, #9B8CFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                intelligent organizations.
              </span>
            </h2>
            {/* Body — 400 */}
            <p className="text-white/40 mx-auto" style={{ fontFamily: PJS, fontSize: '17px', fontWeight: 400, lineHeight: 1.75, maxWidth: '560px' }}>
              The next era of business will be defined by those who built their operations on intelligence — not those who adopted the most tools.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {visionPillars.map((pillar, i) => (
              <motion.div key={pillar} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }} className="px-5 py-2.5 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                <span className="text-white/60" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400 }}>{pillar}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(22,22,22,0.7)' }}>
            <div className="p-8 pb-0">
              <div className="flex items-start justify-between mb-6">
                <div>
                  {/* Card title — 700 */}
                  <h3 className="text-white mb-1" style={{ fontFamily: PJS, fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em' }}>The intelligence curve is steepening.</h3>
                  <p className="text-white/35" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400, lineHeight: 1.6, maxWidth: '400px' }}>
                    Organizations that build AI-native operating systems today will have compounding advantages that become structurally unbeatable.
                  </p>
                </div>
              </div>
            </div>
            <HorizonVisual />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
