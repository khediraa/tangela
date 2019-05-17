import React, { useContext } from 'react';
import "./css/mainSearchBox.css";
import {Link} from 'react-router-dom';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {AppContext} from './App';


function MainSearchBox () {
  const state = useContext(AppContext);

  return(
    <div className="search">
      <h1> BOOK </h1>
      <form onSubmit={() => (alert("Hi"))}>
      
        <div className="city_and_submit">
          <input type="text" value={state.city} onChange={event => {event.preventDefault();
          state.setState({city: event.target.value});}}
          placeholder="City" />
        </div>

        <div className="date">
          <DateRangePicker
          startDate={state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => state.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => state.setState({ focusedInput })} // PropTypes.func.isRequired,
          minimumNights={0}
          />
        </div>

        <div className="type">
          <label>
          Type
            <select type="text" value={state.bike_type} 
              onChange={event => {event.preventDefault(); state.setState({bike_type: event.target.value});}} >
            <option selected value="all">All Types</option>
            <option value="mtb">Mountain Bike</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid Bike</option>
            <option value="city">City Bike</option>
            </select>
            </label>
        </div>

        <div className="city_and_submit">
          <Link to='/Items' >
          <input type="submit" value="Search" />
          </Link>
        </div>
          
      </form>
    </div>
  )
}

export default MainSearchBox;
