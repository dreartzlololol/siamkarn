import { Link } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex-between navbar-inner">
        <Link to="/" className="navbar-logo flex-center">
          <Compass className="logo-icon" size={28} />
          <span className="font-serif">สยามกาล (SiamKarn)</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/virtual-tours" className="nav-link">360° Tours</Link>
          <Link to="/era/sukhothai" className="nav-link text-sukhothai">สุโขทัย</Link>
          <Link to="/era/ayutthaya" className="nav-link text-ayutthaya">อยุธยา</Link>
          <Link to="/era/thonburi" className="nav-link text-thonburi">ธนบุรี</Link>
          <Link to="/era/rattanakosin" className="nav-link text-rattanakosin">รัตนโกสินทร์</Link>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/virtual-tours" onClick={() => setMobileMenuOpen(false)}>360° Tours</Link>
        <Link to="/era/sukhothai" onClick={() => setMobileMenuOpen(false)}>สุโขทัย (Sukhothai)</Link>
        <Link to="/era/ayutthaya" onClick={() => setMobileMenuOpen(false)}>อยุธยา (Ayutthaya)</Link>
        <Link to="/era/thonburi" onClick={() => setMobileMenuOpen(false)}>ธนบุรี (Thonburi)</Link>
        <Link to="/era/rattanakosin" onClick={() => setMobileMenuOpen(false)}>รัตนโกสินทร์ (Rattanakosin)</Link>
      </div>
    </nav>
  );
}
