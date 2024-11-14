import React from 'react'

const FoodMenu = () => {
  return (
        <>
        <div className="section search orange lighten-5">
          <div className="container">
              <h4 className="center orange-text text-darken-3">Our Menu</h4>
              <div className="row">
                  <div className="col s12">
                      <div className="input-field">
                          <input id="search" type="text" placeholder="Search for dishes..." />
                          <label  html htmlFor="search">Search Menu</label>
                      </div>
                  </div>
              </div>
          </div>
      </div><div className="section menu">
              <div className="container">
                  <div className="row">
                      <div className="col s12 m6 l4">
                          <div className="card">
                              <div className="card-image">
                                  <img src="dish1.jpg" alt="Dish 1" />
                                  <span className="card-title">Dish Name</span>
                              </div>
                              <div className="card-content">
                                  <p>A short description of the dish. Spicy, delicious, and fresh.</p>
                                  <p><strong>Price:</strong> $15.99</p>
                              </div>
                              <div className="card-action">
                                  <a href="#" className="orange-text">Add to Cart</a>
                              </div>
                          </div>
                      </div>

                      <div className="col s12 m6 l4">
                          <div className="card">
                              <div className="card-image">
                                  <img src="dish2.jpg" alt="Dish 2" />
                                  <span className="card-title">Dish Name</span>
                              </div>
                              <div className="card-content">
                                  <p>A short description of the dish. Sweet, savory, and delightful.</p>
                                  <p><strong>Price:</strong> $12.99</p>
                              </div>
                              <div className="card-action">
                                  <a href="#" className="orange-text">Add to Cart</a>
                              </div>
                          </div>
                      </div>
                      <div className="col s12 m6 l4">
                          <div className="card">
                              <div className="card-image">
                                  <img src="dish3.jpg" alt="Dish 3" />
                                  <span className="card-title">Dish Name</span>
                              </div>
                              <div className="card-content">
                                  <p>A short description of the dish. Tangy, rich, and satisfying.</p>
                                  <p><strong>Price:</strong> $18.99</p>
                              </div>
                              <div className="card-action">
                                  <a href="#" className="orange-text">Add to Cart</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </>
  )
}

export default FoodMenu;


