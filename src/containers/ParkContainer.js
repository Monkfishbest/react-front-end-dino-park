import NavBar from "../components/NavBar";
import Home from "../components/Home";
import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



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
        </Switch>
        </React.Fragment>
      </Router>
</div>
    );
  }
}

export default ParkContainer;
