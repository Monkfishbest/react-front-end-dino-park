import React, { Component } from "react";
import DinosaurList from '../components/paddock_dino_container/DinosaurList';
import TransferDinosaurForm from '../components/forms/TransferDinosaurForm';
import ButtonList from '../components/buttons/ButtonList';

class DinosaurContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfDinos: []
    }
  }

  componentDidMount(){
    const url = 'http://localhost:8080/dinosaurs'
    fetch(url)
    .then(res => res.json())
    .then(returnedDinos => this.setState({listOfDinos: returnedDinos}))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="paddock">
        <h4>I am the paddock component</h4>
        <DinosaurList listOfDinos={this.state.listOfDinos}/>
        <ButtonList/>
        <TransferDinosaurForm />
      </div>
    );
  }
}

export default DinosaurContainer;
