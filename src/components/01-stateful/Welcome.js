import { Component } from "react";

export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "This is curly braces",
    };
  }

  changeState(params) {
    this.setState({
      message: params,
    });
  }

  render() {
    const { message } = this.state;
    const { info } = this.props;

    if (info === "bye bye") {
      throw new Error("Not a message");
    }

    return (
      <div>
        <h1> My brother, this is amazing my {message}</h1>
      </div>
    );
  }
}

export default Welcome;
