import React, { useState, useEffect } from "react";
import { ItemList } from "../../Components/ItemList";
import "./itemListContainer.scss"

import {useParams} from 'react-router-dom'

import {getFirestore} from '../../firebase'


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoryId} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection("items")
        
        const agregarCollection = () => {
            const prom = itemCollection.get()
            prom.then(snaptshot=>{
                if(snaptshot.size > 0){
                    setItems(snaptshot.docs.map(doc => {
                      return {id: doc.id,  ...doc.data()}
                    }
                      ))
                  }
            })
        }

        if(categoryId){
            const categoryCollection = itemCollection.where('categoria', '==', categoryId)

            categoryCollection.get().then(snaptshot => {
                if(snaptshot.size === 0){
                    agregarCollection()
                }
                setItems(snaptshot.docs.map(doc => {
                    return {id: doc.id,  ...doc.data()}
                  })
                )
            })
        }else{
            agregarCollection()
        }
      
    },[categoryId])

    if (categoryId){
        return(
            <section className="items__container">
                <h3 className="tituloCategoria">PRODUCTOS DE LA CATEGORIA: {categoryId}</h3>
                <ItemList items={items}></ItemList>
            </section>
        )
    }

    return(
        <section className="items__container">
            <h3 className="tituloCategoria">LISTA DE TODOS LOS PRODUCTOS</h3>
            <ItemList items={items}></ItemList>
        </section>
    )
}

export default ItemListContainer;