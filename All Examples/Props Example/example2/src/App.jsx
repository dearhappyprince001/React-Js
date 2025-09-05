import { useState } from "react";

import "./App.css";
import UserInfo from "./component/UserInfo";

function App() {
  const userName = "Amit Pratap";
  const userAge = 24;
  const userLocation = "delhi";

  return (
    <div>
      <UserInfo
        name={userName}
        age={userAge}
        location={userLocation}
        isLoggedIn={true}
      />
    </div>
  );
}

export default App;
