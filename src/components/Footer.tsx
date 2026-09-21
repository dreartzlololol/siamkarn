import { Link } from 'react-router-dom';
import { Compass, Map, Video, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid-cols-4 footer-content">
        <div className="footer-brand">
          <div className="navbar-logo flex-center" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
            <Compass className="logo-icon" size={24} />
            <span className="font-serif">สยามกาล</span>
          </div>
          <p className="text-muted">
            ออกเดินทางย้อนเวลา สำรวจประวัติศาสตร์ไทยผ่าน 4 ยุคสมัย ด้วยเทคโนโลยี 360 องศา และแผนที่อินเทอร์แอคทีฟ
          </p>
        </div>

        <div className="footer-links">
          <h4>ยุคสมัย</h4>
          <Link to="/era/sukhothai" className="footer-link">สุโขทัย</Link>
          <Link to="/era/ayutthaya" className="footer-link">อยุธยา</Link>
          <Link to="/era/thonburi" className="footer-link">ธนบุรี</Link>
          <Link to="/era/rattanakosin" className="footer-link">รัตนโกสินทร์</Link>
        </div>

        <div className="footer-links">
          <h4>ฟีเจอร์หลัก</h4>
          <span className="footer-feature"><Map size={16} /> แผนที่เชิงประวัติศาสตร์</span>
          <span className="footer-feature"><Compass size={16} /> ภาพมุมมอง 360 องศา</span>
          <span className="footer-feature"><Video size={16} /> วิดีโอแนะนำการท่องเที่ยว</span>
          <span className="footer-feature"><MapPin size={16} /> แนะนำร้านอาหาร & ที่เที่ยว</span>
        </div>

        <div className="footer-credits">
          <h4>แหล่งอ้างอิง</h4>
          <p className="text-muted">ข้อมูลทางประวัติศาสตร์และแผนที่อ้างอิงจาก กรมศิลปากร และ Google Maps</p>
        </div>
      </div>
      
      <div className="footer-bottom text-center">
        <p className="text-muted">&copy; {new Date().getFullYear()} สยามกาล (SiamKarn). สร้างสรรค์เพื่อการศึกษาและการท่องเที่ยว.</p>
      </div>
    </footer>
  );
}
