import React, { Component } from "react";
import ButtonList from '../buttons/ButtonList'

class Map extends Component {
  render() {
    return (
      <div className="map">
        <h4>i am the map component</h4>
        <ButtonList/>
      </div>
    );
  }
}

export default Map;
