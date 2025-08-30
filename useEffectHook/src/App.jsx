//useEffect Hook is used to perform side effects in functional components.
//Some examples of side effects are: fetching data, directly updating the DOM, and timers,subscriptions,Database Connection .
//useEffect is written at the top of the component function.

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //count and total both are state variable.
  const [count, setCount] = useState(0); //initial value is 0.
  const [total, setTotal] = useState(1); //initial value is 1.

  // ----->Syntax of useEffect Hook.

  //first ----> side-Effect Function.
  //second ---> clean-up Function.
  //third ---> [] comma separated dependencies list.
  // useEffect(() => {
  //   First;

  //   return () => {
  //     Second;
  //   };
  // }, [third]);

  //VARIATION:1 ---> That Runs on every render.
  //When there is no second argument(dependency array) passed to useEffect.
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  //VARIATION:2 ---> That Runs on only First Render.
  //when there is no dependency in an array it means an empty array[].
  // useEffect(() => {
  //   alert("I will run only first Render");
  // }, []);

  //VARIATION:3 ---> It runs when the dependency is updated.
  //When only one dependency in array.
  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count]);

  //VARIATION:4 ---> It runs when any of the dependencies is updated.
  //when multiple dependencies in an array.
  // useEffect(() => {
  //   alert(" I will run every time when count/total is updated");
  // }, [count, total]);

  //variation:5 ---> now adds a clean up function.
  //it runs when the component is unmounted from the UI.
  useEffect(() => {
    alert("Count is Updated"); //side-effect function.
    return () => {
      alert("Count is unmounted From UI"); //clean-up function.
    };
  }, [count]); //dependency array.

  //Function to update the count state variable.
  function handleClick() {
    setCount(count + 1);
  }

  //Function to update the total state variable.
  function handleClickTotal() {
    setTotal(total + 1);
  }

  return (
    <div>
      {/* Hello Jee */}
      <br />
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
