import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Faq from '../components/FAQ';
import About from '../components/About';
import PaddockContainer from './PaddockContainer'
import DinosaurContainer from './DinosaurContainer'
import ErrorPage from '../components/ErrorPage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Component } from "react";

class ParkContainer extends Component {
  render() {
    return (
      <div className="park-container">
        <Router>
          <React.Fragment>
          <NavBar/>
          <Switch>
          <Route exact path={["/home", "/"]} component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/park-map/paddocks/:paddock" component={DinosaurContainer}/>
          <Route path="/park-map" component={PaddockContainer}/>
          <Route path="/faq" component={Faq}/>
          <Route component={ErrorPage}/>
          </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default ParkContainer;
