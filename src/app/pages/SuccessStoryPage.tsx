import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router';
import { successStories } from '../data/successStories';

const PJS = 'Plus Jakarta Sans, sans-serif';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function SuccessStoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const story = successStories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#111111' }}>
        <div className="text-center">
          <p className="text-white/50 mb-4" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400 }}>Story not found.</p>
          <Link to="/success-stories" className="text-white/70 hover:text-white" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 500 }}>← Back to stories</Link>
        </div>
      </div>
    );
  }

  const otherStories = successStories.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <div style={{ background: '#111111', minHeight: '100vh' }}>
      {/* Back nav */}
      <div className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/success-stories" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors mb-8">
            <ArrowLeft size={14} />
            <span style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 500 }}>All Stories</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${story.accentColor}0D, transparent 60%)` }} />
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 600, color: story.accentColor, background: `${story.accentColor}14`, border: `1px solid ${story.accentColor}25`, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{story.industry}</span>
              <span className="text-white/25" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 400 }}>{story.duration}</span>
            </div>
            {/* H1 — 800 */}
            <h1 className="text-white mb-5" style={{ fontFamily: PJS, fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.12 }}>{story.title}</h1>
            {/* Lead — 400 */}
            <p className="text-white/50" style={{ fontFamily: PJS, fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}>{story.tagline}</p>
          </motion.div>
        </div>
      </div>

      {/* Results Banner */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl" style={{ background: 'rgba(22,18,40,0.7)', border: `1px solid ${story.accentColor}20` }}>
              {story.results.map((r) => (
                <div key={r.label} className="text-center py-2">
                  {/* Metric — 800 */}
                  <div style={{ fontFamily: PJS, fontSize: '2rem', fontWeight: 800, color: story.accentColor, letterSpacing: '-0.04em', lineHeight: 1 }}>{r.metric}</div>
                  {/* Label — 600 */}
                  <div className="text-white/60 mt-1.5" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 600, letterSpacing: '-0.01em' }}>{r.label}</div>
                  {/* Description — 300 */}
                  <div className="text-white/25 mt-1" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 300, lineHeight: 1.5 }}>{r.description}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto space-y-14">
          <FadeIn>
            <div>
              <div className="inline-block px-3 py-1 rounded-full mb-5" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
                <span className="text-white/40" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Challenge</span>
              </div>
              {/* Body — 400 */}
              <p className="text-white/70 mb-5" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.8 }}>{story.challenge}</p>
              <ul className="space-y-3">
                {story.challengeDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.25)' }} />
                    <span className="text-white/45" style={{ fontFamily: PJS, fontSize: '14.5px', fontWeight: 400, lineHeight: 1.65 }}>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
          <FadeIn>
            <div>
              <div className="inline-block px-3 py-1 rounded-full mb-5" style={{ border: `1px solid ${story.accentColor}25`, background: `${story.accentColor}08` }}>
                <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: story.accentColor, opacity: 0.8 }}>The Solution</span>
              </div>
              <p className="text-white/70 mb-5" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.8 }}>{story.solution}</p>
              <ul className="space-y-3">
                {story.solutionDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: story.accentColor }} />
                    <span className="text-white/50" style={{ fontFamily: PJS, fontSize: '14.5px', fontWeight: 400, lineHeight: 1.65 }}>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
          <FadeIn>
            <div>
              <div className="inline-block px-3 py-1 rounded-full mb-7" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}>
                <span className="text-white/40" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Approach</span>
              </div>
              <div className="space-y-5">
                {story.approach.map((phase) => (
                  <div key={phase.phase} className="flex gap-5 p-6 rounded-2xl" style={{ background: 'rgba(24,24,24,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${story.accentColor}12`, border: `1px solid ${story.accentColor}22` }}>
                      <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 700, color: story.accentColor }}>{phase.phase}</span>
                    </div>
                    <div>
                      {/* Phase title — 600 */}
                      <h4 className="text-white mb-2" style={{ fontFamily: PJS, fontSize: '0.95rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{phase.title}</h4>
                      {/* Phase body — 400 */}
                      <p className="text-white/40" style={{ fontFamily: PJS, fontSize: '13.5px', fontWeight: 400, lineHeight: 1.65 }}>{phase.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {story.quote && (
            <FadeIn>
              <div className="p-8 rounded-2xl" style={{ background: 'rgba(22,18,40,0.7)', border: `1px solid ${story.accentColor}20` }}>
                <Quote size={24} className="mb-4 opacity-30" style={{ color: story.accentColor }} />
                {/* Quote — 400 italic */}
                <p className="text-white/70 mb-6" style={{ fontFamily: PJS, fontSize: '17px', fontWeight: 400, lineHeight: 1.8, fontStyle: 'italic' }}>"{story.quote.text}"</p>
                <div>
                  {/* Author — 600 */}
                  <div className="text-white/60" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 600 }}>{story.quote.author}</div>
                  {/* Role — 400 muted */}
                  <div className="text-white/30" style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 400 }}>{story.quote.role}</div>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      {otherStories.length > 0 && (
        <div className="px-6 py-16" style={{ background: '#1A1A1A' }}>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h3 className="text-white/30 mb-6" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>More Stories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {otherStories.map((s) => (
                  <Link key={s.slug} to={`/success-stories/${s.slug}`} className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.01]" style={{ background: 'rgba(22,22,22,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: `${s.accentColor}14`, border: `1px solid ${s.accentColor}22` }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.accentColor }} />
                    </div>
                    <div>
                      <h4 className="text-white mb-1 line-clamp-2" style={{ fontFamily: PJS, fontSize: '0.9rem', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.3 }}>{s.title}</h4>
                      <div className="flex items-center gap-1.5 text-white/35 group-hover:text-white/60 transition-colors mt-2">
                        <span style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500 }}>Read story</span>
                        <ArrowRight size={11} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      )}

      <div className="py-20 px-6" style={{ background: '#111111' }}>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-4" style={{ fontFamily: PJS, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Want results like these?</h3>
            <p className="text-white/40 mb-8" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.7 }}>Let's start by mapping your operational architecture and identifying your highest-leverage transformation opportunity.</p>
            <button onClick={() => navigate('/contact')} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 600, background: 'linear-gradient(135deg, #6C54FF, #8875FF)', boxShadow: '0 0 25px rgba(108,84,255,0.3)' }}>
              Start a Conversation <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
