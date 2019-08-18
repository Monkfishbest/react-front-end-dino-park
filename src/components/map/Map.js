import React, { Component } from "react";
import PaddockList from './PaddockList';
import ButtonList from '../buttons/ButtonList'

class Map extends Component {
  render() {
    return (
      <div className="map">
        <h4>i am the map component</h4>
        <PaddockList/>
        <ButtonList/>
      </div>
    );
  }
}

export default Map;
