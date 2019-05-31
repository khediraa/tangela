import React, { useState } from 'react';
import Modal from 'react-modal';
import './css/userProfileComponent.css';
import {Link} from 'react-router-dom';
import * as BikeHandler from "./BikeHandler.js";
import Rating from './Rating';

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

function UserProfileComponent({bikeKey, title, price, ratings}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleModalClose = (shouldRemoveBike) => {
    if (shouldRemoveBike) {
      BikeHandler.removeBike(bikeKey)
      .then(ok => {
        //ok from server that everything went well (status 200).
        if (ok) {
          setVisible(false);
        }
        
      });
    }
  
    setModalIsOpen(false);
  }
  let link = `/BikePage/${bikeKey}`;
  return (
    <div className="userProfileComponent" style={{display: visible ? "block" : "none"}}>
      <Modal
        style={modalStyles} 
        isOpen={modalIsOpen}
        onRequestClose={() => handleModalClose(false)} // when ESC is pressed
        contentLabel='removal confirmation'
      >
        <h5>Are you sure you want to remove this listing?</h5>
        <div className='buttons'>
          <button className='modal-yes' onClick={() => handleModalClose(true)}>Yes</button>
          <button className='modal-no' onClick={() => handleModalClose(false)}>No</button>
        </div>
      </Modal>
      <div className="info">
        <Link style={{ textDecoration: 'none' }}to={link}>{title}</Link>
        <h5>{price} kr/day</h5>
        <Rating ratings={ratings} />
      </div>
      <button className='remove-button'onClick={() => setModalIsOpen(true)}>&times;</button>
    </div>
  );
}

export default UserProfileComponent;
