import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0); //create a state variable.

  //CASE1: Jab hum normal variable create krte hai toh uski value persist nhi krti across the rerender but jab hum useRef se variable create karte hai toh uski value persist krti hai across the rerender.

  //Note:Jab bhi state-Variable-->change hota hai--->toh vo re-render krvata hai UI ko lekin,
  //Jab useRef-Variable--->change hota hai--->toh vo Koi re-render nhi krvata hai UI ko.

  //useRef hook return a ref object with a .current value.

  //let val = 1; //Create a Normal Variable

  let val = useRef(0); //Create a variable using useRef.

  //----->For Dom Manipulation.
  let btnRef1 = useRef(); //create the Reference for first button.

  let btnRef2 = useRef(); //create the second reference for second button.

  //function to handle the onClick event.
  function handleIncrement() {
    //val = val + 1; //increase the value of variable in case of normal variable.
    val.current = val.current + 1; //increase the value of variable in case of using useRef.
    //console.log("Value of val:", val); //print the value of normal variable.
    console.log("Value of val:", val.current); //print the value of useRef variable.
    setCount(count + 1);
    btnRef2.current.style.color = "orange"; //it changes the color of second button when first button is clicked.
  }

  //It will run on every render.
  useEffect(() => {
    console.log("mein ferse render hogya hun");
  });

  function changeColor() {
    btnRef1.current.style.backgroundColor = "red"; //It changes the background color of first button when second button is clicked.
  }

  return (
    <div>
      {/* 2.link the Reference with the help of ref attribute  or connect it to the button*/}
      {/* 1st Button */}
      <button ref={btnRef1} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      {/* 2nd Button */}
      <button ref={btnRef2} onClick={changeColor}>
        Change Color
      </button>
      <br />
      <br />
      <div>Count:{count}</div>
    </div>
  );
}

export default App;
