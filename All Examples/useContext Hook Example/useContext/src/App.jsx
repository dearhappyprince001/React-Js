import React, { createContext, useContext } from "react";

//Step1: Create Context.
const UserContext = createContext();

function App() {
  const user = { name: "Suraj", role: "Developer" };

  return (
    //Step2:Provide Context.
    <UserContext.Provider value={user}>
      <div>
        <h1>Welcome to the App</h1>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child />
    </div>
  );
}

function Child() {
  return (
    <div>
      <h3>Child Component</h3>
      <Profile />
    </div>
  );
}

function Profile() {
  //Step3.Consume Context.
  const user = useContext(UserContext);
  return (
    <div>
      <h4>Profile Component</h4>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default App;
