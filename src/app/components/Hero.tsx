import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SystemsCanvas } from './SystemsCanvas';

const PJS = 'Plus Jakarta Sans, sans-serif';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleExplore = () => document.getElementById('the-shift')?.scrollIntoView({ behavior: 'smooth' });
  const handlePilot = () => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#111111' }}>
      <SystemsCanvas />

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(108,84,255,0.09) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 40% at 80% 20%, rgba(136,117,255,0.05) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '200px 200px' }} />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ border: '1px solid rgba(108,84,255,0.35)', background: 'rgba(108,84,255,0.09)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#8875FF', boxShadow: '0 0 6px #8875FF' }} />
          <span className="text-white/60" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            AI-Native Systems Transformation
          </span>
        </motion.div>

        {/* Display Headline — weight 800 */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="text-white mb-6" style={{ fontFamily: PJS, fontSize: 'clamp(2.6rem, 6vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.045em' }}>
          Engineering AI-native{' '}
          <span style={{ background: 'linear-gradient(135deg, #8875FF 0%, #6C54FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            systems
          </span>
          {' '}for the next era of business productivity.
        </motion.h1>

        {/* Body — weight 400 */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }} className="mx-auto mb-10 text-white/50" style={{ fontFamily: PJS, fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 400, lineHeight: 1.7, letterSpacing: '-0.01em', maxWidth: '580px' }}>
          Systems Valley helps businesses evolve from disconnected workflows into intelligent AI-native operating systems built for compounding leverage.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="flex flex-wrap items-center justify-center gap-4">
          <button onClick={handleExplore} className="group relative px-7 py-3.5 rounded-full text-white flex items-center gap-2 transition-all duration-300 hover:scale-105" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 600, background: 'linear-gradient(135deg, #6C54FF, #8875FF)', boxShadow: '0 0 30px rgba(108,84,255,0.38)' }}>
            Explore Systems
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={handlePilot} className="group px-7 py-3.5 rounded-full text-white/70 hover:text-white flex items-center gap-2 transition-all duration-300" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}>
            Build a Pilot
          </button>
        </motion.div>

        {/* Stats strip — weight 700 / 400 */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {[
            { value: 'AI-Native', label: 'Architecture' },
            { value: 'Systems-First', label: 'Thinking' },
            { value: 'Outcome-Led', label: 'Execution' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white/80" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 700, letterSpacing: '-0.01em' }}>{stat.value}</div>
              <div className="text-white/30 mt-0.5" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} onClick={handleExplore} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #111111, transparent)' }} />
    </section>
  );
}
