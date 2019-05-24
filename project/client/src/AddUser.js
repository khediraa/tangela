import React, { Component } from 'react';
import * as UserHandler from "./UserHandler.js";
import "./css/addBike.css";
import paypallogo from './paypal-logo.png';


//import {Route, Link} from 'react-router-dom';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', fname: '', lname: '', tel: '', password: '', confPassword: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const tmp = target.name;
    this.setState({ [tmp]: target.value });

  }

  valid() {
    const { password, confPassword } = this.state;
    return password === confPassword;
  }

  handleSubmit(event) {

    if (this.valid()) {
      UserHandler.addUser(this.state.email, this.state.fname, this.state.lname, this.state.tel, this.state.password, this.state.confPassword);

      this.setState({ email: '', fname: '', lname: '', tel: '', password: '', confPassword: '' });
      //return;
    }
    else {
      //This will preferably be changed to act just like addBike. The submit button goes from disabled to enabled?
      alert('Passwords must match! Please try again.')
    }

    event.preventDefault();
  }

  render() {

    return (
      <div class="background">
      <div id="Wrapper">
        {/* BOX WITH INFORMATION ABOUT THE USER */}
        <form onSubmit={this.handleSubmit}>
        <h2>Register new renter</h2>
          <div id="Info">
            <div id="AddInfo">
              <label>
                Email address
                <input type="email" name="email" required placeholder="" value={this.state.email} onChange={this.handleChange} />
              </label>
            </div>
            <div id="AddInfo">
              <label>
                First name
                <input type="text" name="fname" required placeholder="" value={this.state.fname} onChange={this.handleChange} />
              </label>
            </div>
            <div id="AddInfo">
              <label>
                Last name
                <input type="text" name="lname" required placeholder="" value={this.state.lname} onChange={this.handleChange} />
              </label>
            </div>
            <div id="AddInfo">
              <label>
                Cell phone number
                <input type="tel" name="tel" required size="20" minLength="9" maxLength="14" placeholder="Including country code" value={this.state.tel} onChange={this.handleChange} />
              </label>
            </div>
            <div id="AddInfo">
              <label>
                Password (6 characters minimum)
                <input type="password" name="password" minLength="6" required placeholder="" value={this.state.password} onChange={this.handleChange} />
              </label>
            </div>
            <div id="AddInfo">
              <label>
                Confirm password
                <input  type="password" name="confPassword" minLength="6" required placeholder="" value={this.state.confPassword} onChange={this.handleChange} />
              </label>
            </div>
            <div id="AddSubmit">
              {/*<Link to='/Items' >*/}
              <button type="submit" value="Submit">Submit</button>
              {/*</Link>*/}
            </div>
          </div>
        </form>
        <p className='usepaypal'>Payouts: <br/>A Paypal-connected email is required in order 
        to receive payouts. <br/> If you choose to use another email address your earnings will be donated to WWF. </p>

        <div class='paypallogowrapper'>
              <img align='right' src={paypallogo} alt="Logo" />
            </div>
        

      </div>
      
      </div>
    )
  }
}

export default AddUser;
