import React, {useContext} from 'react';
import Bike from './Bike';
import * as BikeHandler from './BikeHandler';
import {AppContext} from './App';

// class BikePage extends Component {
//     render() {
//         var bike = BikeHandler.getBike("5");
//         return (
//             <Bike id={bike} 
//                 dates={bike.dates}
//                 title={bike.name} 
//                 city={bike.city} 
//                 startDate={bike.dates[0]} 
//                 endDate={bike.dates[bike.dates.length - 1]} 
//                 price={bike.price} 
//                 lat={bike.lat} 
//                 lng={bike.lng} 
//             />
//             );
//     }
// }

function BikePage() {
    const {bikeKey} = useContext(AppContext);
    console.log("bike key: " + bikeKey);
    var bike = BikeHandler.getBike(bikeKey);
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

export default BikePage;
