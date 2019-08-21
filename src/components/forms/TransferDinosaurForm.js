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
    this.getHerbivoreList = this.getHerbivoreList.bind(this);
    this.getPaddockList = this.getPaddockList.bind(this);
  }

  getHerbivoreList() {
    return this.props.herbivoreList.map((herbivore, index) => {
      return(<option key={index}>{herbivore.name}</option>)
    });
  }

  getPaddockList() {
    return this.props.paddockList.map((paddock, index) => {
      return(<option key={index}>{paddock.name}</option>)
    });
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
      dinosaurName: this.state.selectedDinosaur,
      paddockName: this.state.selectedPaddock
    });
  }

  render() {
    return (
      <div>
        <form className="transfer-dino-form" onSubmit={this.handleTransferSubmit}>
          <select name="dino" onChange={this.handleDinosaurChange} value={this.state.selectedDinosaur}>
            <option disabled value="">Select a Dinosaur</option>
            {this.getHerbivoreList()}
          </select>

          <select name="paddock" onChange={this.handlePaddockChange} value={this.state.selectedPaddock}>
            <option disabled value="">Select a Paddock</option>
            {this.getPaddockList()}
          </select>

          <input className="button" type="submit" value="Transfer Dinosaur" />
        </form>
      </div>
    )
  }
}

export default TransferDinosaurForm;
