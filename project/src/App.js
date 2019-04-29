import React, { Component } from 'react';
//import * as Bikes from "./Bikes.js";
import Bike from "./Bike.js";
import * as BikeHandler from "./BikeHandler.js";

class App extends Component {

    render() {
        var bike = BikeHandler.getBike("b1");
        return (
          <div id="main_container">
            <div id="header">
            </div>
            <div id="search_box">
              <table>
                <tbody>
                  <tr>
                    <div class="search_box_header">
                      BOOK
                    </div>
                  </tr>
                  <tr>
                    <td>
                    <div class="input_group">
                      <label> City </label>
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <div class="input_group">
                      <label> From </label>
                    </div>
                    </td>
                    <td>
                    <div class="input_group">
                      <label> To </label>
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button type="button" onclick="alert('Clicked')"> Search </button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        );
    }
}

export default App;
