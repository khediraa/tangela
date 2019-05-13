import React, { Component } from 'react';
import "./css/bike.css";
import 'react-dates/initialize';
import * as BikeHandler from "./BikeHandler.js";
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//import isInclusivelyAfterDay from '../utils/isInclusivelyAfterDay';
import * as moment from 'moment';
class Bike extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { rented: false };
        //let startDate= this.state.startDate; //11/3/2018
        //let endDate= this.state.endDate; //11/10/2018
        //let campaignStartDate = '11/3/2018';
        //let campaignEndDate= '11/10/2018';
    }

    isBlocked = day => {
        //const availableDates = ['2019-08-09', '2019-08-10'] //"2019-08-09", "2019-08-10", "2019-08-11", "2019-08-12"
        return !this.props.dates.some(date => day.isSame(date, 'day'))
    }

    blocksDay(day) {
        return day.isSame(moment(), "day");
    }

    handleClick() {
        this.setState({ rented: true })
        console.log(this.state.startDate);

    }

    handleChange(){
        BikeHandler.rentBike(this.props.id, this.state.startDate, this.state.endDate);
    }

    handleCalenderChange(startDate, endDate) {
        this.setState({startDate, endDate});
    }

    render() {
        let article;

        if (this.state.rented) {
            article = <article className="bicycle">
                <h2>This bike is rented</h2>
            </article>
        }
        else {
            article = <article className="bicycle">
                <h2>{this.props.title}</h2>
                <p>{this.props.city}</p>
                <p>available from {this.props.startDate} to {this.props.endDate}</p>
                <p>price: {this.props.price} kr / day</p>
                <button onClick={this.handleClick}>
                    Yes please!
                </button>
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

                />
            </article>
        }
        return article;
    }
}

export default Bike;
