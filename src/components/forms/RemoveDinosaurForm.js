import React, {Component} from 'react';

class RemoveDinosaurForm extends Component {
  constructor(props) {
    super(props);

    }

  render() {
    return (
      <div className="remove-dinosaur-form">
        <h2>Remove A Dinosaur:</h2>
        <form>
          <p>list of dinosaurs to be removed goes here</p>
        </form>
      </div>
    )
  }
}

export default RemoveDinosaurForm;
