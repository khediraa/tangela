import React, { Component } from 'react';
import "./css/bike.css";
import 'react-dates/initialize';
import * as BikeHandler from "./BikeHandler.js";
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//import isInclusivelyAfterDay from '../utils/isInclusivelyAfterDay';
import * as moment from 'moment';
import MapContainer from './MapContainer';
import './css/mapContainer.css';
class Bike extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {};
        //let startDate= this.state.startDate; //11/3/2018
        //let endDate= this.state.endDate; //11/10/2018
        //let campaignStartDate = '11/3/2018';
        //let campaignEndDate= '11/10/2018';
    }

    isBlocked = day => {
        //const availableDates = ['2019-08-09', '2019-08-10'] //"2019-08-09", "2019-08-10", "2019-08-11", "2019-08-12"
        return !this.props.bike.dates.some(date => day.isSame(date, 'day'))
    }

    blocksDay(day) {
        return day.isSame(moment(), "day");
    }

    handleClick() {
        BikeHandler.rentBike(this.props.id, this.state.startDate, this.state.endDate)
            .then((status) => {
                console.log(status);
                
                if (status == 200) {
                    
                }
            });
    }

    handleChange(){
    }

    handleCalenderChange(startDate, endDate) {
        this.setState({startDate, endDate});
    }

    render() {
        let bike = this.props.bike;
        return (
            <article className="bicycle">
            <div className="left">
                <h2>{bike.title}</h2>
                <p>{bike.city}</p>
                <p>{bike.description}</p>
                <p>Gears: {bike.gears}</p>
                <p>Price: {bike.price} kr / day</p>

                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    isDayBlocked={this.isBlocked}
                    minimumNights={0}
                    daySize={25}
                />

                <button onClick={this.handleClick}>
                    Rent bike
                </button>
            </div>
            
            <div className="right">
                <MapContainer className="bike-map-container"
                    coords={[
                        {
                            "lat": bike.lat,
                            "lng": bike.lng
                        }
                    ]}
                    zoom={13}
                />
            </div>
            </article>
        );
    }
}

export default Bike;
