import React, { Component } from "react";
import Map from '../components/Map.js';

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
      </div>
    );
  }
}

export default ParkContainer;
