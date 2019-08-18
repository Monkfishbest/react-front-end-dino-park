import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <ul className="navbar">
    <li>
      <Link className="white" to="/home">Home</Link>
    </li>
    <li>
      <Link className="white" to="/map">Map</Link>
    </li>
    <li>
      <Link className="white" to="/about">About</Link>
    </li>
    <li>
      <Link className="white" to="FAQ">FAQ</Link>
    </li>
  </ul>
)


export default NavBar;
