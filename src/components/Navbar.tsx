import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Explore',    path: '/explore' },
  { label: 'AI Planner', path: '/planner' },
  { label: 'Trending',   path: '/trending' },
  { label: 'My Trips',   path: '/my-trips' },
  { label: 'About',      path: '/about' },
];

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [isDark,   setIsDark]     = useState(() => {
    // persist preference; default = dark (site is dark-first)
    return localStorage.getItem('theme') !== 'light';
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const isTransparent = transparent && !scrolled && !menuOpen;

  return (
    <nav
      className={`navbar ${isTransparent ? 'navbar--transparent' : 'navbar--solid'} ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        {/* Brand */}
        <Link to="/" className="navbar__brand" aria-label="TripZ Home">
          <img src="/Logo bgr.png" alt="TripZ" className="navbar__brand-logo" />
        </Link>

        {/* Desktop nav links */}
        <ul className="navbar__links" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop auth + theme toggle */}
        <div className="navbar__auth">
          <button
            className={`navbar__theme-toggle ${isDark ? 'is-dark' : 'is-light'}`}
            onClick={() => setIsDark(d => !d)}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            <div className="theme-toggle-track">
              <div className="theme-toggle-knob">
                {isDark ? (
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="theme-toggle-icon">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="theme-toggle-icon">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2.5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                )}
              </div>
            </div>
          </button>
          <Link to="/login" className="navbar__login">Login</Link>
          <Link to="/login" className="btn btn-secondary btn-sm navbar__signup">Sign Up</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                }
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-auth">
          <Link to="/login" className="btn btn-secondary" tabIndex={menuOpen ? 0 : -1}>Login</Link>
          <Link to="/login" className="btn btn-primary" tabIndex={menuOpen ? 0 : -1}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
