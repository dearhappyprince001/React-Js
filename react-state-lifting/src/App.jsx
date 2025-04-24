import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  //create state.
  //manage state.
  //change state.
  //sabhi child ki state ko sync karwadunga.

  const [name, setName] = useState("");

  return (
    <div>
      <Card title="card 1" name={name} setName={setName} />
      <Card title="card 2" name={name} setName={setName} />

      {/* <p>I am inside the Parent Component and value of name is: {name}</p> */}
    </div>
  );
}

export default App;
