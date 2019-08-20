import React, { Component } from "react";
import AddPaddockForm from '../forms/AddPaddockForm'
import './Buttons.css';

class AddPaddockButton extends Component {
  render() {
    return (
      <div className="add-paddock-button">
        <button type="button" value="add-paddock">Add A Paddock</button>
        <AddPaddockForm onAddPaddockFormSubmit={this.props.onAddPaddockFormSubmit} />
      </div>
    );
  }
}

export default AddPaddockButton;
