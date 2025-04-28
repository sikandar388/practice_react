import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(8);

  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      setCounter(preCounter => preCounter + 1);
      setCounter(preCounter => preCounter + 1);
      setCounter(preCounter => preCounter + 1);
      setCounter(preCounter => preCounter + 1);
    }
  };
  function subtractValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Current Value : {counter} </h2>
      <button onClick={addValue}>Add Number... {counter}</button>
      <br />
      <button onClick={subtractValue}>Subtract Number... {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
