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

    /*  
        LITE OSÄKER. FÅR DUBBELKOLLA 
    */    

    async submit(ev) {
        this.setState({complete: true});
      }

    /*  
        WHEN THE RENT BUTTON IS PRESSED A CONFIRMATION PAGE IS RENDERED 
    */

    render() {
      const isEnabled = true;
        if (this.state.complete) return (
          <div class="payment">
          <h1>Payment by Stripe</h1>
          <h2>Rental Confirmed</h2>
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

            {/*  
                FORM WITH THE CARD ELEMENT AND INPUT FIELDS FOR PAYEE INFORMATION 
            */}

            <form>
                <CardElement />
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
            <button onClick={this.submit}>Rent Bike</button>
            </div>
            </Elements>
          </div>
        </StripeProvider>
      );
    }
  }

  export default PaymentPage;
