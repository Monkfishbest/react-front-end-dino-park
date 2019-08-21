import React, {Component} from 'react';
import PaddockList from '../components/map_paddock_container/PaddockList';
import ButtonList from '../components/buttons/ButtonList';
import Request from '../helpers/Request';

class PaddockContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfPaddocks: [],
      listOfHerbivores: [],
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
    request.get("/herbivores")
    .then(herbivores => this.setState({listOfHerbivores: herbivores}))
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

  handleTransferFormSubmit({dinosaurName, paddockName}) {
    const paddock = this.findPaddock(paddockName);
    const dinosaur = this.findDinosaur(dinosaurName);
    dinosaur.paddock = paddock;
    console.log(dinosaur);
    const request = new Request();
    request.update('/herbivores/' + dinosaur.id, dinosaur);
  }

  handleAddDinosaurFormSubmit({newDino}) {
    this.setState(
      {newDino: newDino}, () => this.setupAndPostNewDino()
    )
  }

  findPaddock(name) {
    const paddock = this.state.listOfPaddocks.find(paddock => {return paddock.name === name})
    return paddock;
  }

  findDinosaur(name) {
    const dinosaur = this.state.listOfHerbivores.find(dinosaur => {return dinosaur.name === name})
    return dinosaur;
  }

  constructAddDinoPayload() {
    const paddock = this.findPaddock(this.state.newDino.paddock);
    const dinoCopy = this.state.newDino
    dinoCopy.paddock = paddock;
    this.setState({newDino: dinoCopy});
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
        <ButtonList paddockList={this.state.listOfPaddocks}
        herbivoreList={this.state.listOfHerbivores}
        onAddPaddockFormSubmit={this.handleAddPaddockFormSubmit} onTransferFormSubmit={this.handleTransferFormSubmit} onAddDinosaurFormSubmit={this.handleAddDinosaurFormSubmit}/>
      </div>
    )
  }
}

export default PaddockContainer;
