import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1); //counter=variable,setCounter=function.

  // let counter = 1;

  //function.
  const addValue = () => {
    //console.log("value added", Math.random());
    // console.log("clicked", Math.random());
    // console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  };

  //function.
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <di>
      <h1>chai or react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </di>
  );
}

export default App;
