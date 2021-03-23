import React from "react";
import { Item } from "../Item";

export const ItemList = ({itemsList}) =>{
    return(
    <section className="itemList">
        {itemsList.map(product =>{
            return  <Item product={product}></Item>
        })}
    </section>
    )
}