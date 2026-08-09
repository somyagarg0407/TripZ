import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { trendingDestinations } from '../data';
import './Trending.css';

export default function Trending() {
  const [featured, ...rest] = trendingDestinations;

  return (
    <div className="trending-page">
      <Navbar />

      {/* Hero */}
      <div className="trending__hero">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80"
          alt="Trending destinations aerial view"
          className="trending__hero-img"
          loading="eager"
        />
        <div className="trending__hero-overlay" />
        <div className="trending__hero-content container">
          <h1 className="display-lg trending__hero-title">Trending Now</h1>
          <p className="trending__hero-sub">
            Where are people travelling right now? Destinations with the highest surge in interest
            this week, curated by our global travel analytics.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="section trending__main">
        <div className="container">
          <div className="trending__section-header">
            <span className="trending__section-icon">↗</span>
            <h2 className="trending__section-title">Top Destinations</h2>
          </div>
          <div className="trending__divider" />

          {/* Featured + sidebar grid */}
          <div className="trending__grid">
            {/* Large featured card */}
            <div className="trending__featured-card">
              <div className="trending__featured-img-wrap">
                <img
                  src={featured.imageUrl}
                  alt={featured.name}
                  className="trending__featured-img"
                  loading="lazy"
                />
                <div className="trending__featured-overlay" />
              </div>
              <div className="trending__featured-body">
                <div className="trending__featured-top">
                  <div>
                    <h2 className="trending__featured-name">{featured.name}, {featured.country}</h2>
                    <span className="trending__featured-cat">{featured.category.toUpperCase()}</span>
                  </div>
                  <span className="trending__surge trending__surge--large">+{featured.interestSurge}%</span>
                </div>
                <div className="trending__featured-meta">
                  <span className="trending__window-badge">
                    📅 Best Window: {featured.bestWindow}
                  </span>
                  <button className="btn btn-secondary trending__explore-btn">
                    Explore →
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar cards */}
            <div className="trending__sidebar">
              {rest.map((dest) => (
                <div key={dest.id} className="trending__side-card">
                  <div className="trending__side-img-wrap">
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      className="trending__side-img"
                      loading="lazy"
                    />
                    <span className="trending__surge trending__surge--badge">+{dest.interestSurge}%</span>
                  </div>
                  <div className="trending__side-body">
                    <div>
                      <h3 className="trending__side-name">{dest.name}, {dest.country}</h3>
                      <span className="trending__side-cat">{dest.category.toUpperCase()}</span>
                    </div>
                    <span className="trending__side-window">Window: {dest.bestWindow}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data table */}
          <div className="trending__table-section">
            <h2 className="trending__table-title">All Trending — This Week</h2>
            <div className="trending__table">
              <div className="trending__table-head">
                <span>Rank</span>
                <span>Destination</span>
                <span>Category</span>
                <span>Best Window</span>
                <span>Surge</span>
                <span>Suitability</span>
              </div>
              {trendingDestinations.map((dest, i) => (
                <div key={dest.id} className="trending__table-row">
                  <span className="trending__rank">#{i + 1}</span>
                  <div className="trending__table-dest">
                    <img src={dest.imageUrl} alt="" className="trending__table-thumb" />
                    <div>
                      <span className="trending__table-name">{dest.name}</span>
                      <span className="trending__table-country">{dest.country}</span>
                    </div>
                  </div>
                  <span className="tag">{dest.category}</span>
                  <span className="trending__table-window">{dest.bestWindow}</span>
                  <span className="trending__surge trending__surge--inline">+{dest.interestSurge}%</span>
                  <div className="trending__table-score">
                    <span className="trending__score-num">{dest.suitabilityScore}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
