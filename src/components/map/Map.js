import React, { Component } from "react";
import PaddockList from './PaddockList';

class Map extends Component {
  render() {
    return (
      <div className="map">
        <h4>i am the map component</h4>
        <PaddockList/>
      </div>
    );
  }
}

export default Map;