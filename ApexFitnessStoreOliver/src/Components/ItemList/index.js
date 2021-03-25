import './index.css';
import React from 'react';

export const ItemList = ({items}) => {
   return(
       <div>
           <p className="displayFlex">{items.map((e)=>{
               return   <div>
                            <img src={e.pictureUrl} alt={e.title}></img>
                            <p className="displayNone">{e.id}</p>
                            <h2>{e.title}</h2>
                            <p>Descripción: {e.description}</p>                        
                            <p>Precio: ${e.precio}</p>
                        </div>
           })}</p>
       </div>
   )
}