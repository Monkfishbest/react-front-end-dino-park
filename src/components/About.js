import React, { Component } from "react";
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>Final Group Project at CodeClan</h2>
        <h3>Upping the ante before graduation!</h3>
        <p>Our team of 5 chose to create a Dinosaur Park Management System (!) to consolidate our learning of Java, Spring, Javascript and React</p>

        <div className="about-card">
          <h4>Chae Nicholson</h4>
          <img alt="Chae Nicholson" src={require('./images/Chae.jpg')}/>
          <br/>
          <a href="https://github.com/chaenich">GitHub</a>
        </div>

        <div className="about-card">
          <h4>John Patrick McNeill</h4>
          <img alt="A stunnly handsome devil!" src={require('./images/John.jpg')}/>
          <br/>
          <a href="https://github.com/Monkfishbest">GitHub</a>
        </div>

        <div className="about-card">
          <h4>Katherine Kerr</h4>
          <img alt="Katherine Kerr" src={require('./images/Katherine.jpg')}/>
          <br/>
          <a href="https://github.com/KatherineLKerr">GitHub</a>
        </div>

        <div className="about-card">
          <h4>Stephanie Scullion</h4>
          <img alt="Steph Scullion" src={require('./images/Steph.jpg')}/>
          <br/>
          <a href="https://github.com/StephanieLaraScully">GitHub</a>
        </div>

        <div className="about-card">
          <h4>Robert Tam</h4>
          <img alt="Robert Tam" src={require('./images/Robert.jpg')}/>
          <br/>
          <a href="https://github.com/gadgetguy82">GitHub</a>
        </div>

      </div>
    );
  }
}

export default About;
