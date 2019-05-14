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
                        <a href="http://google.com">Add bike</a>
                    </li>
                </Link>

                <Link>
                    <li>
                        <a href="http://google.com">Login</a>
                    </li>
                </Link>

                <Link>
                    <li>
                        <a href="http://google.com">Register</a>
                    </li>
                </Link>

            </nav>
        )
    }
}
export default Navbar;