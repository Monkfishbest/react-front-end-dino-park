import React, { Component } from "react";
import TransferButton from "./TransferButton"
import AddDinosaurButton from "./AddDinosaurButton"
import AddPaddockButton from "./AddPaddockButton"
import FeedButton from "./FeedButton"
import './Buttons.css';

class ButtonList extends Component {

  render() {
    return (
      <div className="button-list">
        <TransferButton/>
        <AddDinosaurButton/>
        <AddPaddockButton onAddPaddockFormSubmit={this.props.onAddPaddockFormSubmit} />
        <FeedButton/>
      </div>
    );
  }
}

export default ButtonList;
