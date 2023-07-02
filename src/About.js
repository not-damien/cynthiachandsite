import aboutMePic from './images/aboutMePic.png'
import './About.css';
function About(){
    return(
      <div className='blurb'>
        <div className='about-cynthia'>
        <img
          src={aboutMePic}
        />
        <div className='about-me'>
          <p>
          Hi! 
          I’m Cynthia Chand 
          </p>
          <p>
          I’m a UX Designer interested in making cool stuff to help with the little things in life.
          </p>
          <p>
          I studied at the University of Washington where I earned a trifecta of Bachelor's degrees in Biomedical Science, Art, Media, and Culture, and Psychology. During this time I also obtained a Google certification in UX Design.
          </p>
          <p>
          Research. Design. Innovation that may or may not excite.
          </p>
          <p>
          Contact  me at <a href='mailto:cyntheuhhh@gmail.com'>cyntheuhhh@gmail.com</a>
          </p>
        </div>
        </div>
        <div className='about-damien'>
            <p>
            I work together with my partner, Damien Cruz, to bring these designs to life. Here are links to his <a href='https://github.com/not-damien' target='blank'>Github</a> and <a href='https://www.linkedin.com/in/damien-cruz-7aa58b222/' target='blank'>LinkedIn</a>.
   
            </p>
        </div>


      </div>
    )
  }
  
export default About;