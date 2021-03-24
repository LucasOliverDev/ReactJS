import React from 'react';

export const ItemList = ({items}) => {
   return(
       <div>
           <p>{items.map((e)=>{
               return <div>{e}</div>
           })}</p>
       </div>
   )
}