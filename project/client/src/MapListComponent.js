import React from 'react';
import './css/itemListComponent.css';
import {Link} from 'react-router-dom';

/* Function returning component with bikes available in the database */
function MapListComponent({bikeKey, bikeName}) {
  let link = `/BikePage/${bikeKey}`;
  return (
    <div>
      <Link to={link}>{bikeName}</Link>
    </div>
  );
}


export default MapListComponent;
