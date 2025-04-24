import React, { useState, useEffect } from 'react';
import './BalloonPoppingGame.css';

const BalloonPoppingGame = () => {
  const [balloons, setBalloons] = useState([]);
  const [nextId, setNextId] = useState(1);

  const createBalloon = () => {
    const id = nextId;
    const leftPosition = Math.random() * 90;
    const speed = 1 + Math.random() * 2;

    const newBalloon = {
      id,
      left: leftPosition,
      bottom: -10,
      speed
    };

    setBalloons(prev => [...prev, newBalloon]);
    setNextId(prev => prev + 1);
  };

  const moveBalloonsUp = () => {
    setBalloons(prev =>
      prev
        .map(balloon => ({
          ...balloon,
          bottom: balloon.bottom + balloon.speed
        }))
        .filter(balloon => balloon.bottom < 120)
    );
  };

  const handlePop = (id) => {
    // Add pop effect only to clicked balloon
    setBalloons(prev =>
      prev.map(balloon =>
        balloon.id === id
          ? { ...balloon, pop: true }
          : balloon
      )
    );

    // Remove balloon after animation
    setTimeout(() => {
      setBalloons(prev => prev.filter(balloon => balloon.id !== id));
    }, 300);
  };

  useEffect(() => {
    const balloonInterval = setInterval(createBalloon, 2000);
    const moveInterval = setInterval(moveBalloonsUp, 50);

    for (let i = 0; i < 5; i++) {
      setTimeout(() => createBalloon(), i * 400);
    }

    return () => {
      clearInterval(balloonInterval);
      clearInterval(moveInterval);
    };
  }, []);

  return (
    <div className="container1">
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          onClick={() => handlePop(balloon.id)}
          className={`balloon ${balloon.pop ? 'popEffect' : ''}`}
          style={{
            left: `${balloon.left}%`,
            bottom: `${balloon.bottom}%`
          }}
        >
          <div className="string"></div>
        </div>
      ))}
    </div>
  );
};

export default BalloonPoppingGame;