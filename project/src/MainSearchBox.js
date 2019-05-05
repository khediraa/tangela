import React, { Component } from 'react';
import "./css/mainSearchBox.css";

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import ItemList from './ItemList';

import {Route, Link} from 'react-router-dom';

class MainSearchBox extends Component {

  constructor(props) {
    super(props);
    this.state = {city: '', bike:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({city: target.value});

  }

  handleSelect(event){
    const target = event.target;
    this.setState({bike: target.value});
    console.log(this.state);
  }

  handleSubmit(event) {
    // alert('Searched: ' + 'CITY: ' +  this.state.city + 'START DATE: ' + this.state.startDate.toString()
    // + 'END DATE: '+ this.state.endDate.toString() + 'TYPE: ' + this.state.bike );
    // this.props.history.push('/Items');
    event.preventDefault();
  }

  render(){
    const calendarChange =  title => (...args) => console.log(title,args);
    return(
      <div id="search">
      <h1> BOOK </h1>

      <form onSubmit={this.handleSubmit}>
      <label>
      <input type="text" value={this.state.city} onChange={event => {event.preventDefault();
        this.handleChange(event);}}
        placeholder="City" />


        <DateRangePicker
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />

        <label>
        Type

        <select type="text" value={this.state.bike} onChange={event => {event.preventDefault(); this.handleSelect(event);}} >
        <option value="mtb">Mountain Bike</option>
        <option value="hybrid">Hybrid Bike</option>
        <option selected value="citybike">City Bike</option>
        </select>

        </label>
        </label>
        <Link to='/Items' >
          <input type="submit" value="Submit" />
        </Link>
        </form>

        </div>
      )
    }
  }
  export default MainSearchBox;
