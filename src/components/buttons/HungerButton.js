import React, {Component} from 'react';

class HungerButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch("/herbivores/hunger")
    .catch(err => console.error(err));

    fetch("/carnivores/hunger")
    .catch(err => console.error(err));
  }

  render() {
    return(
      <button onClick={this.handleClick}>Hunger</button>
    )
  }
}
