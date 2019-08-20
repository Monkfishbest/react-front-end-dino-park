import React from "react";

const PaddockListItem = (props) => {
  return (
    <li className="paddock-list-item">
      {props.paddock.name}
    </li>
  );
}

export default PaddockListItem;
