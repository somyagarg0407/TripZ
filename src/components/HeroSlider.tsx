import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "./DatePicker";
import "./HeroSlider.css";

// ============================================================
// HERO SLIDE CONFIG
// ============================================================
const SLIDE_DURATION = 2500; // ms per slide (auto-advance)
const TRANSITION_MS  = 1200; // ms for the cross-fade + zoom transition

const SLIDES = [
  {
    id: 0,
    image: "/hero-explore.png",
    alt: "Explore — TripZ hero",
    tagline: "Start your journey",
    subText: "Every great adventure begins with a single destination.",
  },
  {
    id: 1,
    image: "/CULTURE.png",
    alt: "Culture — TripZ hero",
    tagline: "Immerse in culture",
    subText: "Experience the world through its people and traditions.",
  },
  {
    id: 2,
    image: "/hero-beaches.png",
    alt: "Beaches — TripZ hero",
    tagline: "Coastal escapes",
    subText: "Find your shore at exactly the right moment.",
  },
  {
    id: 3,
    image: "/hero-mountains.png",
    alt: "Mountains — TripZ hero",
    tagline: "Reach new heights",
    subText: "Discover routes less travelled, timed to perfection.",
  },
  {
    id: 4,
    image: "/AURORA.png",
    alt: "Aurora — TripZ hero",
    tagline: "Chase the aurora",
    subText: "Witness the northern lights at the perfect moment.",
  },
  {
    id: 5,
    image: "/hero-city.png",
    alt: "Cityscape — TripZ hero",
    tagline: "Urban intelligence",
    subText: "Navigate the world's great cities with AI precision.",
  },
  {
    id: 6,
    image: "/DESERTS.png",
    alt: "Deserts — TripZ hero",
    tagline: "Desert horizons",
    subText: "Venture into vast landscapes where silence speaks.",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex]         = useState(0);
  const [prevIndex,   setPrevIndex]           = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [destination, setDestination]         = useState("");
  const [startDate,   setStartDate]           = useState("");
  const [endDate,     setEndDate]             = useState("");
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate  = useNavigate();

  // ── Slideshow control ────────────────────────────────────
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setPrevIndex(activeIndex);
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => {
        setPrevIndex(null);
        setIsTransitioning(false);
      }, TRANSITION_MS);
    },
    [activeIndex, isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % SLIDES.length);
  }, [activeIndex, goToSlide]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(nextSlide, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [nextSlide]);

  // ── Page-scroll arrow handler ────────────────────────────
  // Scrolls the PAGE down by exactly one viewport height.
  // Has NOTHING to do with the slideshow.
  const handleScrollDown = useCallback(() => {
    const heroHeight = sectionRef.current?.offsetHeight ?? window.innerHeight;
    window.scrollTo({ top: heroHeight, behavior: "smooth" });
  }, []);

  // ── Search form ──────────────────────────────────────────
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("q", destination);
    if (startDate)   params.set("start", startDate);
    if (endDate)     params.set("end", endDate);
    navigate(`/explore?${params.toString()}`);
  };

  const active = SLIDES[activeIndex];
  const prev   = prevIndex !== null ? SLIDES[prevIndex] : null;

  // Today for min date
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      ref={sectionRef}
      className="hero"
      aria-label="TripZ hero slideshow"
    >
      {/* ── Image layers: cross-fade + zoom (original behavior) ── */}
      <div className="hero__images">

        {/* Outgoing slide — fades out */}
        {prev && (
          <div
            key={`prev-${prev.id}`}
            className="hero__slide hero__slide--prev"
            aria-hidden="true"
          >
            <img src={prev.image} alt="" className="hero__img" loading="eager" />
            <div className="hero__overlay" />
          </div>
        )}

        {/* Incoming slide — fades in with subtle zoom */}
        <div
          key={`active-${active.id}`}
          className="hero__slide hero__slide--active"
        >
          <img src={active.image} alt={active.alt} className="hero__img" loading="eager" />
          <div className="hero__overlay" />
        </div>

      </div>

      {/* ── Content overlay ─────────────────────────────────── */}
      <div className="hero__content">
        <div className="hero__bottom">

          {/* Tagline — re-animates on slide change */}
          <div className="hero__tagline-group" key={activeIndex}>
            <span className="hero__pre-label">Travel Intelligence</span>
            <p className="hero__tagline">{active.tagline}</p>
          </div>

          {/* Search form */}
          <form
            className="hero__search"
            onSubmit={handleSearch}
            role="search"
            aria-label="Trip planning search"
          >
            <div className="hero__search-field">
              <label htmlFor="hero-destination" className="hero__search-label">
                Destination
              </label>
              <input
                id="hero-destination"
                type="text"
                className="hero__search-input"
                placeholder="Tokyo, Patagonia, Amalfi..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="hero__search-divider" />

            <div className="hero__search-field">
              <label htmlFor="hero-start" className="hero__search-label">
                Depart
              </label>
              <DatePicker
                id="hero-start"
                value={startDate}
                min={today}
                onChange={setStartDate}
                placeholder="Departure date"
                className="hero__search-input"
              />
            </div>

            <div className="hero__search-divider" />

            <div className="hero__search-field">
              <label htmlFor="hero-end" className="hero__search-label">
                Return
              </label>
              <DatePicker
                id="hero-end"
                value={endDate}
                min={startDate || today}
                onChange={setEndDate}
                placeholder="Return date"
                className="hero__search-input"
              />
            </div>

            <button type="submit" className="hero__search-cta">
              Plan My Trip
              <span className="hero__search-cta-icon" aria-hidden="true">→</span>
            </button>
          </form>

        </div>
      </div>

      {/* ── Slide indicators (bottom-right) ─────────────────── */}
      <div className="hero__indicators" role="tablist" aria-label="Slide indicators">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero__dot ${i === activeIndex ? "hero__dot--active" : ""}`}
            onClick={() => goToSlide(i)}
          >
            {i === activeIndex && (
              <span
                className="hero__dot-progress"
                style={{ animationDuration: `${SLIDE_DURATION}ms` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Scroll-down arrow (bottom-CENTER) ───────────────── */}
      {/* Scrolls the PAGE down one viewport. Does NOT touch the slideshow. */}
      <div className="hero__scroll-hint">
        <button
          type="button"
          className="hero__scroll-arrow-btn"
          onClick={handleScrollDown}
          aria-label="Scroll down to next section"
        >
          {/* Animated vertical line */}
          <span className="hero__scroll-line" aria-hidden="true" />
          {/* Chevron arrow */}
          <svg
            className="hero__scroll-chevron"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

    </section>
  );
}
