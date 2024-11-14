import React from 'react'

const HomePage = () => {
  return (
<>
    <div className="section hero orange lighten-5">
        <div className="container center">
            <h1 className="orange-text text-darken-3">Welcome to Our Restaurant</h1>
            <p className="flow-text">Delicious food, exceptional service, and unforgettable experiences.</p>
            <a href="#reservation" className="btn-large green">Reserve a Table</a>
        </div>
    </div>
    <div className="section features">
        <div className="container">
            <div className="row">
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-content center">
                            <span className="card-title">Online Menu</span>
                            <p>Explore our menu and order online with ease.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-content center">
                            <span className="card-title">Reservations</span>
                            <p>Book your table online anytime, anywhere.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-content center">
                            <span className="card-title">Track Orders</span>
                            <p>Get real-time updates on your food delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
  )
}

export default HomePage;