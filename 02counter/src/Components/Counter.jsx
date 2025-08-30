//Hooks in React is a powerful feature that allows you to use state and other React features without writing a class.

//Hook is just a utility using which we can hook on to the React features like state, lifecycle methods, etc.

// In this example, we will create a simple counter component using the useState hook.

import React, { useState } from "react";
import "./Counter.css";

//UseState is a Hook that lets you add React state to function components.
//It returns an array with two elements: the current state value and a function to update it.
// count = the current state or state variable,
// setCount = function to update the state or state Function.
//and initial value is set to 0.
const Counter = () => {
  const [count, setCount] = useState(0); //create a useState hook with an initial value of 0
  return (
    <div className="counter-container">
      <p id="para">You have clicked {count} Times</p>
      <button
        id="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Counter;
