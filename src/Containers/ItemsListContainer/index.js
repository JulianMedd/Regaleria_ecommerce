import React from "react";
import ItemCount from "../../Components/ItemCount";

export const ItemListContainer = () => {
    return(
        <div>
            <h3>ListContainer here</h3>
            <ItemCount 
                stock={5} 
                initial={1} 
                agregarCarrito={(count)=>{console.log(count);}}
            ></ItemCount>
        </div>
    )
}

export default ItemListContainer;