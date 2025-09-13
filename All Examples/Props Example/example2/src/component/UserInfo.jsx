const UserInfo = (props) => {
  return (
    <div>
      <h4>Name:{props.name}</h4>
      <h4>Age:{props.age}</h4>
      <h4>Location:{props.location}</h4>
      <p>Status:{props.isLoggedIn ? "Online" : "Offline"}</p>
    </div>
  );
};

export default UserInfo;
