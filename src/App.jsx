import wheel from "./imgs/ruleta.png"
import arrow from "./imgs/central.png"
import "./App.css"
import "./reset.css"
import { useRef } from "react"

function App(){
  const barRef = useRef(null);

  const stop = () => {
    barRef.current.classList.toggle("stop");
  }

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
        <div className="launch-bar animation-bar"
        style={{
          "--len": `240px` 
        }}
        ref={ barRef }></div>
      </div>
      <div>
        <button onClick={stop} className="launch-button">Launch</button>
      </div>
    </div>
  )
}

export default App;