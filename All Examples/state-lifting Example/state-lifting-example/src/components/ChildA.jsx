function ChildA({ input, setInput }) {
  return (
    <div>
      <h3>Child A</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default ChildA;
