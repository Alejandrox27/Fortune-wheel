import wheel from "./imgs/ruleta.png"
import arrow from "./imgs/central.png"
import "./App.css"

function App(){
  return(
    <div className="wheel-container">
      <img className="wheel animation" src={wheel}></img>
      <img className="arrow" src={arrow}></img>
    </div>
  )
}

export default App;