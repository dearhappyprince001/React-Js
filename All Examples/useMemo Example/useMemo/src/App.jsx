import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Calculating...");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  //let doubleValue = expensiveTask(4);

  //let doubleValue = expensiveTask(input);

  let doubleValue = useMemo(() => expensiveTask(input), [input]); //create a useMemo hook.

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>Count:{count}</h3>
      <br />
      <input
        type="number"
        placeholder="enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Double:{doubleValue}</h3>
    </div>
  );
}

export default App;
