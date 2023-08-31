import "./Research.css"
import paper from "./images/foodtopiaPaper.png"
import low from "./images/foodtopiaLowFidel.png"
import digital1 from "./images/foodtopiaDigital.png"
import digital2 from "./images/foodtopiaDigital2.png"
import diagram from "./images/foodtopiaDiagram.png"
import high from "./images/foodtopiaHigh.png"
export default function Foodtopia(){
    return (
        <div>
             <h1>
                Welcome to Foodtopia! 
            </h1>
            <h3>
                Snacking Has Never Been Easier
            </h3>
            <div className="center"> 
            <div className="outline">
                <p>My role: UX Designer and Researcher</p>
                <p>
                Project Goal: Our cookbook app will allow children to easily access recipes and save them to look at later which will make it easier for parents to teach their kids about healthy cooking in a way that gets the children more involved in the process. We will measure effectiveness by analyzing user feedback from the parents regarding their children’s eating habits after using the app.
                </p>
                <p>
                Target Audience: Parents and kids who want an simple app with recipes for children.
                </p>
                <p>
                Challenges: Making buttons distinctive from each other.
                </p>
                Research Summary: We wanted to see what happens when kids and parents follow the flow of this app.
                <p>
                Upon completion of the research we concluded that clearly labeling everything clickable with both words and pictures was a major improvement that needed to be made, and that coloring would also take a major role in that.
                </p>
            </div>
            </div>



            <div className="center background">
                <h2>Initial Design Concept</h2>
                <p>My goal here was to create a simplified version of how each page would look along with their alternate iterations based on the settings chosen.</p>
            </div>
            <img src={paper}/>
            <div className="center background">
                <h2>Digital Wireframes</h2>
                <p>I took my final paper wireframes and cleaned them up by rearranging some elements for a more user friendly design.</p>
            </div>
            <div className="side-by-side">
                <img className="img-on-page" src={digital1}/>
                <img src={digital2}/>
            </div>

            <div className="center background">
                <h2>Low Fidelity Prototype</h2>
                <p>The low fidelity prototype connected the user flow of a recipe app</p>
            </div>
            <img src={low}/>




           <section>
            <div className="center background">
            <h2>User Testing Results</h2>
                <p>Users want a way to adjust text, save recipes, and have a back button. They also wanted a way to swap what side the hamburger menu is on, along with making pictures clickable as links to the recipe alongside the text.</p>
            </div>

            <img src={diagram}/>

            <div className="center background">
                <h2>High Fidelity Prototype </h2>
                <p><a target="_blank" href="https://www.figma.com/file/L2Nvr7BJ04LwMPoxEB0eF1/High-fidelity-prototype?type=design&mode=design&t=E87wQNz6LBNfpUD4-1">View the Foodtopia high fidelity prototype</a></p>
            </div>
            <img src={high}/>
            <div className="center background">
            <h2>Conclusions and Next Steps</h2>
            <p>
            The next step I’d like to take for this project is to create a high fidelity mockup for account settings and a help/FAQ page to get a better sense for how this app will feel as a whole. I’d also like to work on editing my transitions to make them more seamless.
            </p>
            </div>
           </section>
        </div>

    )
}