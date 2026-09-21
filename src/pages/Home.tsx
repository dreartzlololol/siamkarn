import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, History } from 'lucide-react';
import './Home.css';

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);

  const eras = [
    {
      id: 'sukhothai',
      name: 'สุโขทัย',
      year: 'พ.ศ. 1792 - 1981',
      desc: 'รุ่งอรุณแห่งความสุข ต้นกำเนิดศิลปะและวัฒนธรรมไทย',
      color: 'var(--color-sukhothai)',
      bgImage: '/images/eras/sukhothai.png'
    },
    {
      id: 'ayutthaya',
      name: 'อยุธยา',
      year: 'พ.ศ. 1893 - 2310',
      desc: 'ราชธานีที่ยาวนานที่สุด มรดกโลกแห่งความรุ่งเรือง',
      color: 'var(--color-ayutthaya)',
      bgImage: '/images/eras/ayutthaya.png'
    },
    {
      id: 'thonburi',
      name: 'ธนบุรี',
      year: 'พ.ศ. 2310 - 2325',
      desc: 'ยุคแห่งการกอบกู้เอกราชและตั้งปริมณฑลใหม่',
      color: 'var(--color-thonburi)',
      bgImage: '/images/eras/thonburi.png'
    },
    {
      id: 'rattanakosin',
      name: 'รัตนโกสินทร์',
      year: 'พ.ศ. 2325 - ปัจจุบัน',
      desc: 'ความงามแห่งพระบรมมหาราชวังและยุคสมัยแห่งการพัฒนา',
      color: 'var(--color-rattanakosin)',
      bgImage: '/images/eras/rattanakosin.png'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % eras.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [eras.length]);

  const handleNext = () => {
    setCurrentBg((prev) => (prev + 1) % eras.length);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {eras.map((era, index) => (
          <div 
            key={`bg-${era.id}`}
            className={`hero-bg-slide ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url('${era.bgImage}')` }}
          />
        ))}
        <div className="hero-overlay"></div>
        
        <div className="container hero-inner">
          {/* Left Text */}
          <div className="hero-text-content">
            <div className="hero-badge animate-fade-in-up">The Virtual History Experience</div>
            <h1 className="hero-title font-serif animate-fade-in-up delay-1">
              ย้อนรอย <span className="text-gradient-primary">สยามกาล</span>
            </h1>
            <p className="hero-subtitle animate-fade-in-up delay-2">
              ออกเดินทางผ่าน 4 ยุคสมัยของประวัติศาสตร์ไทย<br/>
              สัมผัสเรื่องราวและประสบการณ์ 360 องศา
            </p>
          </div>

          {/* Right Deck of Cards */}
          <div className="deck-container animate-fade-in-up delay-3">
            {eras.map((era, index) => {
              // Calculate offset relative to the current active card
              // This makes the active card center (0), previous cards left (-), next cards right (+)
              const offset = index - currentBg;
              const isTop = offset === 0;
              
              // Spread out horizontally like a hand of cards (overlapping)
              const translateX = offset * 140; 
              
              // Active card pops up, others sit lower
              const translateY = isTop ? -40 : 30;
              
              // Active card is slightly larger
              const scale = isTop ? 1.05 : 0.85;
              
              // Z-index ensures the active card is on top, and others slide under it naturally
              const zIndex = 10 - Math.abs(offset);
              
              // Dim inactive cards slightly to draw focus to the active one
              const opacity = isTop ? 1 : 0.7;

              return (
                <div 
                  key={`card-${era.id}`}
                  className={`deck-card ${isTop ? 'is-top' : ''}`}
                  onClick={() => setCurrentBg(index)}
                  style={{
                    transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                    zIndex,
                    opacity
                  }}
                >
                  <div 
                    className="deck-card-bg"
                    style={{ backgroundImage: `url('${era.bgImage}')` }}
                  ></div>
                  <div className="deck-card-content">
                    <h3 className="deck-card-title font-serif" style={{ color: era.color }}>
                      {era.name}
                    </h3>
                    <div className="deck-card-year">{era.year}</div>
                    
                    <div className="deck-card-btn">
                      {isTop ? (
                        <Link 
                          to={`/era/${era.id}`} 
                          className="btn btn-primary"
                          onClick={(e) => e.stopPropagation()} // Prevent triggering handleNext
                        >
                          เข้าสู่ยุคสมัย <ArrowRight size={18} />
                        </Link>
                      ) : (
                        <div className="btn btn-outline" style={{ pointerEvents: 'none' }}>
                          Next
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eras Section - Kept as fallback/grid layout if needed, or removed. Let's keep it just in case, but user might just use the deck. */}
      <section id="eras" className="section" style={{ display: 'none' }}>
        {/* Hidden as per the new layout focusing purely on the hero deck, but kept in DOM to avoid breaking hash links */}
      </section>
    </div>
  );
}
