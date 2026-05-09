import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const PJS = 'Plus Jakarta Sans, sans-serif';

const layers = [
  { id: 'ai', label: 'Artificial Intelligence', color: '#6C54FF', angle: 270 },
  { id: 'systems', label: 'Systems Thinking', color: '#8875FF', angle: 315 },
  { id: 'ux', label: 'Human-Centered UX', color: '#9B8CFF', angle: 0 },
  { id: 'business', label: 'Business Strategy', color: '#6C54FF', angle: 45 },
  { id: 'automation', label: 'Automation', color: '#8875FF', angle: 90 },
  { id: 'ops', label: 'Operational Intelligence', color: '#9B8CFF', angle: 135 },
  { id: 'execution', label: 'Execution Design', color: '#6C54FF', angle: 180 },
  { id: 'workflows', label: 'Workflow Intelligence', color: '#8875FF', angle: 225 },
];

const methodSteps = [
  { number: '01', title: 'Systems Audit', body: 'We map your current operational architecture — workflows, tools, data flows, and decision bottlenecks.', color: '#6C54FF' },
  { number: '02', title: 'Intelligence Design', body: 'We design an AI-native layer that integrates seamlessly into your business context, not against it.', color: '#8875FF' },
  { number: '03', title: 'Rapid Pilot', body: 'We build a focused, measurable pilot — validating assumptions before committing to full-scale engineering.', color: '#9B8CFF' },
  { number: '04', title: 'Systems Evolution', body: 'We iterate, expand, and evolve the system continuously — compounding intelligence with every cycle.', color: 'rgba(255,255,255,0.7)' },
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

function OrbitDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const R_OUTER = 148;
  const CX = 180;
  const CY = 180;

  return (
    <div ref={ref} className="flex justify-center items-center">
      <div className="relative w-[360px] h-[360px]">
        <svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <motion.circle cx={CX} cy={CY} r={R_OUTER} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 8" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.3 }} />
          <motion.circle cx={CX} cy={CY} r={68} stroke="rgba(108,84,255,0.15)" strokeWidth="1" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.4 }} />
          {layers.map((layer, i) => {
            const rad = (layer.angle * Math.PI) / 180;
            const x2 = CX + Math.cos(rad) * R_OUTER;
            const y2 = CY + Math.sin(rad) * R_OUTER;
            return <motion.line key={layer.id} x1={CX} y1={CY} x2={x2} y2={y2} stroke={layer.color} strokeOpacity="0.15" strokeWidth="0.8" initial={{ pathLength: 0, opacity: 0 }} animate={inView ? { pathLength: 1, opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.6 + i * 0.06 }} />;
          })}
          {layers.map((layer, i) => {
            const rad = (layer.angle * Math.PI) / 180;
            const nx = CX + Math.cos(rad) * R_OUTER;
            const ny = CY + Math.sin(rad) * R_OUTER;
            return (
              <g key={layer.id}>
                <motion.circle cx={nx} cy={ny} r={14} fill={layer.color} fillOpacity="0.08" stroke={layer.color} strokeOpacity="0.3" strokeWidth="1" initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.7 + i * 0.07, ease: 'backOut' }} style={{ transformOrigin: `${nx}px ${ny}px` }} />
                <motion.circle cx={nx} cy={ny} r={3} fill={layer.color} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.85 + i * 0.07 }} />
              </g>
            );
          })}
        </svg>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center mx-auto" style={{ background: 'radial-gradient(circle, rgba(108,84,255,0.2) 0%, rgba(17,17,17,0.9) 70%)', border: '1px solid rgba(108,84,255,0.3)', boxShadow: '0 0 40px rgba(108,84,255,0.2)' }}>
              <span className="text-white" style={{ fontFamily: PJS, fontSize: '10px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Systems</span>
              <span style={{ fontFamily: PJS, fontSize: '10px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Valley</span>
            </div>
          </div>
        </motion.div>

        {layers.map((layer) => {
          const rad = (layer.angle * Math.PI) / 180;
          const labelR = R_OUTER + 30;
          const lx = 50 + ((CX + Math.cos(rad) * labelR) / 360) * 100;
          const ly = 50 + ((CY + Math.sin(rad) * labelR) / 360) * 100;
          return (
            <div key={layer.id + '-label'} className="absolute pointer-events-none" style={{ left: `${lx}%`, top: `${ly}%`, transform: 'translate(-50%, -50%)' }}>
              <span style={{ fontFamily: PJS, fontSize: '9px', fontWeight: 500, letterSpacing: '0.03em', color: layer.color, opacity: 0.7, whiteSpace: 'nowrap', textAlign: 'center', display: 'block' }}>{layer.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Approach() {
  return (
    <section id="approach" className="relative py-28 md:py-36 px-6 overflow-hidden" style={{ background: '#1A1A1A' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(155,140,255,0.4), transparent)' }} />
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full mb-5" style={{ border: '1px solid rgba(155,140,255,0.25)', background: 'rgba(155,140,255,0.06)' }}>
              <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(155,140,255,0.8)' }}>AI-Native Systems Approach</span>
            </div>
            {/* Section H2 — 800 */}
            <h2 className="text-white" style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '640px', margin: '0 auto' }}>
              Where intelligence meets{' '}
              <span style={{ background: 'linear-gradient(135deg, #9B8CFF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>systems architecture.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1}><OrbitDiagram /></FadeIn>
          <div className="space-y-5">
            {methodSteps.map((step, i) => (
              <FadeIn key={step.number} delay={0.15 + i * 0.09}>
                <div className="p-6 rounded-2xl group transition-all duration-300 hover:scale-[1.01]" style={{ background: 'rgba(24,24,24,0.7)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}>
                      {/* Step number — 700 */}
                      <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 700, color: step.color, letterSpacing: '0.02em' }}>{step.number}</span>
                    </div>
                    <div>
                      {/* Step title — 600 */}
                      <h4 className="text-white mb-1.5" style={{ fontFamily: PJS, fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.015em' }}>{step.title}</h4>
                      {/* Step body — 400 */}
                      <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '13.5px', fontWeight: 400, lineHeight: 1.65 }}>{step.body}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
