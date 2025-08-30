import { useState } from "react";
import "./App.css";

function App() {
  //1st way.
  //function to handle the click event.
  function handleClick() {
    alert("I am Clicked");
  }

  //function to handle mouse over event.
  function handleMouseOver() {
    alert("Paragraph ke uppar mouse lekar aaye ho");
  }

  //function to handle input change event.
  function handleInputChange() {
    alert("Input mein value change hui hai");
    //------------>OR
    // console.log("Input mein value change hui hai");
  }

  //function to handle form submit event.
  function handleSubmit(e) {
    e.preventDefault(); //to prevent the default behaviour of form like reloading the page, etc.
    alert("Form Submitted");
  }

  return (
    <div>
      {/* 1st way by using inline Function */}
      <button onClick={handleClick}>Click ME</button>
      <br />
      <br />
      {/* 2nd way by using Arrow function */}
      <button
        onClick={() => {
          alert("I got Clicked");
        }}
      >
        Click Me 2
      </button>
      <br />
      <br />
      {/* 3rd way by using Inline function with css property */}
      <p
        onMouseOver={handleMouseOver}
        style={{ color: "red", border: "1px solid black" }}
      >
        I m inside the paragraph
      </p>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      {/* 4th way by directly calling the function which is known as Immediate invocation (Not Recommended)  */}
      <button onClick={alert("Immediate Invocation")}>Click Me</button>
      <br />
      <br />
      {/* To handle the immediate invocation we use arrow function. */}
      <button onClick={() => alert("Button Click hua hai ")}>Click Me</button>
    </div>
  );
}

export default App;
