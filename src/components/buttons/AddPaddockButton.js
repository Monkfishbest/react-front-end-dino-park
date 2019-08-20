import React, { Component } from "react";
import AddPaddockForm from '../forms/AddPaddockForm'
import './Buttons.css';

class AddPaddockButton extends Component {
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.state = {
      displayForm : false
    };
  }

  handleButtonClick(){
    this.setState({displayForm: !this.state.displayForm})
  }


  render() {
    if(this.state.displayForm){
      return (
        <div className="add-paddock-button">
        <button type="button" value="add-paddock" onClick={this.handleButtonClick}>Add A Paddock</button>
        <AddPaddockForm onAddPaddockFormSubmit={this.props.onAddPaddockFormSubmit} />
        </div>
      );
    } else {
      return (
        <div className="add-paddock-button">
        <button type="button" value="add-paddock" onClick={this.handleButtonClick}>Add A Paddock</button>
        </div>
      )
    }
  }
}

export default AddPaddockButton;
