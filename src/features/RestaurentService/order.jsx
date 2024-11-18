import './order.css';
import React from 'react'
import { Link } from 'react-router-dom';

const Order = () => {
  return (
<>
    <div className="section order orange lighten-5">
        <div className="container">
            <h4 className="center orange-text text-darken-3">Order Your Favorite Dishes</h4>
            <div className="row">
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img src="dish1.jpg" alt="Dish 1"/>
                            <span className="card-title">Dish Name</span>
                        </div>
                        <div className="card-content">
                            <p>A short description of the dish. Spicy, delicious, and fresh.</p>
                            <p><strong>Price:</strong> $15.99</p>
                            <div className="input-field">
                                <input id="quantity1" type="number" min="1" placeholder="Quantity"/>
                                <label html htmlFor="quantity1">Quantity</label>
                            </div>
                        </div>
                        <div className="card-action">
                            <a href="#" className="btn-small orange darken-3 waves-effect waves-light">Add to Cart</a>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img src="dish2.jpg" alt="Dish 2"/>
                            <span className="card-title">Dish Name</span>
                        </div>
                        <div className="card-content">
                            <p>A short description of the dish. Sweet, savory, and delightful.</p>
                            <p><strong>Price:</strong> $12.99</p>
                            <div className="input-field">
                                <input id="quantity2" type="number" min="1" placeholder="Quantity"/>
                                <label html htmlFor="quantity2">Quantity</label>
                            </div>
                        </div>
                        <div className="card-action">
                            <a href="#" className="btn-small orange darken-3 waves-effect waves-light">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img src="dish3.jpg" alt="Dish 3"/>
                            <span className="card-title">Dish Name</span>
                        </div>
                        <div className="card-content">
                            <p>A short description of the dish. Tangy, rich, and satisfying.</p>
                            <p><strong>Price:</strong> $18.99</p>
                            <div className="input-field">
                                <input id="quantity3" type="number" min="1" placeholder="Quantity"/>
                                <label html htmlFor="quantity3">Quantity</label>
                            </div>
                        </div>
                        <div className="card-action">
                            <a href="#" className="btn-small orange darken-3 waves-effect waves-light">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row center">
                <a href="#checkout" className="btn-large green darken-2 waves-effect waves-light"><Link to="/checkout"> Proceed to Checkout</Link></a>
            </div>
        </div>
    </div>
</>
  )
}

export default Order;