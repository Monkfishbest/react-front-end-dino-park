import React, { Component } from "react";
import AddPaddockForm from '../forms/AddPaddockForm';
import './Buttons.css';
import Modal from 'react-awesome-modal';
import Emoji from '../Emoji';

class AddPaddockButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
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
      <div className="add-paddock-button">
      <button className="add-paddock-btn" type="button" value="add-paddock" onClick={() => this.openModal()} ><Emoji symbol="🌳" label="deciduous tree"/> Add a Paddock <Emoji symbol="🌳" label="deciduous tree"/></button>
        <Modal visible={this.state.visible} width="55%" height="55%" onClickAway={() => this.closeModal()}>
          <AddPaddockForm onAddPaddockFormSubmit={this.props.onAddPaddockFormSubmit}/>
        </Modal>
      </div>
    )
  }
}

export default AddPaddockButton;
