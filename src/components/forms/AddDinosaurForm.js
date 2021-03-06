import React, { Component, Fragment } from "react";
import './Form.css'

class AddDinosaurForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isHerbivore: false,
      fullnessLevel: "",
      type: "",
      paddock: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIsHerbivoreChange = this.handleIsHerbivoreChange.bind(this);
    this.handleFullnessLevelChange = this.handleFullnessLevelChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handlePaddockChange = this.handlePaddockChange.bind(this);
    this.handleAddDinosaurFormSubmit = this.handleAddDinosaurFormSubmit.bind(this);
    this.getDinosaurByDietType = this.getDinosaurByDietType.bind(this);
    this.getPaddocks = this.getPaddocks.bind(this);
  }

  handleNameChange(event){
    this.setState({ name: event.target.value})
  }

  handleIsHerbivoreChange(event){
    this.setState({isHerbivore: (event.target.value === 'true')})
  }

  handleFullnessLevelChange(event){
    this.setState({fullnessLevel: event.target.value})
  }

  handleTypeChange(event){
    this.setState({type: event.target.value})
  }

  handlePaddockChange(event){
    this.setState({paddock: event.target.value})
  }

  handleAddDinosaurFormSubmit(event) {
    event.preventDefault();
    const newDino = this.state;
    this.props.onAddDinosaurFormSubmit({newDino: newDino})
    this.setState({name: "", isHerbivore: false, fullnessLevel: "", type: "", paddock: ""})
  }

  getDinosaurByDietType(){
    if(this.state.isHerbivore){
      return (
        <Fragment>
        <option disabled value="">Choose a herbivore...</option>
        <option value="TRICERATOPS" id="herbivores">Triceratops</option>
        <option value="STEGOSAURUS" id="herbivores">Stegosaurus</option>
        <option value="DIPLODOCUS" id="herbivores">Diplodocus</option>
        <option value="CENTROSAURUS" id="herbivores">Centrosaurus</option>
        <option value="ATOPODENTATUS" id="herbivores">Atopodentatus</option>
        </Fragment>
      )
    }
    return (
      <Fragment>
      <option disabled value="">Choose a carnivore...</option>
      <option value="VELOCIRAPTOR" id="carnivores">Velociraptor</option>
      <option value="SPINOSAURUS" id="carnivores">Spinosaurus</option>
      <option value="PTERODACTYL" id="carnivores">Pterodactyl</option>
      <option value="MOSOSAURUS" id="carnivores">Mososaurus</option>
      <option value="GIGANOTOSAURUS" id="carnivores">Giganotosaurus</option>
      </Fragment>
    )
  }

  getPaddocks(){
    let arrayOfPaddocks
    if (this.props.paddockList !== undefined){
      arrayOfPaddocks = this.props.paddockList.map((paddock, index) => {
        return <option key={index} value={paddock.name}>{paddock.name}</option>
      })
      return arrayOfPaddocks
    }
  }

  render() {
    return (
      <div className="add-dinosaur-form">
        <h2>Add A Dinosaur:</h2>
        <form onSubmit={this.handleAddDinosaurFormSubmit}>
            <label>Name:</label>
            <input type="text" onChange={this.handleNameChange} value={this.state.name} required/>
          <br/>
            <label>Diet:</label>
            <input id="carnivore" type="radio" name="diet" value={false} onChange={this.handleIsHerbivoreChange} required/>Carnivore
            <input id="herbivore" type="radio" name="diet" value={true} onChange={this.handleIsHerbivoreChange}/>Herbivore
          <br/>
            <label>Fullness Level:</label>
            <input type="number" min="0" max="100" onChange={this.handleFullnessLevelChange} value={this.state.fullnessLevel} required/>
          <br/>
            <label>Species:</label>
            <select name="type" onChange={this.handleTypeChange} value={this.state.type} required>
              {this.getDinosaurByDietType()}
            </select>
          <br/>
            <label>Paddock:</label>
            <select name="paddock" onChange={this.handlePaddockChange} value={this.state.paddock} required>
              <option disabled value="">Select a paddock...</option>
              {this.getPaddocks()}
            </select>
          <br/>
            <input className="pop-up-btn" type="submit" value="Add Dinosaur"/>
        </form>
      </div>
    );
  }
}

export default AddDinosaurForm;
