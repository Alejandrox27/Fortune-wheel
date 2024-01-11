import wheel from "./imgs/ruleta.png"
import arrow from "./imgs/central.png"
import "./App.css"
import "./reset.css"

function App(){
  return(
    <div className="container">
      <div className="wheel-container">
        <img className="wheel animation" src={wheel}></img>
        <img className="arrow" src={arrow}></img>
      </div>
      <div className="launch-text">
        <p>Click on "launch"</p>
      </div>
      <div className="launch-container">
        <div className="launch-bar"></div>
      </div>
      <div>
        <button className="launch-button">Launch</button>
      </div>
    </div>
  )
}

export default App;