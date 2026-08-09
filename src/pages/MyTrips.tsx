import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mockTrips } from '../data';
import type { Trip } from '../types';
import './MyTrips.css';

const upcoming = mockTrips.filter((t) => t.status === 'upcoming');
const saved    = mockTrips.filter((t) => t.status === 'saved');
const past     = mockTrips.filter((t) => t.status === 'past');

function UpcomingCard({ trip }: { trip: Trip }) {
  return (
    <div className="mytrips__upcoming-card">
      <div className="mytrips__upcoming-img-wrap">
        <img src={trip.imageUrl} alt={trip.destination} className="mytrips__upcoming-img" loading="lazy" />
        <div className="mytrips__upcoming-date-badge">
          <span>📅</span>
          <span>{formatDate(trip.startDate)} – {formatDate(trip.endDate)}</span>
        </div>
      </div>
      <div className="mytrips__upcoming-body">
        <h3 className="mytrips__upcoming-title">{trip.title}</h3>
        <p className="mytrips__upcoming-loc">{trip.country}</p>

        {trip.suitabilityScore && (
          <div className="mytrips__upcoming-score">
            <span className="mytrips__score-num">{trip.suitabilityScore}</span>
            <span className="mytrips__score-label">AI Suitability Match</span>
          </div>
        )}

        {trip.weather && (
          <div className="mytrips__upcoming-weather">
            <span>{trip.weather.icon}</span>
            <span>Forecast: {trip.weather.temperature} · {trip.weather.condition}</span>
          </div>
        )}

        <button className="btn btn-secondary mytrips__upcoming-cta">View Trip Details</button>
      </div>
    </div>
  );
}

function SavedCard({ trip }: { trip: Trip }) {
  return (
    <div className="mytrips__saved-card">
      <div className="mytrips__saved-img-wrap">
        <img src={trip.imageUrl} alt={trip.destination} className="mytrips__saved-img" loading="lazy" />
        <button className="mytrips__saved-bookmark" aria-label="Unsave trip">🔖</button>
      </div>
      <div className="mytrips__saved-body">
        <h3 className="mytrips__saved-title">{trip.title}</h3>
        <p className="mytrips__saved-meta">{trip.country} · {trip.travelers ?? 1} Day{(trip.travelers ?? 1) > 1 ? 's' : ''}</p>
        <button className="mytrips__saved-open btn btn-ghost">Open Planner →</button>
      </div>
    </div>
  );
}

function PastRow({ trip }: { trip: Trip }) {
  return (
    <div className="mytrips__past-row">
      <div className="mytrips__past-icon">✈</div>
      <div className="mytrips__past-info">
        <span className="mytrips__past-title">{trip.title}</span>
        <span className="mytrips__past-meta">{trip.country} · {formatDateShort(trip.startDate)}</span>
      </div>
      <button className="mytrips__past-arrow" aria-label="View past trip">›</button>
    </div>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
}

function formatDateShort(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export default function MyTrips() {
  return (
    <div className="mytrips-page">
      <Navbar />

      <div className="mytrips__header section container">
        <h1 className="mytrips__title">Your Journeys</h1>
        <p className="mytrips__sub">
          Manage your upcoming adventures, revisit past explorations, and refine your saved itineraries.
        </p>
      </div>

      <main className="mytrips__main">
        <div className="container">
          {/* Upcoming */}
          <section className="mytrips__section">
            <div className="section-heading">
              <h2>Upcoming Trips</h2>
              <span className="count">{upcoming.length}</span>
            </div>
            <div className="mytrips__upcoming-grid">
              {upcoming.map((t) => <UpcomingCard key={t.id} trip={t} />)}
            </div>
          </section>

          {/* Saved */}
          <section className="mytrips__section">
            <div className="section-heading">
              <h2>Saved Ideas</h2>
              <span className="count">{saved.length}</span>
            </div>
            <div className="mytrips__saved-grid">
              {saved.map((t) => <SavedCard key={t.id} trip={t} />)}
            </div>
          </section>

          {/* Past */}
          <section className="mytrips__section">
            <div className="section-heading">
              <h2>Past Journeys</h2>
            </div>
            <div className="mytrips__past-list">
              {past.map((t) => <PastRow key={t.id} trip={t} />)}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
