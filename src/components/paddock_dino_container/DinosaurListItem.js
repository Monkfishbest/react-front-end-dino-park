import React, { Component } from "react";

class DinosaurListItem extends Component {
  render() {
    return (
        <li>
        <h3>{this.props.dino.name}</h3>
        <p>Species: {this.props.dino.type}</p>
        <p>Hunger Level: {this.props.dino.fullnessLevel}</p>
        <p>Paddock: {this.props.dino.paddock.name}</p>
        <p>Diet: {this.props.dino.herbivore ? "Herbivore" : "Carnivore"}</p>
        </li>
    );
  }
}

export default DinosaurListItem;
