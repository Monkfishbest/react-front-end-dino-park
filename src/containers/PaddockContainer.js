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
      paddockId: ''
    };
    this.handleAddPaddockFormSubmit = this.handleAddPaddockFormSubmit.bind(this);
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


  handleAddDinosaurFormSubmit({newDino}) {
    this.setState({newDino: newDino},
      () => this.setupAndPostNewDino())
    }

    findPaddockId() {
      const paddockName = this.state.newDino.paddock;
      const paddock = this.state.listOfPaddocks.find(paddock => {return paddock.name === paddockName})
      return paddock.id;
    }

    constructAddDinoPayload() {
      const paddockId = this.findPaddockId();
      let payload = this.state.newDino;
      let paddockUrl = "http://localhost:8080/paddock/" + paddockId;
      payload.paddock = paddockUrl;
    }

    setupAndPostNewDino() {
      this.constructAddDinoPayload();

    }

    render(){
      return (
        <div className="PaddockContainer">
        <PaddockList paddockList={this.state.listOfPaddocks}/>

        <ButtonList paddockList={this.state.listOfPaddocks} onAddPaddockFormSubmit={this.handleAddPaddockFormSubmit} onAddDinosaurFormSubmit={this.handleAddDinosaurFormSubmit}/>
        </div>
      )

    }
  }

  export default PaddockContainer;
