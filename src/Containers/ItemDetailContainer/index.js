import React, {useEffect, useState} from "react";
import { ItemDetail } from "../../Components/ItemDetail";
import { useParams } from "react-router-dom";

import {getFirestore} from "../../firebase";


const getItem = (id) =>{
    const db = getFirestore()
    const itemCollection = db.collection('items')

    const item = itemCollection.doc(id)
    return item.get()
}

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const {itemId} = useParams()

    useEffect(()=>{
        getItem(itemId)
        .then((doc)=>{
            console.log(doc.id);
            setItem({id: doc.id, ...doc.data()})
        })
    },[itemId])

    return  <ItemDetail item={item}></ItemDetail>

}