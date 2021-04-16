import React from "react";
import "./item.scss";
import { Link } from "react-router-dom";

export const Item = ({item}) =>{
    return (
        <article className="productCard">
            <Link to={`/item/${item.id}`}>
                <div className="productCard__contenedor">
                    <img className="product__img" src={item.image} alt="imagen_del_producto"/>
                    <div className="product__info">
                        <h3 className="product__title">{item.title}</h3>
                        <p className="product__price">$ {item.price}</p>
                    </div>
                </div>
            </Link>
        </article>
    )
}