
import './App.css'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { LoginForm } from "./features/User";

function App() {
  return (
    <>
    {/* <nav className="blue">
        <div className="container">
            <a href="#" className="brand-logo">Restaurent Service</a>
            <ul className="right">
                <li>
                    <img className="profile-icon" src="./assets/react.svg" alt="Restaurent Service" />
                </li>
            </ul>
        </div>
    </nav> */}
    <LoginForm/>
    </>

  )
}

export default App

