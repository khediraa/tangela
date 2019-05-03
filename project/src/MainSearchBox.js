import React, { Component } from 'react';
import "./css/mainSearchBox.css";
import MainTextInput from "./MainTextInput.js";

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class MainSearchBox extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    if (target.type==='text')
    this.setState({value: target.value});
    else {
      this.setState({from: target.from});

    }
  }

  handleSubmit(event) {
    alert('Searched: ' + 'CITY: ' +  this.state.value + 'START DATE: ' + this.state.startDate.toString() + 'END DATE: '+ this.state.endDate.toString() );
    event.preventDefault();
  }

    render(){
        const calendarChange =  title => (...args) => console.log(title,args);
        return(
            <div id="search">
              <h1> BOOK </h1>

              <form onSubmit={this.handleSubmit}>
              <label>
              <input type="text" value={this.state.value} onChange={event => {event.preventDefault();
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

                <select>
                <option value="mtb">Mountain Bike</option>
                <option value="hybrid">Hybrid Bike</option>
                <option selected value="citybike">City Bike</option>
                </select>

                </label>
                </label>
                <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}
export default MainSearchBox;
