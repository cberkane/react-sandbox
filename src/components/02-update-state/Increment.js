import { Component } from "react";

export class Increment extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  /**
   * updates state with an object
   */
  simpleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  /**
   * updates state with a callback function, useful when previous state needed
   */
  increment() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  incrementThree = () => {
    this.increment();
    this.increment();
    this.increment();
  };

  /**
   * Executes one setState, even if method is called 3 times
   */
  notIncrementThree = () => {
    this.simpleIncrement();
    this.simpleIncrement();
    this.simpleIncrement();
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.simpleIncrement}>Increment</button>
          <span>This is the current count : {this.state.count}</span>
        </div>
        <div>
          <button onClick={this.incrementThree}>Increment * 3</button>
          <span>This is the current count : {this.state.count}</span>
        </div>
        <div>
          <button onClick={this.notIncrementThree}>Not increment * 3</button>
          <span>This is the current count : {this.state.count}</span>
        </div>
      </div>
    );
  }
}
