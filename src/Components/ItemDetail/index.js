import React from "react";

export const ItemDetail = ({itemD}) => {
    return (
        <div>
            
            <h3>item detail</h3>
            <h3>{itemD?.title}</h3>
            <img src={itemD?.image}/>
        </div>
    )
}