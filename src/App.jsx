import wheel from "./imgs/ruleta.png"
import arrow from "./imgs/central.png"
import "./App.css"
import "./reset.css"
import { useRef } from "react"
import { useState } from "react"

function App(){
  const barRef = useRef(null);
  const wheelRef = useRef(null);

  const [power, setPower] = useState(10)

  const stop = () => {
    barRef.current.classList.toggle("stop");
    setPower(barRef.current.offsetWidth * 10);
  }

  return(
    <div className="container">
      <div className="wheel-container">
        <img className="wheel" style={{
          "--power": power,
          transform: `rotate(${power}deg)`,
          transition: "transform 3s cubic-bezier(0.2,0.8,0.7,0.99)"
        }} src={wheel}
        ref={ wheelRef }></img>
        <img className="arrow" src={arrow}></img>
      </div>
      <div className="launch-text">
        <p>Click on "launch"</p>
      </div>
      <div className="launch-container">
        <div className="launch-bar animation-bar"
        style={{
          "--len": `240px`,
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