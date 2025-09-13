import React, { useState } from "react";

function DarkMode() {
  const [dark, setDark] = useState(false);

  //function that handles the toggle.
  function handleTheme() {
    setDark(!dark);
  }

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        padding: "100px",
      }}
    >
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={handleTheme}>Toggle Mode</button>
    </div>
  );
}

export default DarkMode;
