import React, { Component } from "react";
import Modal from 'react-awesome-modal';
import Emoji from './Emoji';
import './Rampage.css';

class Rampage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
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
    window.location = '/park-map';
  }

  render() {
    return (
      <div className="rampage-div">
        <button className="rampage-btn" type="button" value="rampage" onClick={() => this.openModal()}>Click to confirm Dinoaurs are going crazy!! <Emoji symbol="🦖" label="T-Rex"/> </button>

        <Modal visible={this.state.visible} width="75%" height="75%" onClickAway={() => this.closeModal()}>
          <div className="modal-contents">
            <div className="panic-over-btn-div">
              <h2>PARK LOCKED DOWN!!</h2>
              <button className="panic-over-btn" onClick={() => this.closeModal()}>Click to confirm when all the dinosaurs have been secured</button>
            </div>
          </div>
        </Modal>

      </div>
    )
  }
}

export default Rampage;
