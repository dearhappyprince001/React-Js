import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //count and total both are state variable.
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // ----->Syntax of useEffect Hook.

  //first ----> side-Effect Function.
  //second ---> clean-up Function.
  //third ---> comma separated dependencies list.
  // useEffect(() => {
  //   First;

  //   return () => {
  //     Second;
  //   };
  // }, [third]);

  //VARIATION:1 ---> That Runs on every render.
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  //VARIATION:2 ---> That Runs on only First Render.
  //when there is no dependency in an array it means an empty array[].
  // useEffect(() => {
  //   alert("I will run only first Render");
  // }, []);

  //VARIATION:3 --->
  //When only one dependency in array.
  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count]);

  //VARIATION:4
  //when multiple dependencies in an array.
  // useEffect(() => {
  //   alert(" I will run every time when count/total is updated");
  // }, [count, total]);

  //variation:5
  //now adds a clean up function
  useEffect(() => {
    alert("Count is Updated");
    return () => {
      alert("Count is unmounted From UI");
    };
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickTotal() {
    setTotal(total + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Update Count</button>
      <br />
      Count is: {count}
      <br />
      <br />
      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      Total is : {total}
    </div>
  );
}

export default App;
