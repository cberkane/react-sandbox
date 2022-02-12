import React, { Component } from "react";
import ComponentC from "./ComponentC";
import { UserConsumer } from "./userContext";

export class ComponentB extends Component {
  render() {
    return (
      <>
        <br />
        {"Component B"}
        <ComponentC />
      </>
    );
  }
}

export default ComponentB;
