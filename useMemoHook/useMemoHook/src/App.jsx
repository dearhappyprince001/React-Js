//useMemo Hook is used for performance optimization by memorizing or cashing the result of an expensive computation or tasks or calculations. It prevents unnecessary recalculations of values on every component re-render,improving the efficiency of your Application.

import { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState(0);

  //Create a Expensive Task.
  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 10000000; i++) {}
    return num * 2;
  }

  // let doubleValue = expensiveTask(4);

  // let doubleValue = expensiveTask(input);

  //Create useMemo Hook it takes two arguments 1st is expensiveFunction,and 2nd is array of dependencies .
  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <div>Count:{count}</div>
      <br />
      <input
        type="number"
        placeholder="enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Double:{doubleValue}</div>
    </div>
  );
}

export default App;
