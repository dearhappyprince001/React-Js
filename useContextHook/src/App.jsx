//Prop Drilling is a process of passing data from a parent component down through multiple layers of intermediate components until it reaches deeply nested child component that actually needs the data.

//useContext Hook is a solution to Prop Drilling problem.
//It allows you to share data across multiple components without having to pass props down manually at every level.

//In this example hierarchy is App -> ChildA -> ChildB -> ChildC. App.jsx is parent component and ChildA, ChildB, ChildC are child components,App.jsx is passing data to ChildC through ChildA and ChildB.

//So App is a Content Provider and ChildC is a Content Consumer.

import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

//Step1: Create a Context.
const UserContext = createContext();

//Step2: Wrap all the child inside a provider.   eg line no 28.
//Step3: Pass Value in Provider.    eg line no 27.
//Step4: Export the Context inside the parent Component.   eg line no 35.
//Step5: Consumer ke andar jakke consume krlo.

function App() {
  const [user, setUser] = useState({ name: "Ajay" }); //create a state variable with some data.

  // Step 2 & 3: Wrap children in Provider and pass value
  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext }; //Step4:export the context to use it in other components.
