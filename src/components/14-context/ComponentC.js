import React, { Component } from "react";
import { userContext } from "./userContext";

export class ComponentC extends Component {
  static contextType = userContext;

  render() {
    return <div>ComponentC {this.context} </div>;
  }
}

export default ComponentC;
