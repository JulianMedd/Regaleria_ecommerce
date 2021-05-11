import React,{ useState, useContext } from "react";
import ItemCount from "../ItemCount";
import "./itemDetail.scss";
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
        <div className="cardDetail">
            <h3>DETALLE DEL PRODUCTO</h3>
            <section className="cardDetail__container">
                <div className="cardDetail__info">

                    <h3>{item.title}</h3>
                    <img src={item.image} alt={item.title}/>
                    <p>{item.description}</p>

                </div>
                <div>

                    {count === 0 ? 
                        <ItemCount initial={0} stock={item.stock} onAdd={agregar}></ItemCount>
                        :
                        <Link to="/cart">
                            <button>TERMINAR COMPRA</button>
                        </Link>}
                </div>

            </section>
        </div>
    )
}