import React, { Component } from 'react';
import "./css/bike.css";
import 'react-dates/initialize';
import * as BikeHandler from "./BikeHandler.js";
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import * as moment from 'moment';
import MapBikePage from './MapBikePage';
import './css/mapContainer.css';
import history from './history';
import Rating from './Rating';

class Bike extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { startDate: '', endDate: '' };
  }

  isBlocked = day => {
    return !this.props.bike.dates.some(date => day.isSame(date, 'day'))
  }

  blocksDay(day) {
    return day.isSame(moment(), "day");
  }

  handleClick() {
    let link = `/PaymentPage/${this.props.bike.id}/${BikeHandler.DateToString(new Date(this.state.startDate))}/${BikeHandler.DateToString(new Date(this.state.endDate))}`;
    history.push(link);

  }

  handleCalenderChange(startDate, endDate) {
    this.setState({ startDate: startDate, endDate: endDate });
  }

  render() {
    let bike = this.props.bike;
    return (
      <article className="bicycle">
        <div className="left">
          <h2>{bike.name}</h2>
          <Rating ratings={bike.ratings} />
          <p>{bike.description}</p>
          <p>Location: {bike.city}</p>
          <p>Gears: {bike.gears}</p>
          <p>Type: {bike.type}</p>
          <p>Frame: {bike.frame}</p>
          <p>Price: {bike.price} kr/day</p>
          <br/>

          <form class="datePicker" onSubmit={this.handleClick}>
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate: startDate, endDate: endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              isDayBlocked={this.isBlocked}
              minimumNights={0}
              daySize={25}
              required
            />
          <button >
              Rent bike
          </button>
          </form>
        </div>

        <div className="right">
          <MapBikePage className="bike-map-container"
            coords={[
              {
                "lat": bike.lat,
                "lng": bike.lng,
                "id": bike.id,
                "name": bike.name
              }
            ]}
            zoom={13}
          />
          <h6>The bike will be placed within the blue circle's area</h6>
        </div>

      </article>
    );
  }
}

export default Bike;
