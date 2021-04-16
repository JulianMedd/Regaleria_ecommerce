import React from "react";
import "./itemList.scss";
import { Item } from "../Item";

export const ItemList = ({items}) =>{
    return(
    <section className="itemList">
        {items.map(item => <Item item={item}></Item>)}
    </section>
    )
}