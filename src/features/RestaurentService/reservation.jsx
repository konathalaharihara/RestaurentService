import React, { useEffect } from 'react';
import './reservation.css'

const Reservation = () => {
    useEffect(() => {
        // Initialize Datepicker and Timepicker
        const dateElems = document.querySelectorAll('.datepicker');
        const timeElems = document.querySelectorAll('.timepicker');

        // Initialize Datepicker
        window.M.Datepicker.init(dateElems, {
            autoClose: true,
            format: 'yyyy-mm-dd'
        });

        // Initialize Timepicker
        window.M.Timepicker.init(timeElems, {
            autoClose: true
        });

        // Cleanup function to destroy instances
        return () => {
            // window.M.Datepicker.destroy(dateElems);
            // window.M.Timepicker.destroy(timeElems);
        };
    }, []);
  return (
<>
    <div className="section reservation orange lighten-5">
        <div className="container">
            <h4 className="center orange-text text-darken-3">Reserve a Table</h4>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12 m6">
                        <input id="name" type="text" className="validate" required/>
                        <label  html htmlFor="name">Full Name</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <input id="email" type="email" className="validate" required/>
                        <label  html htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 m6">
                        <input id="phone" type="text" className="validate" required/>
                        <label  html htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <input id="party-size" type="number" className="validate" required/>
                        <label  html htmlFor="party-size">Party Size</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 m6">
                        <input type="text" className="datepicker" id="date" required/>
                        <label  html htmlFor="date">Reservation Date</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <input type="text" className="timepicker" id="time" required/>
                        <label  html htmlFor="time">Reservation Time</label>
                    </div>
                </div>
                <div className="row center">
                    <button className="btn-large orange darken-3 waves-effect waves-light" type="submit">Confirm Reservation</button>
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default Reservation