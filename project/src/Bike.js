import React, {Component} from 'react';
import "./css/bike.css";

class Bike extends Component {
    render() {
        return (
            <article className="bicycle">
                <h2>{this.props.title}</h2>
                <p>{this.props.city}</p>
                <p>available from {this.props.startDate} to {this.props.endDate}</p>
                <p>price: {this.props.price} kr / day</p>
                <button>Yes please!</button>
            </article>
        ); 
    }
}


export default Bike;

