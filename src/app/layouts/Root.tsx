import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ background: '#111111', minHeight: '100vh' }}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
