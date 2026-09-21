import { useParams, Navigate } from 'react-router-dom';
import { erasData, type Place } from '../data/eras';
import { MapPin, Compass } from 'lucide-react';
import FoodCarousel from '../components/FoodCarousel';
import './EraDetail.css';

export default function EraDetail() {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !erasData[id]) {
    return <Navigate to="/" />;
  }

  const era = erasData[id];
  
  // Separate food from other places
  const foodPlaces = era.places.filter(p => p.type === 'food');
  const otherPlaces = era.places.filter(p => p.type !== 'food');

  return (
    <div className="era-detail" style={{ '--era-color': era.color } as React.CSSProperties}>
      {/* Era Hero Section */}
      <section className="era-hero flex-center" style={{ backgroundImage: `url(${era.heroImage})` }}>
        <div className="era-hero-overlay"></div>
        <div className="container era-hero-content animate-fade-in text-center">
          <span className="era-period">{era.period}</span>
          <h1 className="era-title font-serif">{era.name}</h1>
          <p className="era-desc">{era.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container section">
        


        {/* Food Carousel */}
        {foodPlaces.length > 0 && (
          <FoodCarousel foods={foodPlaces} eraColor={era.color} />
        )}

        {/* Places List (Historical & Attraction) */}
        {otherPlaces.length > 0 && (
          <div className="places-list">
            <div className="block-header flex-center" style={{ marginBottom: '1rem' }}>
              <Compass size={28} />
              <h2 className="font-serif m-0">สถานที่สำคัญ</h2>
            </div>
            {otherPlaces.map((place: Place, index: number) => (
              <div key={index} className="place-card glass-panel animate-fade-in" style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}>
                <div className="place-info">
                  <div className="place-type">
                    {place.type === 'historical' && <span className="type-badge historical"><Compass size={14}/> แหล่งประวัติศาสตร์</span>}
                    {place.type === 'attraction' && <span className="type-badge attraction"><MapPin size={14}/> สถานที่ท่องเที่ยว</span>}
                  </div>
                  <h3 className="font-serif place-name">{place.name}</h3>
                  <p className="place-desc text-muted">{place.desc}</p>
                </div>

                <div className="place-media">
                  {place.streetViewIframe && (
                    <div className="media-box">
                      <h4 className="media-title">มุมมอง 360 องศา (Street View)</h4>
                      <div className="iframe-wrapper">
                        <iframe src={place.streetViewIframe} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  )}
                  
                  <div className="media-box">
                    <h4 className="media-title">แผนที่และการเดินทาง (Google Maps)</h4>
                    <div className="iframe-wrapper">
                      <iframe src={place.mapIframe} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
}
