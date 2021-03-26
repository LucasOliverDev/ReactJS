import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail';

export function ItemDetailContainer () {
    const [id, setItems] = useState([])

    useEffect(()=>{
        const getItems = new Promise((resolver)=>{
            setTimeout(()=>{
                resolver()
            },2000)                
        })

        getItems.then((resultado)=> {
            setItems(resultado)
        })
        
    },[])
    return (
        <div>
            <button onClick={()=>(setItems (id))}>Descripción</button>
            <ItemDetail id={id}/>
        </div>
    )
}