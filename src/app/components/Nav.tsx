import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { SvLogo } from './Logo';

const pageLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Careers', href: '/careers' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleContactClick = () => {
    setOpen(false);
    navigate('/contact');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-3.5 flex items-center justify-between transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(17,17,17,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
        {/* Logo */}
        <Link to="/" className="group hover:opacity-85 transition-opacity">
          <SvLogo height={38} showText={false} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {pageLinks.map((l) => {
            const active = location.pathname === l.href || location.pathname.startsWith(l.href + '/');
            return (
              <Link
                key={l.label}
                to={l.href}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.005em',
                  color: active ? '#fff' : 'rgba(255,255,255,0.45)',
                  transition: 'color 0.2s',
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={handleContactClick}
            className="relative px-5 py-2 rounded-full text-white transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #6C54FF, #8875FF)',
              boxShadow: '0 0 20px rgba(108,84,255,0.3)',
            }}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 px-6 py-6 flex flex-col gap-5"
            style={{
              background: 'rgba(17,17,17,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {pageLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-white/70 hover:text-white transition-colors text-left"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', fontWeight: 500 }}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="mt-2 px-5 py-3 rounded-full text-white text-center"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #6C54FF, #8875FF)',
              }}
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}