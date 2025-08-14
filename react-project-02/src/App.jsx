import UserCard from "./components/UserCard";
function App() {
  return (
    <div className="container">
      <UserCard name="happy" desc="desc1" />
      <UserCard name="Raju" desc="desc2" />
      <UserCard name="Prince" desc="desc3" />
    </div>
  );
}

export default App;
