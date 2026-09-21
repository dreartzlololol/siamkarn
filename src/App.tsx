import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EraDetail from './pages/EraDetail';
import VirtualTours from './pages/VirtualTours';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="era/:id" element={<EraDetail />} />
          <Route path="virtual-tours" element={<VirtualTours />} />
        </Route>
      </Routes>
    </Router>
  );
}
