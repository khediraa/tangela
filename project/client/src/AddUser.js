import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from './App';
import * as UserHandler from "./UserHandler.js";
import "./css/addBike.css";


function AddUser(props) {
  const {email: loggedInUser} = useContext(AppContext);

  // internal state
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (password === confPassword) {
      UserHandler.addUser(email, fname, lname, tel, password, confPassword)
      .then((addedUser) => {
        if (addedUser) {
          loggedInUser = email;
        }
        else {
          alert('There is already a user with this email.');
        }
      });
      setEmail('');
      setFname('');
      setLname('');
      setTel('');
      setPassword('');
      setConfPassword('');
    }
    else {
      //This will preferably be changed to act just like addBike. The submit button goes from disabled to enabled?
      alert('Passwords must match! Please try again.')
    }
  }

  const isEnabled = true;
  return (
    <div id="Wrapper">
      {/* BOX WITH INFORMATION ABOUT THE USER */}
      <form onSubmit={handleSubmit}>
          <h2>Register an account</h2>
        <div id="Info">
          <div id="AddInfo">
            <label>
              Email address
                <input 
                type="email" 
                name="email" 
                required 
                placeholder="" 
                value={email} 
                onChange={event => {setEmail(event.target.value)}} />
            </label>
          </div>
          <div id="AddInfo">
            <label>
              First name
                <input 
                type="text" 
                name="fname" 
                required 
                placeholder="" 
                value={fname} 
                onChange={event => {setFname(event.target.value)}} />
            </label>
          </div>
          <div id="AddInfo">
            <label>
              Last name
                <input 
                type="text" 
                name="lname" 
                required 
                placeholder="" 
                value={lname} 
                onChange={event => {setLname(event.target.value)}} />
            </label>
          </div>
          <div id="AddInfo">
            <label>
              Cell phone number
                <input 
                type="tel" 
                name="tel" 
                required 
                size="20" 
                minLength="9" 
                maxLength="14" 
                placeholder="Including country code" 
                value={tel} 
                onChange={event => {setTel(event.target.value)}} />
            </label>
          </div>
          <div id="AddInfo">
            <label>
              Password (6 characters minimum)
                <input 
                type="password" 
                name="password"
                minLength="6" 
                required
                placeholder="" 
                value={password} 
                onChange={event => {setPassword(event.target.value)}} />
            </label>
          </div>
          <div id="AddInfo">
            <label>
              Confirm password
                <input 
                type="password" 
                name="confPassword" 
                minLength="6" 
                required
                placeholder="" 
                value={confPassword} 
                onChange={event => {setConfPassword(event.target.value)}} />
            </label>
          </div>
          <div id="AddSubmit">
            {/*<Link to='/Items' >*/}
            <button disabled={!isEnabled} type="submit" value="Submit">Submit</button>
          </div>

        </div>
      </form>

    </div>
  )
}


export default AddUser;
