import React, { Component } from 'react';
import {bikes} from "./Bikes.js";
import Bike from "./Bike.js";

class App extends Component {
    render() {
        return (
            <Bike title={bikes[0].title} city={bikes[0].city} startDate={bikes[0].startDate} endDate={bikes[0].endDate} price={bikes[0].price} />
        );
    }
}

export default App;