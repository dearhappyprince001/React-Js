import { useCallback, useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  //Normal Function that causes the re-creation of function.
  // function handleIncrement() {
  //   console.log("Function is re-created each time when the count is updated");
  //   setCount(count + 1);
  // }

  //To prevent from the re-creation of function we use useCallback Hook.
  //jab hum empty dependencies pass krte hai toh function toh freez ho jayega lekin count ki value bhi freeze ho gayegi.

  // const handleIncrement = useCallback(() => {
  //   console.log(
  //     "Function do not re-created each time when the count is updated and also count value is also freeze"
  //   );

  //   setCount(count + 1);
  // }, []); //empty dependency means function never re-created.

  //lekin agar hum chahte hai ki function toh freeze hi rhe lekin count ki value increase hoti rhe toh .

  const handleIncrement = useCallback(() => {
    console.log("Function do not re-created but count value is increased");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
