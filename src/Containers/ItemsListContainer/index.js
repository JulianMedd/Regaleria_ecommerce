import React, { useState, useEffect } from "react";
import { ItemList } from "../../Components/ItemList";

import {useParams} from 'react-router-dom'

import {getFirestore} from '../../firebase'

// const products = [{
//     id : 3,
//     categoria: "cocina",
//     title : "Termo",
//     price : 360,
//     description : "lorem",
//     image : `https://picsum.photos/200/200`,
// },{
//     id : 56,
//     categoria: "cocina",
//     title : "Mate",
//     price : 1610,
//     description : "lorem",
//     image : `https://picsum.photos/200/200`,
// },{
//     id : 888,
//     categoria: "libreria",
//     title : "cuaderno",
//     price : 5160,
//     description : "lorem",
//     image : `https://picsum.photos/200/200`,
// },{
//     id : 128,
//     categoria: "libreria",
//     title : "lapicera",
//     price : 560,
//     description : "lorem",
//     image : `https://picsum.photos/200/200`,
// },{
//     id : 156,
//     categoria: "accesorios",
//     title : "cuadro",
//     price : 1160,
//     description : "lorem",
//     image : `https://picsum.photos/200/200`,
// },{
//     id : 1888,
//     categoria: "libreria",
//     title : "cartuchera",
//     price : 1560,
//     description : "lorem",
//     image : `https://picsum.photos/200/200`,
// },{
//     id : 1128,
//     categoria: "libreria",
//     title : "anotadores",
//     price : 1560,
//     description : "lorem",
//     image : `https://picsum.photos/200/200`,
// }]

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoryId} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection("items")
        const prom = itemCollection.get()

        prom.then(snaptshot=>{
            if(snaptshot.size > 0){
                setItems(snaptshot.docs.map(doc => {
                  return {id: doc.id,  ...doc.data()}
                }
                  ))
              }
        })

        console.log(items);
      
    },[categoryId])

    return(
        <div>
            <h3>{categoryId}</h3>
            <ItemList items={items}></ItemList>
        </div>
    )
}

export default ItemListContainer;