import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Faq from '../components/FAQ';
import About from '../components/About';
import PaddockContainer from './PaddockContainer'
import DinosaurList from '../components/paddock_dino_container/DinosaurList';
import ErrorPage from '../components/ErrorPage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Component } from "react";

class ParkContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfDinos: []
    };
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
          <Route path="/about" component={About}/>
          <Route path="/park-map" component={PaddockContainer}/>
          <Route path="/faq" component={Faq}/>
          <Route component={ErrorPage}/>
          </Switch>
          <DinosaurList dinoList={this.state.listOfDinos}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default ParkContainer;
