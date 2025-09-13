import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  //let val = 1;//normal variable

  let val = useRef(0); //create a useRef variable.

  let btnRef = useRef(); //create a reference for manipulating the dom element.

  function handleIncrement() {
    //val = val + 1; //increase the value of normal variable.
    val.current = val.current + 1; //increase the value of useRef variable.
    //console.log("Value of val:", val);//access the value of normal variable.
    console.log("Value of val:", val.current); //access the value of useRef variable.

    setCount(count + 1);
  }

  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  //Create a useEffect Hook.
  useEffect(() => {
    console.log("I will run on every render");
  });

  return (
    <div>
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <h3>Count:{count}</h3>
      <br />
      <button onClick={changeColor}>Change color of first button</button>
    </div>
  );
}
export default App;
