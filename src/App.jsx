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
    barRef.current.classList.add("stop");
    setPower(power + barRef.current.offsetWidth * 10);
  }

  const continueWheel = () => {
    barRef.current.classList.remove("stop")
    const style = window.getComputedStyle(wheelRef.current);
    const transform = style.getPropertyValue('transform');
    const matrix = transform.match(/^matrix\((.+)\)$/);
    
    const values = matrix[1].split(', ');
    const a = values[0];
    const b = values[1];
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    const degrees = ((angle < 0) ? angle + 360 : angle); //obtain the degrees

    console.log(degrees);

    //TODO: do validations with the degrees
    }
  

  return(
    <div className="container">
      <div className="wheel-container">
        <img className="wheel" 
        style={{
          "--power": power,
          transform: `rotate(${power}deg)`,
          transition: "transform 3s cubic-bezier(0.2,0.8,0.7,0.99)"
        }} 
        onTransitionEnd={continueWheel}
        src={ wheel }
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