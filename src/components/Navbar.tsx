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
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Link to="/" className="navbar__brand" aria-label="Travel.AI Home">
          Travel.AI
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

        {/* Desktop auth */}
        <div className="navbar__auth">
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
