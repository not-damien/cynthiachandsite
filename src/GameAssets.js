import "./GameAssets.css"
import "./Research.css"
import bread from './images/bread 1.png'
import chainsaw from './images/chainsaw 1.png'
import dog from './images/doge 1.png'
function GameAssets(){

    return (
    
    <div>
    <h1>Assorted Game Assets</h1>
    <div className="center background"> 
            <img src={bread}/>
            <img src={chainsaw}/>
            <p>Created for a game inspired by Flappy Bird and the anime Chainsaw Man made by Damien Cruz, 2023</p>
            <p><a href="https://not-damien.github.io/FlappyBirdClone/" target="blank">Click here to play it!</a></p>
            <img src={dog}/>
    </div>
    </div>
       
    )
}

export default GameAssets