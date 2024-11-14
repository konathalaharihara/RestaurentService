import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    useEffect(() => {
        window.M.Sidenav.init(document.querySelectorAll('.sidenav'));
    }, []);
    return (
        <>
            <nav className="orange darken-3">
                <div className="nav-wrapper container">
                    <Link to='/' className="brand-logo">Plate Manager</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='menu'>Menu</Link></li>
                        <li><Link to='reservation'>Reserve Table</Link></li>
                        <li><Link to='order'>Order Online</Link></li>
                        <li><Link to='contact-us'>Contact Us</Link></li>
                    </ul>
                    <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-nav">
                <li><Link to='menu'>Menu</Link></li>
                <li><Link to='reservation'>Reserve Table</Link></li>
                <li><Link to='order'>Order Online</Link></li>
                <li><Link to='contact-us'>Contact Us</Link></li>
            </ul>
        </>
    )
}

export default NavBar