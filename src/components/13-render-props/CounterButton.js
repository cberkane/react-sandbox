import React, { Component } from "react";

export class CounterButton extends Component {
  render() {
    const { increment, count } = this.props;
    return (
      <div>
        <div>{count}</div>
        <button className="bg-blue-500" onClick={increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default CounterButton;
