import React, {Component} from 'react';
import PaddockList from '../components/map_paddock_container/PaddockList';
import ButtonList from '../components/buttons/ButtonList';
import Request from '../helpers/Request';

class PaddockContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfPaddocks: [],
      newDino: {},
      listOfDinosaurs: [],
      dinoToRemove: {}
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
    this.setState({newDino: newDino},
      () => this.setupAndPostNewDino())
    }

    findPaddock() {
      const paddockName = this.state.newDino.paddock;
      const paddock = this.state.listOfPaddocks.find(paddock => {return paddock.name === paddockName})
      return paddock;
    }

    constructAddDinoPayload() {
      const paddock = this.findPaddock();
      this.state.newDino.paddock = paddock;
    }

    setupAndPostNewDino() {
      this.constructAddDinoPayload();
      const request = new Request();
      request.post('/herbivores', this.state.newDino)
    }

  handleRemoveDinoClick() {
    console.log("About to delete a dinosaur with id: ", this.state.dinoToRemove.id)
  }

    render(){
      return (
        <div className="PaddockContainer">
        <PaddockList paddockList={this.state.listOfPaddocks}/>
        <ButtonList dinosaurList={this.state.listOfDinosaurs} onAddPaddockFormSubmit={this.handleAddPaddockFormSubmit} onTransferFormSubmit={this.handleTransferSubmit} onAddDinosaurFormSubmit={this.handleAddDinosaurFormSubmit} onRemoveDinoClick={this.handleRemoveDinoClick}/>
        </div>
      )
    }
  }

  export default PaddockContainer;
