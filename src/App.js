import rocket from './rocket.svg';
import './App.css';

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
     

     <Card></Card>
    </div>
  );
}



function Card() {
  return(
    <div className='card-container'>
      <h3>
        simple tee
      </h3>
      <p>
        this is a short paragraph about tee
      </p>
    </div>
  )
}
export default App;
