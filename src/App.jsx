import wheel from "./imgs/wheel.png";
import arrow from "./imgs/arrow.png";
import coin_img from "./imgs/coin.png";
import ticket_img from "./imgs/ticket.png";

import "./App.css"
import "./reset.css"
import { useRef } from "react"
import { useState } from "react"

function App(){
  const barRef = useRef(null);
  const buttonRef = useRef(null);
  const wheelRef = useRef(null);

  const [power, setPower] = useState(0)

  const [coins, setCoins] = useState(1);
  const [ticket, setTicket] = useState(1);

  const coins_list = [];
  for (let i = 0; i<coins; i++){
    coins_list.push(<img key={i} src={coin_img} alt="Coin" className="object coin" />)
  }

  const stop = () => {
    barRef.current.classList.add("stop");
    setPower(power + barRef.current.offsetWidth * 20);
    setTicket(0);
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

    if(0 <= degrees && degrees <= 44 || 180 <= degrees && degrees <= 224){
      //Loose
      setTicket(-1);
    };

    if(45 <= degrees && degrees <= 89){
      //+1 Coin
      setTicket(1);
      setCoins(coins + 1);
    };

    if(90 <= degrees && degrees <= 134){
      // X2 coins
      setTicket(-1);
      setCoins(coins * 2);
    };

    if(135 <= degrees && degrees <= 179){
      //+8 coins
      setTicket(1);
      setCoins(coins + 8);
    };

    if(225 <= degrees && degrees <= 269){
      //+5 Coins
      setTicket(1);
      setCoins(coins + 5);
    };

    if(270 <= degrees && degrees <= 314){
      //x3 Coins
      setTicket(-1);
      setCoins(coins * 3);
    };

    if(315 <= degrees && degrees <= 359){
      //+2 Coins
      setTicket(1);
      setCoins(coins + 2)
    };

  }

  const restartGame = () => {
    setCoins(1);
    setTicket(1);
    setFinishText(null);
  }
  

  return(
    <div className="container">
      <div className="objects">
        <div className="coins">
          <h2 className="object-text">Coins:</h2>
          <div className="coins-list">
            {
              coins_list.map((coin, i) => {
                return coin;
              })
            }
          </div>
        </div>

        <div className="tickets">
          <h2 className="object-text">Tickets:</h2>
          {
            ticket > 0 && <img src={ticket_img} alt="Ticket" className="object ticket" />
          }
        </div>
      </div>
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
      {
        ticket === -1 ? 
        <>
        <h3 className="finish-text">You lost, but you won {coins} coin/s</h3>
        <button className="button" onClick={restartGame}>Restart</button>
        </>
         :
        <>
          <div className="launch-text">
            <p>Click on "launch"</p>
          </div>
          <div className="launch-container">
            <div className="launch-bar animation-bar"
            ref={ barRef }></div>
          </div>
          <div>
            <button onClick={stop} ref={buttonRef} className="button">Launch</button>
          </div>
        </>
         
      }
      
    </div>
  )
}

export default App;