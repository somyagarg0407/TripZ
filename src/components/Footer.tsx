import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const brandRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "JUST ESCAPE";
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          if (brandRef.current) {
            observer.unobserve(brandRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (brandRef.current) {
      observer.observe(brandRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && displayedText.length < fullText.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 70);
      return () => clearTimeout(timer);
    } else if (displayedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [isInView, displayedText, fullText]);

  return (
    <>
      <div className="container">
        <div className="footer__attribution">
          <span className="footer__attribution-line"></span>
          <span className="footer__attribution-text">
            Made with{' '}
            <svg className="footer__heart" viewBox="0 0 24 24" fill="currentColor" aria-label="love">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>{' '}
            in India for Travellers everywhere
          </span>
          <span className="footer__attribution-line"></span>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
          {/* Brand col */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__brand">TripZ</Link>
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
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">AI Guide</a></li>
            </ul>
          </div>
        </div>

        <div 
          ref={brandRef} 
          className="footer__brand-statement"
          style={{ minHeight: '1em' }}
        >
          {displayedText}
          {isTyping && <span className="footer__cursor">|</span>}
        </div>

        <div className="footer__bottom">
          <span>© 2026 TripZ. Explore confidently. Plan intelligently. Travel better.</span>
        </div>
      </div>
      </footer>
    </>
  );
}
