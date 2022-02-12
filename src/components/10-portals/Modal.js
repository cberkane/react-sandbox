import React, { Component } from "react";
import ReactDOM from 'react-dom'


export class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <>
        <div>Modal</div>
        {" This is a modal! "}
      </>,
      document.getElementById('another-root')
    );
  }
}
