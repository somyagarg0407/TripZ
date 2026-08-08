import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import { destinations } from '../data';
import './Home.css';

// ============================================================
// Sample suitability data for homepage showcase
// ============================================================
const SUITABILITY_FACTORS = [
  { name: 'Weather',      score: 94, icon: '☀️',  detail: 'Mostly sunny, 26–30°C' },
  { name: 'Temperature',  score: 91, icon: '🌡️', detail: 'Ideal for outdoor activity' },
  { name: 'Rain Risk',    score: 88, icon: '☔', detail: '8% probability of rain' },
  { name: 'Season',       score: 97, icon: '📅', detail: 'Peak tourist season' },
  { name: 'Activities',   score: 96, icon: '🏄', detail: 'All outdoor excursions available' },
];

// ============================================================
// Weather-aware itinerary sample
// ============================================================
const WEATHER_DAYS = [
  {
    day: 2,
    weather: 'Rain expected',
    weatherIcon: '🌧️',
    original: 'Beach visit',
    adapted: ['Kyoto National Museum', 'Nishiki Covered Market', 'Pontocho Alley'],
    color: '#7ba7bc',
  },
  {
    day: 3,
    weather: 'Clear skies',
    weatherIcon: '☀️',
    original: null,
    adapted: ['Arashiyama Bamboo Grove', 'Outdoor coastal sightseeing', 'Fushimi Inari evening'],
    color: '#7db87d',
  },
];

const FEATURED = destinations.filter((d) => d.isFeatured).slice(0, 4);

export default function Home() {
  return (
    <div className="home">
      <Navbar transparent />
      <HeroSlider />

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="section home__how-it-works">
        <div className="container">
          <div className="home__how-header">
            <span className="label-uppercase">The Process</span>
            <h2 className="display-md home__how-title">Five steps.<br />One platform.</h2>
          </div>
          <div className="home__steps">
            {[
              { num: '01', label: 'Discover', desc: 'Our AI surfaces destinations matched to your travel signature — style, budget, season, and preference.' },
              { num: '02', label: 'Evaluate', desc: 'Real-time weather, crowd density, seasonal conditions, and cost analysis generate your Suitability Score.' },
              { num: '03', label: 'Plan', desc: 'A precision itinerary adapts minute-by-minute to weather forecasts, logistics, and local intelligence.' },
              { num: '04', label: 'Save', desc: 'Trip cards with full itinerary, weather forecast, cost breakdown, and offline access.' },
              { num: '05', label: 'Travel', desc: 'Execute with confidence. Our AI concierge never sleeps and adapts your plan in real time.' },
            ].map((step) => (
              <div className="home__step" key={step.num}>
                <span className="home__step-num">{step.num}</span>
                <h3 className="home__step-label">{step.label}</h3>
                <p className="home__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAVEL SUITABILITY SHOWCASE ────────────────────── */}
      <section className="section home__suitability-section">
        <div className="container">
          <div className="home__suit-grid">
            {/* Left: explanation */}
            <div className="home__suit-left">
              <span className="label-uppercase">AI Intelligence</span>
              <h2 className="display-md home__suit-title">
                Is this the right time<br />to travel?
              </h2>
              <p className="home__suit-body">
                Travel.AI doesn't just suggest destinations. It evaluates
                whether your chosen window is actually a good time to go —
                combining weather data, seasonal intelligence, and crowd
                analytics into a single, clear score.
              </p>
              <Link to="/planner" className="btn btn-primary btn-lg home__suit-cta">
                Plan My Trip →
              </Link>
            </div>

            {/* Right: Suitability card */}
            <div className="home__suit-card">
              <div className="home__suit-card-header">
                <div>
                  <span className="label-uppercase" style={{ color: 'var(--color-accent)' }}>Goa, India</span>
                  <p className="home__suit-dates">20 Dec — 25 Dec</p>
                </div>
                <div className="home__suit-badge">
                  <span className="home__suit-badge-label">Travel Suitability</span>
                  <span className="home__suit-badge-score">9.1</span>
                  <span className="home__suit-badge-denom">/ 10</span>
                </div>
              </div>

              <div className="home__suit-divider" />

              <div className="home__suit-factors">
                {SUITABILITY_FACTORS.map((f) => (
                  <div className="home__suit-factor" key={f.name}>
                    <div className="home__suit-factor-header">
                      <span className="home__suit-factor-icon">{f.icon}</span>
                      <span className="home__suit-factor-name">{f.name}</span>
                      <span className="home__suit-factor-detail">{f.detail}</span>
                      <span className="home__suit-factor-score">{f.score}</span>
                    </div>
                    <div className="home__suit-factor-bar">
                      <div
                        className="home__suit-factor-fill"
                        style={{ width: `${f.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED DESTINATIONS ─────────────────────────── */}
      <section className="section home__destinations-section">
        <div className="container">
          <div className="home__destinations-header">
            <div>
              <span className="label-uppercase">Curated Destinations</span>
              <h2 className="display-sm home__destinations-title">Places worth going.</h2>
            </div>
            <Link to="/explore" className="btn btn-secondary">Explore All →</Link>
          </div>

          <div className="home__destinations-grid">
            {/* Large feature card */}
            <Link to="/explore" className="home__dest-card home__dest-card--large">
              <img
                src={FEATURED[0]?.imageUrl}
                alt={FEATURED[0]?.name}
                className="home__dest-img"
                loading="lazy"
              />
              <div className="home__dest-overlay" />
              <div className="home__dest-content">
                <div className="home__dest-tags">
                  {FEATURED[0]?.categories.slice(0, 2).map((c) => (
                    <span className="home__dest-tag" key={c}>{c}</span>
                  ))}
                </div>
                <h3 className="home__dest-name">{FEATURED[0]?.name}, {FEATURED[0]?.country}</h3>
                <p className="home__dest-desc">{FEATURED[0]?.shortDescription}</p>
              </div>
            </Link>

            {/* Smaller cards */}
            <div className="home__dest-col">
              {FEATURED.slice(1, 4).map((dest) => (
                <Link to="/explore" key={dest.id} className="home__dest-card home__dest-card--small">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="home__dest-img"
                    loading="lazy"
                  />
                  <div className="home__dest-overlay" />
                  <div className="home__dest-content">
                    <h3 className="home__dest-name home__dest-name--sm">{dest.name}, {dest.country}</h3>
                    <p className="home__dest-desc home__dest-desc--sm">{dest.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WEATHER-AWARE AI ──────────────────────────────── */}
      <section className="section home__weather-section">
        <div className="container">
          <div className="home__weather-header">
            <span className="label-uppercase">Weather-Aware Planning</span>
            <h2 className="display-md home__weather-title">
              The AI that reads<br />the forecast.
            </h2>
            <p className="home__weather-body">
              Travel.AI doesn't ignore rain. It adapts. When weather changes,
              your itinerary adapts automatically — moving outdoor activities,
              surfacing indoor alternatives, and timing your best experiences
              to clear skies.
            </p>
          </div>

          <div className="home__weather-days">
            {WEATHER_DAYS.map((d) => (
              <div key={d.day} className="home__weather-day">
                <div className="home__weather-day-header">
                  <span className="home__weather-day-num">Day {d.day}</span>
                  <div className="home__weather-condition" style={{ color: d.color }}>
                    <span>{d.weatherIcon}</span>
                    <span>{d.weather}</span>
                  </div>
                </div>

                {d.original && (
                  <div className="home__weather-crossed">
                    <span className="home__weather-crossed-label">Removed</span>
                    <span className="home__weather-crossed-item">{d.original}</span>
                  </div>
                )}

                <div className="home__weather-adapted">
                  <span className="home__weather-adapted-label" style={{ color: d.color }}>
                    {d.original ? 'AI Suggests Instead' : 'AI Schedules'}
                  </span>
                  <ul>
                    {d.adapted.map((a) => (
                      <li key={a} className="home__weather-adapted-item">
                        <span style={{ color: d.color }}>→</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ───────────────────────────────── */}
      <section className="home__brand-statement">
        <div className="container">
          <div className="home__brand-inner">
            <h2 className="display-xl home__brand-headline">
              Explore<br />confidently.
            </h2>
            <div className="home__brand-right">
              <p className="home__brand-sub">
                Plan intelligently. Travel better.
              </p>
              <p className="home__brand-body">
                Travel.AI combines destination intelligence, real-time weather,
                and AI-powered itinerary generation into one premium platform
                built for the modern traveller.
              </p>
              <div className="home__brand-actions">
                <Link to="/planner" className="btn btn-primary btn-lg">Start Planning</Link>
                <Link to="/explore" className="btn btn-ghost btn-lg">Explore Destinations</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
