import React, { Component } from "react";

export class Form extends Component {
  
  constructor(props) {
    super(props);

    /**
    * Defines 
    */
    const form = this.props?.form;
    this.state = {
      firstname: form.firstname ? form.firstname : "",
      lastname: form.lastname ? form.lastname : "",
      email: form.email ? form.email : "",
      stayConnected: false,
    };
  }

  /*
  * Updates form state whenever input changes 
  */
  handleChange = (event) => {
    this.setState({
      firstname: event.target.name === "firstname" ? event.target.value : this.state.firstname,
      lastname: event.target.name === "lastname" ? event.target.value : this.state.lastname,
      email: event.target.name === "email" ? event.target.value : this.state.email,
      stayConnected: event.target.name === "stay" ? !this.state.stay : this.state.stayConnected,
    });
  };

  /**
  *  Gets form data from component state
  */
  handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      stayConnected: this.state.stayConnected,
    };

    console.log(formData); 
    // give that data to parent component
  };

  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstname">firstname</label>
            <input
              type="text"
              name="firstname"
              onChange={this.handleChange}
              value={this.state.firstname}
            />
          </div>
          <div>
            <label htmlFor="lastname">lastname</label>
            <input
              type="text"
              name="lastname"
              onChange={this.handleChange}
              value={this.state.lastname}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="stayConnected">Rester connecter</label>
            <input
              type="checkbox"
              name="stayConnected"
              onChange={this.handleChange}
              value={this.state.stayConnected}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
