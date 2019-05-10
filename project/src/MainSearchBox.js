import React, { useContext } from 'react';
import "./css/mainSearchBox.css";

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import ItemList from './ItemList';

import {Link} from 'react-router-dom';
import {AppContext, MyProvider} from './App';

function MainSearchBox () {
  const state = useContext(AppContext);

  return(
    <div className="search">
      <h1> BOOK </h1>
      <form onSubmit={() => (alert("Hi"))}>
      <div className="city_and_submit">
      <input type="text" value={state.city} onChange={event => {event.preventDefault();
      state.handleChange(event);}}
      placeholder="City" />
      </div>
        <div className="date">
        <DateRangePicker
        startDate={state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        // onDatesChange={({ startDate, endDate }) => setState({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        // onFocusChange={focusedInput => setState({ focusedInput })} // PropTypes.func.isRequired,
        minimumNights={0}
        />
      </div>
      <div className="type">
      <label>
      Type
      <select type="text" value={state.bike_type} onChange={event => {event.preventDefault(); state.handleSelect(event);}} >
      <option selected value="mtb">Mountain Bike</option>
      <option value="hybridb">Hybrid Bike</option>
      <option value="cityb">City Bike</option>
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
