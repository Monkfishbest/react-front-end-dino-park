ßimport React, { Component } from "react";
import DinosaurList from '../paddock_dino_container/DinosaurList';
import TransferDinosaurForm from '../forms/TransferDinosaurForm';
import ButtonList from '../buttons/ButtonList';

class Paddock extends Component {
  render() {
    return (
      <div className="paddock">
        <h4>I am the paddock component</h4>
        <DinosaurList/>
        <ButtonList/>
        <TransferDinosaurForm />
      </div>
    );
  }
}

export default Paddock;
