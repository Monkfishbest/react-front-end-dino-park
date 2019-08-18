import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Map from '../components/map/Map';
import Faq from '../components/FAQ';
import About from '../components/About';
import DinosaurList from '../components/paddock/DinosaurList';
import PaddockList from '../components/map/PaddockList';
import ErrorPage from '../components/ErrorPage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React, { Component } from "react";

class ParkContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfDinos: [],
      listOfPaddocks: []
    };
  }

  componentDidMount(){
    const url = 'PLACEHOLDER-PLACEHOLDER-PLACEHOLDER'
    fetch(url)
    .then(res => res.json())
    .then(returnedDinos => this.setState({listOfDinos: returnedDinos, listOfPaddocks: returnedDinos}))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="park-container">
        <h2>This is a park container</h2>
      <Router>
        <React.Fragment>
        <NavBar/>
        <Switch>
        <Route exact path={["/home", "/"]} component={Home}/>
        <Route path="/map" component={Map}/>
        <Route path="/About" component={About}/>
        <Route path="/FAQ" component={Faq}/>
        <Route component={ErrorPage}/>
        </Switch>
        <DinosaurList dinoList={this.state.listOfDinos}/>
        <PaddockList paddockList={this.state.listOfPaddocks}/>
        </React.Fragment>
      </Router>
</div>
    );
  }
}

export default ParkContainer;
