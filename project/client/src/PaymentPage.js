import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./css/paymentPage.css";
import {Elements, StripeProvider} from 'react-stripe-elements';

class PaymentPage extends Component {
    constructor(props) {
      super(props);
      this.state = {complete: false};
      this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        this.setState({complete: true});
      }

    render() {
        if (this.state.complete) return (
          <div class="payment">
          <h1>Payment by Stripe</h1>
          <h2>Rental Confirmed</h2>
          <h3>The code for your bike is 0734</h3>
          </div>
        );
      return (
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div class="payment">
            <h1>Payment by Stripe</h1>
            <Elements>
              <div className="checkout">
                <p> Rental information is presented here. </p>
                <p> This info should be based on the previous page </p>

            <h3>Would you like to complete the rental?</h3>



            <CardElement />
            <button onClick={this.submit}>Rent Bike</button>
            </div>
            </Elements>
          </div>
        </StripeProvider>
      );
    }
  }

  export default PaymentPage;
