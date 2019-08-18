import React, { Component } from "react";
import DinosaurListItem from './DinosaurListItem'

class DinosaurList extends Component {
  const dinoNodes = props.dinoList.map((dino, index) => {
    return (
      <DinosaurListItem key={index} dino={dino}</DinosaurListItem>
    )
  })

  render() {
    return(
      <div className="dinosaur-list">
        <h4>Dinosaur List:</h4>
        {dinoNodes}
      </div>
    );
  }
}

export default DinosaurList;
