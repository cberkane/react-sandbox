import React from "react";

/**
 * Higher order component accepts a wrapped component and returns a new component
 * New component has its onw methods and state
 * It passes them as pros to the wrapped component
 */
export const initialCounter = (WrappedComponent) => {
  return class InitialCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  };
};
