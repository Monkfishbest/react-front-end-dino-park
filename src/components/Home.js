import React from 'react';
import './home.css';

const Home = () => (
  <div className="home-page">
    <div className="text-container">
      <div className="title">
        <h4>Home</h4>
        <p>Hello and welcome to DinoPark mangagment system.</p>
      </div>
      <div className="guide">
        <h4>User Guide!</h4>
        <p>Use the links above to navigate the web app</p>
        <p>Park Map contains a list of the current paddocks along with the add paddock functionality</p>
        <p>Park Map also contains the functionally for adding and removing dinosaurs </p>
      </div>
    </div>
  </div>
)

export default Home;
