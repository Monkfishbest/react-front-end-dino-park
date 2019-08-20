import React, { Component } from "react";
import DinosaurList from '../components/paddock_dino_container/DinosaurList';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
        <span>&#127795;</span>
        <DinosaurList listOfDinos={this.state.listOfDinos}/>
        <div className="park-container">
        <h1>hi</h1>
        </div>
      </div>
    );
  }
}

export default DinosaurContainer;
