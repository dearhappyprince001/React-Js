import { useState } from "react";
import "./App.css";
import LoginBtn from "./components/LoginBtn";
import LogOutBtn from "./components/LogOutBtn";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  //---->1. by using If-Else

  // if (isLoggedIn) {
  //   return <LogOutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }

  //---->2. by using Ternary Operator

  // return <div>{isLoggedIn ? <LogOutBtn /> : <LoginBtn />}</div>;

  //---->3. by using Logical Operator.

  return (
    <div>
      <h2>Hello we are learning ReactJS</h2>
      <div>{isLoggedIn && <LogOutBtn />}</div>
    </div>
  );
}

export default App;
