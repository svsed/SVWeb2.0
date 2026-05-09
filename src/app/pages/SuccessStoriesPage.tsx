import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { successStories } from '../data/successStories';

const PJS = 'Plus Jakarta Sans, sans-serif';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function SuccessStoriesPage() {
  const navigate = useNavigate();
  const featured = successStories.filter((s) => s.featured);
  const rest = successStories.filter((s) => !s.featured);

  return (
    <div style={{ background: '#111111', minHeight: '100vh' }}>
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,84,255,0.09), transparent 60%)' }} />
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full mb-6" style={{ border: '1px solid rgba(108,84,255,0.3)', background: 'rgba(108,84,255,0.08)' }}>
              <span className="text-white/50" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Success Stories</span>
            </div>
            {/* H1 — 800 */}
            <h1 className="text-white mb-5" style={{ fontFamily: PJS, fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.06 }}>
              Systems at work.{' '}
              <span style={{ background: 'linear-gradient(135deg, #8875FF, #6C54FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Results that matter.</span>
            </h1>
            <p className="text-white/45 mx-auto" style={{ fontFamily: PJS, fontSize: '17px', fontWeight: 400, lineHeight: 1.7, maxWidth: '520px' }}>
              Real engagements. Measurable outcomes. Every story starts with a systems problem and ends with a transformed operation.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Featured */}
      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-white/30 mb-6" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Featured</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((story, i) => (
              <FadeIn key={story.slug} delay={0.1 * i}>
                <Link to={`/success-stories/${story.slug}`} className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]" style={{ background: 'rgba(24,24,24,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${story.accentColor}, ${story.accentColor}60)` }} />
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full" style={{ fontFamily: PJS, fontSize: '10px', fontWeight: 600, color: story.accentColor, background: `${story.accentColor}12`, border: `1px solid ${story.accentColor}22`, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{story.industry}</span>
                      <span className="text-white/25" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 400 }}>{story.duration}</span>
                    </div>
                    {/* Story title — 700 */}
                    <h3 className="text-white mb-3" style={{ fontFamily: PJS, fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.35 }}>{story.title}</h3>
                    {/* Tagline — 400 */}
                    <p className="text-white/40 mb-6" style={{ fontFamily: PJS, fontSize: '13.5px', fontWeight: 400, lineHeight: 1.65 }}>{story.tagline}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {story.results.slice(0, 4).map((r) => (
                        <div key={r.label} className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                          {/* Metric — 800 */}
                          <div style={{ fontFamily: PJS, fontSize: '1.4rem', fontWeight: 800, color: story.accentColor, letterSpacing: '-0.04em', lineHeight: 1 }}>{r.metric}</div>
                          <div className="text-white/40 mt-1" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 400 }}>{r.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-white/50 group-hover:text-white/80 transition-colors">
                      <span style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 500 }}>Read the full story</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* More Stories */}
      {rest.length > 0 && (
        <div className="px-6 pb-24" style={{ background: '#1A1A1A' }}>
          <div className="max-w-6xl mx-auto pt-16">
            <FadeIn>
              <h2 className="text-white/30 mb-6" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>More Stories</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {rest.map((story, i) => (
                <FadeIn key={story.slug} delay={0.08 * i}>
                  <Link to={`/success-stories/${story.slug}`} className="group flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.01]" style={{ background: 'rgba(22,22,22,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: `${story.accentColor}14`, border: `1px solid ${story.accentColor}22` }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: story.accentColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white/30" style={{ fontFamily: PJS, fontSize: '11px', fontWeight: 400 }}>{story.industry}</span>
                      </div>
                      <h3 className="text-white mb-1 truncate" style={{ fontFamily: PJS, fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.015em' }}>{story.title}</h3>
                      <p className="text-white/35 mb-3 line-clamp-2" style={{ fontFamily: PJS, fontSize: '13px', fontWeight: 400, lineHeight: 1.55 }}>{story.tagline}</p>
                      <div className="flex items-center gap-1.5 text-white/40 group-hover:text-white/70 transition-colors">
                        <span style={{ fontFamily: PJS, fontSize: '12px', fontWeight: 500 }}>Read story</span>
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="py-20 px-6" style={{ background: '#111111' }}>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-4" style={{ fontFamily: PJS, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Ready to write your own story?</h3>
            <p className="text-white/40 mb-8" style={{ fontFamily: PJS, fontSize: '16px', fontWeight: 400, lineHeight: 1.7 }}>Every transformation starts with a systems audit. Let's map yours.</p>
            <button onClick={() => navigate('/contact')} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105" style={{ fontFamily: PJS, fontSize: '14px', fontWeight: 600, background: 'linear-gradient(135deg, #6C54FF, #8875FF)', boxShadow: '0 0 25px rgba(108,84,255,0.3)' }}>
              Start a Conversation <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
