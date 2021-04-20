import {useContext} from 'react'
import {CartContext} from '../../Context/CartContext'
import {Link} from 'react-router-dom'

export const Cart = () =>{

    const {cart,removeItem,clear,cant} = useContext(CartContext)

    console.log(cart);
    return(
        <div>
                <h3>Tu carrito</h3>
            {
            !cart.length ?   
                <h3>Aun no has seleccionado ningun producto <Link to='/'>ir a comprar</Link></h3>
                :
                (
                <section>
                    {cart.map(cartItem => (
                        <div key={cartItem.item.id} >
                            <div> Titulo:  {cartItem.item.title}  </div>
                            <div> cantidad: {cartItem.quantity} </div>
                            <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                        </div>)
                    )}
                    <div>TOTAL: {}</div>
                    <button >eliminar todos los items</button>
                </section>
                )
            }
            
        </div>
    )
}