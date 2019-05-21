import React, { Component } from 'react';
import logo from './hoi.png';
import "./css/navbar.css";

import {Route, Link} from 'react-router-dom';



class Navbar extends Component {
  render(){
    return(
      <nav>
        <Link to='/Home'>
          <img src={logo} alt="Hoi logo"/>
        </Link>

        <Link to='/AddBike'>
          <li>
            Add bike
          </li>
        </Link>

        <Link to='/UserProfile'>
          <li>
            Profile
          </li>
        </Link>

        <Link to='/AddUser'>
          <li>
            Register
          </li>
        </Link>

      </nav>
    )
  }
}
export default Navbar;
