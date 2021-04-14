import React,{useState} from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) =>{
        if (isInCart(item.id)){
            const itemRepetido = cart.find(e=>e.item.id === item.id)
            removeItem(item.id)
            setCart([...cart,{item:item, quantity: itemRepetido.quantity + quantity}])
        }
        // if (isInCart(item.id)) {
        //     item.quantity += quantity
        // } else {
        //     setCart(cart.push({item:item, quantity:quantity}))
        // }
    }

    const removeItem = (itemId) =>{
        setCart(cart.filter(e=>e.item.id !== itemId))
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (id) =>{
        const currentItem = cart.find(e=> e.item.id === id)

        return currentItem ? true : false
    }

    return <CartContext.Provider value={{cart,addItem,removeItem,clear}}>{children}</CartContext.Provider>
}