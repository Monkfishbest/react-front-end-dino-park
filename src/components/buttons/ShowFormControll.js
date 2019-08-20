import React, { Component } from 'react';

class ShowFormControll extends Component {
  constructor(props){
    super(props);
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleHideFormClick = this.handleHideFormClick.bind(this);
    this.state = {
      showForm: false
    };
  }

  handleShowFormClick(){
    this.setState({showForm:true})
  }

  handleHideFormClick(){
    this.setState({showForm:false})
  }

}
