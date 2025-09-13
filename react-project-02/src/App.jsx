//App.jxs is the parent component of UserCard component. It is the main component of the application.

import UserCard from "./components/UserCard"; //importing UserCard component

function App() {
  return (
    <div className="container">
      <UserCard name="happy" desc="desc1" style={{ "border-radius": "30px" }} />
      <UserCard name="Raju" desc="desc2" style={{ "border-radius": "30px" }} />
      <UserCard
        name="Prince"
        desc="desc3"
        style={{ "border-radius": "30px" }}
      />
      <UserCard name="Suraj" desc="desc4" style={{ "border-radius": "30px" }} />
    </div>
  );
}

export default App;
