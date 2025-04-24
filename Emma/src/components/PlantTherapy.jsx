import React, { useEffect, useState } from 'react';
import './PlantTherapy.css';

const PlantTherapy = () => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDay(prev => !prev);
    }, 10000); // switch between day and night every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`plant-therapy-container ${isDay ? 'day' : 'night'}`}>
      <div className="sky">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="sun-moon"></div>
      </div>
      <div className="plants">
        <div className="plant">
          <div className="stem"></div>
          <div className="flower flower1"></div>
          <div className="leaf leaf1"></div>
          <div className="leaf leaf2"></div>
        </div>
        <div className="plant">
          <div className="stem"></div>
          <div className="flower flower2"></div>
          <div className="leaf leaf1"></div>
          <div className="leaf leaf2"></div>
        </div>
      </div>
    </div>
  );
};

export default PlantTherapy;
