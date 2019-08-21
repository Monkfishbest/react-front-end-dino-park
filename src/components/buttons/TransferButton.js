import React, { Component } from 'react';
import './Buttons.css';
import TransferDinosaurForm from '../forms/TransferDinosaurForm';

class TransferButton extends Component {
  render() {
    return (
      <div className="transfer-button">
        <button type="button" value="transfer">Transfer A Dinosaur</button>
        <TransferDinosaurForm />
      </div>
    );
  }
}

export default TransferButton;
