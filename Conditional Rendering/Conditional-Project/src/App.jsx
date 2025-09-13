import { useState } from "react";
import "./App.css";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //create a state variable with initial value true.

  //we can perform conditional rendering by several ways in react.

  //1. Using if-else statement
  // if (isLoggedIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }

  //2. Using ternary operator
  // return <div>{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</div>;

  //3. Using logical operator
  // return (
  //   <div>
  //     <h1>Welcome in React</h1>
  //     <div>{isLoggedIn && <LogoutBtn />}</div>
  //   </div>
  // );

  //4. Using early return
  // if (!isLoggedIn) {
  //   return <LoginBtn />;
  // }
  // return <LogoutBtn />;
}

export default App;
