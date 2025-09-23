//key attribute is a special property used to  identifies each item uniquely when the list Re-render.

// function FruitList() {
//   const fruits = ["Apple", "Banana", "Cherry"];
//   return (
//     <ul>
//       {fruits.map((fruit) => (
//         <li key={fruit}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }
// export default FruitList;

//---------------->OR--------------------->
//Example2.

function FruitList() {
  const fruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Cherry", color: "Red" },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <strong>{fruit.name}</strong> - {fruit.color}
        </li>
      ))}
    </ul>
  );
}

export default FruitList;
