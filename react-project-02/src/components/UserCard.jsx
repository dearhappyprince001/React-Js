import React from "react";
import PrincePic from "../assets/prince image.jpeg";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container">
      <p id="user-name">{props.name}</p>
      <img id="user-image" src={PrincePic} alt="Happy" />
      <p id="user-description">{props.desc}</p>
    </div>
  );
};

export default UserCard;
