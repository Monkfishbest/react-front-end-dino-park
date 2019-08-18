import React, { Component } from "react";
import './NavBar.css';

class AddDinosaurButton extends Component {
  render() {
    return (
      <div className="add-dinosaur-button">
        <button type="button" value="add-dinosaur">Add A Dinosaur</button>
      </div>
    );
  }
}

export default AddDinosaurButton;
