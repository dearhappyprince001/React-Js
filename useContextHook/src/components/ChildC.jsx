//ChildC is a Content Consumer .
//Hierarchy is App contains ChildA , ChildA contains ChildB , ChildB contains ChildC and ChildC is consuming the data from App using useContext Hook.

import React, { useContext } from "react";
import { UserContext } from "../App";

const ChildC = () => {
  const user = useContext(UserContext); //consume the context.
  return <div>{user.name}</div>;
};

export default ChildC;
