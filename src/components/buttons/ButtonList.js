import React, { Component } from "react";
import TransferButton from "./TransferButton"
import AddDinosaurButton from "./AddDinosaurButton"

class ButtonList extends Component {
  render() {
    return (
      <div className="button-list">
        <TransferButton/>
        <AddDinosaurButton/>
      </div>
    );
  }
}

export default ButtonList;
