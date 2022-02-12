import React, { Component } from "react";

export class ReferedButton extends Component {
  handleClick = () => {
    console.log("Clicked x times");
  };

  render() {
    const buttonRef = this.props.buttonRef;
    return <button onClick={this.handleClick} ref={buttonRef}>Click me</button>;
  }
}

export default ReferedButton;
