import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Brand col */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__brand">Travel.AI</Link>
            <p className="footer__tagline">
              Explore confidently.<br />
              Plan intelligently.<br />
              Travel better.
            </p>
          </div>

          {/* Nav col */}
          <div className="footer__nav-col">
            <span className="footer__col-title">Product</span>
            <ul>
              <li><Link to="/explore">Destinations</Link></li>
              <li><Link to="/planner">AI Planner</Link></li>
              <li><Link to="/trending">Trending</Link></li>
              <li><Link to="/my-trips">My Trips</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          {/* Legal col */}
          <div className="footer__nav-col">
            <span className="footer__col-title">Company</span>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">AI Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2024 Travel.AI. Explore confidently. Plan intelligently. Travel better.</span>
        </div>
      </div>
    </footer>
  );
}
