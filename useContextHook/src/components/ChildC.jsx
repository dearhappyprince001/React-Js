import React, { useContext } from "react";
import { UserContext } from "../App";

const ChildC = () => {
  //consume the context.
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
};

export default ChildC;
