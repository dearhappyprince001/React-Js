import useCounter from "./components/useCounter";

//App calls the useCounter(0) and Receives count,handleIncrement, handleDecrement, handleReset in {} insteadOf [].
function App() {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCounter(0);

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <h4>Count:{count}</h4>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
