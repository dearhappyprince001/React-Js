import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext); //Step5: Consume the context value in the child component.

  //Function to toggle theme.
  function handleClick() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <div>
      <button onClick={handleClick}>Change Theme</button>
      <br />
      {/* {theme} */}
    </div>
  );
};

export default ChildC;
