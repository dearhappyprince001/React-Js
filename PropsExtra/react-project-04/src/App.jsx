import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
function App() {
  const [count, setCount] = useState(0); //create a state variable.

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button handleClick={handleClick} text="Click Me">
        <h1>{count}</h1>
      </Button>

      {/* <Card name="Happy Prince">
        <h1>Best Web Dev course.</h1>
        <p>Trying to be consistent in this.</p>
        <p>Will complete the course soon. </p>
      </Card>
      <card children="Mein ek children hoon">Hello Jee Kaise ho sare</card> */}
    </div>
  );
}

export default App;
