import React, {useContext} from 'react';
import './css/itemListComponent.css';
import {AppContext} from './App';
import {Link} from 'react-router-dom';
import Rating from './Rating';

/* Function returning component with bikes available in the database */
function ItemListComponent({bikeKey, title, price, ratings}) {
  const state = useContext(AppContext);
  let link = `/BikePage/${bikeKey}`;
  return (
    <div className="itemListComponent">
      <div>
        <Link style={{ textDecoration: 'none' }}to={link}>{title}</Link>
        <h5>{price} kr/day</h5>
        <Rating ratings={ratings} />
      </div>
    </div>
  );
}


export default ItemListComponent;
