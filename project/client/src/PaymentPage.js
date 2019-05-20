import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./css/paymentPage.css";
import {Elements, StripeProvider} from 'react-stripe-elements';
import Bike from './Bike';
import PaymentPageComponent from './PaymentPageComponent';

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
               
              <PaymentPageComponent title={"hej"} price={"22"} />

                <h3>Would you like to complete the rental?</h3>
                <br/>
                <form>
                <label>
                  First name:
                                <input type="text" name="fname" required placeholder="" value={this.state.fname} onChange={this.handleChange} />
                </label>
                <label>
                  Last name:
                                <input type="text" name="lname" required placeholder="" value={this.state.lname} onChange={this.handleChange} />
                </label>
                <label>
                  Email address:
                                <input type="email" name="email" required placeholder="" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                  Cell phone number:
                                <input type="tel" name="tel" required size="20" minLength="9" maxLength="14" placeholder="Including country code" value={this.state.tel} onChange={this.handleChange} />
                </label>

                <CardElement />
                </form>
            <button onClick={this.submit}>Rent Bike</button>
            </div>
            </Elements>
          </div>
        </StripeProvider>
      );
    }
  }

  export default PaymentPage;
