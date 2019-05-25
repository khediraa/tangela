import React, { Component, useContext, useState } from 'react';
import logo from './hoi.png';
import "./css/navbar.css";
import history from './history'

import {Route, Link} from 'react-router-dom';
import {AppContext} from './App';
import * as UserHandler from './UserHandler';

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
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const printValues = e => {
    e.preventDefault();
    console.log(form.email, form.password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    UserHandler.login(form.email, form.password)
    .then(response => {
      switch(response) {
        case 'ok': 
          globalStates.setState({login: true, email: form.email});
          break;
        case 'wrong email':
          setEmailError(true);
          setPasswordError(false);
          break;
        case 'wrong password':
          setPasswordError(true);
          setEmailError(false);
          break;
      }
    })
  };

  const handleLogout = () => {
    globalStates.setState({login: false, email: ''});
    history.push('/home');
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
        <div className="links">
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
        <li onClick={handleLogout}>
            Logout
        </li>
       </div>
      </nav>
    )
  } else{
    return (
      <nav>
        <Link to='/Home'>
          <img src={logo} alt="Hoi logo"/>
        </Link>
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <div>
              <input type="email" placeholder="Email" name="email" value={form.email} 
                  onChange={updateField}/>
              <label className="error" style={{visibility: emailError ? "visible" : "hidden"}}>Can not find this email.</label>
            </div>
            <div>
              <input type="password" placeholder="Password" name="password" value={form.password} 
                  onChange={updateField}/>
              <label className="error" style={{visibility: passwordError ? "visible" : "hidden"}}>Wrong password.</label>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="links">
          <Link to='/AddUser'>
            <li>
              Add bike
            </li>
          </Link>
          <Link to='/AddUser'>
            <li>
              Register
            </li>
          </Link>
        </div>
        {/* <button onClick={printValues}/> */}
      </nav>
    )
  } 
}

export default Navbar;
