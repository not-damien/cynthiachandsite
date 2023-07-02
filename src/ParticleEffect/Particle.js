import React, { useEffect, useState } from 'react';

const Particle = ({ char }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const moveParticle = () => {
      // Calculate the new position of the particle
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;
      setPosition({ x: newX, y: newY });
    };
    
    // Move the particle initially
    moveParticle();
    
    // Move the particle every 1 second (adjust the interval as needed)
    const interval = setInterval(moveParticle, 1000);
    
    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div
      style={{
        zIndex: -1,
        position: 'absolute',
        top: position.y,
        left: position.x,
      }}
    >
      {char}
    </div>
  );
};

export default Particle;

