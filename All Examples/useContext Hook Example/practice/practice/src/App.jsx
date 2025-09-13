import { createContext, useContext } from "react";

//1.create a context.
const UserContext = createContext();

function App() {
  const user = { name: "Amit", age: 25, location: "Noida" };

  return (
    //2.Provide context to children.
    <div>
      <UserContext.Provider value={user} />
      <h4>App Component</h4>
      <Child />
      <UserContext />
    </div>
  );
}

function Child() {
  return (
    <div>
      <h4>Child Component</h4>
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  return (
    <div>
      <h4> GrandChild Component</h4>
      <Profile />
    </div>
  );
}

function Profile() {
  //3.consume the context.
  const user = useContext(UserContext);
  return (
    <div>
      <h4>Profile Component</h4>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
  );
}

export default App;
