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
  );
}
