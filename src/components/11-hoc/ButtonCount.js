import React, { Component } from "react";
import { initialCounter } from "./InitialCounter";

export class ButtonCount extends Component {
  render() {
    const {count, increment} = this.props;
    return (
      <div>
        <button onClick={increment}>Click Me</button>
        <span>{count}</span>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default initialCounter(ButtonCount);
