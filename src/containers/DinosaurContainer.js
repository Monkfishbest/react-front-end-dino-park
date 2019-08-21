import React, { Component } from "react";
import DinosaurList from '../components/paddock_dino_container/DinosaurList';

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
    console.log(dinoArray);

    for (let i = 0; i < dinoArray.length; i++) {
      let dino = dinoArray[i];
      console.log(dino);
    }

  }

  componentDidMount(){
    const url = 'http://localhost:8080/dinosaurs'
    fetch(url)
    .then(res => res.json())
    .then(returnedDinos => this.setState({listOfDinos: returnedDinos, paddockName: this.props.match.params.paddock}, () => this.filterDinosaurs() ))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="paddock">
        <DinosaurList listOfDinos={this.state.listOfDinos}/>
        <div className="park-container">
        <h1>hi</h1>
        </div>
      </div>
    );
  }
}

export default DinosaurContainer;
