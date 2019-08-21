import React from 'react';
import DinosaurListItem from './DinosaurListItem'

const DinosaurList = (props) => {

  let dinoNodes = []

  if (props.listOfDinos !== undefined) {
    dinoNodes = props.listOfDinos.map((dino, index) => {
      return (
        <DinosaurListItem key={index} dino={dino}></DinosaurListItem>
      )
    })
  }

  return(
    <div className="dinosaur-list">
      <ul>
        {dinoNodes}
      </ul>
    </div>
  );
}

export default DinosaurList;
