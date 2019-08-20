import React, { Component } from 'react';

class ShowFormControll extends Component {
  constructor(props){
    super(props);
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleHideFormClick = this.handleHideFormClick.bind(this);
    this.state = {
      isShowForm: false
    };
  }

  handleShowFormClick(){
    this.setState({isShowForm:true})
  }

  handleHideFormClick(){
    this.setState({isShowForm:false})
  }

  render() {
    const isShowForm = this.state.isShowForm;
    let button;

    if (isShowForm) {
      button = <AddDinosaurButton onClick={this.handleHideFormClick}/>
    } else {
      button = <AddDinosaurButton onClick={this.handleShowFormClick}/>
    }
    return (
      <div>
      <AddDinosaurButton isShowForm={isShowForm}/>
      </div>
    )
  }
}
