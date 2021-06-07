import React from 'react';
import CartWidget from './CartWidget.js';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className='navBar'>
            <img src='./images/logo.svg' alt='Logo' />
            <div className='navBarListAndCartWidget'>
                <ul className='navBarList'>
                    <li><a href={"http://google.com"}>Camisetas</a></li>
                    <li><a href={"http://google.com"}>Musculosas</a></li>
                    <li><a href={"http://google.com"}>Pantalones</a></li>
                    <li><a href={"http://google.com"}>Shorts</a></li>
                    <li><a href={"http://google.com"}>Zapatillas</a></li>            
                </ul>
                <CartWidget />
            </div>
            
        </nav>
    )
}

export default NavBar;