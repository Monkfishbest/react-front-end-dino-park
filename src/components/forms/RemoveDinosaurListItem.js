import React from "react";

const RemoveDinosaurListItem = (props) => {
  return (
    <li className="remove-dinosaur-list-item">
      <p> {props.dinosaur.name} </p>
    </li>
  );
}

export default RemoveDinosaurListItem;
