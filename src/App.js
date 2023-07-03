import rocket from './rocket.svg';
import './App.css';
import About from './About';
import Projects from './Projects';
import Resume from './Resume'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import ParticleEmitter from './ParticleEffect/ParticleEmitter';

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
          <a href='/projects'>Projects</a> <a href='/resume'>Resume</a>  <a href='/about'>About</a> <a href="https://www.linkedin.com/in/cynthia-chand-976495171/" target='blank' >Linkedin</a>
          </div>
      </header>
      <ParticleEmitter characters={characters} interval={interval} />
     
      <div className='body'>
      <Router>
            <Routes>
                <Route exact path='/' element={<Projects />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume/>}/>
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
