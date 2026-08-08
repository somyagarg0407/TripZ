import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { destinations } from '../data';
import type { DestinationCategory } from '../types';
import './Explore.css';

const CATEGORIES: DestinationCategory[] = ['Mountains', 'Beaches', 'Cities', 'Culture', 'Adventure', 'Nature', 'Luxury', 'Budget'];

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = destinations.filter((d) => {
    const matchCat = activeCategory === 'All' || d.categories.includes(activeCategory as DestinationCategory);
    const matchSearch = !searchQuery || d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="explore-page">
      <Navbar />

      {/* Hero */}
      <div className="explore__hero">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1800&q=80"
          alt="Explore destinations hero"
          className="explore__hero-img"
          loading="eager"
        />
        <div className="explore__hero-overlay" />
        <div className="explore__hero-content container">
          <h1 className="display-lg explore__hero-title">Explore the World</h1>
          <p className="explore__hero-sub">Patagonia, Chile — Find places worth going to.</p>
        </div>

        {/* Search + filter bar */}
        <div className="explore__search-bar">
          <div className="container explore__search-inner">
            <div className="explore__search-input-wrap">
              <span className="explore__search-icon">⌕</span>
              <input
                type="text"
                className="explore__search-input"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search destinations"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category filters */}
      <div className="explore__filters">
        <div className="container explore__filters-inner">
          <div className="explore__filter-tabs">
            {['All', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                className={`explore__filter-tab ${activeCategory === cat ? 'explore__filter-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="explore__filter-meta">
            <span className="explore__result-count">{filtered.length} destinations</span>
          </div>
        </div>
      </div>

      {/* Destination grid */}
      <main className="section explore__grid-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="explore__empty">
              <p>No destinations match your search.</p>
              <button className="btn btn-secondary" onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="explore__grid">
              {filtered.map((dest, i) => (
                <div
                  key={dest.id}
                  className={`explore__card ${i === 0 ? 'explore__card--featured' : ''}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="explore__card-img-wrap">
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      className="explore__card-img"
                      loading="lazy"
                    />
                    <div className="explore__card-overlay" />
                    <div className="explore__card-badges">
                      {dest.isTrending && <span className="explore__card-trending">Trending</span>}
                      {dest.isFeatured && <span className="explore__card-featured-tag">Featured</span>}
                    </div>
                  </div>
                  <div className="explore__card-body">
                    <div className="explore__card-cats">
                      {dest.categories.slice(0, 2).map((c) => (
                        <span className="tag" key={c}>{c}</span>
                      ))}
                    </div>
                    <h2 className="explore__card-name">{dest.name}, {dest.country}</h2>
                    <p className="explore__card-desc">{dest.shortDescription}</p>
                    <div className="explore__card-footer">
                      <div className="explore__card-score">
                        <span className="explore__score-num">{dest.suitabilityScore.toFixed(1)}</span>
                        <span className="explore__score-label">Suitability</span>
                      </div>
                      <div className="explore__card-weather">
                        <span>{dest.weather.icon}</span>
                        <span>{dest.weather.temperature}</span>
                        <span className="explore__card-window">{dest.bestTravelWindow}</span>
                      </div>
                    </div>
                    <button className="btn btn-secondary explore__card-cta">
                      Plan Trip →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
