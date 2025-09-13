function App() {
  // Normal function that handles the handleClick on Second Button.
  function handleClick() {
    alert("Button clicked by using normal function");
  }

  //By using Named Function.
  const handleClicked = () => {
    alert("Button clicked by using named Function");
  };

  return (
    <div>
      <h2>Here, We are learning how events handling works in react</h2>
      <br />
      {/* 1.we can perform event handling by using Inline Event Handling like this. */}
      <button
        onClick={() => alert("Button Clicked by using Inline Event Handling")}
      >
        Click ME 1
      </button>
      <br />
      <br />
      {/* 2.we can also perform Event Handling by using normal Function like this. */}
      <button onClick={handleClick}>Click Me 2</button>
      <br />
      <br />
      {/* 3.we can also performs Event Handling by using named Function like this */}
      <button onClick={handleClicked}>Click Me 3</button>
    </div>
  );
}

export default App;
