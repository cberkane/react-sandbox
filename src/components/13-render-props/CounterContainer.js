import React, { Component } from "react";
import CounterButton from "./CounterButton";
import Counter from "./Counter";

export class CounterContainer extends Component {
  render() {
    return (
      <Counter
        renderComponent={(count, increment) => (
          <CounterButton count={count} increment={increment} />
        )}
      />
    );
  }
}

export default CounterContainer;
