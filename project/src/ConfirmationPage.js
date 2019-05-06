import React, { Component } from 'react';
import "./css/default.css";

class ConfirmationPage extends Component {
    render(){
        return(
            <div class="confirmation">
            <h1> Thank you for your payment! </h1>
            <p> The code for your bike is 0734 </p> 
            </div>
        )
    }
}
export default ConfirmationPage;
