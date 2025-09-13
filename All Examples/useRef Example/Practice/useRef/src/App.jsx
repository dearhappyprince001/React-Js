import { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0); //create a state variable.

  //when we create a normal variable then it will initialized again on re-render.
  // let val = 1;

  // function handleIncrement() {
  //   val = val + 1;
  //   console.log("Value Of Val: ", val);
  //   setCount(count + 1);
  // }

  //when we create a variable using useRef then it will not initialized again on re-render.
  let val = useRef(0); //create a variable using useRef.

  let btnRef1 = useRef(); //create a Reference.
  let btnRef2 = useRef(); //create a second Reference.

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val:", val.current);
    setCount(count + 1);
    btnRef2.current.style.backgroundColor = "Purple";
    btnRef2.current.style.border = "4px dotted green";
    btnRef2.current.style.color = "red";
  }

  useEffect(() => {
    console.log("I will run on every render");
  });

  function changeColor() {
    btnRef1.current.style.backgroundColor = "red";
    btnRef1.current.style.border = "2px solid blue";
    btnRef1.current.style.color = "black";
  }

  return (
    <div>
      <button ref={btnRef1} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <h4>Count:{count}</h4>
      <br />
      <button ref={btnRef2} onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}
export default App;
