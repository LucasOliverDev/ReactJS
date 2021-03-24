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
            {id: 3, title:"Barra", description:"Barra olímpica de 20kg", precio:7500, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qTdDzQ_K1JaVZaJkg1tvn22g24BpA10zOA&usqp=CAU"},
            {id: 4, title:"Caminadora", description:"Caminadora TP 350", precio:45000, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOe0lctkM_ykQelXZt0PM4B76l1Yc1mxSZA&usqp=CAU"}])
            },0)                
        })

        prom.then((resultado)=> {
            setItems(resultado)
        })
        
    })
    return (
        <div>
            <ItemList items={items}/>
            <ItemCount
                descripcion = 'Mancuerna de 5kg'
                stock = '5'
            />
        </div>
    )
}