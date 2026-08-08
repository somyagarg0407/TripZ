import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { sampleItinerary } from '../data';
import './Planner.css';

const BUDGET_OPTIONS = ['Economy', 'Standard', 'Luxury'] as const;
const INTEREST_OPTIONS = ['Culture', 'Food & Dining', 'Nightlife', 'Nature', 'Shopping', 'Adventure', 'Art & Museums', 'History'];
const TRAVEL_STYLES = ['Solo Explorer', 'Couple Retreat', 'Family Friendly', 'Backpacker', 'Luxury Traveller'];

type BudgetOption = typeof BUDGET_OPTIONS[number];

export default function Planner() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate]     = useState('');
  const [endDate, setEndDate]         = useState('');
  const [travelers, setTravelers]     = useState(2);
  const [budget, setBudget]           = useState<BudgetOption>('Standard');
  const [interests, setInterests]     = useState<string[]>(['Culture', 'Food & Dining']);
  const [travelStyle, setTravelStyle] = useState(TRAVEL_STYLES[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult]   = useState(false);

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : prev.length < 3 ? [...prev, interest] : prev
    );
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination) return;
    setIsGenerating(true);
    setShowResult(false);
    await new Promise((r) => setTimeout(r, 2400));
    setIsGenerating(false);
    setShowResult(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="planner-page">
      <Navbar />

      <div className="planner__layout">
        {/* LEFT: Form panel */}
        <aside className="planner__form-panel">
          <div className="planner__form-inner">
            <div className="planner__form-header">
              <span className="label-uppercase">AI Trip Planner</span>
              <h1 className="display-md planner__form-title">
                Precision<br />Itineraries.
              </h1>
              <p className="planner__form-sub">
                Our intelligence engine crafts optimised routes, curates experiences,
                and anticipates logistics based on your unique travel signature.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="planner__form" noValidate>
              {/* Destination */}
              <div className="planner__field">
                <label htmlFor="plan-dest" className="input-label">Destination</label>
                <input
                  id="plan-dest"
                  type="text"
                  className="input"
                  placeholder="Where do you want to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>

              {/* Dates + Travelers */}
              <div className="planner__row">
                <div className="planner__field">
                  <label htmlFor="plan-start" className="input-label">Dates</label>
                  <input
                    id="plan-start"
                    type="date"
                    className="input"
                    value={startDate}
                    min={today}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="planner__field">
                  <label htmlFor="plan-travelers" className="input-label">Travelers</label>
                  <input
                    id="plan-travelers"
                    type="number"
                    className="input"
                    min={1}
                    max={20}
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="planner__field">
                <span className="input-label">Budget Level</span>
                <div className="planner__budget-options">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`planner__budget-btn ${budget === b ? 'planner__budget-btn--active' : ''}`}
                      onClick={() => setBudget(b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="planner__field">
                <span className="input-label">Interests (Select up to 3)</span>
                <div className="planner__interests">
                  {INTEREST_OPTIONS.map((i) => (
                    <button
                      key={i}
                      type="button"
                      className={`planner__interest-tag ${interests.includes(i) ? 'planner__interest-tag--active' : ''}`}
                      onClick={() => toggleInterest(i)}
                      aria-pressed={interests.includes(i)}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>

              {/* Travel style */}
              <div className="planner__field">
                <label htmlFor="plan-style" className="input-label">Travel Style</label>
                <select
                  id="plan-style"
                  className="input"
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value)}
                >
                  {TRAVEL_STYLES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg planner__generate-btn"
                disabled={isGenerating || !destination}
              >
                {isGenerating ? 'Generating...' : 'Generate My Trip ✦'}
              </button>
            </form>
          </div>
        </aside>

        {/* RIGHT: Output panel */}
        <main className="planner__output-panel">
          {!destination && !isGenerating && !showResult && (
            <div className="planner__idle">
              <div className="planner__idle-visual">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="World map visualization"
                  className="planner__idle-img"
                />
                <div className="planner__idle-overlay">
                  <div className="planner__idle-badge">
                    <span className="planner__idle-icon">⬡</span>
                    <div>
                      <p className="planner__idle-title">Awaiting Input</p>
                      <p className="planner__idle-sub">Enter a destination to begin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isGenerating && (
            <div className="planner__generating">
              <div className="planner__gen-visual">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Analyzing"
                  className="planner__idle-img"
                />
                <div className="planner__idle-overlay">
                  <div className="planner__gen-badge">
                    <div className="planner__gen-spinner" />
                    <div>
                      <p className="planner__gen-title">Analyzing Destination Vectors...</p>
                      <p className="planner__gen-sub">Optimising routes · Checking weather · Curating experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showResult && (
            <div className="planner__result">
              <div className="planner__result-header">
                <div>
                  <span className="label-uppercase">Generated Itinerary</span>
                  <h2 className="planner__result-title">{destination}</h2>
                  {startDate && <p className="planner__result-dates">{startDate} — {endDate || 'TBD'}</p>}
                </div>
                <div className="planner__result-score">
                  <span className="planner__result-score-num">9.1</span>
                  <span className="planner__result-score-label">AI Suitability</span>
                </div>
              </div>

              <div className="planner__days">
                {sampleItinerary.map((dayPlan) => (
                  <div
                    key={dayPlan.day}
                    className={`planner__day ${dayPlan.weather.rainProbability > 70 ? 'planner__day--rain' : 'planner__day--clear'}`}
                  >
                    <div className="planner__day-header">
                      <div className="planner__day-info">
                        <span className="planner__day-num">{dayPlan.date}</span>
                        <div className="planner__day-weather">
                          <span>{dayPlan.weather.icon}</span>
                          <span>{dayPlan.weather.temperature}</span>
                          <span className="planner__day-condition">{dayPlan.weather.condition}</span>
                        </div>
                      </div>
                      {dayPlan.weather.rainProbability > 70 && (
                        <div className="planner__rain-notice">
                          <span>🌧️</span>
                          <span>AI adapted plan for rain</span>
                        </div>
                      )}
                      <span className="planner__day-cost">{dayPlan.estimatedCost}</span>
                    </div>

                    <div className="planner__activities">
                      {dayPlan.activities.map((act) => (
                        <div key={act.title} className={`planner__activity planner__activity--${act.type}`}>
                          <span className="planner__activity-time">{act.time}</span>
                          <div className="planner__activity-body">
                            <h4 className="planner__activity-title">{act.title}</h4>
                            <p className="planner__activity-desc">{act.description}</p>
                          </div>
                          <span className="planner__activity-duration">{act.duration}</span>
                        </div>
                      ))}
                    </div>

                    {dayPlan.tips.length > 0 && (
                      <div className="planner__day-tips">
                        {dayPlan.tips.map((tip) => (
                          <p key={tip} className="planner__tip">✦ {tip}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="planner__result-actions">
                <button className="btn btn-primary">Save Trip</button>
                <button className="btn btn-secondary">Download PDF</button>
                <button className="btn btn-ghost" onClick={() => setShowResult(false)}>Regenerate</button>
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
