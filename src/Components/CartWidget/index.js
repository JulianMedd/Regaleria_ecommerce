import React, { useContext } from "react";
import "./cartWidget.scss";
import {CartContext} from '../../Context/CartContext'

export const CartWidget = () => {

    const {cant} = useContext(CartContext)

    if(cant===0){
        return  <ion-icon name="cart-sharp" className="carritoLogo"></ion-icon>
    }

    return (
        <div className="cart__container">
            <div><ion-icon name="cart-sharp" className="carritoLogo"></ion-icon></div>
            <div className="cart__contador">{cant}</div>
        </div>
    )
}

export default CartWidget;