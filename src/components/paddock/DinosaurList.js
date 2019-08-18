import React from 'react';
import DinosaurListItem from './DinosaurListItem'

const DinosaurList = (props) => {
  const dinoNodes = props.dinoList.map((dino, index) => {
    return (
      <DinosaurListItem key={index} dino={dino}></DinosaurListItem>
    )
  })

    return(
      <div className="dinosaur-list">
        <h4>Dinosaur List:</h4>
        {dinoNodes}
      </div>
    );
}

export default DinosaurList;
