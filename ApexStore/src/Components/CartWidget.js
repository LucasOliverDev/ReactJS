import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'

class CartWidget extends React.Component {
    render() {
      return (
        <div className='CartWidget'>
          <FaShoppingCart />
        </div>
      )
    }
  }

export default CartWidget;