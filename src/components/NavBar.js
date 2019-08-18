import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <ul>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/map">Map</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="FAQ">FAQ</Link>
    </li>
  </ul>
)


export default NavBar;
