import React, { Component } from "react";
import './Buttons.css';
import AddDinosaurForm from '../forms/AddDinosaurForm'

class AddDinosaurButton extends Component {
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.state = {
      isShowForm: false
    };
  }

  handleButtonClick(){
    this.setState({isShowForm: !this.state.isShowForm})
  }

  render() {
    return (
      <div className="add-dinosaur-button">
        <button type="button" value="add-dinosaur" onClick={this.handleButtonClick}>Add A Dinosaur</button>
        <AddDinosaurForm onAddDinosaurFormSubmit={this.props.onAddDinosaurFormSubmit}/>
      </div>
    );
  }
}
export default AddDinosaurButton;
