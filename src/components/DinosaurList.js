import React, { Component } from "react";
import DinosaurListItem from './DinosaurListItem'

class DinosaurList extends Component {
  render() {
    return (
      <div className="dinosaur-list">
        <h4>Dinosaur List:</h4>
          <ul>
            <DinosaurListItem/>
          </ul>
      </div>
    );
  }
}

export default DinosaurList;
