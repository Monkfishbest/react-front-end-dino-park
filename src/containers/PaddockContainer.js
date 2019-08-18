import React, {Component} from 'react';
import PaddockList from '../components/map/PaddockList';
import ButtonList from '../components/buttons/ButtonList';

class PaddockContainer extends Component {
  render(){
    return (
      <div className=PaddockContainer">
      <PaddockList/>
      <ButtonList/>
      </div>
    )
  }
}

export default PaddockContainer;
