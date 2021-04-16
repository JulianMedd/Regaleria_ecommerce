import React,{ useState, useContext } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({item}) => {
    const [count, setCount]=useState(0)

    const {addItem} = useContext(CartContext)

    const agregar = (contador) =>{
        addItem(item, contador)
        setCount(contador)
    }



    return (
        <div>
            <h3>item detail</h3>
            <h3>{item.title}</h3>
            <img src={item.image}/>
            {count === 0 ? 
                <ItemCount initial={0} stock={5} onAdd={agregar}></ItemCount>
                :
                <Link to="/cart">
                    <button>TERMINAR COMPRA</button>
                </Link>}
        </div>
    )
}