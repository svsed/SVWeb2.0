import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, ArrowUpRight, Layers, GitBranch, Cpu, Users } from 'lucide-react';

const PJS = 'Plus Jakarta Sans, sans-serif';

const systems = [
  { icon: TrendingUp, name: 'Intelligent Demand Systems', tagline: 'From marketing spend to demand architecture', description: 'We engineer AI-assisted systems that identify, attract, and qualify demand — replacing guesswork with programmatic intelligence and compounding acquisition velocity.', accent: '#6C54FF', items: ['Demand modelling', 'AI-led content engines', 'Performance intelligence'] },
  { icon: ArrowUpRight, name: 'Conversion Intelligence Systems', tagline: 'From traffic to committed customers', description: 'We redesign conversion funnels as intelligent systems — mapping decision psychology, applying behavioral science, and embedding AI at every friction point.', accent: '#8875FF', items: ['Funnel intelligence', 'Behavioural UX', 'Conversion automation'] },
  { icon: Layers, name: 'Productivity Transformation Systems', tagline: 'Multiply output without scaling headcount', description: 'We audit business workflows and reengineer them with AI-native tooling — cutting operational drag, accelerating throughput, and unlocking team leverage.', accent: '#9B8CFF', items: ['Workflow auditing', 'AI tool integration', 'Output amplification'] },
  { icon: GitBranch, name: 'Workflow Orchestration Systems', tagline: 'From fragmented processes to intelligent flows', description: 'We map and orchestrate end-to-end business workflows — connecting people, tools, and data into a cohesive, self-optimizing operational layer.', accent: '#6C54FF', items: ['Process intelligence', 'System integration', 'Automated orchestration'] },
  { icon: Cpu, name: 'AI-Assisted Operational Systems', tagline: 'Intelligence embedded in daily operations', description: 'We deploy AI co-pilots, automation layers, and decision support systems that make every business function smarter, faster, and more adaptive.', accent: '#8875FF', items: ['AI co-pilot design', 'Decision automation', 'Operational intelligence'] },
  { icon: Users, name: 'Customer Experience Intelligence', tagline: 'From transactional to relational at scale', description: 'We build systems that understand, personalize, and optimize every customer interaction — creating experiences that learn, adapt, and compound loyalty.', accent: '#9B8CFF', items: ['Journey intelligence', 'Personalization layers', 'Retention systems'] },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function SystemCard({ system, index }: { system: typeof systems[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-7 rounded-2xl cursor-default"
      style={{ background: 'rgba(24,24,24,0.9)', border: hovered ? `1px solid ${system.accent}35` : '1px solid rgba(255,255,255,0.05)', boxShadow: hovered ? `0 0 40px ${system.accent}12` : 'none', transition: 'border 0.4s, box-shadow 0.4s, transform 0.3s', transform: hovered ? 'scale(1.02)' : 'scale(1)' }}
    >
      <div className="absolute inset-0 rounded-2xl transition-opacity duration-500" style={{ background: `radial-gradient(circle at 20% 20%, ${system.accent}07, transparent 65%)`, opacity: hovered ? 1 : 0 }} />
      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300" style={{ background: hovered ? `${system.accent}20` : `${system.accent}0F`, border: `1px solid ${system.accent}25` }}>
          <system.icon size={18} style={{ color: system.accent }} />
        </div>
        {/* Card name — weight 700 */}
        <h3 className="text-white mb-1" style={{ fontFamily: PJS, fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{system.name}</h3>
        {/* Tagline — weight 400 */}
        <p className="mb-4" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 400, color: system.accent, opacity: 0.7, letterSpacing: '0' }}>{system.tagline}</p>
        {/* Description — weight 400 */}
        <p className="text-white/40 mb-5" style={{ fontFamily: PJS, fontSize: '13.5px', fontWeight: 400, lineHeight: 1.65 }}>{system.description}</p>
        <div className="flex flex-wrap gap-2">
          {system.items.map((item) => (
            <span key={item} className="px-3 py-1 rounded-full" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, color: system.accent, background: `${system.accent}10`, border: `1px solid ${system.accent}20`, letterSpacing: '0.02em' }}>{item}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function WhatWeEngineer() {
  return (
    <section id="what-we-engineer" className="relative py-28 md:py-36 px-6 overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(136,117,255,0.4), transparent)' }} />
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full mb-5" style={{ border: '1px solid rgba(136,117,255,0.25)', background: 'rgba(136,117,255,0.06)' }}>
              <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(136,117,255,0.8)' }}>What We Engineer</span>
            </div>
            {/* Section H2 — weight 800 */}
            <h2 className="text-white" style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '680px', margin: '0 auto' }}>
              Modular systems for{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>every business layer.</span>
            </h2>
            <p className="text-white/40 mx-auto mt-4" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.65, maxWidth: '500px' }}>
              Six intelligent system categories. Each engineered for measurable business outcomes, not just implementation completion.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {systems.map((system, i) => <SystemCard key={system.name} system={system} index={i} />)}
        </div>
      </div>
    </section>
  );
}
