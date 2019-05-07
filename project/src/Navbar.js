import React, { Component } from 'react';
import "./css/navbar.css";

class Navbar extends Component {
    render(){
        return(
            <div id="navbar">
                <img src="../img/hoi.png" alt="Hoi logo"/>
                <li><a href="http://google.com">YEYE</a></li>
                <li><a href="http://google.com">aYAY</a></li>
                <li><a href="http://google.com">EYEY</a></li>
            </div>
        )
    }
}
export default Navbar;