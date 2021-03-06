import React, {Component} from 'react';
import PaddockList from '../components/map_paddock_container/PaddockList';
import ButtonList from '../components/buttons/ButtonList';
import Request from '../helpers/Request';
import './PaddockContainer.css';

class PaddockContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfPaddocks: [],
      listOfHerbivorePaddocks: [],
      listOfHerbivores: [],
      newDino: {},
      listOfDinosaurs: [],
      dinoToRemove: ''
    };
    this.handleAddPaddockFormSubmit = this.handleAddPaddockFormSubmit.bind(this);
    this.handleTransferFormSubmit = this.handleTransferFormSubmit.bind(this);
    this.handleAddDinosaurFormSubmit = this.handleAddDinosaurFormSubmit.bind(this);
    this.setupAndPostNewDino = this.setupAndPostNewDino.bind(this);
    this.handleRemoveDinoClick = this.handleRemoveDinoClick.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/paddocks")
    .then(returnedPaddocks => this.setState({listOfPaddocks: returnedPaddocks}))
    .catch(err => console.error(err))

    const dinoRequest = new Request();
    dinoRequest.get("/dinosaurs")
    .then(returnedDinosaurs => this.setState({listOfDinosaurs: returnedDinosaurs}))
    .catch(err => console.error(err))

    request.get("/herbivores")
    .then(herbivores => this.setState({listOfHerbivores: herbivores}))
    .catch(err => console.error(err))

    request.get("/paddocks/herbivores")
    .then(returnedPaddocks => this.setState({listOfHerbivorePaddocks: returnedPaddocks}))
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
    const request = new Request();
    request.update('/herbivores/' + dinosaur.id, dinosaur).then(() => {
      window.location = '/park-map'
    });
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

  findFromAllDinosaur(name) {
    const dinosaur = this.state.listOfDinosaurs.find(dinosaur => {return dinosaur.name === name})
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
      request.post('/herbivores', this.state.newDino).then(() => {
        window.location = '/park-map'
      });
    } else {
      request.post('/carnivores', this.state.newDino).then(() => {
        window.location = '/park-map'
      });
    }
  }

  removeDino(dinoName) {
    console.log("name to remove passed back:", dinoName);
    const dinoToDelete = this.findFromAllDinosaur(dinoName);
    const request = new Request();
    request.delete('/dinosaurs/' + dinoToDelete.id).then(() => {
      window.location = '/park-map'
    });
  }

  handleRemoveDinoClick(dinoToRemove) {
    this.setState({dinoToRemove: dinoToRemove}, () => this.removeDino(this.state.dinoToRemove));
  }

  render(){
    return (
      <div className="paddock-container">
        <PaddockList paddockList={this.state.listOfPaddocks}/>
        <ButtonList paddockList={this.state.listOfPaddocks}
        herbivorePaddockList={this.state.listOfHerbivorePaddocks}
        dinosaurList={this.state.listOfDinosaurs}
        herbivoreList={this.state.listOfHerbivores}
        onAddPaddockFormSubmit={this.handleAddPaddockFormSubmit} onTransferFormSubmit={this.handleTransferFormSubmit} onAddDinosaurFormSubmit={this.handleAddDinosaurFormSubmit}
        onRemoveDinoClick={this.handleRemoveDinoClick}/>
      </div>
    )
  }
}

export default PaddockContainer;
