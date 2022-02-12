import React, { Component } from "react";
import { Filston } from "./Filston";

export class Papa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  selectValue = (event) => {
    this.setState({
      value: event.target.value,
    })
  };

  render() {
    return (
      <div>
        <Filston selectValue={this.selectValue} />
      </div>
    );
  }
}
