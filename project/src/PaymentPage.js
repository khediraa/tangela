import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./css/default.css";

class PaymentPage extends Component {
    constructor(props) {
      super(props);
      this.state = {complete: false};
      this.submit = this.submit.bind(this);
    }
  
    async submit(ev) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) this.setState({complete: true});
      }
  
    render() {
        if (this.state.complete) return <h1>Rental Confirmed</h1>;
      return (
        <div className="checkout">
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          <button onClick={this.submit}>Send</button>
        </div>
      );
    }
  }
  
  export default injectStripe(PaymentPage);

/**
class PaymentPage extends Component {
    render(){
        return(
            <div class="processPayment">
            <h1> Processing payment by Klarna...</h1>
            <h2> Powered by Klarna</h2>


            </div>
        )
    }
}
export default PaymentPage;
*/