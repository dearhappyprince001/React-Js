// Ques: How can you update the state of a component in react?
//Ans: 1.In Function Components ----> by using useState Hook.
// 2.In Class Components -----> by using this.setState() Method provided by the Component class.

import { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <h3>Count:{this.state.count}</h3>
      </div>
    );
  }
}

export default Counter;
