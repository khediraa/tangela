import React, { Component, useContext, useState } from 'react';
import logo from './hoi.png';
import "./css/navbar.css";

import {Route, Link} from 'react-router-dom';
import {AppContext} from './App';
import {login, logout} from './UserHandler';

/*

    When the user is not logged in the navbar will display two fields for 
    email and password, and a login-button. When clicking login, login(email, password) from 
    UserHandler is called. They will also not be able to access "profile" and "abb bike" but
    will instead be redirected to the "register user" -page.

    When logged in the navbar will display a logout-button which will call logout() from
    UserHandler.
    
*/


function Navbar (){

  const globalStates = useContext(AppContext);
  const [form, setValues] = useState({email:'', password:''});

  const printValues = e => {
    e.preventDefault();
    console.log(form.email, form.password);
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  if(globalStates.login){
    return(
      <nav>
        <Link to='/Home'>
          <img src={logo} alt="Hoi logo"/>
        </Link>
        <Link to={{ pathname:'/AddBike', state:{email:globalStates.email}}}>
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
        <button onClick={printValues}/>
        <div className="login-container">
          <form onSubmit={login(form.email, form.password)}>
            <input type="text" placeholder="Email" name="email" value={form.email} 
                onChange={updateField}/>
            <input type="password" placeholder="Password" name="password" value={form.password} 
                onChange={updateField}/>
            <button type="submit">Login</button>
          </form>
        </div>
      </nav>
    )
  } 
}

export default Navbar;
