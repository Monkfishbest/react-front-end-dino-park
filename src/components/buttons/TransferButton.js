import React, { Component } from 'react';
import './Buttons.css';
import TransferDinosaurForm from '../forms/TransferDinosaurForm';
import Modal from 'react-awesome-modal';
import Emoji from '../Emoji';

class TransferButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible : false
    };
  }

  openModal() {
    this.setState({
      visible : true
    });
  }

  closeModal() {
    this.setState({
      visible : false
    });
  }

  render() {
    return (
      <div className="transfer-button">
        <button className="transfer-btn" type="button" value="transfer" onClick={() => this.openModal()}><Emoji symbol="🦕" label="sauropod"/> Transfer a Dinosaur <Emoji symbol="🦕" label="sauropod"/></button>
          <Modal visible={this.state.visible} width="55%" height="55%" onClickAway={() => this.closeModal()}>
            <TransferDinosaurForm onTransferFormSubmit={this.props.onTransferFormSubmit}
            paddockList={this.props.paddockList}
            herbivoreList={this.props.herbivoreList}/>
          </Modal>
      </div>
    )
  }
}

export default TransferButton;
