import { useCallback, useState } from "react";

import "./App.css";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  //Note : when ever the parent component re-render because count value is updated then the function re-create so to freeze the function we use  useCallBack hook.
  //create a function that handles the Increment.
  // function handleClick() {
  //   setCount(count + 1);
  // }

  //To prevent from re-create the function we need to freeze the function.
  //Step1:We can convert the normal function to Arrow Function.
  // const handleClick = () => {
  //   setCount(count + 1);
  // };
  //Step2. Wrap the function into callBack.
  //Note:if we use empty dependency which means that function never re-created.
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

      {/* Parent component contains child component and this child component re-render unnecessarily so to prevent from re-render the child component we need to wrap child component with React.memo(). */}
      <div>
        <ChildComponent buttonName="Click ME" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
