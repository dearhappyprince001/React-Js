import { createContext, useState } from "react";
import ChildA from "./Components/ChildA";
import "./App.css";

//Step1: Create a Context in the parent component.
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  //Step2&3 :Wrap all the Childs inside a provider and pass the value to be shared.
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
        <br />
        <br />
        {/* <ChildA /> */}
      </ThemeContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext }; //Step4: Export the context to be used in other components.

//Note : we can create multiple context and use them in the same component.
//eg:
// const UserContext = createContext();
// const ChannelContext = createContext();
// <UserContext.Provider value={"user"}>
// <ChannelContext.Provider value={"channel"}>
