//Components in React is a reusable piece of code that represents a part of the user interface.

//Components can be functional or class-based. Here we are creating a functional component named UserCard.

//Note: component is write down into a single root tag like div tag. mtlb ek single root tag ke andar sara code hona chahiye,multiple tag nahi chalenge.

//Props in React is a way to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component.

//UserCard.jsx is a child component of App.jsx. It is used to display user information like name, image, and description.

//{} curly braces are used to access the props data in the component.

import React from "react";
import PrincePic from "../assets/prince image.jpeg"; //import image file
import "./UserCard.css"; //import component specific css file

//Props received data from App.jsx and displayed in UserCard component
const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <p id="user-name">{props.name}</p>
      <img id="user-image" src={PrincePic} alt={props.name} />
      <p id="user-description">{props.desc}</p>
    </div>
  );
};

export default UserCard; //exporting UserCard component
