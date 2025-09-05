import { useState } from "react";
import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";

function App() {
  const [input, setInput] = useState("");
  return (
    <div>
      <ChildA input={input} setInput={setInput} />
      <ChildB input={input} />
    </div>
  );
}

export default App;
