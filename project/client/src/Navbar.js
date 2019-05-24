import React, { Component, useContext } from 'react';
import logo from './hoiWhite.png';
import "./css/navbar.css";

import {Route, Link} from 'react-router-dom';
import {AppContext} from './App';



function Navbar() {

  const state = useContext(AppContext);
  

    return(
      <nav>
        <Link to='/Home'>
          <img src={logo} alt="Hoi logo"/>
        </Link>


        <Link to={{ pathname:'/AddBike', state:{email:state.email}}}>
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
export default Navbar;
