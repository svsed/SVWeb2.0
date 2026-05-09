import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const PJS = 'Plus Jakarta Sans, sans-serif';

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const navigate = useNavigate();

  return (
    <section id="final-cta" className="relative py-28 md:py-44 px-6 overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(108,84,255,0.35), rgba(136,117,255,0.35), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(108,84,255,0.08), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: `linear-gradient(rgba(108,84,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,84,255,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ border: '1px solid rgba(108,84,255,0.35)', background: 'rgba(108,84,255,0.09)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#8875FF', boxShadow: '0 0 6px #8875FF' }} />
          <span className="text-white/60" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Begin Transformation</span>
        </motion.div>

        {/* Display CTA headline — 800 */}
        <motion.h2 initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-white mb-6" style={{ fontFamily: PJS, fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.06 }}>
          Build your AI-native{' '}
          <span style={{ background: 'linear-gradient(135deg, #8875FF 0%, #6C54FF 60%, #9B8CFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>operating layer.</span>
        </motion.h2>

        {/* Body — 400 */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25 }} className="text-white/40 mx-auto mb-10" style={{ fontFamily: PJS, fontSize: '18px', fontWeight: 400, lineHeight: 1.7, maxWidth: '520px' }}>
          The next era of business systems starts here. Let's design your transformation together — starting with a focused, measurable pilot.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.38 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => navigate('/contact')} className="group relative px-8 py-4 rounded-full text-white flex items-center gap-2.5 transition-all duration-300 hover:scale-105" style={{ fontFamily: PJS, fontSize: '15px', fontWeight: 600, background: 'linear-gradient(135deg, #6C54FF, #8875FF)', boxShadow: '0 0 30px rgba(108,84,255,0.35)' }}>
            Start a Conversation
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => navigate('/services')} className="px-8 py-4 rounded-full text-white/60 hover:text-white/90 transition-colors" style={{ fontFamily: PJS, fontSize: '15px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
            See Our Systems
          </button>
        </motion.div>

        {/* Fine print — 300 */}
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.55 }} className="text-white/20 mt-8" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 300, letterSpacing: '0.02em' }}>
          No commitments. No boilerplate proposals. Just a real conversation about your systems.
        </motion.p>
      </div>
    </section>
  );
}
