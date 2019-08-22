import React, {Component} from 'react';
import Request from '../../helpers/Request';

class HungerButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const request = new Request();

    request.get("/herbivores/hunger")
    .catch(err => console.error(err));

    request.get("/carnivores/hunger")
    .catch(err => console.error(err));
  }

  render() {
    return(
      <button onClick={this.handleClick}>Hunger</button>
    )
  }
}

export default HungerButton;
