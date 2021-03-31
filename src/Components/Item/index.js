import React from "react";
import "./item.scss";
import { Link } from "react-router-dom";

export const Item = ({product}) =>{
    return (
        <Link to={`/item/${product.id}`}>
        <article className="productCard">
            <div className="productCard__contenedor">
                <img className="product__img" src={product.image} alt="imagen_del_producto"/>
                <div className="product__info">
                    <h3 className="product__title">{product.title}</h3>
                    <p className="product__description">{product.description}</p>
                    <div className="product__price">{product.price}</div>
                </div>
            </div>
        </article>
        </Link>
    )
}