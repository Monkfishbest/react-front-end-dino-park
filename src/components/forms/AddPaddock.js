import React, {Component} from 'react';

class AddPaddock extends Component {
  constructor(props) {
    super(props);
    this.state= {
      paddockName: '',
      paddockType: ''
    }
    this.handlePaddockNameChange = this.handlePaddockNameChange.bind(this);
    this.handlePaddockTypeChange = this.handlePaddockTypeChange.bind(this);
    this.handleAddPaddockSubmit = this.handleAddPaddockSubmit.bind(this);
  }

  handlePaddockNameChange(event) {
    this.setState({paddockName: event.target.value});
  }

  handlePaddockTypeChange(event) {
    this.setState({paddockType: event.target.value});
  }

  handleAddPaddockSubmit(event) {
    event.preventDefault();
    this.props.onAddPaddockFormSubmit({
      paddockName: this.state.paddockName,
      paddockType: this.state.paddockType
    })
  }

  render() {
    return (
      <div className="add-paddock-form" >
      <h3>Enter new paddock details</h3>
      <form onSubmit={this.handleAddPaddockSubmit}>
      <div className="form-entry">

      <input id="paddock-name" type="text" value={this.state.paddockName}
      onChange={this.handlePaddockNameChange}/>
      <label for="paddock-name">Paddock Name</label>

      <input type="radio" id="herbivore" name="paddock-type" value="Herbivore"
      onChange={this.handlePaddockTypeChange}/>
      <label for="herbivore">Herbivore</label>

      <input type="radio" id="tyrannosaurus-rex" name="paddock-type" value="T-Rex"
      onChange={this.handlePaddockTypeChange}/>
      <label for="tyrannosaurus-Rex">Tyrannosaurus Rex</label>

      <input type="submit" className="pop-up-btn" value="Save Paddock"></input>
      </div>
      </form>
      </div>
    )
  }
}

export default AddPaddock;
