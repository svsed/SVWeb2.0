import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { TrendingUp, ArrowUpRight, Layers, GitBranch, Cpu, Users, ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const PJS = 'Plus Jakarta Sans, sans-serif';

const services = [
  {
    icon: TrendingUp, name: 'Intelligent Demand Systems', tagline: 'Engineered to create compounding demand intelligence', accent: '#6C54FF',
    description: 'We replace unpredictable marketing spend with a systematic, AI-assisted demand architecture that attracts, qualifies, and nurtures demand across every channel.',
    phases: [
      { title: 'Demand Audit', body: 'Map existing demand sources, conversion funnels, and CAC across channels. Identify highest-leverage acquisition levers.' },
      { title: 'Intelligence Architecture', body: 'Design an AI-assisted content and distribution engine — one that generates qualified demand at scale with compounding efficiency.' },
      { title: 'Activation & Measurement', body: 'Deploy the demand system, establish KPI tracking, and run rapid iteration cycles to improve cost-per-qualified-lead continuously.' },
      { title: 'Compounding Growth Layer', body: 'Build organic and referral compounding systems on top of the paid/performance foundation for sustainable, cost-declining growth.' },
    ],
    capabilities: ['ICP modelling & targeting', 'AI-led content engine', 'Multi-channel orchestration', 'Lead intelligence scoring', 'Attribution intelligence', 'Demand analytics dashboard'],
    outcomes: ['Predictable qualified pipeline', 'Lower CAC over time', 'Organic demand compounding', 'Channel efficiency intelligence'],
  },
  {
    icon: ArrowUpRight, name: 'Conversion Intelligence Systems', tagline: 'Turning traffic into revenue through behavioral intelligence', accent: '#8875FF',
    description: 'We rebuild every conversion touchpoint as an intelligent system — applying behavioral science, decision psychology, and AI personalization to turn interest into commitment.',
    phases: [
      { title: 'Funnel Intelligence Audit', body: 'Deep analysis of every conversion step — drop-off rates, friction points, intent signals, and competitive benchmarks.' },
      { title: 'Decision Psychology Design', body: 'Map the buyer decision journey and redesign touchpoints with proven behavioral principles and AI-assisted personalization.' },
      { title: 'Conversion System Deployment', body: 'Deploy optimized landing pages, automated nurture sequences, intelligent chat, and conversion-focused UX layers.' },
      { title: 'Continuous Optimization', body: 'Run structured A/B and multivariate experiments with AI-assisted insight extraction to continuously compound conversion rates.' },
    ],
    capabilities: ['Conversion funnel mapping', 'Landing page intelligence', 'Behavioral segmentation', 'Intelligent nurture sequences', 'A/B testing infrastructure', 'Revenue attribution'],
    outcomes: ['Higher conversion rates', 'Shorter sales cycles', 'Better lead quality', 'Revenue per visitor growth'],
  },
  {
    icon: Layers, name: 'Productivity Transformation Systems', tagline: 'Multiply team output without adding headcount', accent: '#9B8CFF',
    description: 'We audit every operational workflow, identify drag and redundancy, and reengineer them with AI-native tooling that multiplies individual and team productivity.',
    phases: [
      { title: 'Operations Audit', body: 'Document every workflow across the business — from intake to delivery. Quantify time spent on each task and identify automation opportunities.' },
      { title: 'AI Tool Architecture', body: 'Design the optimal AI toolstack for the specific workflows — matching capability to need, not chasing trends.' },
      { title: 'Workflow Reengineering', body: 'Redesign identified workflows with AI automation, co-pilots, and intelligent routing built in from the start.' },
      { title: 'Adoption & Amplification', body: 'Run structured adoption programs to ensure teams use the new systems effectively, then expand to further departments.' },
    ],
    capabilities: ['Workflow time-motion analysis', 'AI tool integration', 'Process automation design', 'Change management', 'Output measurement', 'ROI tracking'],
    outcomes: ['Quantified productivity gains', 'Reduced manual work', 'Faster decision cycles', 'Scalable operations'],
  },
  {
    icon: GitBranch, name: 'Workflow Orchestration Systems', tagline: 'End-to-end intelligent process orchestration', accent: '#6C54FF',
    description: 'We connect fragmented processes, tools, and teams into a unified, intelligent workflow layer — where information flows automatically and work orchestrates itself.',
    phases: [
      { title: 'Systems Mapping', body: 'Document all existing tools, data flows, and process handoffs. Identify integration gaps and orchestration opportunities.' },
      { title: 'Orchestration Architecture', body: 'Design the target workflow state — where data moves automatically, approvals trigger intelligently, and exceptions route efficiently.' },
      { title: 'Integration & Automation Build', body: 'Build the integration and automation layer using best-in-class orchestration tools and AI-assisted workflow management.' },
      { title: 'Monitoring & Optimization', body: 'Deploy workflow performance monitoring and run continuous optimization cycles to improve throughput and reduce bottlenecks.' },
    ],
    capabilities: ['Process architecture design', 'Tool integration layer', 'Automated approval flows', 'Exception intelligence', 'Cross-team orchestration', 'Workflow analytics'],
    outcomes: ['Zero information silos', 'Automated handoffs', 'Faster approvals', 'Full operational visibility'],
  },
  {
    icon: Cpu, name: 'AI-Assisted Operational Systems', tagline: 'Embedding intelligence into the daily fabric of operations', accent: '#8875FF',
    description: 'We design and deploy AI co-pilots, decision support tools, and operational intelligence layers that make every business function measurably smarter and faster.',
    phases: [
      { title: 'Intelligence Opportunity Mapping', body: 'Identify every decision point, repetitive cognitive task, and data analysis need across the business where AI can create leverage.' },
      { title: 'AI Layer Design', body: 'Design the AI system architecture — co-pilots, assistants, dashboards, and automated decision triggers — integrated into existing tools.' },
      { title: 'Deployment & Training', body: 'Deploy the AI operational layer with structured training to ensure teams leverage capabilities fully from day one.' },
      { title: 'Continuous Intelligence Evolution', body: 'Monitor AI system performance, gather team feedback, and evolve the intelligence layer as business needs change.' },
    ],
    capabilities: ['AI co-pilot design', 'Decision automation', 'Real-time operational dashboards', 'Anomaly detection', 'Predictive intelligence', 'AI adoption management'],
    outcomes: ['Faster decisions', 'Reduced cognitive load', 'Proactive issue detection', 'Intelligence that compounds'],
  },
  {
    icon: Users, name: 'Customer Experience Intelligence', tagline: 'Transforming touchpoints into intelligent relationships', accent: '#9B8CFF',
    description: 'We build customer intelligence systems that unify data, apply behavioral AI, and personalize every interaction — turning one-time transactions into compounding relationships.',
    phases: [
      { title: 'Customer Intelligence Foundation', body: 'Unify customer data from all sources into a single intelligence layer — building the foundation for personalization at scale.' },
      { title: 'Behavioral Segmentation', body: 'Apply AI-powered segmentation to identify meaningful customer archetypes with distinct needs, behaviors, and value potential.' },
      { title: 'Personalization System Build', body: 'Deploy personalized communication, recommendation, and retention systems across every customer touchpoint.' },
      { title: 'Loyalty Intelligence Layer', body: 'Build churn prediction, intervention triggers, and loyalty amplification systems that compound customer lifetime value.' },
    ],
    capabilities: ['Customer data unification', 'AI behavioral segmentation', 'Personalization engine', 'Churn prediction', 'Retention automation', 'CLV optimization'],
    outcomes: ['Higher retention rates', 'Improved customer LTV', 'Personalisation at scale', 'Predictive churn prevention'],
  },
];

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay: 0.06 * index }} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(24,24,24,0.9)', border: expanded ? `1px solid ${service.accent}30` : '1px solid rgba(255,255,255,0.06)', transition: 'border 0.3s' }}>
      <button className="w-full p-7 text-left" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${service.accent}14`, border: `1px solid ${service.accent}25` }}>
              <service.icon size={18} style={{ color: service.accent }} />
            </div>
            <div>
              {/* Service name — 700 */}
              <h3 className="text-white mb-1" style={{ fontFamily: PJS, fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{service.name}</h3>
              {/* Tagline — 400 */}
              <p style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 400, color: service.accent, opacity: 0.7 }}>{service.tagline}</p>
            </div>
          </div>
          <ChevronDown size={18} className="text-white/30 flex-shrink-0 mt-1 transition-transform duration-300" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </div>
        <p className="text-white/45 mt-4" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}>{service.description}</p>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <div className="px-7 pb-7 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  {/* Section label — 500 uppercase */}
                  <h4 className="text-white/50 mb-4" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Engagement Framework</h4>
                  <div className="space-y-4">
                    {service.phases.map((phase, i) => (
                      <div key={phase.title} className="flex gap-4">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${service.accent}12`, border: `1px solid ${service.accent}20` }}>
                          <span style={{ fontFamily: PJS, fontSize: '9px', fontWeight: 700, color: service.accent }}>{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <div>
                          {/* Phase title — 600 */}
                          <div className="text-white mb-1" style={{ fontFamily: PJS, fontSize: '0.875rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{phase.title}</div>
                          {/* Phase body — 400 */}
                          <div className="text-white/40" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400, lineHeight: 1.6 }}>{phase.body}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-white/50 mb-3" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Capabilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((c) => (
                        <span key={c} className="px-2.5 py-1 rounded-full" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, color: service.accent, background: `${service.accent}10`, border: `1px solid ${service.accent}18` }}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/50 mb-3" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Business Outcomes</h4>
                    <div className="space-y-2">
                      {service.outcomes.map((o) => (
                        <div key={o} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.accent }} />
                          <span className="text-white/60" style={{ fontFamily: PJS, fontSize: '12.5px', fontWeight: 400 }}>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesPage() {
  const navigate = useNavigate();
  return (
    <div style={{ background: '#111111', minHeight: '100vh' }}>
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,84,255,0.1), transparent 60%)' }} />
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full mb-6" style={{ border: '1px solid rgba(108,84,255,0.3)', background: 'rgba(108,84,255,0.08)' }}>
              <span className="text-white/50" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>What We Engineer</span>
            </div>
            {/* Page H1 — 800 */}
            <h1 className="text-white mb-5" style={{ fontFamily: PJS, fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.06 }}>
              Six modular systems.{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Infinite leverage.</span>
            </h1>
            <p className="text-white/45 mx-auto" style={{ fontFamily: PJS, fontSize: '17px', fontWeight: 400, lineHeight: 1.7, maxWidth: '560px' }}>
              Each system is a modular intelligence layer — independently deployable, interdependently powerful. Click any system to see the full framework.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-4">
          {services.map((service, i) => <ServiceCard key={service.name} service={service} index={i} />)}
        </div>
      </div>

      <div className="px-6 pb-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl" style={{ background: 'rgba(22,18,40,0.7)', border: '1px solid rgba(108,84,255,0.2)' }}>
            {/* CTA heading — 700 */}
            <h3 className="text-white mb-4" style={{ fontFamily: PJS, fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Not sure which system is right for you?</h3>
            <p className="text-white/45 mb-8 mx-auto" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.7, maxWidth: '440px' }}>
              We start every engagement with a systems audit — mapping your operational architecture before recommending anything.
            </p>
            <button onClick={() => navigate('/contact')} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 600, background: 'linear-gradient(135deg, #6C54FF, #8875FF)', boxShadow: '0 0 25px rgba(108,84,255,0.3)' }}>
              Request a Systems Audit
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
