import React, { Component } from "react";
import ReferedButton from "./ReferedButton";

export class Refered extends Component {
  /**
   * Defines two refs, one for an input to focus on, and one for child component
   */
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  clickSibling = (event) => {
    event.preventDefault();
    this.buttonRef.current.click();
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.clickSibling}>Click him</button> <br />
        <ReferedButton buttonRef={this.buttonRef} />
      </div>
    );
  }
}

export default Refered;
