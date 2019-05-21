import React, { useState, useEffect, useContext } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./css/paymentPage.css";
import {Elements, StripeProvider} from 'react-stripe-elements';
import Bike from './Bike';
import history from './history';
import * as BikeHandler from './BikeHandler';

/*
Function to calculate the total price of the chosen bike and rental period
*/

function totalPrice(price, startDate, endDate) {
  var days = BikeHandler.getDates(new Date(startDate),new Date(endDate)).length;
  //console.log(days);
  return (
    price*days
  )
}

function PaymentPage(props) {

  const [initialized, setInitialized] = useState(false);
  const [bike, setBike] = useState();
  const {id, startDate, endDate} = props.match.params;

  useEffect(() => {
    if(!initialized) {

      BikeHandler.getBike(id)
      .then((json) => {
        setBike(json);
      });

      setInitialized(true);

    }
  })
  if (!bike)
  return (
    <div>Loading...</div>
  )
  else

  return( (

    <div class="payment">
      <h1>Payment by Stripe</h1>
      <div className="checkout">

        <div class = 'bikeSummary'>

          <h3>{bike.name}</h3>
          <p>Rental period: {startDate} to {endDate}</p>
          <p>Total price: {totalPrice(bike.price, startDate, endDate)} SEK</p>
        </div>
        <h3>Would you like to complete the rental?</h3>
        <br/>
        
        
         {/*  
                FORM WITH THE CARD ELEMENT AND INPUT FIELDS FOR PAYEE INFORMATION 
            */}

<form>
                
                {/*  
                    FIRST NAME 
                */}
                            
                 <div id="AddInfo">
                            <label>
                                First name:
                                <input type="text" name="fname" required placeholder= "" value={this.state.fname} onChange={this.handleChange} />
                            </label>
                        </div>
                        
                        {/*  
                            LAST NAME 
                        */}
                            
                        <div id="AddInfo">
                            <label>
                                Last name:
                                <input type="text" name="lname" required placeholder= "" value={this.state.lname} onChange={this.handleChange} />
                            </label>
                        </div>

                        {/*  
                            CELL NUMBER 
                        */}
                            
                        <div id="AddInfo">
                            <label>
                                Cell phone number:
                                <input type="tel" name="tel" required size="20" minLength="9" maxLength="14" placeholder= "Including country code" value={this.state.tel} onChange={this.handleChange} />
                            </label>
                        </div>

                        {/*  
                            EMAIL ADDRESS 
                        */}

                        <div id="AddInfo">
                            <label>
                                Email address:
                                <input type="email" name="email" required placeholder= "" value={this.state.email} onChange={this.handleChange} />
                            </label>
                        </div>
                  </form>
        
        
        
        
        
        
        
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <Elements>
            <CardElement />
          </Elements>
        </StripeProvider>
        <button>Pay {totalPrice(bike.price, startDate, endDate)} SEK</button>
      </div>
      <p class = 'terms'>Terms & Conditions: <br/>A penalty fee of 1 000 SEK will be applied if the bike is
        returned in the wrong location and a fee of 15 000 SEK will be applied for severely
        damaged or unreturned bikes</p>
    </div>

  )
)
}export default PaymentPage;
