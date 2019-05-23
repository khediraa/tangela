import React, { Component, useContext } from 'react';
import logo from './hoi.png';
import "./css/navbar.css";

import {Route, Link} from 'react-router-dom';
import {AppContext} from './App';

function logout(){
  
}

function handleSubmit(event) {

  event.preventDefault();

}

function  Navbar(props) {

  const state = useContext(AppContext);
  
  if(state.login){
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
        <li onClick={logout()}>
            Logout
        </li>
      </nav>
    )
  } else{
    return (
      <nav>
        <Link to='/Home'>
          <img src={logo} alt="Hoi logo"/>
        </Link>
        <Link to='/AddUser'>
          <li>
            Add bike
          </li>
        </Link>
        <Link to='/AddUser'>
          <li>
            Profile
          </li>
        </Link>
        <Link to='/AddUser'>
          <li>
            Register
          </li>
        </Link>
        <div class="login-container">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username"/>
            <input type="text" placeholder="Password" name="psw"/>
            <button type="submit">Login</button>
          </form>
        </div>
      </nav>
    )
  }
}
export default Navbar;
