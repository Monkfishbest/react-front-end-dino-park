import React, {Component} from 'react';
import './Form.css'

class AddPaddockForm extends Component {
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
    });
  }

  render() {
    return (
      <div className="add-paddock-form" >
        <h2>Add A Paddock:</h2>
        <form onSubmit={this.handleAddPaddockSubmit}>
          <div className="form-entry">

          <label htmlFor="paddock-name">Paddock Name:</label>
          <br/>
          <input id="paddock-name" type="text" value={this.state.paddockName}
          onChange={this.handlePaddockNameChange}/>
          <br/>

          <label>Paddock Type:</label>
          <div className='radio-buttons'>
          <input type="radio" id="herbivore" name="paddock-type" value="Herbivore"
          onChange={this.handlePaddockTypeChange}/>
          <label htmlFor="herbivore">Herbivore</label>
          <br/>
          <input type="radio" id="carnivore" name="paddock-type" value="Carnivore"
          onChange={this.handlePaddockTypeChange}/>
          <label htmlFor="carnivore">Carnivore</label>
          <br/>
          
          <input type="radio" id="tyrannosaurus-rex" name="paddock-type" value="T-Rex"
          onChange={this.handlePaddockTypeChange}/>
          <label htmlFor="tyrannosaurus-Rex">Tyrannosaurus Rex</label>
          </div>
          <input type="submit" className="pop-up-btn" value="Save Paddock"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default AddPaddockForm;
