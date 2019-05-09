import React, { Component } from 'react';
import * as BikeHandler from "./BikeHandler.js";
import "./css/addBike.css";

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import {Route, Link} from 'react-router-dom';

class AddBike extends Component{

    constructor(props) {
        super(props);
        this.state = {longitude: '', latitude:'', type:'', dates:[], frame:'', gears:'', price:'', desc:'', title:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const tmp = target.name;
        this.setState({[tmp]: target.value});
    
    }
    
    handleSelect(event){
        const target = event.target;
        this.setState({bike_type: target.value});
        console.log(this.state);
    }
    
    handleSubmit(event) {
        // alert('Searched: ' + 'CITY: ' +  this.state.city + 'START DATE: ' + this.state.startDate.toString()
        // + 'END DATE: '+ this.state.endDate.toString() + 'TYPE: ' + this.state.bike_type );
        // this.props.history.push('/Items');
        BikeHandler.addBike(this.state.title, this.state.type, this.state.longitude, this.state.latitude, this.state.frame,
                                 this.state.gears, this.state.price, this.state.dates, this.state.desc);
        event.preventDefault();
    }

    render() {
        return(
            <div id="Wrapper">

                {/*
                
                BOX WITH LOCATION AND DATE
                
                */}
                <form onSubmit={this.handleSubmit}>
                <div id="DateNLoc">
                
                    <div id="AddDate">
                    <DateRangePicker
                    //startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    //startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    //endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    //endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    //onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
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
                                Title:
                                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                            </label>
                        </div>

                        {/*        

                            TYPE     
                        
                        */}
                        <div id="AddFrame">
                        <label>
                        
                        Frame
                        
                        <select type="text" value={this.state.bike_frame} onChange={event => {event.preventDefault(); this.handleSelect(event);}} >
                        <option selected value="mtb">Women's</option>
                        <option value="city">Men's</option>
                        <option value="hybrid">Unisex</option>
                        <option value="electric">Kids'</option>
                        
                        </select>
                        </label>
                        </div>

                        <div id="AddType">
                        <label>
                    
                        Type
                    
                        <select type="text" name="type" value={this.state.type} onChange={event => {event.preventDefault(); this.handleSelect(event);}} >
                        <option selected value="mtb">Mountain Bike</option>
                        <option value="hybrid">Hybrid Bike</option>
                        <option value="city">City Bike</option>
                        <option value="electric">Electric Bike</option>
                    
                        </select>
                        </label>
                        </div>

                        {/*        

                            Frame     
                        
                        */}

                        <div id="AddFrame">
                        <label>
                    
                        Frame
                    
                        <select type="text" name="frame" value={this.state.frame} onChange={event => {event.preventDefault(); this.handleSelect(event);}} >
                        <option selected value="mtb">dam</option>
                        <option value="hybrid">unisex</option>
                        <option value="city">herr</option>
                        <option value="electric">barn</option>
                    
                        </select>
                        </label>
                        </div>

                        {/*        

                            Gears     
                        
                        */}

                        <div id="AddGears">
                            <label>
                                Gears:
                                <input type="number" name="gears" value={this.state.gears} onChange={this.handleChange} />
                            </label>
                        </div>

                        {/*        

                            Price     
                        
                        */}

                        <div id="AddPrice">
                            <label>
                                Price:
                                <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />
                            </label>
                        </div>

                        {/* 

                             Desription

                        */}

                        <div id="AddDesc">
                            <label>
                                Description:
                                <textarea type="text" name="desc" value={this.state.desc} onChange={this.handleChange} />
                            </label>
                        </div>

                        <div id="AddSubmit">

                            {/*<Link to='/Items' >*/}
                            <input type="submit" value="Submit"/>
                            {/*</Link>*/}

                        </div>
                        
                    </div>
                </form>

            </div>
        )

    }

}

export default AddBike;