import React, {Component} from "react";

class RemoveDinosaurListItem extends Component {
  constructor(props){
    super(props);

    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick(event) {
    let dinoToRemove = event.target.value;
    this.props.onRemoveDinoClick(dinoToRemove );
  }

  render() {
    return (
      <li className="remove-dinosaur-list-item">
        <p> {this.props.dinosaur.name} {this.props.dinosaur.paddock.name} {this.props.dinosaur.type} {this.props.dinosaur.herbivore ? "Herbivore" : "Carnivore"} {this.props.dinosaur.id}</p>
        <button onClick={this.handleRemoveClick} value={this.props.dinosaur.name}>Delete</button>
      </li>
    );
  }
}

export default RemoveDinosaurListItem;
