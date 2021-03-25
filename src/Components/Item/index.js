import React from "react";
import "./item.scss";

export const Item = ({product}) =>{
    return (
        <article className="productCard">
            <div className="productCard__contenedor">
                <img className="product__img" src={product.image} alt="imagen_del_producto"/>
                <div>
                    <h3 className="product__title">{product.title}</h3>
                    <p className="product__description">{product.description}</p>
                    <div className="product__price">{product.price}</div>
                </div>
            </div>
        </article>
    )
}