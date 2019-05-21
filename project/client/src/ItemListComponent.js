import React, {useContext} from 'react';
import './css/itemListComponent.css';
import {AppContext} from './App';
import {Link} from 'react-router-dom';

/* Function returning component with bikes available in the database */
function ItemListComponent({bikeKey, title, price}) {
  const state = useContext(AppContext);
  let link = `/BikePage/${bikeKey}`;
  return (
    <div className="itemListComponent">
      <div>
        <Link to={link}>{title}</Link>
        <h5>{price} kr/day</h5>
      </div>
    </div>
  );
}


export default ItemListComponent;
