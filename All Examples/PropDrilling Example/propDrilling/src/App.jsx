//This is prop drilling → App → Child → GrandChild → Profile.

//App has User Data.
function App() {
  const user = { name: "Amit", role: "Developer", location: "Noida" };

  return (
    <div>
      <h1>Welcome to The App</h1>
      <Child user={user} />
    </div>
  );
}

//Child doesn’t need it but still passes it.
function Child({ user }) {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild user={user} />
    </div>
  );
}

//GrandChild also doesn’t need it but still passes it.
function GrandChild({ user }) {
  return (
    <div>
      <h3>Child Component</h3>
      <Profile user={user} />
    </div>
  );
}

//Finally, Profile actually uses it.
function Profile({ user }) {
  return (
    <div>
      <h4>Profile Component</h4>
      <p>Name:{user.name}</p>
      <p>Role:{user.role}</p>
      <p>Location:{user.location}</p>
    </div>
  );
}

export default App;
