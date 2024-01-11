import wheel from "./imgs/ruleta.png"
import arrow from "./imgs/central.png"
import "./App.css"
import "./reset.css"
import { useRef } from "react"
import { useState } from "react"

function App(){
  const barRef = useRef(null);
  const buttonRef = useRef(null);
  const wheelRef = useRef(null);

  const [power, setPower] = useState(0)

  const stop = () => {
    barRef.current.classList.add("stop");
    setPower(power + barRef.current.offsetWidth * 10);
    buttonRef.current.setAttribute("disabled", !buttonRef.current.disabled)
  }

  const continueWheel = () => {
    barRef.current.classList.remove("stop")
    buttonRef.current.removeAttribute("disabled", !buttonRef.current.disabled)
    const style = window.getComputedStyle(wheelRef.current);
    const transform = style.getPropertyValue('transform');
    const matrix = transform.match(/^matrix\((.+)\)$/);
    
    const values = matrix[1].split(', ');
    const a = values[0];
    const b = values[1];
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    const degrees = ((angle < 0) ? angle + 360 : angle); //obtain the degrees

    console.log(degrees);

    if(0 <= degrees && degrees <= 44){
      console.log("Dead ")
    };

    if(45 <= degrees && degrees <= 89){
      console.log("+1 coin")
    };

    if(90 <= degrees && degrees <= 134){
      console.log("x2 coin and leave")
    };

    if(135 <= degrees && degrees <= 179){
      console.log("+8 coins")
    };

    if(180 <= degrees && degrees <= 224){
      console.log("Dead")
    };

    if(225 <= degrees && degrees <= 269){
      console.log("+5 coins")
    };

    if(270 <= degrees && degrees <= 314){
      console.log("x3 coins and leave")
    };

    if(315 <= degrees && degrees <= 359){
      console.log("+2 coins")
    };

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
        <button onClick={stop} ref={buttonRef} className="launch-button">Launch</button>
      </div>
    </div>
  )
}

export default App;