
import './App.css'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Routes, Route, Outlet } from 'react-router-dom';
import Authentication from './features/User/authentication';
import { LoginForm } from "./features/User";
import { Checkout, Contact, Footer, HomePage, NavBar, Payment } from './features/pages';
import { Reservation, Order } from './features/RestaurentService';
import FoodMenu from './features/menu/foodMenu';

function App() {


    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    {/* Define your routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/menu" element={<FoodMenu />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </div>
            {/* <Checkout/>
            <Payment/> */}
            <Footer />
        </>


    )
}

export default App

