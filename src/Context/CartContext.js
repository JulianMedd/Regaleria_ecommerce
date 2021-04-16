import React,{useState} from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    

    const addItem = (item, quantity) =>{
        console.log(item.id);
        console.log(isInCart(item.id));
        if (isInCart(item.id)) {
            console.log("si esta" + quantity);
            const itemRepetido = cart.find(e=>e.item.id === item.id)
            removeItem(item.id)
            
        } else {
            setCart(cart.push({item:item, quantity:quantity}))
        }

        console.log(cart);
        // if (isInCart(item.id)){
        //     const itemRepetido = cart.find(e=>e.item.id === item.id)
        //     removeItem(item.id)
        //     setCart([...cart,{item:item, quantity: itemRepetido.item.quantity + quantity}])
        // } else {
        //     setCart(cart.push({item:item, quantity:quantity}))
        // }
        
    }

    const removeItem = (itemId) =>{
        console.log("eliminado");
        const cartNuevo = cart.filter(e=>e.item.id !== itemId)
        setCart(cartNuevo)
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (id) =>{
        console.log(id);
        const currentItem = cart.find(e=>e.item.id === id)

        return currentItem ? true : false
        
    }

    return <CartContext.Provider value={{cart,addItem,removeItem,clear}}>{children}</CartContext.Provider>
}