import React, {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock, initial}) {
    const [counter, setCounter] = useState(initial);
    const onAdd = () => {
        if(counter<stock) {
            setCounter(counter + 1)
        }
    }
    const onSubstract = () => {
        if(counter>0) {
            setCounter(counter - 1)
        }
    }
    return(
        <div>
            <h2>Producto</h2>
            <p>Stock: {stock}</p>
            <div className="flex">
                <button onClick={onSubstract}>-</button>
                <p>{counter}</p>
                <button onClick={onAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;