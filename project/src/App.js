import React, { Component } from 'react';
//import * as Bikes from "./Bikes.js";
import Bike from "./Bike.js";
import * as BikeHandler from "./BikeHandler.js";
import MainPage from "./MainPage.js";

class App extends Component {

    render() {
        var bike = BikeHandler.getBike("b1");
        return (
          <div>
            <MainPage></MainPage>
          </div>
        );
    }
}

export default App;
