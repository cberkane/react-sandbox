import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  /*
   * Parent component uses a prop as a method
   * It calls the method with two args, its own state and a function reference 
   */
  render() {
    const { renderComponent } = this.props;
    return <>{ renderComponent(this.state.count, this.increment) }</>;
  }
}

export default Counter;
