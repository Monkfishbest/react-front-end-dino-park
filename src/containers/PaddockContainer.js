import React, {Component} from 'react';
import PaddockList from '../components/map_paddock_container/PaddockList';
import ButtonList from '../components/buttons/ButtonList';
import Request from '../helpers/Request';

class PaddockContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfPaddocks: [],
      newDino: {}
    };
    this.handleAddPaddockFormSubmit = this.handleAddPaddockFormSubmit.bind(this);
    this.handleTransferFormSubmit = this.handleTransferFormSubmit.bind(this);
    this.handleAddDinosaurFormSubmit = this.handleAddDinosaurFormSubmit.bind(this);
    this.setupAndPostNewDino = this.setupAndPostNewDino.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/paddocks")
    .then(returnedPaddocks => this.setState({listOfPaddocks: returnedPaddocks}))

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
    request.post('/paddocks', paddock).then(() => {
      window.location = '/park-map'
    });
  }

  handleTransferFormSubmit() {
    console.log('Transfer Set Up')
  }

  handleAddDinosaurFormSubmit({newDino}) {
    this.setState(
      {newDino: newDino}, () => this.setupAndPostNewDino()
    )
  }

  findPaddock() {
    const paddockName = this.state.newDino.paddock;
    const paddock = this.state.listOfPaddocks.find(paddock => {return paddock.name === paddockName})
    return paddock;
  }

  constructAddDinoPayload() {
    const paddock = this.findPaddock();
    const dinoCopy = this.state.newDino
    dinoCopy.paddock = paddock;
    this.setState({newDino: dinoCopy});
    console.log(this.state.newDino);
  }

  setupAndPostNewDino() {
    this.constructAddDinoPayload();
    const request = new Request();
    if(this.state.newDino.isHerbivore) {
      request.post('/herbivores', this.state.newDino)
    } else {
      request.post('/carnivores', this.state.newDino)
    }
  }

  render(){
    return (
      <div className="PaddockContainer">
      <PaddockList paddockList={this.state.listOfPaddocks}/>
      <ButtonList onAddPaddockFormSubmit={this.handleAddPaddockFormSubmit} onTransferFormSubmit={this.handleTransferSubmit} onAddDinosaurFormSubmit={this.handleAddDinosaurFormSubmit}/>
      </div>
    )
  }
}

export default PaddockContainer;
