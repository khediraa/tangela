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

// Adds a new user to the JSON
//TODO the variable user never updates the JSON-file
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
export function assignBikeToUser(email, id) {
  users[email].bikes.push(id.toString());
  console.log('Bike id ' + id + ' was successfully assigned to ' + email);
  return true;
}
//Returns all bikes that belongs to a certain user
export function getMyBikes(email) {
  return users[email].bikes;
}
