import React from "react";
import RemoveDinosaurListItem from './RemoveDinosaurListItem'
import './RemoveDinosaurList.css'

const RemoveDinosaurList = (props) => {
  const dinosaurNodes = props.dinosaurList.map((dinosaur, index) => {
    return (
      <RemoveDinosaurListItem key={index} dinosaur={dinosaur}
        onRemoveDinoClick={props.onRemoveDinoClick}></RemoveDinosaurListItem>
    )
  });

  return(
    <ul className="remove-dinosaur-list">
    {dinosaurNodes}
    </ul>
  );
}

export default RemoveDinosaurList;
