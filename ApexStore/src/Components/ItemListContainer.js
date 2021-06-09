import React from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount.js';

function ItemListContainer() {
    return(
        <div className='ItemListContainer'>
            <h1>Trabajo en contrucción, aguarde hasta la próxima entrega por favor.</h1>
            <ItemCount stock={5} initial={1} />
        </div>
    )
}

export default ItemListContainer;