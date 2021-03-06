import React, { Component } from "react";
import './Buttons.css';
import AddDinosaurForm from '../forms/AddDinosaurForm';
import Modal from 'react-awesome-modal';
import Emoji from '../Emoji';

class AddDinosaurButton extends Component {
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
      <div className="add-dinosaur-button">
        <button className="add-dinosaur-btn" type="button" value="add-dinosaur" onClick={() => this.openModal()}><Emoji symbol="🦖" label="T-Rex"/> Add a Dinosaur <Emoji symbol="🦖" label="T-Rex"/></button>
          <Modal visible={this.state.visible} width="55%" height="55%" onClickAway={() => this.closeModal()}>
            <AddDinosaurForm paddockList={this.props.paddockList} onAddDinosaurFormSubmit={this.props.onAddDinosaurFormSubmit}/>
          </Modal>
      </div>
    )
  }
}
export default AddDinosaurButton;
