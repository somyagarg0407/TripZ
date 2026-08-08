import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSlider.css";

// ============================================================
// HERO SLIDE CONFIG — Modify timing here
// ============================================================
const SLIDE_DURATION = 2500; // ms per slide

const SLIDES = [
  {
    id: 0,
    image: "/hero-explore.png",
    alt: "Snow-capped peaks with EXPLORE text — Travel.AI hero",
    tagline: "Start your journey",
    subText: "Every great adventure begins with a single destination.",
  },
  {
    id: 1,
    image: "/hero-city.png",
    alt: "Dubai cityscape at night with CITYSCAPE text — Travel.AI hero",
    tagline: "Urban intelligence",
    subText: "Navigate the world's great cities with AI precision.",
  },
  {
    id: 2,
    image: "/hero-mountains.png",
    alt: "Alpine mountains with MOUNTAINS text — Travel.AI hero",
    tagline: "Reach new heights",
    subText: "Discover routes less travelled, timed to perfection.",
  },
  {
    id: 3,
    image: "/hero-beaches.png",
    alt: "Tropical beach cove with BEACHES text — Travel.AI hero",
    tagline: "Coastal escapes",
    subText: "Find your shore at exactly the right moment.",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setPrevIndex(activeIndex);
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => {
        setPrevIndex(null);
        setIsTransitioning(false);
      }, 1200);
    },
    [activeIndex, isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % SLIDES.length);
  }, [activeIndex, goToSlide]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(nextSlide, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [nextSlide]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("q", destination);
    if (startDate) params.set("start", startDate);
    if (endDate) params.set("end", endDate);
    navigate(`/explore?${params.toString()}`);
  };

  const active = SLIDES[activeIndex];
  const prev = prevIndex !== null ? SLIDES[prevIndex] : null;

  // Today for min date
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="hero" aria-label="Travel.AI hero slideshow">
      {/* Image layers */}
      <div className="hero__images">
        {/* Previous slide fades out */}
        {prev && (
          <div
            key={`prev-${prev.id}`}
            className="hero__slide hero__slide--prev"
            aria-hidden="true"
          >
            <img
              src={prev.image}
              alt=""
              className="hero__img"
              loading="eager"
            />
            <div className="hero__overlay" />
          </div>
        )}

        {/* Active slide fades in with subtle zoom */}
        <div
          key={`active-${active.id}`}
          className="hero__slide hero__slide--active"
        >
          <img
            src={active.image}
            alt={active.alt}
            className="hero__img"
            loading="eager"
          />
          <div className="hero__overlay" />
        </div>
      </div>

      {/* Content */}
      <div className="hero__content">
        {/* Search panel — positioned at bottom */}
        <div className="hero__bottom">
          {/* Tagline above search */}
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
              <input
                id="hero-start"
                type="date"
                className="hero__search-input"
                value={startDate}
                min={today}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="hero__search-divider" />

            <div className="hero__search-field">
              <label htmlFor="hero-end" className="hero__search-label">
                Return
              </label>
              <input
                id="hero-end"
                type="date"
                className="hero__search-input"
                value={endDate}
                min={startDate || today}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <button type="submit" className="hero__search-cta">
              Plan My Trip
              <span className="hero__search-cta-icon" aria-hidden="true">
                →
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        className="hero__indicators"
        role="tablist"
        aria-label="Slide indicators"
      >
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

      {/* Scroll hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
}
