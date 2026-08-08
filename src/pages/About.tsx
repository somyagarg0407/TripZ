import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const STEPS = [
  { label: 'Discover', icon: '⊕', desc: 'Our algorithms sift through the noise, presenting high-end, off-grid destinations tailored to your latent aesthetic preferences.' },
  { label: 'Evaluate', icon: '◎', desc: 'Real-time data modelling assesses weather, crowds, and cost to pinpoint the optimal window for your departure.' },
  { label: 'Plan', icon: '◈', desc: 'We construct a resilient, minute-by-minute itinerary that adapts fluidly to unexpected delays or sudden inspiration.' },
  { label: 'Save', icon: '◇', desc: 'Predictive pricing models secure premium accommodations and transit at algorithmic lows, maximising utility.' },
  { label: 'Travel', icon: '◉', desc: 'Execute your journey with absolute confidence, guided by an AI concierge that never sleeps.' },
];

const VALUES = [
  {
    title: 'Intelligence',
    desc: 'We don\'t do generic suggestions. Our engine parses millions of data points to generate authoritative insights that elevate your travel beyond the mundane tourist trail.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    imageAlt: 'World data network',
  },
  {
    title: 'Personalization',
    desc: 'Your profile is unique. Your itinerary should be too. We design for the individual, not the demographic.',
    imageUrl: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80',
    imageAlt: 'Personal travel planning',
  },
  {
    title: 'Reliability',
    desc: 'When you are off the grid, certainty is luxury. Our systems are built with redundant safeguards to ensure you always have access to your plans, offline and on.',
    imageUrl: null,
  },
];

export default function About() {
  return (
    <div className="about-page">
      <Navbar transparent />

      {/* Hero */}
      <div className="about__hero">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=80"
          alt="Mountain vista — Travel, Reimagined"
          className="about__hero-img"
          loading="eager"
        />
        <div className="about__hero-overlay" />
        <div className="about__hero-content">
          <h1 className="display-xl about__hero-title">Travel, Reimagined.</h1>
          <p className="about__hero-sub">
            We are precision nomads. Combining the uncompromising logic of advanced artificial
            intelligence with the visceral thrill of global exploration to craft journeys that
            are profoundly personal and flawlessly executed.
          </p>
        </div>
      </div>

      {/* Platform steps */}
      <section className="section about__platform">
        <div className="container">
          <h2 className="display-sm about__platform-title">The Platform.</h2>
          <div className="about__steps">
            {STEPS.map((step) => (
              <div key={step.label} className="about__step">
                <span className="about__step-icon">{step.icon}</span>
                <h3 className="about__step-label">{step.label}</h3>
                <p className="about__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about__values">
        <div className="container">
          <h2 className="display-sm about__values-title">Our Values.</h2>
          <div className="about__values-grid">
            {/* Intelligence — dark card */}
            <div className="about__value-card about__value-card--dark">
              <h3 className="about__value-title">{VALUES[0].title}</h3>
              <p className="about__value-desc">{VALUES[0].desc}</p>
            </div>
            {/* Intelligence image */}
            <div className="about__value-card about__value-card--image">
              <img src={VALUES[0].imageUrl!} alt={VALUES[0].imageAlt!} className="about__value-img" loading="lazy" />
              <div className="about__value-img-badge">Travel.AI</div>
            </div>
            {/* Personalization image */}
            <div className="about__value-card about__value-card--image">
              <img src={VALUES[1].imageUrl!} alt={VALUES[1].imageAlt!} className="about__value-img" loading="lazy" />
              <div className="about__value-img-overlay">
                <h3 className="about__value-title">{VALUES[1].title}</h3>
                <p className="about__value-desc">{VALUES[1].desc}</p>
              </div>
            </div>
            {/* Reliability — full width */}
            <div className="about__value-card about__value-card--reliability">
              <h3 className="about__value-title">{VALUES[2].title}</h3>
              <p className="about__value-desc">{VALUES[2].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta-section">
        <div className="container about__cta-inner">
          <div>
            <h2 className="display-md about__cta-title">Start your first journey.</h2>
            <p className="about__cta-sub">Plan intelligently. Travel better.</p>
          </div>
          <div className="about__cta-actions">
            <Link to="/planner" className="btn btn-primary btn-lg">Generate My Trip</Link>
            <Link to="/explore" className="btn btn-secondary btn-lg">Explore Destinations</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
