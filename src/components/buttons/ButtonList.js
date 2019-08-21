import React, { Component } from "react";
import TransferButton from "./TransferButton";
import AddDinosaurButton from "./AddDinosaurButton";
import RemoveDinosaurButton from "./RemoveDinosaurButton";
import AddPaddockButton from "./AddPaddockButton";
import FeedButton from "./FeedButton";
import './Buttons.css';

class ButtonList extends Component {

  render() {
    return (
      <div className="button-list">
        <AddPaddockButton onAddPaddockFormSubmit={this.props.onAddPaddockFormSubmit} />
        <AddDinosaurButton paddockList={this.props.paddockList} onAddDinosaurFormSubmit={this.props.onAddDinosaurFormSubmit}/>
        <FeedButton url={"http://localhost:8080/dinosaurs/feed"}/>
        <TransferButton onTransferFormSubmit={this.props.onTransferFormSubmit}
        paddockList={this.props.herbivorePaddockList}
        herbivoreList={this.props.herbivoreList}/>
        <RemoveDinosaurButton dinosaurList={this.props.dinosaurList}
          onRemoveDinoClick={this.props.onRemoveDinoClick}/>
      </div>
    );
  }
}

export default ButtonList;
