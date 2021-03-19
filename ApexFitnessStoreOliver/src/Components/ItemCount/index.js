import React, {useState} from 'react';

export const ItemCount = (props) => {
    let [numero, setNumero] = useState(1);
    return (
        <div>
            <p>Descripción: {props.descripcion}</p>
            <div>
                <button onClick={()=>(setNumero (numero - 1))}>-</button>
                <p>{numero}</p>
                <button onClick={()=>(setNumero (numero + 1))}>+</button>
            </div>
            <div>
                <button onClick={()=> {return(props.carrito = `Seleccionaste ${numero} items`)}}>Agregar al carrito</button>
                <p>{props.carrito}</p>
            </div>
        </div>
    )
}