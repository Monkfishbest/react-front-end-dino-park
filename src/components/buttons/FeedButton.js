import React, { Component } from "react";

class FeedButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({url: this.props.url})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.url !== "") {
      fetch(this.state.url)
      .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div className="feed-button">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" value="feed">Feed</button>
        </form>
      </div>
    );
  }
}

export default FeedButton;
