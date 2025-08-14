import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

//Step1: Create a Context.
const UserContext = createContext();

//Step2: Wrap all the child inside a provider.   eg line no 18.
//Step3: Pass Value in Provider.    eg line no 17.
//Step4: Export the Context inside the parent Component.   eg line no25.
//Step5: Consumer ke andar jakke consume krlo.

function App() {
  const [user, setUser] = useState({ name: "Ajay" });
  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
