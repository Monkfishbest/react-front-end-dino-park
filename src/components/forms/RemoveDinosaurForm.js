import React, {Component} from 'react';
import RemoveDinosaurList from './RemoveDinosaurList'

class RemoveDinosaurForm extends Component {

  render() {
    return (
      <div className="remove-dinosaur-form">
        <h2>Remove A Dinosaur:</h2>
          <RemoveDinosaurList dinosaurList={this.props.dinosaurList}
            onRemoveDinoClick={this.props.onRemoveDinoClick}/>
      </div>
    )
  }
}

export default RemoveDinosaurForm;
