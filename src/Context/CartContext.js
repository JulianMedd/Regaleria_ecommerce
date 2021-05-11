import React,{useState, useEffect} from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cant, setCant] = useState(0)

    useEffect(()=>{
        let montoTotal = cart.reduce((acumulador,e)=>{
            let precioU = e.quantity * e.item.price
            return acumulador + precioU
        },0)

        let totalItems = cart.reduce((accumulador, ItemActual)=>{
            return accumulador + ItemActual.quantity
        },0);
        
        setTotal(montoTotal)
        setCant(totalItems)
    },[cart])

    const addItem = (newItem, newQuantity) =>{

        const prevCartItem = cart.find(e=> e.item.id === newItem.id)

        let newCart;
        let qty;
        if (prevCartItem){  //podria evaluar la sentencia con isInCart()
            newCart = cart.filter(e => e.item.id !== newItem.id)
            qty = prevCartItem.quantity + newQuantity;
        }else{
            newCart = [...cart]
            qty =  newQuantity;
        }

        setCart([...newCart, { item: newItem , quantity: qty  }])

    }

    const removeItem = (itemId) =>{
        const cartNuevo = cart.filter(e=>e.item.id !== itemId)
        setCart(cartNuevo)
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = id =>{
        
        const currentItem = cart.find(e=> e.item.id === id)
        
        if(currentItem === undefined) return false
        else return true
    }

    return <CartContext.Provider value={{cart,addItem,removeItem,clear,total,cant}}>{children}</CartContext.Provider>
}