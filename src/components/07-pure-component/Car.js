import React, { PureComponent } from "react";

export class Car extends PureComponent {
  render() {
    console.log("Car renders");
    const riding = this.props.riding;
    return <div>{riding}</div>;
  }
}

export default Car;
