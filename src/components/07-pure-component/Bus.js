import React, { Component } from "react";

export class Bus extends Component {
  render() {
    console.log("Bus renders");
    const riding = this.props.riding;
    return <div>{riding}</div>;
  }
}

export default Bus;
