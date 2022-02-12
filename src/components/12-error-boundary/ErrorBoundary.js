import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("error", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    return (
      this.state.hasError ? (
        <>
          <div>Oups...</div>
          <span>Something went wrong !</span>
        </>
      ) : (
        this.props.children
      )
    );
  }
}

export default ErrorBoundary;
