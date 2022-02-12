import React, { Component } from "react";

export class Filston extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {selectValue} = this.props;
    return (
      <div>
        <label htmlFor="animals">Select animals </label>
        <select name="animals" onChange={selectValue}>
          <option value="dog">Dog</option>
          <option value="cat" on>Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
        </select>
      </div>
    );
  }
}
