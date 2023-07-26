import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import { Counter } from "./components/Counter";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks((prev) => prev + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="freeCodeCampo Logo"
        />
      </div>

      <div className="contenedor-principal">
        <Counter numClicks={numClicks} />
        <Button text="Click" isButtonClick={true} handleClick={handleClick} />
        <Button text="Reset" isButtonClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
