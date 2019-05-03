import React, { Component } from 'react';
import "./css/mainTextInput.css";
import {DatePicker, RangeDatePicker} from '@y0c/react-datepicker';

import '@y0c/react-datepicker/assets/styles/calendar.scss';

//import 'moment/locale/ko';

class MainTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', from:new Date()};

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

    handleCalendarChange(date){
      this.setState({from:date})
    }


    handleSubmit(event) {
        alert('Searched: ' + this.state.value + this.state.from );
        event.preventDefault();
    }

    render() {
      const calendarChange =  title => (...args) => console.log(title,args);
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    BOOK
                    <input type="text" value={this.state.value} onChange={event => {event.preventDefault();
                                                                                    this.handleChange(event);}}
                        placeholder="City" />

                    <RangeDatePicker selected={this.state.from} onChange={this.handleCalendarChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default MainTextInput;
