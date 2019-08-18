import React, {Component} from 'react';
import PaddockList from '../components/map/PaddockList';
import ButtonList from '../components/buttons/ButtonList';

class PaddockContainer extends Component {


    constructor(props) {
      super(props);
      this.state = {
        listofPaddocks: []
      };
    }

  componentDidMount(){
    const url = 'PLACEHOLDER-PLACEHOLDER-PLACEHOLDER'
    fetch(url)
    .then(res => res.json())
    .then(returnedDinos => this.setState({listOfDinos: returnedDinos, listOfPaddocks: returnedDinos}))
    .catch(err => console.error(err))
  }


  render(){
    return (
      <div className="PaddockContainer">
      <PaddockList paddockList={this.state.listOfPaddocks}/>
      <ButtonList/>
      </div>
    )

  }
}

export default PaddockContainer;
