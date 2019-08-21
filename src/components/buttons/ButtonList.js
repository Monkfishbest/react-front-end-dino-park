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
        <TransferButton onTransferFormSubmit={this.props.onTransferFormSubmit}
        paddockList={this.props.paddockList}
        herbivoreList={this.props.herbivoreList}/>
        <AddDinosaurButton paddockList={this.props.paddockList} onAddDinosaurFormSubmit={this.props.onAddDinosaurFormSubmit}/>
        <AddPaddockButton onAddPaddockFormSubmit={this.props.onAddPaddockFormSubmit} />
        <FeedButton url={"http://localhost:8080/dinosaurs/feed"}/>
      </div>
    );
  }
}

export default ButtonList;
