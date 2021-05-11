import {useContext, useState} from 'react'
import {CartContext} from '../../Context/CartContext'
import {Link} from 'react-router-dom'
import "./cart.scss"

import {getFirestore} from '../../firebase'

import firebase from 'firebase/app';
import 'firebase/firestore';

export const Cart = () =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [orderId, setOrderId] = useState(null)

    const {cart,removeItem,clear,total,cant} = useContext(CartContext)

    
    const db = getFirestore()
    
    const orders = db.collection("orders")
    
    const generarOrden = (e) =>{
        e.preventDefault();
        
        const date = firebase.firestore.Timestamp.fromDate(new Date())
        const buyer = {name, phone, email}

        const items = cart.map(cartItem =>{
            let id = cartItem.item.id
            let title = cartItem.item.title
            let price = cartItem.item.price * cartItem.quantity

            return {id, title, price}
        })

        const newOrder = {buyer, items, date, total}

        orders.add(newOrder)
        .then(doc => {
            setOrderId(doc.id)
        })

        const itemsCollection = db.collection('items')
        .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(e => e.item.id))

        itemsCollection.get()
        .then(resultado =>{

            const batch = db.batch()

            for (const documento of resultado.docs) {

                const stockActual = documento.data().stock;

                const itemDelCart = cart.find(cartItem => cartItem.item.id === documento.id);

                const cantidadComprado = itemDelCart.quantity

                const nuevoStock =  stockActual - cantidadComprado;


                batch.update(documento.ref,
                    {stock: nuevoStock}
                )
                
            }

            batch.commit()

        })

        clear()

    }

    if(orderId) return <h3>tu numero de orden es: {orderId}</h3>

    if(cant === 0) return <h3>Aun no has seleccionado ningun producto <Link to='/'>ir a comprar</Link></h3>

    return(
        <div className="cardCarrito">
                <h3>Tu carrito</h3>
            {
            orderId ?   
                <h3>tu orden es: {orderId}</h3>
                :
                (
                <section className="cardCarrito__container">
                    {cart.map(cartItem => (
                        <div key={cartItem.item.id} className="cardCarrito__info">
                            <div> {cartItem.item.title}  </div>
                            <div> {cartItem.quantity}u. </div>
                            <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                        </div>)
                    )}
                    <div>TOTAL: ${total}</div>
                    <button onClick={()=>clear()}>eliminar todos los items</button>
                    <button><Link to="/">seguir comprando</Link></button>
                    
                    <form action=""  onSubmit={generarOrden}>

                        <input type="text" placeholder="NOMBRE" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input type="text" placeholder="TELEFONO" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        <input type="email" placeholder="EMAIL" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        <button type="submit"> Generar orden</button>
                    </form>
                    
                </section>
                )
            }
            
        </div>
    )
}