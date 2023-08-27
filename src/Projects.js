import React, {useEffect } from 'react';
import simpleTee from './images/simpleTee.png'
import foodTopia from './images/foodTopia.png'
import inBrowse from './images/inBrowse.png'
import foldHere from './images/foldHere.png'
import rocket from './blueRocket.png';
import flappyDog from "./images/flappyDog.png"
import './Projects.css'
function Projects(){
  const scrolltotop = () => {
    window.scrollTo(0,0);
  }
  useEffect(scrolltotop,[])
    return (
      <div>
        <div className='typewriter'><h2 id="working-on-line">Here’s what I’ve been working on...</h2></div>
      
      <div className='card-holder'>
        <Card
          imageSrc={simpleTee}
          title="SimpleTee"
          description="A custom t-shirt design app and my first project!"
          link="#/simpletee"
          />
          <Card
          imageSrc={foodTopia}
          title="Foodtopia"
          description="A recipe app with simple snacks for kids to make! Yum!"
          link='#/foodtopia'
          />
          <Card
          imageSrc={inBrowse}
          title="InBrowse"
          description="A Google Chrome extension used to screen record."
          link="#/inbrowse"
          />
          <Card
          imageSrc={foldHere}
          title="FoldHere"
          description="A desktop widget for easily sharing files between computers."
          link = '#/foldhere'
          />
          <Card
          imageSrc={flappyDog}
          title="Game Assets"
          description="A collection of assets I have created to be used in game design."
          link = '#/gameassets'
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
  
  function Card({ imageSrc, title, description, link }) {
    return(
      <a href={link}>
      <div
      className='card-container'
      >
        <div className='card-content'> 
        <div>
        <h3 className='title'>{title}</h3>
       <p className='description'>{description}</p>
        </div> 
      </div>
      <img className="card-img" src={imageSrc} alt={title}  />
      </div></a>
    )
  }
  export default Projects