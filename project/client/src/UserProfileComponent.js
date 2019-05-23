import React, {useContext} from 'react';
import './css/userProfileComponent.css';
import {AppContext} from './App';
import {Link} from 'react-router-dom';

function UserProfileComponent({bikeKey, title, price}) {
  const state = useContext(AppContext);
  let link = `/BikePage/${bikeKey}`;
  return (
    <div className="userProfileComponent">
      <div className="info">
        <Link style={{ textDecoration: 'none' }}to={link}>{title}</Link>
        <h5>{price} kr/day</h5>
      </div>
      <button className='remove-button'>&times;</button>
    </div>
  );
}


export default UserProfileComponent;
