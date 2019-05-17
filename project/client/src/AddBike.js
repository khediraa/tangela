import React, { Component } from 'react';
import moment from 'moment';
import * as BikeHandler from "./BikeHandler.js";
import "./css/addBike.css";

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import {Route, Link} from 'react-router-dom';

function validate(gears, price, title){
    return{
        gears:      gears <= 0,
        price:      price < 0,
        title:      title.lenght === 0
    };
}

class AddBike extends Component{

    constructor(props) {
        super(props);
        this.state = {latitude:'', longitude: '',
                     frame:'wmn', type:'mtb',
                     gears:'', price:'',
                     desc:'', title:'',
                     startDate: moment(),
                     endDate: moment(),
                     touched: {
                                gears: false,
                                price: false,
                                title: false
                            }};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*

        The user has made an input in Gears, Price, Title, or Description

    */
    handleChange(event) {
        const target = event.target;
        const tmp = target.name;
        this.setState({[tmp]: target.value});
        console.log("change")

    }

    /*

        The user has clicked on an input-field

    */

    handleBlur = field => evt => {
        this.setState({
          touched: { ...this.state.touched, [field]: true }
        });
    };

    /*

        Can the current inputs be submitted as a whole bike?

    */

    canBeSubmitted() {
        const errors = validate(this.state.gears, this.state.price, this.state.title);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        console.log("canBeSubmitted: " + isDisabled);
        return !isDisabled;
    }

    /*

        The user has changed start or end date.

    */

    handleDateChange = ({ startDate, endDate }) =>{
      this.setState({ startDate, endDate });
      console.log("datechange" + this.state.startDate.toString())
    };

    handleSubmit(event) {
        // alert('Searched: ' + 'CITY: ' +  this.state.city + 'START DATE: ' + this.state.startDate.toString()
        // + 'END DATE: '+ this.state.endDate.toString() + 'TYPE: ' + this.state.bike_type );
        // this.props.history.push('/Items');
        //alert(this.state.startDate.toString() + "  " + this.state.endDate.toString());
        event.preventDefault();
        console.log("Hallo1");
        if(this.canBeSubmitted()){
            console.log("Hallo2");
            console.log(this.state.frame + ' ' + this.state.type + ' '
                + this.state.gears.toString() + ' ' + this.state.price.toString() + ' '
                + this.state.title + ' ' + this.state.startDate.toString());

            BikeHandler.addBike(this.state.title, this.state.latitude, this.state.longitude,  this.state.frame, this.state.type,
                this.state.gears, this.state.price, this.state.startDate.toDate(), this.state.endDate.toDate(), this.state.desc);

            this.setState({latitude:'', longitude: '', frame:'wmn', type:'mtb', gears:'', price:'', desc:'', title:''});

            return;
        }
        console.log("Hallo3");
    }

    render() {
        const errors = validate(this.state.gears, this.state.price, this.state.title);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        const shouldMarkError = field => {
          const hasError = errors[field];
          const shouldShow = this.state.touched[field];

          return hasError ? shouldShow : false;
        };

        return(
            <div id="Wrapper">

                {/*

                BOX WITH LOCATION AND DATE

                */}
                <form onSubmit={this.handleSubmit}>
                <div id="DateNLoc">

                    <div id="AddDate">
                    <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    minimumNights={0}
                    displayFormat="DD/MM/YYYY"
                    />
                    </div>
                </div>

                {/*

                BOX WITH INFORMATION ABOUT THE BIKE

                */}

                <div id="Info">


                        {/*

                            Title

                        */}


                        <div id="AddTitle">
                            <label>
                                <input type="text" name="title"
                                    placeholder= "Name of your bike"
                                    className={shouldMarkError("title") ? "error" : ""}
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur("title")} />
                            </label>
                        </div>

                        {/*

                            Frame

                        */}

                        <div id="AddFrame">
                        <label>

                        Frame

                        <select type="text" name="frame"
                            value={this.state.frame}
                            onChange={this.handleChange} >
                        <option value="wmn">Women's</option>
                        <option value="men">Men's</option>
                        <option value="uni">Unisex</option>
                        <option value="kid">Kids'</option>

                        </select>
                        </label>
                        </div>

                        <div id="AddType">
                        <label>

                        Type

                        <select type="text" name="type" value={this.state.type} onChange={this.handleChange} >
                        <option value="mtb">Mountain Bike</option>
                        <option value="hybrid">Hybrid Bike</option>
                        <option value="city">City Bike</option>
                        <option value="electric">Electric Bike</option>

                        </select>
                        </label>
                        </div>


                        {/*

                            Gears

                        */}

                        <div id="AddGears">
                            <label>
                                <input type="number" name="gears"
                                    className={shouldMarkError("gears") ? "error" : ""}
                                    placeholder= "Number of gears"
                                    value={this.state.gears}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur("gears")}/>
                            </label>
                        </div>

                        {/*

                            Price

                        */}

                        <div id="AddPrice">
                            <label>
                                <input type="number" name="price"
                                    placeholder= "Cost per day"
                                    className={shouldMarkError("price") ? "error" : ""}
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur("price")}/>
                            </label>
                        </div>

                        {/*

                             Desription

                        */}

                        <div id="AddDesc">
                            <label>
                                <textarea type="text" name="desc" placeholder= "Enter Description (Optional)" value={this.state.desc} onChange={this.handleChange} />
                            </label>
                        </div>

                        <div id="AddSubmit">

                            {/*<Link to='/Items' >*/}
                            <button disabled={isDisabled} type="submit" value="Submit">Submit</button>
                            {/*</Link>*/}

                        </div>

                    </div>
                </form>

            </div>
        )

    }

}

export default AddBike;