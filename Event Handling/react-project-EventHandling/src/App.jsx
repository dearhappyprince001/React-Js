import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //1st way.
  function handleClick() {
    alert("I am Clicked");
  }

  function handleMouseOver() {
    alert("Paragraph ke uppar mouse lekar aaye ho");
  }

  function handleInputChange() {
    console.log("Input mein value change hui hai");
  }
  return (
    <div>
      <button onClick={handleClick}>Click ME</button>
      <br />
      <br />
      //2nd way.
      <button
        onClick={() => {
          alert("I got Clicked");
        }}
      >
        Click Me 2
      </button>
      <br />
      <br />
      <p onMouseOver={handleMouseOver} style={{ border: "1px solid black" }}>
        I m inside the para
      </p>
      <br />
      <br />
      <form>
        <input type="text" onChange={handleInputChange} />
      </form>
    </div>
  );
}

export default App;
