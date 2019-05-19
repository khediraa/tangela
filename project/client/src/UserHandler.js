import React, { useContext } from 'react';
import { AppContext } from './App';

var users = require('./resources/users.json');

//TODO: This function is under development
export function login(email, password) {
  /*state.setState({email:state.email});
   if (users[state.email].password===password){
      state.setState({login:true});
   }*/
}

/* Sends a new user to the server to add it. 
Returns a Promise. Access the status code by chaining .then() to this function call. */
export async function addUser(email, fname, lname, tel, password) {
  var newUser = ({ fname: fname, lname: lname, tel: tel, bikes: [], password: password });

  return fetch('/add-user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: newUser,
      email: email
    })
  })
  .then((response) => {
    return response.status;
  })
}

//This function connects a bike to a user.
export async function assignBikeToUser(email, id) {
  return fetch('/assign-bike', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      bikeId: id
    })
  })
  .then((response) => {
    return response.status;
  })
}
//Returns all bikes that belongs to a certain user
export function getMyBikes(email) {
  return users[email].bikes;
}
