import React,{ useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({itemD}) => {
    const [count, setCount]=useState(0)

    const agregar = (contador) =>{
        console.log(contador);
        setCount(contador)
    }

    return (
        <div>
            
            <h3>item detail</h3>
            <h3>{itemD?.title}</h3>
            <img src={itemD?.image}/>
            {count === 0 ? 
                <ItemCount initial={0} stock={5} onAdd={agregar}></ItemCount>
                :
                <Link to="/cart">
                    <button>TERMINAR COMPRA</button>
                </Link>}
        </div>
    )
}