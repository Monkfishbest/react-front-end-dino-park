import React, {Component} from 'react';

class TransferDinosaurForm extends Component {

  render() {
    return (
      <div>
        <form className="transfer-dino-form">
          <select>
            <option disabled value="default">Select a Dinosaur</option>
            <option>Dino1</option>
            <option>Dino2</option>
          </select>

          <select>
          <option disabled value="default">Select a Paddock</option>
          <option>Paddock1</option>
          <option>Paddock2</option>
          </select>

          <input type="submit" value="Transfer Dinosaur" />
        </form>
      </div>
    )
  }
}

export default TransferDinosaurForm;
