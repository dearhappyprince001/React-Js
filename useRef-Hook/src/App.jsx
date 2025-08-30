import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  //CAse1: Jab hum normal variable create krte hai toh uski persist nhi krti across the rerender but jab hum useRef se variable create karte hai toh uski value persist krti hai across the rerender.

  //Note:Jab bhi state-Variable-->change hota hai--->toh vo re-render krvata hai UI ko lekin,
  //Jab useRef-Variable--->change hota hai--->toh vo Koi re-render nhi krvata hai UI ko.

  //  let val = 1;//Create a Normal Variable

  let val = useRef(0); //Create a variable using useRef.

  let btnRef = useRef(); //1.create a Reference.

  //function to handle the onClick event.
  function handleIncrement() {
    // val = val + 1;
    val.current = val.current + 1;
    console.log("Value of val:", val);
    setCount(count + 1);
  }

  //It will run on every render.
  useEffect(() => {
    console.log("mein ferse render hogya hun");
  });

  function changeColor() {
    btnRef.current.style.backgroundColor = "red"; //3.change the Reference.
  }

  return (
    <div>
      {/* 2.link the Reference with the help of red attribute */}
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={changeColor}>Change Color of 1st Button</button>
      <br />
      <br />
      <div>Count:{count}</div>
    </div>
  );
}

export default App;
