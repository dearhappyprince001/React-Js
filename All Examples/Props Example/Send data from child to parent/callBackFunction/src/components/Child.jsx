function Child(props) {
  const data = "Hello Parent! I am your Child.";

  return (
    <div>
      <button onClick={() => props.sendDataToParent(data)}>
        Send Data to Parent
      </button>
    </div>
  );
}

export default Child;
