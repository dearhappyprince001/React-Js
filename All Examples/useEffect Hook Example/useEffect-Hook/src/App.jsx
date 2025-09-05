import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  //---->First Variation.
  //It will run on every Render when there is no dependencies .
  // useEffect(() => {
  //   alert("I will run on every Render");
  // });

  //---->Second Variation.
  //It will runs only on first Render when there is an empty dependencies Array.
  // useEffect(() => {
  //   alert("I will run only on first Render");
  // }, []);

  //---->Third Variation.
  //It will Run each time when dependencies is updated.
  // useEffect(() => {
  //   alert("I will run when the Count is updated");
  // }, [count]);

  //---->Fourth Variation.
  //We can add Multiple Dependencies in An array.
  //It will render when any of dependencies is updated.
  // useEffect(() => {
  //   alert("I will Run when count/total is Update");
  // }, [count, total]);

  //---->Fifth Variation.
  //when we add a clean up function.
  //It will Runs when element is unmounted from UI.
  // useEffect(() => {
  //   alert("Count is Update");
  //   return () => {
  //     alert("Count is unmounted from UI");
  //   };
  // }, [count]);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleTotal() {
    setTotal(total + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>Update Count</button>
      <br />
      <h4>Count:{count}</h4>
      <br />
      <button onClick={handleTotal}>Update Total</button>
      <br />
      <h4>Total:{total}</h4>
    </div>
  );
}

export default App;
