import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className='navBar'>
            <img src='./images/logo.svg' alt='Logo' />
            <ul className='navBarList'>
                <li><a href='#'>Camisetas</a></li>
                <li><a href='#'>Musculosas</a></li>
                <li><a href='#'>Pantalones</a></li>
                <li><a href='#'>Shorts</a></li>
                <li><a href='#'>Zapatillas</a></li>            
            </ul>
        </nav>
    )
}

export default NavBar;