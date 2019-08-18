import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Map from '../components/Map';
import Faq from '../components/FAQ';
import About from '../components/About';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React, { Component } from "react";

class ParkContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
        <Route path="/home" component={Home}/>
        <Route path="/map" component={Map}/>
        <Route path="/About" component={About}/>
        <Route path="/FAQ" component={Faq}/>
        </Switch>
        </React.Fragment>
      </Router>

</div>
    );
  }
}

export default ParkContainer;
