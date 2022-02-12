import React, { Component } from "react";
import Bus from "./Bus";
import Car from "./Car";

export class Garage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      riding: "Vooow Vooooww",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ riding: "Vooow Vooooww" });
    }, 1200);
  }

  render() {
    console.log("Garage renders");
    return (
      <div>
        <Car riding={this.state.riding} />
        <Bus riding={this.state.riding} />
      </div>
    );
  }
}

export default Garage;
