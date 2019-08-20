import React, {Component} from 'react';
import PaddockList from '../components/map_paddock_container/PaddockList';
import ButtonList from '../components/buttons/ButtonList';
import Request from '../helpers/Request';

class PaddockContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfPaddocks: [],
      paddockName: '',
      paddockType: '',
      newDino: {}
    };
    this.handleAddPaddockFormSubmit = this.handleAddPaddockFormSubmit.bind(this);
    this.handleAddDinosaurFormSubmit = this.handleAddDinosaurFormSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/paddocks")
    .then(returnedDinos => this.setState({listOfDinos: returnedDinos, listOfPaddocks: returnedDinos}))
    .catch(err => console.error(err))
  }

  handleAddPaddockFormSubmit({paddockName, paddockType}) {
    let type = true;
    if (paddockType !== "Herbivore") {
      type = false;
    }
    const paddock = {
      "name": paddockName,
      "isHerbivore": type
    };
    const request = new Request();
    request.post('/paddocks', paddock);
    this.setState({ paddockName: paddockName,
      paddockType: paddockType
    })
  }

  handleAddDinosaurFormSubmit({newDino}) {
    this.setState({newDino: newDino})
  }

  render(){
    return (
      <div className="PaddockContainer">
      <h3>This is a paddock container</h3>
      <PaddockList paddockList={this.state.listOfPaddocks}/>
      <ButtonList onAddPaddockFormSubmit={this.handleAddPaddockFormSubmit} onAddDinosaurFormSubmit={this.handleAddDinosaurFormSubmit}/>
      </div>
    )

  }
}

export default PaddockContainer;
