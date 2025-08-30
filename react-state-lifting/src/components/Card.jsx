//Card is a child component.
import React from "react";

const Card = (props) => {
  return (
    <div>
      {/* {props.name}//Accessing data from parent component using props. */}

      <input type="text" onChange={(e) => props.setName(e.target.value)} />

      <p>
        Name state variable ki value inside Card{props.title}:{props.name}
      </p>
    </div>
  );
};

export default Card;
