import React, {useState, useEffect} from 'react';
import { ItemCount } from '../ItemCount'
import { ItemList } from '../ItemList';

export function ItemListContainer () {
    const [items, setItems] = useState([])

    useEffect(()=>{
        const prom = new Promise((resolver)=>{
            setTimeout(()=>{
                resolver([{id: 1, title:"Mancuerna", description:"Mancuerna de 10kg", precio:3000, pictureUrl:"https://d2r9epyceweg5n.cloudfront.net/stores/564/787/products/10mk1-ec32896102151966de15956902747110-1024-1024.jpg"},
            {id: 2, title:"Colchoneta", description:"Colchoneta para entrenar", precio:750, pictureUrl:"https://mirfitness.com.ar/wp-content/uploads/1961-1.jpg"},
            {id: 3, title:"Barra", description:"Barra olímpica de 20kg", precio:7500, pictureUrl:"data:image/jpeg;base64,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"},
            {id: 4, title:"Caminadora", description:"Caminadora TP 350", precio:45000, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOe0lctkM_ykQelXZt0PM4B76l1Yc1mxSZA&usqp=CAU"}])
            },2000)                
        })

        prom.then((resultado)=> {
            setItems(resultado)
        })
        
    })
    return (
        <div>
            <ItemList items={items}/>
            <ItemCount stock = '5'/>
        </div>
    )
}