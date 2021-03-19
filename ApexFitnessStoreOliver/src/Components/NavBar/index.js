import React from 'react';
import { CartWidget } from '../CartWidget';

export const NavBar = () => {
    return <header>
                <h1>AF Store</h1>
                    <nav>
                        <ul>
                            <li><a href="">Mancuernas</a></li>
                            <li><a href="">Maquinas</a></li>
                            <li><a href="">Barras</a></li>
                            <li><a href="">Discos</a></li>
                            <li><a href="">Colchonetas</a></li>
                        </ul>
                    </nav>
                    <CartWidget/>
           </header>
}