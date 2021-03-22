import React from 'react';
import { CartWidget } from '../CartWidget';

export const NavBar = () => {
    return <header>
                <h1>AF Store</h1>
                    <nav>
                        <ul>
                            <li><a href="#index">Mancuernas</a></li>
                            <li><a href="#index">Maquinas</a></li>
                            <li><a href="#index">Barras</a></li>
                            <li><a href="#index">Discos</a></li>
                            <li><a href="#index">Colchonetas</a></li>
                        </ul>
                    </nav>
                    <CartWidget/>
           </header>
}