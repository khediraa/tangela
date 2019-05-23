import React, {useContext, useState} from 'react';
import Modal from 'react-modal';
import './css/userProfileComponent.css';
import {AppContext} from './App';
import {Link} from 'react-router-dom';
import * as BikeHandler from "./BikeHandler.js";

const modalStyles = {
  content : {
    top             : '50%',
    left            : '50%',
    right           : 'auto',
    bottom          : 'auto',
    marginRight     : '-50%',
    transform       : 'translate(-50%, -50%)',
  }
};

function UserProfileComponent({bikeKey, title, price}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const handleModalClose = (shouldRemoveBike) => {
    if (shouldRemoveBike) {
      BikeHandler.removeBike(bikeKey);
    }
  
    setModalIsOpen(false);
  }
  let link = `/BikePage/${bikeKey}`;
  return (
    <div className="userProfileComponent">
      <Modal
        style={modalStyles} 
        isOpen={modalIsOpen}
        onRequestClose={() => handleModalClose(false)} // when ESC is pressed
        contentLabel='removal confirmation'
      >
        <h5>Are you sure you want to remove this listing?</h5>
        <button onClick={() => handleModalClose(true)}>Yes</button>
        <button onClick={() => handleModalClose(false)}>No</button>
      </Modal>
      <div className="info">
        <Link style={{ textDecoration: 'none' }}to={link}>{title}</Link>
        <h5>{price} kr/day</h5>
      </div>
      <button className='remove-button'onClick={() => setModalIsOpen(true)}>&times;</button>
    </div>
  );
}

export default UserProfileComponent;
