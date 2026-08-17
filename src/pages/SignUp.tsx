import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

// Reusable skyline — same SVG as Login for visual consistency
const TravelSkylineSVG = () => (
  <div className="auth__skyline" aria-hidden="true">
    <svg
      className="auth__skyline-svg"
      viewBox="0 0 1200 90"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="auth__skyline-fill"
        d="
          M0,90
          L0,72 L10,72 L10,58 L14,58 L14,48 L16,48 L16,58 L20,58 L20,72 L28,72
          L28,60 L32,60 L32,45 L36,45 L36,60 L40,60 L40,72 L50,72
          L50,65 L55,65 L55,55 L57,55 L57,45 L59,45 L59,55 L61,55 L61,65 L66,65 L66,72 L76,72
          L76,68 L80,68 L80,52 L85,52 L85,40 L87,36 L89,40 L89,52 L94,52 L94,68 L98,68 L98,72 L110,72
          L110,65 L115,65 L115,35 L117,28 L117,20 L118,20 L119,28 L119,35 L124,35 L124,65 L129,65 L129,72 L140,72
          L140,70 L145,70 L145,58 L148,55 L151,58 L151,70 L156,70 L156,72 L168,72
          L168,65 L172,60 L172,50 L176,50 L176,60 L180,65 L180,72
          L185,72 L185,60 L188,60 L188,42 L190,38 L192,42 L192,60 L195,60 L195,72 L210,72
          L210,70 L215,64 L215,52 L220,48 L220,40 L222,36 L224,40 L224,48 L229,52 L229,64 L234,70 L234,72 L250,72
          L250,72 L255,72 L255,50 L258,46 L261,50 L261,72 L265,72
          L265,72 L270,72 L270,56 L275,56 L275,40 L277,36 L279,40 L279,56 L284,56 L284,72 L290,72
          L295,72 L295,60 L298,60 L298,50 L302,50 L302,40 L304,36 L306,40 L306,50 L310,50 L310,60 L313,60 L313,72 L325,72
          L325,72 L328,72 L328,55 L332,50 L336,44 L340,50 L344,55 L344,72 L348,72 L360,72
          L360,68 L365,68 L365,55 L368,52 L371,55 L371,68 L376,68 L376,72 L388,72
          L388,72 L392,72 L392,60 L394,56 L396,52 L400,52 L400,56 L404,60 L404,72 L408,72
          L415,72 L415,58 L418,58 L418,45 L422,40 L426,40 L426,45 L430,45 L430,58 L433,58 L433,72
          L440,72 L440,55 L445,50 L450,28 L451,24 L452,20 L453,24 L454,28 L459,50 L464,55 L464,72 L475,72
          L475,72 L480,72 L480,60 L484,56 L488,60 L488,72 L492,72
          L492,72 L496,68 L500,62 L504,58 L508,58 L512,62 L516,68 L516,72 L525,72
          L530,72 L530,62 L534,62 L534,50 L536,48 L538,50 L538,62 L542,62 L542,72
          L548,72 L548,55 L552,55 L552,38 L555,32 L558,28 L561,32 L564,38 L564,55 L568,55 L568,72 L580,72
          L580,72 L585,72 L585,58 L589,54 L593,58 L593,72 L597,72
          L600,72 L605,72 L605,52 L609,48 L613,44 L617,48 L621,52 L621,72 L625,72
          L630,72 L630,65 L634,65 L634,55 L638,52 L642,55 L642,65 L646,65 L646,72 L655,72
          L655,72 L660,68 L665,60 L670,52 L675,44 L678,36 L681,44 L686,52 L691,60 L696,68 L696,72 L710,72
          L715,72 L715,62 L720,58 L725,52 L730,52 L735,58 L740,62 L740,72 L752,72
          L752,72 L756,72 L756,60 L760,60 L760,48 L762,44 L764,48 L764,60 L768,60 L768,72 L775,72
          L778,72 L778,60 L782,56 L786,50 L790,50 L794,56 L798,60 L798,72
          L805,72 L805,62 L808,62 L808,52 L812,52 L812,42 L814,38 L816,42 L816,52 L820,52 L820,62 L823,62 L823,72 L835,72
          L840,72 L840,65 L845,65 L845,52 L850,48 L855,48 L855,52 L860,52 L860,65 L865,65 L865,72
          L870,72 L870,60 L874,56 L878,50 L882,50 L886,56 L890,60 L890,72
          L895,72 L895,65 L900,65 L900,55 L904,50 L908,44 L912,50 L916,55 L916,65 L921,65 L921,72 L935,72
          L940,72 L940,60 L944,56 L948,50 L952,50 L956,56 L960,60 L960,72
          L965,72 L965,65 L970,65 L970,52 L974,48 L978,45 L982,48 L986,52 L986,65 L991,65 L991,72
          L995,72 L995,60 L1000,58 L1000,48 L1004,44 L1008,48 L1008,58 L1013,60 L1013,72 L1025,72
          L1030,72 L1030,55 L1035,50 L1040,42 L1042,38 L1044,42 L1049,50 L1054,55 L1054,72
          L1060,72 L1060,65 L1065,65 L1065,52 L1069,48 L1073,52 L1073,65 L1078,65 L1078,72 L1090,72
          L1095,72 L1095,62 L1100,58 L1105,52 L1110,48 L1115,52 L1120,58 L1125,62 L1125,72
          L1130,72 L1130,60 L1135,55 L1140,50 L1145,50 L1150,55 L1155,60 L1155,72
          L1160,72 L1160,65 L1165,65 L1165,55 L1170,52 L1175,55 L1175,65 L1180,65 L1180,72
          L1185,72 L1185,62 L1190,58 L1195,58 L1195,72 L1200,72 L1200,90 Z
        "
      />
    </svg>
  </div>
);

export default function SignUp() {
  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [agree,    setAgree]    = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Placeholder — will connect to Express auth endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
  };

  return (
    <div className="auth-page">

      {/* ── LEFT: Cinematic travel image ──────────────────── */}
      <div className="auth__image-side">
        <img
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1800&q=80"
          alt="Aerial coastal travel scenery"
          className="auth__image"
        />
        <div className="auth__image-overlay" />
        <div className="auth__brand">
          <Link to="/">
            <img src="/Logo bgr.png" alt="TripZ" className="auth__logo" />
          </Link>
          <h2 className="auth__statement">Your Next Escape<br />Starts Here.</h2>
          <p className="auth__statement-sub">Plan intelligently. Travel better.</p>
        </div>
      </div>

      {/* ── RIGHT: Auth form ──────────────────────────────── */}
      <main className="auth__form-side">

        {/* Scrollable form content */}
        <div className="auth__form-scroll">
          <div className="auth__form-container">

            <h1 className="auth__title">Ready to Escape?</h1>
            <p className="auth__sub">Create your account and start exploring.</p>

            <form className="auth__form" onSubmit={handleSubmit} noValidate>

              <div className="auth__field">
                <label htmlFor="signup-name" className="auth__label">Full Name</label>
                <input
                  id="signup-name"
                  type="text"
                  className="auth__input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="auth__field">
                <label htmlFor="signup-email" className="auth__label">Email Address</label>
                <input
                  id="signup-email"
                  type="email"
                  className="auth__input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="auth__field">
                <label htmlFor="signup-password" className="auth__label">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  className="auth__input"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="auth__row">
                <label className="auth__checkbox-label">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="auth__checkbox"
                    required
                  />
                  I agree to the Terms &amp; Privacy
                </label>
              </div>

              <button type="submit" className="auth__submit" disabled={isLoading}>
                {isLoading ? 'Creating account…' : 'Sign Up'}
              </button>

              <div className="auth__divider">or</div>

              <button type="button" className="auth__google-btn" aria-label="Continue with Google">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

            </form>

            <p className="auth__switch">
              Already have an account?{' '}
              <Link to="/login" className="auth__switch-link">Login</Link>
            </p>

          </div>
        </div>

        {/* ── Travel skyline silhouette ──────────────────── */}
        <TravelSkylineSVG />

      </main>
    </div>
  );
}
