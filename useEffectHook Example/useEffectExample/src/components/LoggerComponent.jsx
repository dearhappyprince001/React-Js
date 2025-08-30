import { useState, useEffect } from "react";

function LoggerComponent() {
  const [count, setCount] = useState(0); //create a state variable with initial value 0.

  //Variation1:It runs on every render.
  //when there is no dependencies array.
  useEffect(() => {
    alert("Component rendered or count changed:", count);
  });

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LoggerComponent;
