import React, { Component } from "react";

class AddDinosaurForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isHerbivore: null,
      fullnessLevel: null,
      type: null,
      paddock: null

    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIsHerbivoreChange = this.handleIsHerbivoreChange.bind(this);
    this.handleFullnessLevelChange = this.handleFullnessLevelChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handlePaddockChange = this.handlePaddockChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({ name: event.target.value})
  }

  handleIsHerbivoreChange(event){
    this.setState({isHerbivore: event.target.value})
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

  handleSubmit(event) {
    const newDino = this.state;
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: newDino,
    });
    this.setState({name: "", isHerbivore: null, fullnessLevel: null, type: null, paddock: null})
  }

  render() {
    return (
      <div className="add-dinosaur-form">
        <h2>Add A Dinosaur:</h2>
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
          <br/>
            <label>Diet:</label>
            <input id="herbivore" type="radio" name="diet" value={true} onChange={this.handleIsHerbivoreChange}/>Herbivore
            <input id="carnivore" type="radio" name="diet" value={false} onChange={this.handleIsHerbivoreChange}/>Carnivore
          <br/>
            <label>Fullness Level:</label>
            <input type="number" min="0" max="100" onChange={this.handleFullnessLevelChange} value={this.state.fullnessLevel}/>
          <br/>
            <label>Species:</label>
            <select name="type" onChange={this.handleTypeChange} value={this.state.type}>
                <option selected disabled>choose type</option>
                <option value="mososaurus" id="carnivores">Mososaurus</option>
                <option value="velociraptor" id="carnivores">Velociraptor</option>
                <option value="spinosaurus" id="carnivores">Spinosaurus</option>
                <option value="pterodactyl" id="carnivores">Pterodactyl</option>
                <option value="giganotosaurus" id="carnivores">Giganotosaurus</option>
                <option value="mososaurus" id="carnivores">Mososaurus</option>
                <option value="triceratops" id="herbivores">Triceratops</option>
                <option value="stegosaurus" id="herbivores">Stegosaurus</option>
                <option value="diplodocus" id="herbivores">Diplodocus</option>
                <option value="centrosaurus" id="herbivores">Centrosaurus</option>
                <option value="atopodentatus" id="herbivores">Atopodentatus</option>
            </select>
          <br/>
            <label>Paddock:</label>
            <select name="type" onChange={this.handlePaddockChange} value={this.state.paddock}>
                <option selected disabled>choose type</option>
                <option value="paddock1">Paddock1</option>
                <option value="paddock2">Paddock2</option>
            </select>
          <br/>
            <input type="submit" value="Add Dinosaur"/>
        </form>
      </div>
    );
  }
}

export default AddDinosaurForm;
