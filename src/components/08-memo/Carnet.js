import React, { Component } from "react";
import { MemoNote } from "./MemoNote";
import { Note } from "./Note";

export class Carnet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: "dump note",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        note: "dump note",
      });
    }, 1000);
  }

  render() {
    console.log("Carnet re-renders");
    return (
      <div>
        <Note noteName={this.state.note} />
        <MemoNote noteName={this.state.note} />
      </div>
    );
  }
}
