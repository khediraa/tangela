import React, { Component } from 'react';
import * as BikeHandler from "./BikeHandler.js";
import "./css/addBike.css";

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import {Route, Link} from 'react-router-dom';

function validate(gears, price, title, startDate, endDate){
    return{
        gears:      gears <= 0 || gears === '',
        price:      price < 0 || price === '',
        title:      title === '',
        startDate:  startDate === '',
        endDate:    endDate === ''
    }
}

class AddBike extends Component{

    constructor(props) {
        super(props);
        this.state = {latitude:'', longitude: '',
                     frame:'wmn', type:'mtb', 
                     gears:'', price:'', 
                     desc:'', title:'',
                     startDate: '',
                     endDate: '',
                     touched: {
                                gears: false,
                                price: false,
                                title: false
                            }};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    valid() {
        const {gears, price, title, startDate, endDate} = this.state;
        return gears > 0 && price >= 0 && title != '' && startDate != '' && endDate != '';
    }

    handleChange(event) {
        const target = event.target;
        const tmp = target.name;
        this.setState({[tmp]: target.value});

    }

    handleBlur = field => evt => {
        this.setState({
          touched: { ...this.state.touched, [field]: true }
        });
      };

    canBeSubmitted() {
        const errors = this.validate(this.state.gears, this.state.price, this.state.title, this.state.startDate, this.state.endDate);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
      }

    handleSubmit(event) {
        // alert('Searched: ' + 'CITY: ' +  this.state.city + 'START DATE: ' + this.state.startDate.toString()
        // + 'END DATE: '+ this.state.endDate.toString() + 'TYPE: ' + this.state.bike_type );
        // this.props.history.push('/Items');
        //alert(this.state.startDate.toString() + "  " + this.state.endDate.toString());

        if(this.valid()){
            BikeHandler.addBike(this.state.title, this.state.latitude, this.state.longitude,  this.state.frame, this.state.type,
                                     this.state.gears, this.state.price, this.state.startDate, this.state.endDate, this.state.desc);

            this.setState({latitude:'', longitude: '', frame:'wmn', type:'mtb', gears:'', price:'', desc:'', title:''});
            return;
        }

        event.preventDefault();
    }

    render() {
        const errors = validate(this.state.email, this.state.password);
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
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    minimumNights={0}
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
                                    className={shouldMarkError("password") ? "error" : ""}
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
                                    className={shouldMarkError("password") ? "error" : ""}
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
                                    className={shouldMarkError("password") ? "error" : ""}
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
                            <button disabled={!isDisabled} type="submit" value="Submit">Submit</button>
                            {/*</Link>*/}

                        </div>

                    </div>
                </form>

            </div>
        )

    }

}

export default AddBike;
