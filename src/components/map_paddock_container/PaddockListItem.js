import React from "react";
import {Link} from "react-router-dom";
import './PaddockListItem.css'; 


const PaddockListItem = (props) => {
  return (
    <li className="paddock-list-item">
      <Link to={'park-map/paddocks/'+props.paddock.name}>{props.paddock.name}</Link>
    </li>
  );
}

export default PaddockListItem;
