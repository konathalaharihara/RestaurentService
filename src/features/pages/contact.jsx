import React from 'react'
import './page.css';

const Contact = () => {
  return (
<>

    <div className="section contact orange lighten-5">
        <div className="container">
            <h4 className="center orange-text text-darken-3">Contact Us</h4>
            <div className="row">
                <div className="col s12 m6">
                    <h5>Send Us a Message</h5>
                    <form>
                        <div className="input-field">
                            <input id="name" type="text" className="validate" required  />
                            <label  htmlFor="name">Name</label>
                        </div>
                        <div className="input-field">
                            <input id="email" type="email" className="validate" required />
                            <label  htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <textarea id="message" className="materialize-textarea" required></textarea>
                            <label  htmlFor="message">Message</label>
                        </div>
                        <button className="btn orange darken-3 waves-effect waves-light" type="submit">Submit</button>
                    </form>
                </div>

                <div className="col s12 m6">
                    <h5>Reach Out to Us</h5>
                    <p><strong>Address:</strong> 123 Main Street, City, Country</p>
                    <p><strong>Phone:</strong> +1 (959) 867-2130</p>
                    <p><strong>Email:</strong> info@restaurantname.com</p>
                    <h5>Follow Us</h5>
                    <a href="#" className="orange-text text-darken-3">Facebook</a> | 
                    <a href="#" className="orange-text text-darken-3">Instagram</a> | 
                    <a href="#" className="orange-text text-darken-3">Twitter</a>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Contact