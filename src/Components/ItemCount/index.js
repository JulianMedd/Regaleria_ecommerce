import React, {useState} from "react";
import "./itemCount.scss";


export const ItemCount = (props) =>{
    const [count, setCount] = useState(props.initial);

    const contadorSumar = () =>{
        setCount(count + 1);
    }

    const contadorRestar = () =>{
        setCount(count - 1);
    }

    /* const agregarCarrito= () =>{
        console.log(count);
    } */

    return(
        <div className="itemCount">
            <div className="itemCount__contador">
                <button disabled={count <= 0} onClick={contadorRestar}>-</button>
                <div>{count}</div>
                <button disabled={count >= props.stock} onClick={contadorSumar}>+</button>
            </div>
            <button id="btn__agregar" disabled={count === 0} className="itemCount__btn" onClick={()=>props.agregarCarrito(count)}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount;