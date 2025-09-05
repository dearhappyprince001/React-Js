import React from "react";

//This is prop drilling → App → Parent → Child → Profile.

//App has User Data.
function App() {
  const user = { name: "Amit", role: "Developer" };

  return (
    <div>
      <h1>Welcome to The App</h1>
      {/* Passing user down through Parent */}
      <Parent user={user} />
    </div>
  );
}

//Parent doesn’t need it but still passes it.
function Parent({ user }) {
  return (
    <div>
      <h2>Parent Component</h2>
      {/* Passing user down to Child */}
      <Child user={user} />
    </div>
  );
}

//Child also doesn’t need it but still passes it.
function Child({ user }) {
  return (
    <div>
      <h3>Child Component</h3>
      {/* Passing user down to Profile */}
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
    </div>
  );
}

export default App;
