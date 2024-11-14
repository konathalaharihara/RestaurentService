import React from 'react';
import './page.css';

const Checkout = () => {
  return (
<>
    <div className="section checkout orange lighten-5">
        <div className="container">
            <h4 className="center orange-text text-darken-3">Checkout</h4>
            <table className="highlight responsive-table">
                <thead>
                    <tr>
                        <th>Dish</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Spaghetti Bolognese</td>
                        <td>
                            <div className="input-field">
                                <input type="number" value="2" min="1" id="item1-quantity"/>
                            </div>
                        </td>
                        <td>$12.99</td>
                        <td>$25.98</td>
                        <td>
                            <a href="#" className="btn-small red lighten-1 waves-effect waves-light">Remove</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Caesar Salad</td>
                        <td>
                            <div className="input-field">
                                <input type="number" value="1" min="1" id="item2-quantity"/>
                            </div>
                        </td>
                        <td>$8.99</td>
                        <td>$8.99</td>
                        <td>
                            <a href="#" className="btn-small red lighten-1 waves-effect waves-light">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="row">
                <div className="col s12 m6">
                    <h5 className="orange-text text-darken-3">Total: $34.97</h5>
                </div>
                <div className="col s12 m6 right-align">
                    <a href="#payment" className="btn-large green darken-2 waves-effect waves-light">Proceed to Payment</a>
                </div>
            </div>
        </div>
    </div>

</>
  )
}

export default Checkout

