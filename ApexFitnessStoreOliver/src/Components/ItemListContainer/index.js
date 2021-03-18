import React, {Component} from 'react';

export const ItemListContainer = (props) => {
    return (
         <p className="greeting">
            {props.greeting}
        </p>
    )
}