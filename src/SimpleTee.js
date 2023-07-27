import "./Research.css"
function SimpleTee(){
    return (
        <div>

            <h1>
                Welcome to SimpleTee! 
            </h1>
            <h3>
                Screenprinting for All
            </h3>
            <div className="center"> 
            <div className="outline">
                <p>My role: UX Designer and Researcher</p>
                <p>
                Project Goal: Our screen-printing app will let users upload designs and customize tees which will affect a people in the market for custom tees by giving them an accessible platform where they have free reign on customization. We will measure effectiveness by analyzing sales and user feedback.
                </p>
                <p>
                Target Audience: People that want to freely customize shirts as much as they want without restrictions.
                </p>
                <p>
                Challenges: Incorporating accessibility features
                </p>
                Research Summary: We wanted to see what types of issues occur when a user utilizes our app in order to better design it and some up with solutions to any potential bugs or dead ends that may occur.
                <p>
                Upon completion of the research we concluded that accessibility is something that needs to be taken into account, and also that user flow for this sort of app is typically convoluted and could be improved upon.
                </p>
            </div>
            </div>
           
            <div className="center">
                <h2>Initial Design Concept</h2>
                <p>My goal here was to create a home screen with buttons for each customization option, along with a preview of the shirt being customized, and a way to zoom in on the screen.</p>
            </div>
            <div className="center">
                <h2>Low Fidelity Prototype</h2>
                <p>The low fidelity prototype connected the user flow of designing and purchasing a custom t-shirt in the app.</p>
                <p>View the SimpleTee <a target="blank" href="https://www.figma.com/file/iGnLNx9T2BoNnUiXdkwmDX/Low-Fidelity-Prototype-v.1?type=design&node-id=0-1&mode=design&t=Q0Ait8yw5OWjxVaR-0">low fidelity prototype</a></p>
            </div>
           <section>
            <p>User Testing Results:  Users want a way to adjust text, hover over images to view them larger, and want the names of the colors written below them. They also wanted a storefront with premade tees, and a way to go back and edit the items in their cart.</p>
            <div className="center">
                <h2>High Fidelity Prototype </h2>
                <p>View the SimpleTee <a target="blank" href="https://www.figma.com/file/duBGPJ7avezr3Vth6IqsTl/High-Fidelity-Prototype-v.1.2?type=design&node-id=0-1&mode=design&t=wpyepV3Y3DnthFG1-0">high fidelity prototype</a></p>
            </div>
            <p>
            Conclusions and Next Steps:  The next step I’d like to take for this project is to create a high fidelity mockup for a home, account settings, and regular settings screen to get a better sense for how this app will feel as a whole. I’d also like to work on making my colors more high contrast to account for accessibility, along with editing my transitions some more to make them more seamless for the ease of user experience.
            </p>

           </section>
        </div>
    )}



    export default SimpleTee