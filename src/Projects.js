import React, { useState } from 'react';
import simpleTee from './images/simpleTee.png'
import foodTopia from './images/foodTopia.png'
import inBrowse from './images/inBrowse.png'
import foldHere from './images/foldHere.png'
import rocket from './blueRocket.png';

function Projects(){
    return (
      <div>
        <div className='typewriter'><h2 id="working-on-line">Here’s what I’ve been working on...</h2></div>
      
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
          title="Coming Soon"
          description="New projects will be posted here"
          />
          <Card
          imageSrc={rocket}
          title="Coming Soon"
          description="New projects will be posted here"
          />
          <Card
          imageSrc={rocket}
          title="Coming Soon"
          description="New projects will be posted here"
          />
          <Card
          imageSrc={rocket}
          title="Coming Soon"
          description="New projects will be posted here"
          />
          <Card
          imageSrc={rocket}
          title="Coming Soon"
          description="New projects will be posted here"
          />
          <Card
          imageSrc={rocket}
          title="Coming Soon"
          description="New projects will be posted here"
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
      style={{ backgroundColor: isHovered ? 'rgba(40, 39, 71, 0.75)' : 'transparent'}}
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
  export default Projects