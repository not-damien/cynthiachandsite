import './Resume.css'
function Resume(){
    return (
        <div>
        <div className='typewriter'><h2 id="working-on-line">Here’s my CV!</h2></div>
            <iframe 
            title ="Full CV"
            src="https://docs.google.com/document/d/e/2PACX-1vQHKjXI9A0kdx4KZFZVJNqyEv-VyGpQCQHyajLFAIJzuLyeOgG-8LvB4qqWH8AVnoeajB8FPv1VYmH_/pub?embedded=true"
            ></iframe>

        </div>
    );
}
export default Resume;