import React, {useEffect, useState} from 'react';

export const ItemCount = (props) => {
    let [numero, setNumero] = useState(1);
    return (
        <div>
            <p>Descripción: {props.descripcion}</p>
            <p>Stock: {props.stock}</p> 
            <div>
                <button disabled={numero<=0} onClick={()=>(setNumero (numero - 1))}>-</button>
                <p>{numero}</p>
                <button disabled={numero>=5} onClick={()=>(setNumero (numero + 1))}>+</button>
            </div>
            <div>
            <button onClick={()=> {console.log( `Seleccionaste ${numero} items`)}}>Agregar al carrito</button>
            </div>
        </div>
    )
}