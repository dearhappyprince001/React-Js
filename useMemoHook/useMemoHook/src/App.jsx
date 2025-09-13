//useMemo Hook is used for performance optimization by memorizing or cashing the result of an expensive computation or tasks or calculations. It prevents unnecessary recalculations of values on every component re-render,improving the efficiency of your Application.

//if you have any expensive calculations (like any task or operation that takes a lot of time,resources,memory) then useMemo saves performance by reusing the last computed result instead of recalculating it each time.

import { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState(0);

  //Create a Expensive Task.
  function expensiveTask(num) {
    console.log("Calculating...");
    for (let i = 0; i <= 1000000000; i++) {} //heavy hoop.
    return num * 2;
  }
  // let doubleValue = expensiveTask(4); //call the function.

  //let doubleValue = expensiveTask(input); //call the function.

  //Create useMemo Hook it takes two arguments 1st is expensiveFunction,and 2nd is array of dependencies .
  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <h4>Count:{count}</h4>
      <br />
      <input
        type="number"
        placeholder="enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <h4>Double:{doubleValue}</h4>
    </div>
  );
}

export default App;
