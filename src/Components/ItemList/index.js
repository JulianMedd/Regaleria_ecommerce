import React from "react";
import "./itemList.scss";
import { Item } from "../Item";

export const ItemList = ({items}) =>{
    return(
    <section className="itemList">
        {items.map(item => <Item key={item.id} item={item}></Item>)}
    </section>
    )
}