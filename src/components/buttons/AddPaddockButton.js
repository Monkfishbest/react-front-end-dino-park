import React, { Component } from "react";
import './NavBar.css';

class AddPaddockButton extends Component {
  render() {
    return (
      <div className="add-paddock-button">
        <button type="button" value="add-paddock">Add A Paddock</button>
      </div>
    );
  }
}

export default AddPaddockButton;
