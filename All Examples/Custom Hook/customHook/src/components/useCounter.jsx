//useCounter is a custom hook.

//A custom hook is just a JavaScript function that Can call built-in React hooks like useState, useEffect, useContext and Always starts with the prefix use (like useCounter, useFetch).

import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0); //create a state variable with initial value 0.

  const handleIncrement = () => setCount(count + 1); //function that handles the increment.
  const handleDecrement = () => setCount(count - 1); //function that handles the decrement.
  const handleReset = () => setCount(0); //function that handles the Reset.

  return { count, handleIncrement, handleDecrement, handleReset }; //The hook returns an object containing count and the three functions.
}

export default useCounter;
