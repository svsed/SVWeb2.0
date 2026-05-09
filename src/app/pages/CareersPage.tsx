import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Clock, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';

const PJS = 'Plus Jakarta Sans, sans-serif';

const roles = [
  {
    title: 'AI Systems Engineer', team: 'Engineering', type: 'Full-time', location: 'Bangalore / Remote', accent: '#6C54FF',
    description: "You'll design and build AI-native systems for client engagements — from intelligent workflow automation to LLM-powered co-pilots and decision support tools.",
    responsibilities: ['Architect and build AI systems across client engagements — LLMs, workflow automation, intelligent agents', 'Design and deploy API integrations connecting AI capabilities into existing business toolstacks', "Build and maintain internal AI tooling for Systems Valley's own operations and EdTech pilot", 'Collaborate with business strategists and UX designers to ensure AI systems serve real business outcomes', 'Stay current with rapidly evolving AI capabilities and identify application opportunities for clients'],
    requirements: ['3+ years of software engineering experience with strong Python or JavaScript/TypeScript skills', 'Hands-on experience building with LLMs (GPT-4, Claude, Gemini) via API', 'Experience with automation tools (n8n, Make, Zapier) and workflow orchestration', 'Understanding of AI systems design — prompting, RAG, fine-tuning, function calling', 'Strong bias for shipping working systems over perfect architecture'],
  },
  {
    title: 'Business Transformation Lead', team: 'Strategy & Consulting', type: 'Full-time', location: 'Bangalore', accent: '#8875FF',
    description: "You'll lead client engagements from systems audit through deployment — owning the business outcome responsibility and serving as the primary strategic partner for each client.",
    responsibilities: ['Lead end-to-end client engagements from systems audit through live deployment and iteration', 'Translate complex business challenges into clear systems transformation roadmaps', 'Own client relationships and business outcome accountability across all engagements', 'Collaborate with engineering and design to ensure systems deliver commercial results', 'Develop repeatable transformation frameworks from successful client engagements'],
    requirements: ['5+ years of experience in management consulting, strategy, or business transformation', 'Track record of driving measurable business outcomes — not just recommendations', 'Deep understanding of business operations across at least two functional domains', 'Ability to navigate executive stakeholders and manage complex organizational change', 'Genuine interest in how AI is transforming how businesses operate'],
  },
  {
    title: 'Workflow Intelligence Designer', team: 'Design & UX', type: 'Full-time', location: 'Bangalore / Remote', accent: '#9B8CFF',
    description: "You'll design the human experience layer of AI-native systems — making intelligent workflows feel intuitive, powerful, and easy to adopt across complex organizations.",
    responsibilities: ['Design UX for AI-assisted operational systems — dashboards, co-pilot interfaces, intelligent workflows', 'Map and redesign business workflows with a human-centered lens, identifying AI integration opportunities', 'Create high-fidelity prototypes for rapid client validation and iteration', 'Conduct user research to understand how people interact with AI systems in operational contexts', 'Develop design systems that scale across multiple client deployments'],
    requirements: ['4+ years of UX/product design experience with strong Figma skills', 'Experience designing for complex enterprise or B2B software contexts', 'Understanding of how AI capabilities can be presented intuitively to non-technical users', 'Strong systems thinking — ability to see both individual interaction and whole workflow', 'Portfolio showing measurable design impact on business outcomes'],
  },
  {
    title: 'Demand & Growth Strategist', team: 'Growth', type: 'Full-time', location: 'Bangalore / Remote', accent: '#6C54FF',
    description: "You'll build and run intelligent demand and growth systems — both for Systems Valley's own client acquisition and as an embedded capability on client demand engagements.",
    responsibilities: ["Design and operate AI-assisted demand generation systems for Systems Valley and client engagements", 'Build content intelligence engines that generate qualified demand across channels', 'Run conversion optimization systems — testing, measuring, and compounding conversion rates', 'Develop and manage client demand system deployments from architecture through execution', 'Own growth metrics and report on compounding performance week-over-week'],
    requirements: ['3+ years in growth marketing, demand generation, or revenue operations', 'Track record of building systems that compound — not campaigns that stop when you stop', 'Hands-on experience with AI content tools, automation platforms, and analytics', 'Strong analytical capability — comfortable with attribution, CAC, LTV, and funnel metrics', 'Bias for experimentation with structured measurement discipline'],
  },
];

const perks = [
  { title: 'High-trust, high-autonomy environment', body: 'We hire adults. You own your work, manage your schedule, and are accountable for outcomes — not hours.' },
  { title: 'Work on frontier problems', body: "Every engagement is genuinely novel. You'll be solving problems that don't have established playbooks." },
  { title: 'Learn at an accelerated pace', body: "Working across multiple industries simultaneously creates a learning velocity that's difficult to find anywhere else." },
  { title: 'Flexible work arrangements', body: "We're results-oriented. Work from wherever you do your best thinking, with sensible in-person collaboration." },
  { title: 'Competitive compensation', body: 'We pay well for people who deliver well. Compensation includes performance components tied to real outcomes.' },
  { title: 'Be part of the origin story', body: "We're early. The decisions and systems you build now will shape the company for years." },
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

function RoleCard({ role, index }: { role: typeof roles[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * index, duration: 0.7 }} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(24,24,24,0.9)', border: expanded ? `1px solid ${role.accent}30` : '1px solid rgba(255,255,255,0.06)', transition: 'border 0.3s' }}>
      <button className="w-full p-6 text-left" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full" style={{ fontFamily: PJS, fontSize: '10px', fontWeight: 600, color: role.accent, background: `${role.accent}12`, border: `1px solid ${role.accent}22`, letterSpacing: '0.04em' }}>{role.team}</span>
              <div className="flex items-center gap-1 text-white/30">
                <Clock size={11} />
                <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 400 }}>{role.type}</span>
              </div>
              <div className="flex items-center gap-1 text-white/30">
                <MapPin size={11} />
                <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 400 }}>{role.location}</span>
              </div>
            </div>
            {/* Role title — 700 */}
            <h3 className="text-white" style={{ fontFamily: PJS, fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{role.title}</h3>
            {/* Description — 400 */}
            <p className="text-white/40 mt-2" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400, lineHeight: 1.6 }}>{role.description}</p>
          </div>
          <ChevronDown size={18} className="text-white/30 flex-shrink-0 mt-1 transition-transform duration-300" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <div className="px-6 pb-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white/40 mb-3" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Responsibilities</h4>
                  <ul className="space-y-2">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: role.accent }} />
                        <span className="text-white/50" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400, lineHeight: 1.6 }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white/40 mb-3" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Requirements</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.3)' }} />
                        <span className="text-white/50" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400, lineHeight: 1.6 }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => navigate('/contact')} className="group mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white transition-all duration-300 hover:scale-105" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 600, background: `linear-gradient(135deg, ${role.accent}, ${role.accent}CC)` }}>
                    Apply for this role <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CareersPage() {
  const navigate = useNavigate();
  return (
    <div style={{ background: '#111111', minHeight: '100vh' }}>
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,84,255,0.09), transparent 60%)' }} />
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full mb-6" style={{ border: '1px solid rgba(108,84,255,0.3)', background: 'rgba(108,84,255,0.08)' }}>
              <span className="text-white/50" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Careers</span>
            </div>
            {/* H1 — 800 */}
            <h1 className="text-white mb-5" style={{ fontFamily: PJS, fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.06 }}>
              Build the systems that{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>shape the future.</span>
            </h1>
            <p className="text-white/45 mx-auto" style={{ fontFamily: PJS, fontSize: '17px', fontWeight: 400, lineHeight: 1.7, maxWidth: '520px' }}>
              We're a small team doing work that matters. If you're serious about AI-native systems and want to operate at the frontier, you might belong here.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-white/30 mb-6" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Open Roles</h2>
          </FadeIn>
          <div className="space-y-4">
            {roles.map((role, i) => <RoleCard key={role.title} role={role} index={i} />)}
          </div>
        </div>
      </div>

      <div className="py-20 px-6" style={{ background: '#1A1A1A' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-white" style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.12 }}>Why work at Systems Valley?</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk, i) => (
              <FadeIn key={perk.title} delay={0.06 * i}>
                <div className="p-6 rounded-2xl h-full" style={{ background: 'rgba(22,22,22,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-1.5 h-1.5 rounded-full mb-4" style={{ background: i % 2 === 0 ? '#6C54FF' : '#8875FF' }} />
                  <h3 className="text-white mb-2" style={{ fontFamily: PJS, fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.3 }}>{perk.title}</h3>
                  <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '13.5px', fontWeight: 400, lineHeight: 1.65 }}>{perk.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6" style={{ background: '#111111' }}>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-3" style={{ fontFamily: PJS, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Don't see your role listed?</h3>
            <p className="text-white/40 mb-8" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.7 }}>We occasionally hire for roles not publicly listed. If you have an unusual combination of skills and a genuine interest in AI-native systems, reach out.</p>
            <button onClick={() => navigate('/contact')} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 600, background: 'linear-gradient(135deg, #6C54FF, #8875FF)', boxShadow: '0 0 25px rgba(108,84,255,0.3)' }}>
              Send an Open Application <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
