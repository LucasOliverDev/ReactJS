import React from 'react';
import { ItemCount } from '../ItemCount'

export const ItemListContainer = (props) => {
    return (
        <div>
            <p className="greeting">
                {props.greeting}
            </p>
            <ItemCount
                descripcion = 'Mancuerna de 5kg'
                stock = '5'
            ></ItemCount>
        </div>
    )
}