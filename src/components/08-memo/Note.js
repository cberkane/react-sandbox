import React, { PureComponent } from "react";

export class Note extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("render called from Note");
    return <div>Note : {this.props.noteName}</div>;
  }
}
