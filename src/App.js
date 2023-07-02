import rocket from './rocket.svg';
import './App.css';
import About from './About';
import Projects from './Projects';
import Resume from './Resume'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

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
          <a href='/projects'>Projects</a> <a href='/resume'>Resume</a> <a href="https://www.linkedin.com/in/cynthia-chand-976495171/" target='blank' >Linkedin</a> <a href='/about'>about</a>
          </div>
      </header>
     
      <body>
      <Router>
            <Routes>
                <Route exact path='/' element={<Projects />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume/>}/>
            </Routes>
        </Router>
      </body>
     
    </div>
  );
}



export default App;
