//A javaScript class that extends react component and return JSX by using render() method.

import { Component } from "react";

class Greeting extends Component {
  render() {
    return (
      <div>
        <h2>Hello,We are learning React</h2>
      </div>
    );
  }
}

export default Greeting;
