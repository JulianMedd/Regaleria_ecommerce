import React, {useEffect, useState} from "react";
import { ItemDetail } from "../../Components/ItemDetail";

/* const itemOne = {
    id : 1,
    title : "caja",
    price : 450,
    image : `https://picsum.photos/200/300`
} */

const getItem = () =>{
    return new Promise(resolve=>{
        setTimeout(()=>{resolve(
            {
                id : 1,
                title : "caja",
                price : 450,
                image : `https://picsum.photos/200/300`
            }
        )},2000)
    })
}

export const ItemDetailContainer = () => {
    const [itemD, setItemD] = useState(null)

    useEffect(()=>{
        getItem().then((res)=>setItemD(res))
        
    },[])

    return (
        <ItemDetail itemD={itemD}></ItemDetail>
    )
}