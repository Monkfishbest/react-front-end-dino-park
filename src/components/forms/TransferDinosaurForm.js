import React, {Component} from 'react';

class TransferDinosaurForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      selectedDinosaur: '',
      selectedPaddock: ''
    }
    this.handleDinosaurChange = this.handleDinosaurChange.bind(this);
    this.handlePaddockChange = this.handlePaddockChange.bind(this);
    this.handleTransferSubmit = this.handleTransferSubmit.bind(this);
  }

  handleDinosaurChange(event) {
    this.setState({selectedDinosaur: event.target.value});
  }

  handlePaddockChange(event) {
    this.setState({selectedPaddock: event.target.value});
  }

  handleTransferSubmit(event) {
    event.preventDefault();
    this.props.onTransferFormSubmit({
      paddockName: this.state.paddockName,
      paddockType: this.state.paddockType
    })
  }

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

          <input className="button" type="submit" value="Transfer Dinosaur" />
        </form>
      </div>
    )
  }
}

export default TransferDinosaurForm;
