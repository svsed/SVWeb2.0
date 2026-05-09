import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

const PJS = 'Plus Jakarta Sans, sans-serif';

const oldItems = ['Software outsourcing', 'ERP implementation', 'Generic digital transformation', 'UI/UX services', 'Manpower-led execution', 'Project-based delivery'];
const newItems = ['AI-native business systems', 'Intelligent workflow engineering', 'Productivity transformation', 'Business operating systems', 'System orchestration', 'AI-assisted execution layers'];

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function NewSystemsValley() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section ref={containerRef} className="relative py-28 md:py-40 px-6 overflow-hidden" style={{ background: '#1A1A1A' }}>
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(108,84,255,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </motion.div>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full mb-6" style={{ border: '1px solid rgba(108,84,255,0.25)', background: 'rgba(108,84,255,0.07)' }}>
              {/* Eyebrow — 500 */}
              <span className="text-white/40" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Reinvention</span>
            </div>
            {/* Strikethrough context lines — weight 400, muted */}
            <h2 className="text-white/20 mb-2" style={{ fontFamily: PJS, fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.5 }}>
              We are not an IT company.
            </h2>
            <h2 className="text-white/20 mb-8" style={{ fontFamily: PJS, fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.5 }}>
              We are not a consultancy. We are not a digital agency.
            </h2>
            {/* Identity statement — weight 800 */}
            <div style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.08, background: 'linear-gradient(135deg, #F1F2F5 0%, #8875FF 40%, #6C54FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              We are Systems Valley.
            </div>
            {/* Body — weight 400 */}
            <p className="text-white/40 mx-auto mt-6" style={{ fontFamily: PJS, fontSize: '17px', fontWeight: 400, lineHeight: 1.75, maxWidth: '560px' }}>
              An AI-native systems transformation company that engineers the operational intelligence layer for the modern enterprise.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Old */}
            <div className="p-8 rounded-2xl" style={{ background: 'rgba(20,20,20,0.7)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                {/* Section label — 500 */}
                <span className="text-white/25" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Legacy positioning</span>
              </div>
              <div className="space-y-3">
                {oldItems.map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i, duration: 0.5 }} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-white/15 flex-shrink-0" />
                    <span className="text-white/25 line-through" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 400, textDecorationColor: 'rgba(255,255,255,0.1)' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* New */}
            <div className="p-8 rounded-2xl relative overflow-hidden" style={{ background: 'rgba(22,18,40,0.8)', border: '1px solid rgba(108,84,255,0.2)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(108,84,255,0.1), transparent 60%)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#8875FF', boxShadow: '0 0 8px #8875FF' }} />
                  <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8875FF' }}>New positioning</span>
                </div>
                <div className="space-y-3">
                  {newItems.map((item, i) => (
                    <motion.div key={item} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i + 0.1, duration: 0.5 }} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#6C54FF' }} />
                      <span className="text-white/80" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 500 }}>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
