import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home     from './pages/Home';
import Explore  from './pages/Explore';
import Trending from './pages/Trending';
import Planner  from './pages/Planner';
import MyTrips  from './pages/MyTrips';
import About    from './pages/About';
import Login    from './pages/Login';
import './styles/globals.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/explore"   element={<Explore />} />
        <Route path="/trending"  element={<Trending />} />
        <Route path="/planner"   element={<Planner />} />
        <Route path="/my-trips"  element={<MyTrips />} />
        <Route path="/about"     element={<About />} />
        <Route path="/login"     element={<Login />} />
        {/* Fallback */}
        <Route path="*"          element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
