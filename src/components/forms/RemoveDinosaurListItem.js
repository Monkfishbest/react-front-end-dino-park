import React, {Component} from "react";

class RemoveDinosaurListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      dinoToRemove: ''
    }
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick(event) {
    event.preventDefault();
    this.props.onRemoveDinoClick({
      dinoToRemove: 2
    });
  }

  render() {
    return (
      <li className="remove-dinosaur-list-item">
        <p> {this.props.dinosaur.name} {this.props.dinosaur.paddock.name} {this.props.dinosaur.type} {this.props.dinosaur.herbivore ? "Herbivore" : "Carnivore"} {this.props.dinosaur.id}</p>
        <button onClick={this.handleRemoveClick} value={2}></button>
      </li>
    );
  }
}

export default RemoveDinosaurListItem;
