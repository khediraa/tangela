import React, { Component } from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import * as BikeHandler from "./BikeHandler.js";
import "./css/addBike.css";

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import MapForAdding from './MapForAdding';
import './css/mapContainer.css';

export const AddBikeContext = React.createContext();

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function validate(gears, price, title) {
  return {
    gears: gears <= 0,
    price: price <= 0,
    title: title.length === 0
  };
}

class AddBike extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: '', lng: '',
      setLat : this.setLat, setLng: this.setLng,
      frame: 'wmn', type: 'mtb',
      gears: '', price: '',
      desc: '', title: '',
      startDate: moment(),
      endDate: moment(),
      touched: {
        gears: false,
        price: false,
        title: false
      },
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({
      lat: '', lng: '',
      setLat : this.setLat, setLng: this.setLng,
      frame: 'wmn', type: 'mtb',
      gears: '', price: '',
      desc: '', title: '',
      startDate: moment(),
      endDate: moment(),
      touched: {
        gears: false,
        price: false,
        title: false
      },
      modalIsOpen: false
    });
  }

  setLat = lat => {
    console.log(lat);
    
    this.setState({lat: lat})
  }

  setLng = lng => {
    console.log(lng);
    
    this.setState({lng: lng})
  }

  /*
  The user has made an input in Gears, Price, Title, or Description
  */
  handleChange(event) {
    const target = event.target;
    const tmp = target.name;
    this.setState({ [tmp]: target.value });
    console.log("changed: " + tmp);

  }

  /*
  The user has clicked on an input-field
  */
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  /*
  Can the current inputs be submitted as a whole bike?
  */
  canBeSubmitted() {
    const errors = validate(this.state.gears, this.state.price, this.state.title);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    console.log("canBeSubmitted: " + isDisabled);
    return !isDisabled;
  }

  /*
  The user has changed start or end date.
  */
  handleDateChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
    console.log("Date has changed to: " + this.state.startDate.toString())
  };

  handleSubmit(event) {
    event.preventDefault();

    if (this.canBeSubmitted()) {
      console.log("Can be submitted");
      console.log(this.state.frame + ' ' + this.state.type + ' '
      + this.state.gears.toString() + ' ' + this.state.price.toString() + ' '
      + this.state.title + ' ' + this.state.startDate.toString());
      
      BikeHandler.addBike(this.props.location.state.email,this.state.title, this.state.lat, this.state.lng, this.state.frame, this.state.type,
        this.state.gears, this.state.price, this.state.startDate.toDate(), this.state.endDate.toDate(), this.state.desc)
        .then((id) => {
          console.log("assigning");

          console.log("id: " + id);

          this.openModal();
        });

        return;
      }
    }

    render() {
      const errors = validate(this.state.gears, this.state.price, this.state.title);
      const isDisabled = Object.keys(errors).some(x => errors[x]);

      const shouldMarkError = field => {
        const hasError = errors[field];
        const shouldShow = this.state.touched[field];
        return hasError ? shouldShow : false;
      };
        return (
          <AddBikeContext.Provider value={this.state}>
            <div id="Wrapper">
              <div id="ModalContainer">
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  contentLabel="Confirmation message"
                  style={modalStyles}
                  ariaHideApp={false}
                  >
                  <h2 ref={subtitle => this.subtitle = subtitle}>Well Done!</h2>
                  <button onClick={this.closeModal}>close</button>
                  <div>Bike added.</div>
                </Modal>
              </div>
              {/*  BOX WITH LOCATION AND DATE */}
              <form onSubmit={this.handleSubmit}>
                <h2>Add your bike to hoi</h2>
                <div id="AddInfo">
                  <label> Available dates </label>
                  <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    minimumNights={0}
                    displayFormat="DD/MM/YYYY"
                    />
                </div>
                {/* BOX WITH INFORMATION ABOUT THE BIKE */}
                <div id="AddInfo">
                  <label>
                    Title
                    <input type="text" name="title"
                      placeholder="Short, descriptive title"
                      className={shouldMarkError("title") ? "error" : ""}
                      value={this.state.title}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur("title")}
                      required />
                  </label>
                </div>
                <div id="AddInfo">
                  <label>
                    Frame
                    <select type="text" name="frame"
                      value={this.state.frame}
                      onChange={this.handleChange} >
                      <option value="wmn">Women's</option>
                      <option value="men">Men's</option>
                      <option value="uni">Unisex</option>
                      <option value="kid">Kids'</option>
                    </select>
                  </label>
                </div>
                <div id="AddInfo">
                  <label>
                    Type
                    <select type="text" name="type" value={this.state.type} onChange={this.handleChange} >
                      <option value="mtb">Mountain Bike</option>
                      <option value="hybrid">Hybrid Bike</option>
                      <option value="city">City Bike</option>
                      <option value="electric">Electric Bike</option>
                    </select>
                  </label>
                </div>
                <div id="AddInfo">
                  <label>
                    Gears
                    <input type="number" name="gears"
                      className={shouldMarkError("gears") ? "error" : ""}
                      placeholder="Number of gears"
                      value={this.state.gears}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur("gears")}
                      required />
                  </label>
                </div>
                <div id="AddInfo">
                  <label>
                    Price per day
                    <input type="number" name="price"
                      placeholder="Cost per day"
                      className={shouldMarkError("price") ? "error" : ""}
                      value={this.state.price}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur("price")}
                      required
                      />
                  </label>
                </div>
                <div id="AddInfo">
                  <label>
                    Description
                    <textarea type="text" name="desc" placeholder="(Optional)" value={this.state.desc} onChange={this.handleChange} />
                  </label>
                </div>
                <div id="AddInfo">
                  <label>
                    Choose the location
                    <MapForAdding center={[57.708870, 11.974560]} zoom={13}/>
                  </label>
                </div>
                <div id="AddSubmit">
                  {/*<Link to='/Items' >*/}
                  <button type="submit" value="Submit" >Submit</button>
                  {/*</Link>*/}
                </div>
              </form>
            </div>
        </AddBikeContext.Provider>
      )
    }
  }

  export default AddBike;
