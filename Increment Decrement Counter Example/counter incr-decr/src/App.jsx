import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //function that handles Increment.
  function handleIncrement() {
    setCount(count + 1);
  }

  //function that handles the Decrement.
  function handleDecrement() {
    //Prevent going below 0.
    if (count > 0) {
      setCount(count - 1);
    }
  }

  //function that handles the Reset.
  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
