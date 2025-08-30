import { useCallback, useState } from "react";

import "./App.css";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  //To prevent from re-create the function we need to freeze the function.
  //Step1:We can convert the normal function to Arrow Function.
  // const handleClick = () => {
  //   setCount(count + 1);
  // };
  //Step2. Wrap the function into callBack.
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div>Count:{count}</div>
      <br />
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br />
      <br />

      <div>
        <ChildComponent buttonName="Click ME" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
