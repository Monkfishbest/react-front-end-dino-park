import React, { Component } from 'react';
import './Buttons.css';

class TransferButton extends Component {
  render() {
    return (
      <div className="transfer-button">
        <button className="transfer-btn" type="button" value="transfer">Transfer a Dinosaur &#129429;</button>
      </div>
    );
  }
}

export default TransferButton;
