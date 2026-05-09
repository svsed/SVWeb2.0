import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { SvLogoMark } from '../components/Logo';

const PJS = 'Plus Jakarta Sans, sans-serif';

const values = [
  { number: '01', title: 'Systems-First Thinking', body: 'Before we recommend a solution, we understand the system. We believe every business challenge is a systems challenge — and the right intervention changes everything downstream.', color: '#6C54FF' },
  { number: '02', title: 'Impact Over Activity', body: 'We measure success by business outcomes, not by deliverables completed. Every engagement is anchored to a commercial result — and we track it relentlessly.', color: '#8875FF' },
  { number: '03', title: "Human-Centered Intelligence", body: "AI amplifies human capability — it doesn't replace human judgment. We design every system to make the humans inside it smarter, not redundant.", color: '#9B8CFF' },
  { number: '04', title: 'Relentless Adaptability', body: "We don't have a fixed methodology we apply to every client. We adapt our approach to the specific context, constraints, and commercial objectives of each engagement.", color: '#6C54FF' },
  { number: '05', title: 'Execution Over Recommendation', body: "We're a systems company, not a strategy firm. We build and deploy — not just advise. The rubber meets the road when the system runs live.", color: '#8875FF' },
  { number: '06', title: 'Honest Partnership', body: "We tell clients what they need to hear, not what's comfortable. If a system won't deliver the expected outcome, we say so — before we build it.", color: '#9B8CFF' },
];

const whyUsPoints = [
  { title: 'We think in systems, not projects.', body: 'Most vendors think in deliverables. We think in operational architecture. This changes how we scope, prioritize, and execute — and it changes the results businesses get.' },
  { title: 'We combine three capabilities most companies keep separate.', body: 'AI engineering. Business strategy. Human-centered design. Most firms specialize in one. We integrate all three — because real transformation requires all three.' },
  { title: 'We build for leverage, not dependency.', body: 'Our systems are designed to compound value over time — not to create vendor lock-in. The longer you run them, the smarter they get and the more leverage they create.' },
  { title: "We've done it ourselves.", body: "Our EdTech execution lab isn't a case study — it's our live proof of concept. We run our own demand systems, conversion systems, and AI workflows before deploying them for clients." },
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

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#111111', minHeight: '100vh' }}>
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,84,255,0.09), transparent 60%)' }} />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-block px-4 py-1.5 rounded-full mb-6" style={{ border: '1px solid rgba(108,84,255,0.3)', background: 'rgba(108,84,255,0.08)' }}>
                <span className="text-white/50" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Who We Are</span>
              </div>
              {/* H1 — 800 */}
              <h1 className="text-white mb-6" style={{ fontFamily: PJS, fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.06 }}>
                A systems company{' '}
                <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>born for the AI era.</span>
              </h1>
              {/* Lead — 400 */}
              <p className="text-white/50 mb-8" style={{ fontFamily: PJS, fontSize: '17px', fontWeight: 400, lineHeight: 1.75 }}>
                Systems Valley engineers AI-native business systems that transform how organizations operate, grow, and compete. We are not an IT firm, an agency, or a consultancy. We are a systems company.
              </p>
              {/* Secondary — 300 */}
              <p className="text-white/35" style={{ fontFamily: PJS, fontSize: '15px', fontWeight: 300, lineHeight: 1.8 }}>
                Founded on the belief that the businesses that will define the next decade are those that build their operations on intelligence — not those that simply adopt the most tools — we exist to engineer that intelligence layer for our clients.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="hidden lg:flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-3xl flex items-center justify-center" style={{ background: 'rgba(22,18,40,0.7)', border: '1px solid rgba(108,84,255,0.2)' }}>
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(108,84,255,0.15), transparent 70%)' }} />
                <SvLogoMark height={160} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Origin Story */}
      <div className="py-20 px-6" style={{ background: '#1A1A1A' }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full mb-7" style={{ border: '1px solid rgba(108,84,255,0.25)', background: 'rgba(108,84,255,0.07)' }}>
              <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(136,117,255,0.8)' }}>Our Story</span>
            </div>
            {/* H2 — 800 */}
            <h2 className="text-white mb-6" style={{ fontFamily: PJS, fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.12 }}>
              We started in traditional IT.{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>We evolved into something different.</span>
            </h2>
            <div className="space-y-5 text-white/45" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.8 }}>
              <p>Systems Valley began like most technology service companies — delivering software, building applications, helping businesses with digital tools. We were good at it. But over time, we saw a pattern: technology was being delivered, but businesses weren't transforming.</p>
              <p>The emergence of AI changed everything. Not because AI is magical — but because it forced us to think differently about what our clients actually needed. Not more software. Not more digital features. But a fundamentally new way of operating — one where intelligence is embedded in every workflow, every decision, every customer interaction.</p>
              <p>We went through our own transformation. We rebuilt our own capabilities, thinking, and approach from the ground up. We became a systems company — one that engineers the operational intelligence layer for businesses ready to compete in the AI era.</p>
              <p className="text-white/30" style={{ fontWeight: 300 }}>That evolution is ongoing. And it's why we understand, viscerally, what it takes to transform.</p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-24 px-6" style={{ background: '#111111' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full mb-5" style={{ border: '1px solid rgba(108,84,255,0.25)', background: 'rgba(108,84,255,0.07)' }}>
                <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(136,117,255,0.8)' }}>Core Values</span>
              </div>
              {/* H2 — 800 */}
              <h2 className="text-white" style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '600px', margin: '0 auto' }}>
                What we stand for.{' '}
                <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>How we operate.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.06 * i}>
                <div className="p-7 rounded-2xl h-full" style={{ background: 'rgba(24,24,24,0.9)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {/* Number — 700 accent */}
                  <span className="block mb-4" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 700, color: v.color, letterSpacing: '0.06em' }}>{v.number}</span>
                  {/* Title — 700 */}
                  <h3 className="text-white mb-3" style={{ fontFamily: PJS, fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{v.title}</h3>
                  {/* Body — 400 */}
                  <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '13.5px', fontWeight: 400, lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Why Systems Valley */}
      <div className="py-24 px-6" style={{ background: '#1A1A1A' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full mb-5" style={{ border: '1px solid rgba(108,84,255,0.25)', background: 'rgba(108,84,255,0.07)' }}>
                <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(136,117,255,0.8)' }}>Why Systems Valley</span>
              </div>
              <h2 className="text-white mb-4" style={{ fontFamily: PJS, fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '600px' }}>
                Why clients choose us over the alternatives.
              </h2>
              <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.7, maxWidth: '520px' }}>
                There are many technology partners available. Here's what makes the Systems Valley approach genuinely different.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUsPoints.map((p, i) => (
              <FadeIn key={p.title} delay={0.08 * i}>
                <div className="p-7 rounded-2xl h-full" style={{ background: 'rgba(20,20,20,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-2 h-2 rounded-full mb-4" style={{ background: i % 2 === 0 ? '#6C54FF' : '#8875FF', boxShadow: `0 0 8px ${i % 2 === 0 ? '#6C54FF' : '#8875FF'}` }} />
                  <h3 className="text-white mb-3" style={{ fontFamily: PJS, fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.35 }}>{p.title}</h3>
                  <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}>{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-6" style={{ background: '#111111' }}>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-4" style={{ fontFamily: PJS, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Ready to work together?</h3>
            <p className="text-white/40 mb-8" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.7 }}>Let's start with a conversation about where your business is and where it could be.</p>
            <button onClick={() => navigate('/contact')} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 600, background: 'linear-gradient(135deg, #6C54FF, #8875FF)', boxShadow: '0 0 25px rgba(108,84,255,0.3)' }}>
              Start a Conversation <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
