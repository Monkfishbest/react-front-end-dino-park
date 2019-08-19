import React, { Component } from "react";
import './Buttons.css';
import AddDinosaurForm from '../forms/AddDinosaurForm'

class AddDinosaurButton extends Component {
  render() {
    return (
      <div className="add-dinosaur-button">
        <button type="button" value="add-dinosaur">Add A Dinosaur</button>
        <AddDinosaurForm onAddDinosaurFormSubmit={this.props.onAddDinosaurFormSubmit}/>
      </div>
    );
  }
}

export default AddDinosaurButton;
