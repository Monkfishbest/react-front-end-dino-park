import React, { Component } from "react";
import DinosaurList from './DinosaurList';

class Paddock extends Component {
  render() {
    return (
      <div className="paddock">
        <h4>i am the paddock component</h4>
        <DinosaurList/>
      </div>
    );
  }
}

export default Paddock;
