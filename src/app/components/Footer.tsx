import { Link } from 'react-router';
import { SvLogo } from './Logo';

const links = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 px-6"
      style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <SvLogo height={36} showText={false} />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-white/25 hover:text-white/50 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.01em' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <p className="text-white/15" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', fontWeight: 400 }}>
            © {year} Systems Valley.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p
            className="text-white/10"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Engineering AI-native business systems.
          </p>
        </div>
      </div>
    </footer>
  );
}