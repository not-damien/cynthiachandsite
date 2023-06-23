import rocket from './rocket.svg';
import './App.css';
import React, { useState } from 'react';
import simpleTee from './images/simpleTee.png'
import foodTopia from './images/foodTopia.png'
import inBrowse from './images/inBrowse.png'
import foldHere from './images/foldHere.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="tittle-container">
        <h1 id="site-name">Cynthia Chand</h1>
        <div id="sub-tittle">
          <h2 id="tag-line">Designing the Future.</h2>
          <img src={rocket} className="App-logo" alt="logo" />
        </div>
        </div>

      
          <div className='links'>
          <a>Projects</a> <a>Resume</a> <a href="https://www.linkedin.com/in/cynthia-chand-976495171/">Linkedin</a> <a>about</a>
          </div>
      </header>
     
      <body>
        <CardHolder/>
      </body>
     
    </div>
  );
}

function CardHolder(){
  return (
    <div>
    <h2 id="working-on-line">Here’s what I’ve been working on</h2>
    <div className='card-holder'>
      <Card
        imageSrc={simpleTee}
        title="SimpleTee"
        description="A custom t-shirt design app and my first project!"
        />
        <Card
        imageSrc={foodTopia}
        title="Foodtopia"
        description="A recipe app with simple snacks for kids to make! Yum"
        />
        <Card
        imageSrc={inBrowse}
        title="InBrowse"
        description="A Google Chrome extension used to screen record."
        />
        <Card
        imageSrc={foldHere}
        title="FoldHere"
        description="A desktop widget for easily sharing files between computers."
        />
        <Card
        imageSrc={rocket}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
        <Card
        imageSrc={rocket}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
        <Card
        imageSrc={rocket}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
        <Card
        imageSrc={rocket}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
        <Card
        imageSrc={rocket}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
        <Card
        imageSrc={rocket}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
        <Card
        imageSrc={rocket}
        title="Image Title"
        description="This is the description that will appear on hover."
        />
    </div>
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
    style={{ backgroundColor: isHovered ? '#282747' : 'transparent'}}
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
