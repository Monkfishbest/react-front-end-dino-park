import React from "react";
import PaddockListItem from './PaddockListItem';

const PaddockList = (props) => {
  const paddockNodes = props.paddockList.map((paddock, index) => {
    return (
      <PaddockListItem key={index} paddock={paddock}></PaddockListItem>
    )
  })

    return(
      <div className="paddock-list">
        {paddockNodes}
      </div>
    );
}

export default PaddockList;
