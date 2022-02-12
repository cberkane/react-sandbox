import React, { Component } from "react";
import Form from "./Form";

export class FormParent extends Component {
  constructor(props) {
    super(props);

    this.form = {
      firstname: "Chihab",
      lastname: "Chugar",
      email: "chugar@gmail.com",
    };
  }
  render() {
    return <Form form={{}} />;
  }
}

export default FormParent;
