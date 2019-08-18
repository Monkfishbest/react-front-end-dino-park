import React, { Component } from "react";
import DinosaurList from './DinosaurList';
import ButtonList from '../buttons/ButtonList';

class Paddock extends Component {
  render() {
    return (
      <div className="paddock">
        <h4>i am the paddock component</h4>
        <DinosaurList/>
        <ButtonList/>
      </div>
    );
  }
}

export default Paddock;
