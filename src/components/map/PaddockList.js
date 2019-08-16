import React, { Component } from "react";
import PaddockListItem from './PaddockListItem';

class PaddockList extends Component {
  render() {
    return (
      <div className="paddock-list">
        <h4>Paddock List:</h4>
          <ul>
            <PaddockListItem/>
            <PaddockListItem/>
          </ul>
      </div>
    );
  }
}

export default PaddockList;
