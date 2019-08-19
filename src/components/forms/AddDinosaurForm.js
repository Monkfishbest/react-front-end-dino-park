import React, { Component } from "react";

class AddDinosaurForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (
      <div className="add-dinosaur-form">
        <h2>Add A Dinosaur:</h2>
        <form>
            <label>Name:</label>
            <input type="text"/>
          <br/>
            <label>Diet:</label>
            <input id="herbivore" type="radio" name="diet" value="true" />Herbivore
            <input id="carnivore" type="radio" name="diet" value="false"/>Carnivore
          <br/>
            <label>Fullness Level:</label>
            <input type="number" min="0" max="100"/>
          <br/>
            <label>Species:</label>
            <select name="type">
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
            <input type="select"/>
          <br/>
            <input type="submit" value="Add Dinosaur"/>
        </form>
      </div>
    );
  }
}

export default AddDinosaurForm;
