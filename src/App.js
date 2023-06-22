import rocket from './rocket.svg';
import './App.css';
import React, { useState } from 'react';
import simpleTee from './images/simpleTee.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="tittle-container">
        <h1 id="site-name">Cynthia Chand</h1>
        <div id="sub-tittle">
          <h2>Designing the Future.</h2>
          <img src={rocket} className="App-logo" alt="logo" />
        </div>
        </div>

      
          <div className='links'>
          <a>Projects</a> <a>Resume</a> <a href="https://www.linkedin.com/in/cynthia-chand-976495171/">Linkedin</a> <a>about</a>
          </div>
      </header>
     
      <body>
        <Card
        imageSrc={simpleTee}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
        <Card
        imageSrc={simpleTee}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
        <Card
        imageSrc={simpleTee}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
        <Card
        imageSrc={simpleTee}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
      </body>
     
    </div>
  );
}



function Card({ imageSrc, title, description }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  
  
  return(
    <div className='card-container'
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{ backgroundColor: isHovered ? 'gray' : 'transparent'}}
    >
      <div
      style={{ display: 'inline-block', margin: '10px' }}
    >
      {!isHovered && (
        <img src={imageSrc} alt={title} style={{ width: '200px', height: '200px' }} />
      )}
      <h3>{title}</h3>
      {isHovered && <p>{description}</p>}
    </div>
    </div>
  )
}
export default App;
