import React, { useContext } from 'react';
import {AppContext} from './App';

var users = require('./resources/users.json');

//TODO: check if the email already exists

  export function login(email, password){
   /*state.setState({email:state.email});
    if (users[state.email].password===password){
       state.setState({login:true});
    }*/
  }

  export function addUser(email, fname, lname, tel, password){
    //TODO Must check that the email doesn't exist already
    var newUser= ({fname:fname, lname:lname, tel:tel, bikes:[], password:password});
    users[email]=newUser;
    console.log(newUser);
    console.log(users);
    return true;
  }

  export function connectBike(email, newBike){
      users[email].bikes.push(newBike);
      console.log(users[email].bikes);
      return true;
    }
  
