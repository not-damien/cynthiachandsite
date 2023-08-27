import rocket from './rocket.svg';
import './App.css';
import About from './About';
import Projects from './Projects';
import Resume from './Resume'
import GameAssets from './GameAssets'
import InBrowse from './Inbrowse'
import SimpleTee from './SimpleTee'
import Foodtopia from './Foodtopia';



import { HashRouter as Router, Routes, Route }
    from 'react-router-dom';

import ParticleEmitter from './ParticleEffect/ParticleEmitter';
import Foldhere from './Foldhere';

function App() {
  const characters = ['✩', '✧', '☾', '⋆']; // Array of characters to be used
  const interval = 500; // Interval in milliseconds for emitting new particles
  return (
    <div className="App">
      <header className="App-header">
        <div id="tittle-container">
        <h2 id="site-name">Cynthia Chand</h2>
        <img src={rocket} className="App-logo" alt="logo" />
          <h2 id="tag-line">Designing the Future.</h2>
          
        
        </div>

      
          <div className='links'>
          <a href='#/projects'>Projects</a> <a href='#/resume'>Resume</a>  <a href='#/about'>About</a> <a href="https://www.linkedin.com/in/cynthia-chand-976495171/" target='blank' >Linkedin</a>
          </div>
      </header>
      <ParticleEmitter characters={characters} interval={interval} />
     
      <div className='body'>
      <Router>
            <Routes>
                <Route path='/' element={<Projects />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/gameassets' element={<GameAssets />}/>
                <Route path='/inbrowse' element={<InBrowse />}/>
                <Route path='/simpletee' element={<SimpleTee/>}/>
                <Route path='/Foodtopia' element={<Foodtopia/>}/>
                <Route path='/Foldhere' element={<Foldhere/>}/>
            </Routes>
        </Router>
      </div>
      <footer>
    <p>&copy; 2023 Damien Cruz. All rights reserved.</p>
    

      </footer> 
    </div>
  );
}



export default App;
