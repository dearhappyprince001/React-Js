//Props (short for properties) is a way to send or transfer the data from parent component to its child component.Props are immutable and Props can not be modified by the child components.

const Greeting = (props) => {
  return (
    <div>
      <h1>
        Hello,my name is {props.name} and I am {props.age} years old,and I lives
        in {props.location} and my salary is {props.salary}
      </h1>
    </div>
  );
};

export default Greeting;
