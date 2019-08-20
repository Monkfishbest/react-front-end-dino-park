import React, { Component } from "react";
import './Buttons.css';
import AddDinosaurForm from '../forms/AddDinosaurForm'

class AddDinosaurButton extends Component {
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
        <div className="add-dinosaur-button">
        <button className="add-dinosaur-btn" type="button" value="add-dinosaur" onClick={this.handleButtonClick}>Add a Dinosaur</button>
        <AddDinosaurForm onAddDinosaurFormSubmit={this.props.onAddDinosaurFormSubmit}/>
        </div>
      );
    } else {
      return (
        <div className="add-dinosaur-button">
        <button className="add-dinosaur-btn" type="button" value="add-dinosaur" onClick={this.handleButtonClick}>Add a Dinosaur</button>
        </div>
      )
    }
  }
}
export default AddDinosaurButton;
