import React from "react";
import {Link} from "react-router-dom";
import './PaddockListItem.css';


const PaddockListItem = (props) => {
  return (
    <div className="paddock-list-item">
      <Link to={'park-map/paddocks/'+props.paddock.name}>{props.paddock.name}</Link>
    </div>
  );
}

export default PaddockListItem;
