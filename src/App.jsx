import wheel from "./imgs/ruleta.png"
import arrow from "./imgs/central.png"
import "./App.css"
import "./reset.css"
import { useState } from "react"

function App(){

  const [len, setLen] = useState(240)

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
          "--len": `${len}px` 
        }}></div>
      </div>
      <div>
        <button className="launch-button">Launch</button>
      </div>
    </div>
  )
}

export default App;