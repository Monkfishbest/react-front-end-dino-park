import React, { Component } from 'react';
import './Buttons.css';

class TransferButton extends Component {
  render() {
    return (
      <div className="transfer-button">
        <button type="button" value="transfer">Transfer A Dinosaur</button>
      </div>
    );
  }
}

export default TransferButton;
