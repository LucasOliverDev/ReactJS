import './itemCount.css';
import React, {useState} from 'react';

export const ItemCount = ({descripcion,  stock}) => {
    let [numero, setNumero] = useState(1);
    return (
        <div>
            <p>Descripción: {descripcion}</p>
            <p>Stock: {stock}</p> 
            <div className='botonesTarjeta'>
                <button disabled={numero<=0} onClick={()=>(setNumero (numero - 1))}>-</button>
                <p>{numero}</p>
                <button disabled={numero>=5} onClick={()=>(setNumero (numero + 1))}>+</button>
            </div>
            <div>
            <button className='botonAgregar' disabled={numero<=0} onClick={()=> {console.log( `Seleccionaste ${numero} items`)}}>Agregar al carrito</button>
            </div>
        </div>
    )
}