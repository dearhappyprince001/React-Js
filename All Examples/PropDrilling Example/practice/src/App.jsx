//create a parent component App.

function App() {
  const user = { name: "Suraj", age: 22, location: "Delhi" };

  return (
    <div>
      <h3>App Component</h3>
      <Parent user={user} />
    </div>
  );
}

function Parent({ user }) {
  return (
    <div>
      <h3>Parent Component</h3>
      <Child user={user} />
    </div>
  );
}

function Child({ user }) {
  return (
    <div>
      <h3>Child Component</h3>
      <Profile user={user} />
    </div>
  );
}

function Profile({ user }) {
  return (
    <div>
      <h3>Profile Component</h3>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Location:{user.location}</p>
    </div>
  );
}

export default App;
