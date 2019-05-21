import React, {useContext} from 'react';
import './css/itemListComponent.css';
import {AppContext} from './App';
import {Link} from 'react-router-dom';

/* Function returning component with bikes available in the database */
function MapListComponent({bikeKey, bikeName}) {
  const state = useContext(AppContext);
  let link = `/BikePage/${bikeKey}`;
  return (
    <div>
      <Link to={link}>{bikeName}</Link>
    </div>
  );
}


export default MapListComponent;
