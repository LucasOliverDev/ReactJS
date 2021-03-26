import React from 'react';

export const ItemDetail = ({item}) => {
   return(
        <div>
            <img src={item.pictureUrl} alt={item.title}></img>
            <h2>{item.title}</h2>
            <p>Descripción: {item.description}</p>                        
            <p>Precio: ${item.precio}</p>
        </div>
   )
}