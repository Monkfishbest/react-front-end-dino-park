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
    return this.props.herbivoreList.map(herbivore => {
      return(<option>{herbivore.name}</option>)
    });
  }

  getPaddockList() {
    return this.props.paddockList.map(paddock => {
      return(<option>{paddock.name}</option>)
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
      paddockName: this.state.paddockName,
      paddockType: this.state.paddockType
    })
  }

  render() {
    return (
      <div>
        <form className="transfer-dino-form">
          <select>
            <option selected disabled value="default">Select a Dinosaur</option>
            {this.getHerbivoreList()}
          </select>

          <select>
            <option selected disabled value="default">Select a Paddock</option>
            {this.getPaddockList()}
          </select>

          <input className="button" type="submit" value="Transfer Dinosaur" />
        </form>
      </div>
    )
  }
}

export default TransferDinosaurForm;
