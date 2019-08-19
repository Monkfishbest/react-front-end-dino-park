import React, { Component } from "react";
import AddPaddock from '../forms/AddPaddock'
import './Buttons.css';

class AddPaddockButton extends Component {
  render() {
    return (
      <div className="add-paddock-button">
        <button type="button" value="add-paddock">Add A Paddock</button>
      <AddPaddock onAddPaddockFormSubmit={this.props.onAddPaddockFormSubmit} />
      </div>
    );
  }
}

export default AddPaddockButton;
