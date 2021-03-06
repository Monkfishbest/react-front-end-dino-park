import React, { Component } from "react";
import './Buttons.css';
import Modal from 'react-awesome-modal';
import Emoji from '../Emoji';

class FeedButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: "",
      visible: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({url: this.props.url})
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

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.url !== "") {
      fetch(this.state.url)
      .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div className="feed-button">
        <form onSubmit={this.handleSubmit}>
          <button className="feed-btn" onClick={() => this.openModal()} type="submit" value="feed"> <Emoji symbol="🍖" label="meat on bone"/><Emoji symbol="🌿" label="herb"/> Feed <Emoji symbol="🌿" label="herb"/><Emoji symbol="🍖" label="meat on bone"/></button>
            <Modal visible={this.state.visible} width="55%" height="22%" onClickAway={() => this.closeModal()}>
              <div className="pop-up">
                <h2>All the dinosaurs have been fed!</h2>
                <button className="pop-up-btn" onClick={() => this.closeModal()}>Okay</button>
              </div>
            </Modal>
        </form>
      </div>
    );
  }
}

export default FeedButton;
