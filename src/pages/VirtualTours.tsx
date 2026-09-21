import { useState, useMemo } from 'react';
import { Compass, MapPin } from 'lucide-react';
import { erasData } from '../data/eras';
import './VirtualTours.css';

export default function VirtualTours() {
  const eraKeys = Object.keys(erasData);
  const [activeEraKey, setActiveEraKey] = useState(eraKeys[0]);

  const activeEra = erasData[activeEraKey];

  // Find the first place with a streetViewIframe
  const activePlace = useMemo(() => {
    return activeEra.places.find(p => p.streetViewIframe) || activeEra.places[0];
  }, [activeEra]);



  return (
    <div className="virtual-tours-page animate-fade-in">
      <aside className="tours-sidebar">
        <div className="tours-header">
          <h1 className="font-serif">360° Tours</h1>
          <p>สำรวจสถานที่สำคัญแบบรอบทิศทาง</p>
        </div>
        
        <div className="tours-menu">
          {eraKeys.map(key => {
            const era = erasData[key];
            const place = era.places.find(p => p.streetViewIframe);
            const isActive = activeEraKey === key;
            
            return (
              <div 
                key={key}
                className={`tour-menu-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveEraKey(key)}
                style={{ 
                  '--era-color': era.color,
                } as React.CSSProperties}
              >
                <div className="tour-era-name">{era.name}</div>
                {place && (
                  <div className="tour-place-name">
                    <MapPin size={14} /> {place.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      <main className="tours-viewer">
        {activePlace?.streetViewIframe ? (
          <iframe 
            key={activeEraKey} // force remount to replay animations/loads if needed
            src={activePlace.streetViewIframe} 
            className="tours-iframe animate-fade-in"
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <div className="flex-center" style={{ height: '100%', color: '#666' }}>
            <Compass size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
            <p>ไม่พบข้อมูล 360 องศาสำหรับยุคนี้</p>
          </div>
        )}

        {activePlace && activePlace.streetViewIframe && (
          <div className="tours-overlay-info">
            <Compass size={20} color={activeEra.color} />
            <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>
              กำลังสำรวจ: {activePlace.name}
            </span>
          </div>
        )}
      </main>
    </div>
  );
}
