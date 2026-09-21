import { useState } from 'react';
import { type Place } from '../data/eras';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import './FoodCarousel.css';

interface FoodCarouselProps {
  foods: Place[];
  eraColor: string;
}

export default function FoodCarousel({ foods, eraColor }: FoodCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!foods || foods.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === foods.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? foods.length - 1 : prevIndex - 1));
  };

  return (
    <div className="food-carousel-container glass-panel animate-fade-in" style={{ '--era-color': eraColor } as React.CSSProperties}>
      <div className="carousel-header flex-center">
        <MapPin size={28} style={{ color: eraColor }} />
        <h2 className="font-serif m-0" style={{ color: eraColor }}>ร้านอาหารแนะนำ</h2>
      </div>
      
      <div className="carousel-wrapper">
        <button className="carousel-btn prev" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-content">
          <div className="carousel-image">
            <img 
              src={foods[currentIndex].image || 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80'} 
              alt={foods[currentIndex].name} 
            />
            <div className="carousel-counter">
              {currentIndex + 1} / {foods.length}
            </div>
          </div>
          
          <div className="carousel-info">
            <h3 className="font-serif">{foods[currentIndex].name}</h3>
            <p className="text-muted">{foods[currentIndex].desc}</p>
            
            <div className="carousel-map">
              <h4 className="media-title">แผนที่ (Google Maps)</h4>
              <div className="iframe-wrapper">
                <iframe src={foods[currentIndex].mapIframe} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="carousel-dots">
        {foods.map((_, idx) => (
          <span 
            key={idx} 
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            style={{ backgroundColor: idx === currentIndex ? eraColor : '' }}
          ></span>
        ))}
      </div>
    </div>
  );
}
