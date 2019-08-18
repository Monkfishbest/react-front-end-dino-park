import React, { Component } from "react";
import TransferButton from "./TransferButton"

class ButtonList extends Component {
  render() {
    return (
      <div className="button-list">
        <TransferButton/>
      </div>
    );
  }
}

export default ButtonList;
