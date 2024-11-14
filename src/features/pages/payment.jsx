import React from 'react';
import './page.css';
const Payment = () => {
  return (
<>
    <div className="section payment orange lighten-5">
        <div className="container">
            <h4 className="center orange-text text-darken-3">Secure Payment</h4>
            <form className="col s12">
                <h5>Billing Information</h5>
                <div className="row">
                    <div className="input-field col s12 m6">
                        <input id="full_name" type="text" className="validate" required/>
                        <label html htmlFor="full_name">Full Name</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <input id="email" type="email" className="validate" required/>
                        <label html htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="address" type="text" className="validate" required/>
                        <label html htmlFor="address">Billing Address</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 m6">
                        <input id="city" type="text" className="validate" required/>
                        <label html htmlFor="city">City</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <input id="zip" type="text" className="validate" required/>
                        <label html htmlFor="zip">Zip Code</label>
                    </div>
                </div>

                <h5>Card Information</h5>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="card_number" type="text" className="validate" maxlength="16" required/>
                        <label html htmlFor="card_number">Card Number</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 m6">
                        <input id="expiry_date" type="text" className="validate" placeholder="MM/YY" required/>
                        <label html htmlFor="expiry_date">Expiry Date</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <input id="cvv" type="text" className="validate" maxlength="3" required/>
                        <label html htmlFor="cvv">CVV</label>
                    </div>
                </div>

                <div className="row center">
                    <button className="btn-large green darken-2 waves-effect waves-light" type="submit">Confirm Payment</button>
                </div>
            </form>
        </div>
    </div>

</>
  )
}

export default Payment