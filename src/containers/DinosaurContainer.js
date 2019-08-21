import React, { Component } from "react";
import DinosaurList from '../components/paddock_dino_container/DinosaurList';
import RemoveDinosaurButton from '../components/buttons/RemoveDinosaurButton';
import Emoji from '../components/Emoji';
import './DinosaurContainer.css';

class DinosaurContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfDinos: [],
      paddockName: "",
      filteredDinos: []
    }
    this.filterDinosaurs = this.filterDinosaurs.bind(this)
  }

  filterDinosaurs() {
    let dinoArray = this.state.listOfDinos;
    let filteredDinos = []
    for (let i = 0; i < dinoArray.length; i++) {
      let dino = dinoArray[i];
      if (dino.paddock.name === this.state.paddockName) {
        filteredDinos.push(dino);
      }
    }
    return filteredDinos
  }

  componentDidMount(){
    const url = 'http://localhost:8080/dinosaurs'
    fetch(url)
    .then(res => res.json())
    .then(returnedDinos => this.setState({listOfDinos: returnedDinos, paddockName: this.props.match.params.paddock}, () => this.filterDinosaurs()))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="paddock">
        <Emoji symbol="🌳" label="deciduous tree"/>
        <div className="text">
          <h1>{this.state.paddockName} Paddock</h1>
          <h2>Dinosaurs currently in paddock:</h2>
          <DinosaurList listOfDinos={this.filterDinosaurs()}/>
        </div>
        <div className="remove">
        <RemoveDinosaurButton dinosaurList={this.state.listOfDinos}/>
        </div>
      </div>
    );
  }
}

export default DinosaurContainer;
