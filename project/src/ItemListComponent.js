import React, {useContext} from 'react';
import './css/itemListComponent.css';
import {AppContext} from './App';
import {Link} from 'react-router-dom';
import history from './history';

/* Function returning component with bikes available in the database */
function ItemListComponent({bikeKey, title, price}) {
    const state = useContext(AppContext);

    return (
        <div className="itemListComponent">
            <h1 className="title" onClick={(event) => {
                state.setState({bikeKey});
                history.push('/BikePage');
            }}>{title}</h1> {/*"http://google.com"*/}
            <h4>{price} kr/day</h4>
        </div>
    );
}


export default ItemListComponent;