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
    request.post('/paddocks', paddock);
    this.setState({ paddockName: paddockName,
      paddockType: paddockType
    })
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
      <h3>This is a paddock container</h3>
      <PaddockList paddockList={this.state.listOfPaddocks}/>
      <ButtonList onAddPaddockFormSubmit={this.handleAddPaddockFormSubmit} onAddDinosaurFormSubmit={this.handleAddDinosaurFormSubmit}/>
      </div>
    )

  }
}

export default PaddockContainer;
