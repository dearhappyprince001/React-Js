//App is the parent component.
//Card is the child component.

import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  //create state.
  //manage state.
  //change state.
  //sabhi child ki state ko sync karwadunga.

  //Parents takes the responsibility of managing the state,creating the state and changing the state,and sync the state between the child components.

  const [name, setName] = useState(""); //create a state variable with initial value is empty.

  return (
    <div>
      {/* <Card name="Harsh" />  //Passing data from parent to child using props. */}

      {/* Sibling component ke beech mein data share karwana hai toh humein state
      lifting karni padti hai, matlab data ko sync karwana padta hai,sync ka
      matlab hai ki dono component mein same data dikhana hai.  */}

      <Card title="card 1" name={name} setName={setName} />
      <Card title="card 2" name={name} setName={setName} />
      {/* <p>I am inside the Parent Component and value of name is: {name}</p> */}
    </div>
  );
}

export default App;
