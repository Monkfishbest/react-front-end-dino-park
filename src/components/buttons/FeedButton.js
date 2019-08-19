import React, { Component } from "react";
import './Buttons.css';

class FeedButton extends Component {
  render() {
    return (
      <div className="feed-button">
        <button type="button" value="feed">Feed</button>
      </div>
    );
  }
}

export default FeedButton;
