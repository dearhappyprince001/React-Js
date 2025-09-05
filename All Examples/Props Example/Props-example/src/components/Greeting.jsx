import React from "react";

const Greeting = (props) => {
  return (
    <div>
      <h1>
        Hello,my name is {props.name} and I am {props.age} years old,and I lives
        in {props.location} and my salary is {props.salary}
      </h1>
    </div>
  );
};

export default Greeting;
