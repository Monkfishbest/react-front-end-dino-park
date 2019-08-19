import React, {Component} from 'react';

class AddPaddock extends Component {
  constructor(props) {
    super(props);
    this.state= {
      paddockName: '',
      paddockType: ''
    }
  }

  render() {
    return (
      <div className="add-paddock-form" >
        <h3>Enter new paddock details</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-entry">

            <input id="paddock-name" type="text" value={this.state.paddockName} />
            <label for="paddock-name">Paddock Name</label>

            <input type="radio" id="herbivore" name="paddock-type" value="herbivore" checked />
            <label for="herbivore">Herbivore</label>

            <input type="radio" id="tyrannosaurus-rex" name="paddock-type" value="Tyrannosaurus Rex" />
            <label for="tyrannosaurus-Rex">Tyrannosaurus Rex</label>


            <input type="submit" className="button" value="Save Paddock"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default AddPaddock;
