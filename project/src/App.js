import React, { Component } from 'react';
//import * as Bikes from "./Bikes.js";
import Bike from "./Bike.js";
import * as BikeHandler from "./BikeHandler.js";
import MainPage from "./MainPage.js";

class App extends Component {

    render() {
        var bike = BikeHandler.getBike("b1");
        return (
            <Bike id={bike} dates={bike.dates} title={bike.name} city={bike.city} startDate={bike.dates[0]} endDate={bike.dates[2]} price={bike.price} />
            );
    }
}

export default App;
