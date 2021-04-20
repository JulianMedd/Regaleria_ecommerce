import React, { useContext } from "react";
import {CartContext} from '../../Context/CartContext'

export const CartWidget = () => {

    const {cant} = useContext(CartContext)

    if(cant===0){
        return  <ion-icon name="cart-sharp"></ion-icon>
    }

    return (
        <>
        <ion-icon name="cart-sharp"></ion-icon>
        <div>{cant}</div>
        </>
    )
}

export default CartWidget;