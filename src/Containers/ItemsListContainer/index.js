import React, { useState, useEffect } from "react";
import ItemCount from "../../Components/ItemCount";
import { ItemList } from "../../Components/ItemList";

const prodcuts = [{
    id : 1,
    title : "Termo",
    price : 360,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
},{
    id : 2,
    title : "Mate",
    price : 160,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
},{
    id : 3,
    title : "Lata",
    price : 560,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
}]

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const prom = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(prodcuts)
            },2000)
        })

        prom.then(res=>setItems(res))
      
    })

    return(
        <div>
            <h3>ListContainer here</h3>
            <ItemList itemsList={items}></ItemList>
        </div>
    )
}

export default ItemListContainer;