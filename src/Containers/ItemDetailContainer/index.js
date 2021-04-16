import React, {useEffect, useState} from "react";
import { ItemDetail } from "../../Components/ItemDetail";
import { useParams } from "react-router-dom";

const products = [{
    id : 3,
    categoria: "cocina",
    title : "Termo",
    price : 360,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
},{
    id : 56,
    categoria: "cocina",
    title : "Mate",
    price : 1610,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
},{
    id : 888,
    categoria: "libreria",
    title : "cuaderno",
    price : 5160,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
},{
    id : 128,
    categoria: "libreria",
    title : "lapicera",
    price : 560,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
},{
    id : 156,
    categoria: "accesorios",
    title : "cuadro",
    price : 1160,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
},{
    id : 1888,
    categoria: "libreria",
    title : "cartuchera",
    price : 1560,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
},{
    id : 1128,
    categoria: "libreria",
    title : "anotadores",
    price : 1560,
    description : "lorem",
    image : `https://picsum.photos/200/200`,
}]


const getItem = (id) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(products.find(e=>e.id === parseInt(id)))
        },2000)
    })
}

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const {itemId} = useParams()

    useEffect(()=>{
        getItem(itemId)
        .then((res)=>setItem(res)
        )
    },[itemId])

    return  <ItemDetail item={item}></ItemDetail>

}