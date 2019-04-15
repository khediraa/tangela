import React, { Component } from 'react';
import * as Bikes from "./Bikes.js";
import Bike from "./Bike.js";

class App extends Component {
    render() {
        var bike = Bikes.getBike(0);
        return (
            <Bike title={bike.title} city={bike.city} startDate={bike.startDate} endDate={bike.endDate} price={bike.price} />
        );
    }
}

export default App;