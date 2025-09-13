import { useState } from "react";
import Child from "./components/Child";

function App() {
  const [message, setMessage] = useState("");

  //callback function that will be passed to child.
  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Data from Child:{message}</h1>
      <Child sendDataToParent={handleChildData}></Child>
    </div>
  );
}

export default App;
