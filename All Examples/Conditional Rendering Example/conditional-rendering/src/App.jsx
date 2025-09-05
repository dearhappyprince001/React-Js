import { useState } from "react";

function App() {
  // const isLoggedIn = true;

  //---->1.By using if-else.
  if (isLoggedIn) {
    return <h2>Welcome Back</h2>;
  } else {
    return <h2>Please Login</h2>;
  }

  //---->2.By using Ternary Operator.
  const isLoggedIn = false;
  return <h2>{isLoggedIn ? "Hello, User" : "Guest Mode"}</h2>;

  //---->3.By using Logical And Operator.
  const hasNotifications = true;
  return (
    <div>
      <h2>Dashboard</h2>
      {hasNotifications && <p>You have new notifications </p>}
    </div>
  );

  //---->4.By using Switch Case.
  const role = "admin"; // guest | user | admin
  switch (role) {
    case "admin":
      return <p>Admin Panel Access</p>;
    case "user":
      return <p>User Dashboard</p>;
    case "guest":
      return <p>Guest Access</p>;
    default:
      return <p>Unknown Role</p>;
  }
}

export default App;
