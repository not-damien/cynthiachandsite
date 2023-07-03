import React, { useEffect, useState } from 'react';
import Particle from './Particle';

const ParticleEmitter = ({ characters, interval }) => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    let particleCount = 0;
    const particleInterval = setInterval(() => {
      // Generate a new particle with a random character from the provided array
      if(particleCount < 15){
      const randomChar = characters[Math.floor(Math.random() * characters.length)];
      const particle = <Particle key={Date.now()} char={randomChar} />;
      
      setParticles(prevParticles => [...prevParticles, particle]);
      particleCount++
      } else {
        clearInterval(particleInterval)
      }
    }, interval);
    
    // Cleanup function
    return () => {
      clearInterval(particleInterval);
    };
  }, []);
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {particles}
    </div>
  );
};

export default ParticleEmitter;
