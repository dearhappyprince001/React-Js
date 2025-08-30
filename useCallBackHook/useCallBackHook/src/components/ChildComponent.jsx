import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("Child Component go re-render again");

  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  );
});

export default ChildComponent;

//Note: 1.
// React.memo() --> wrap--->component--->component re-render tabhi hoga jab props change honge nhi toh re-render nhi hoga.

//2.If you are sending a function,then react.memo() won't be able to save you from re-rendering.
