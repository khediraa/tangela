import React, { Component } from 'react';
import Bike from './Bike';
import * as BikeHandler from './BikeHandler';

class BikePage extends Component {
    render() {
        var bike = BikeHandler.getBike("5");
        return (
            <Bike id={bike} 
                dates={bike.dates}
                title={bike.name} 
                city={bike.city} 
                startDate={bike.dates[0]} 
                endDate={bike.dates[bike.dates.length - 1]} 
                price={bike.price} 
                lat={bike.lat} 
                lng={bike.lng} 
            />
            );
    }
}

export default BikePage;
