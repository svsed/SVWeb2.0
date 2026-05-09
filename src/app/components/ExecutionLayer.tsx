import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FlaskConical, Target, Zap, BarChart2 } from 'lucide-react';

const PJS = 'Plus Jakarta Sans, sans-serif';

const features = [
  { icon: FlaskConical, title: 'Real-World Execution Lab', body: "Our EdTech pilot is not a case study — it's a live systems experiment where we validate every methodology we apply for clients.", color: '#6C54FF' },
  { icon: Target, title: 'Micro-Offer Systems', body: 'We architect micro-offer frameworks that test demand at low commitment — reducing acquisition cost and accelerating product-market fit.', color: '#8875FF' },
  { icon: Zap, title: 'Demand + Conversion Systems', body: 'We run AI-assisted demand generation alongside intelligent conversion workflows — mapping the full journey from cold to committed.', color: '#9B8CFF' },
  { icon: BarChart2, title: 'Measurable Experimentation', body: 'Every hypothesis is tracked against clear KPIs. We iterate based on data, not intuition — building systems that compound over time.', color: 'rgba(255,255,255,0.7)' },
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

function LivePulse() {
  return (
    <div className="relative flex items-center gap-2">
      <div className="relative">
        <div className="w-2 h-2 rounded-full" style={{ background: '#8875FF', boxShadow: '0 0 8px #8875FF' }} />
        <motion.div animate={{ scale: [1, 2.5], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' }} className="absolute inset-0 rounded-full" style={{ background: '#8875FF' }} />
      </div>
      <span className="text-white/40" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Live</span>
    </div>
  );
}

function SystemsDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const nodes = [
    { x: 160, y: 60, label: 'Demand\nEngine', color: '#6C54FF' },
    { x: 60, y: 160, label: 'Content\nIntelligence', color: '#8875FF' },
    { x: 260, y: 160, label: 'Conversion\nSystem', color: '#9B8CFF' },
    { x: 160, y: 260, label: 'Engagement\nLayer', color: '#6C54FF' },
  ];
  return (
    <div ref={ref} className="relative rounded-2xl overflow-hidden p-8 flex items-center justify-center" style={{ background: 'rgba(24,24,24,0.8)', border: '1px solid rgba(255,255,255,0.06)', minHeight: '340px' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(108,84,255,0.07), transparent 70%)' }} />
      <svg viewBox="0 0 320 320" className="relative z-10 w-full max-w-[320px]" fill="none">
        {[[0,1],[0,2],[1,3],[2,3]].map(([a, b], i) => { const n1 = nodes[a]; const n2 = nodes[b]; return <motion.line key={i} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} stroke="rgba(108,84,255,0.2)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0, opacity: 0 }} animate={inView ? { pathLength: 1, opacity: 1 } : {}} transition={{ duration: 1, delay: 0.3 + i * 0.1 }} />; })}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle cx={node.x} cy={node.y} r={36} fill={node.color} fillOpacity="0.08" stroke={node.color} strokeOpacity="0.25" strokeWidth="1" initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: 'backOut' }} style={{ transformOrigin: `${node.x}px ${node.y}px` }} />
            <motion.circle cx={node.x} cy={node.y} r={4} fill={node.color} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }} />
          </g>
        ))}
      </svg>
      {nodes.map((node, i) => {
        const positions = [{ top: '10%', left: '50%', transform: 'translate(-50%, 0)' }, { top: '44%', left: '11%', transform: 'translate(0, -50%)' }, { top: '44%', right: '7%', transform: 'translate(0, -50%)' }, { bottom: '8%', left: '50%', transform: 'translate(-50%, 0)' }];
        return (
          <motion.div key={i} className="absolute text-center" style={{ ...positions[i] }} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}>
            {node.label.split('\n').map((line) => <div key={line} style={{ fontFamily: PJS, fontSize: '10px', fontWeight: 500, color: node.color, opacity: 0.8, lineHeight: 1.4, whiteSpace: 'nowrap' }}>{line}</div>)}
          </motion.div>
        );
      })}
      <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1, duration: 0.5 }}>
        <div className="text-center">
          <div style={{ fontFamily: PJS, fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>EdTech</div>
          <div style={{ fontFamily: PJS, fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Pilot</div>
        </div>
      </motion.div>
    </div>
  );
}

export function ExecutionLayer() {
  return (
    <section id="execution" className="relative py-28 md:py-36 px-6 overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(108,84,255,0.35), transparent)' }} />
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div className="inline-block px-4 py-1.5 rounded-full" style={{ border: '1px solid rgba(108,84,255,0.25)', background: 'rgba(108,84,255,0.06)' }}>
                <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(108,84,255,0.8)' }}>Live Execution Layer</span>
              </div>
              <LivePulse />
            </div>
            {/* H2 — 800 */}
            <h2 className="text-white mb-4" style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '700px' }}>
              Where our systems{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>prove themselves.</span>
            </h2>
            <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.65, maxWidth: '520px' }}>
              Our EdTech venture isn't a side project — it's our systems laboratory. Every tool, every method, every framework we build for clients is validated here first.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={0.1 + i * 0.08}>
                <div className="p-6 rounded-2xl h-full" style={{ background: 'rgba(24,24,24,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ background: `${f.color}14`, border: `1px solid ${f.color}25` }}>
                    <f.icon size={16} style={{ color: f.color }} />
                  </div>
                  {/* Title — 700 */}
                  <h4 className="text-white mb-2" style={{ fontFamily: PJS, fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.3 }}>{f.title}</h4>
                  {/* Body — 400 */}
                  <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400, lineHeight: 1.65 }}>{f.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}><SystemsDiagram /></FadeIn>
        </div>
      </div>
    </section>
  );
}
