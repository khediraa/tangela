import React, { useState, useEffect, useContext } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./css/paymentPage.css";
import {Elements, StripeProvider} from 'react-stripe-elements';
import Bike from './Bike';
import history from './history';
import PaymentPageComponent from './PaymentPageComponent';
import * as BikeHandler from './BikeHandler';


function PaymentPage(props) {

  const [initialized, setInitialized] = useState(false);
    const [bike, setBike] = useState();
    useEffect(() => {
        if(!initialized) {
            const {id} = props.match.params;
            console.log(id);  
            BikeHandler.getBike(id)
                .then((json) => {
                    setBike(json);
                });


            setInitialized(true);

        }
    })
    
    return( 
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div class="payment">
            <h1>Payment by Stripe</h1>
            <Elements>
              <div className="checkout">
               
              

                <h3>Would you like to complete the rental?</h3>
                <br/>

                <CardElement />
                
            <button >Rent Bike</button>
            </div>
            </Elements>
          </div>
        </StripeProvider>
      )
  }export default PaymentPage;
