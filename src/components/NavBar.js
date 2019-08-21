import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <ul className="navbar">
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/park-map">Park Map</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="FAQ">FAQ</Link>
    </li>
    <li>
      <Link className="red" to="rampage">RAMPAGE!</Link>
    </li>
  </ul>
)

export default NavBar;
