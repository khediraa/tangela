import React, {Component} from 'react';
//import * as Bikes from "./Bikes.js";
import "./css/bike.css";

class Bike extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {rented: false};
    }

    handleClick() {
        //Bikes.rentBike(0);
        this.setState({rented: true})
        //console.log(Bikes.getBike(0));
    }

    render() {
        let article;

        if(this.state.rented) {
            article = <article className="bicycle">
                        <h2>This bike is rented</h2>
                    </article>
        } 
        else {
            article =  <article className="bicycle">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.city}</p>
                        <p>available from {this.props.startDate} to {this.props.endDate}</p>
                        <p>price: {this.props.price} kr / day</p>
                        <button onClick={this.handleClick}>
                        Yes please!
                        </button>
                    </article>
        }
        return article; 
    }
}


export default Bike;

