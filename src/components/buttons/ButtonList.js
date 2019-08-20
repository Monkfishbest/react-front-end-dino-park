import React, { Component } from "react";
import TransferButton from "./TransferButton"
import AddDinosaurButton from "./AddDinosaurButton"
import RemoveDinosaurButton from "./RemoveDinosaurButton"
import AddPaddockButton from "./AddPaddockButton"
import FeedButton from "./FeedButton"
import './Buttons.css';

class ButtonList extends Component {

  render() {
    return (
      <div className="button-list">
        <TransferButton onTransferFormSubmit={this.props.onTransferFormSubmit}/>
        <AddDinosaurButton onAddDinosaurFormSubmit={this.props.onAddDinosaurFormSubmit}/>
        <RemoveDinosaurButton paddockList={this.props.paddockList}/>
        <AddPaddockButton onAddPaddockFormSubmit={this.props.onAddPaddockFormSubmit} />
        <FeedButton url={"http://localhost:8080/dinosaurs/feed"}/>
      </div>
    );
  }
}

export default ButtonList;
