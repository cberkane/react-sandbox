import React, { Component } from "react";
import { GreetButton } from "./GreetButton";

export class GreetParent extends Component {
  /**
   * Define a method in parent component
   */
  parentGreet = (event) => {
    console.log("Im a method as a prop");
    console.log("event", event);
  };

  /**
   * Give it as a prop to child component
   */
  render() {
    return <GreetButton greet={this.parentGreet} />;
  }
}

export default GreetParent;
