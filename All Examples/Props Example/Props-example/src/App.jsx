import { useState } from "react";

import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Greeting name="Varnit" age={22} location="Delhi" salary={5000} />
    </div>
  );
}

export default App;
