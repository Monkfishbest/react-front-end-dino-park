import React, { Component } from "react";
import './Buttons.css';
import Modal from 'react-awesome-modal';
import RemoveDinosaurForm from '../forms/RemoveDinosaurForm';
import Emoji from '../Emoji';

class RemoveDinosaurButton extends Component {
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
      <div className="remove-dinosaur-button">
        <button className="remove-dinosaur-btn" type="button" value="remove-dinosaur" onClick={() => this.openModal()}><Emoji symbol="❌" label="cross-mark"/> Remove a Dinosaur <Emoji symbol="❌" label="cross-mark"/></button>
          <Modal visible={this.state.visible} width="55%" height="55%" onClickAway={() => this.closeModal()}>
            <RemoveDinosaurForm dinosaurList={this.props.dinosaurList}
              onRemoveDinoClick={this.props.onRemoveDinoClick}/>
          </Modal>
      </div>
    )
  }
}
export default RemoveDinosaurButton;
