import React, { Component } from 'react';
import * as UserHandler from "./UserHandler.js";
import "./css/addBike.css";

//import {Route, Link} from 'react-router-dom';

class AddUser extends Component{

    constructor(props) {
        super(props);
        this.state = {email:'', fname: '', lname:'', tel:'', password:'', confPassword:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const tmp = target.name;
        this.setState({[tmp]: target.value});

    }

    valid(){
        const {password,confPassword} = this.state;
        return password===confPassword;
    }

    handleSubmit(event) {

        if(this.valid()){
            UserHandler.addUser(this.state.email, this.state.fname, this.state.lname,  this.state.tel, this.state.password, this.state.confPassword);

            this.setState({email:'', fname: '', lname:'', tel:'', password:'', confPassword:''});
            //return;
        }

        event.preventDefault();
    }

    render() {
        const isEnabled = true;
        return(
            <div id="Wrapper">

                {/*

                BOX WITH INFORMATION ABOUT THE USER

                */}
                <form onSubmit={this.handleSubmit}>
                <div id="Info">

                        {/*

                            Add email (username)

                        */}


                        <div id="AddInfo">
                            <label>
                                Email address
                                <input type="email" name="email" required placeholder= "" value={this.state.email} onChange={this.handleChange} />
                            </label>
                        </div>

                        {/*

                            Add first name

                        */}

                        <div id="AddInfo">
                            <label>
                                First name:
                                <input type="text" name="fname" required placeholder= "" value={this.state.fname} onChange={this.handleChange} />
                            </label>
                        </div>

                        {/*

                            Add last name

                        */}

                        <div id="AddInfo">
                            <label>
                                Last name:
                                <input type="text" name="lname" required placeholder= "" value={this.state.lname} onChange={this.handleChange} />
                            </label>
                        </div>

                        {/*

                            Add first cell number

                        */}

                        <div id="AddInfo">
                            <label>
                                Cell phone number:
                                <input type="tel" name="tel" required size="20" minLength="9" maxLength="14" placeholder= "Including country code" value={this.state.tel} onChange={this.handleChange} />
                            </label>
                        </div>

                        {/*

                            Add password

                        */}

                        <div id="AddInfo">
                            <label>
                                Password (6 characters minimum):
                                <input type="password" name="password" minLength="6" required placeholder=""  value={this.state.password} onChange={this.handleChange} />
                            </label>

                        </div>

                        {/*

                            Confirm password

                        */}

                        <div id="AddInfo">
                            <label>
                                Confirm password
                                <input type="password" name="confPassword" minLength="6" required placeholder=""  value={this.state.confPassword} onChange={this.handleChange} />
                            </label>
                        </div>

                        <div id="AddSubmit">
                            {/*<Link to='/Items' >*/}
                            <button disabled={!isEnabled} type="submit" value="Submit">Submit</button>
                            {/*</Link>*/}
                        </div>

                    </div>
                </form>

            </div>
        )
    }
}

export default AddUser;
