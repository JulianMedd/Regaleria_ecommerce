# E-Commerce / PROYECTO

![alt text](https://github.com/JulianMedd/Regaleria_ecommerce/blob/main/public/Animation.gif "Logo Title Text 1")

## La aplicacion se creo con REACT JS / create react app

    npm install creat-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

corre la aplicacion en la consola
abre [http://localhost:3000](http://localhost:3000) 
en el browser.

### `DEPENDENCIES`
 ##### `firebase`
    npm install firebase --save
 ##### `react-router-dom`
    npm install react-router-dom
 ##### `sass-node`
    npm install sass-node --save

## estilos

para los estilos de los componentes se utilizo sass, y se creo un archivo por cada componente en su respectivas carpetas.

## components

### `NavBar`

se creo un header con el logo (TOMO AMOR), 3 links de navegacion (libreria, accesorios, cocina) y un carrito de compra

##### logo
 al clickear te redirije al www.todoamor.com/, donde se mostraran todos los productos, que llamara al firebase.

##### libreria
    link categoria, llama al firebase y hace un filtrado de los productos con la categoria libreria.

##### accesorios
    link categoria, llama al firebase y hace un filtrado de los productos con la categoria libreria.

##### cocina
    link categoria, llama al firebase y hace un filtrado de los productos con la categoria libreria.


### `CartWidget`

se incorporo un icono de carrito de compra, cuando el usuario ingresa algun producto se puede observar las cantidades totales de los mismos a la derecha del carrito. Haciendo click sobre el carro te lleva a /cart.

### `Item`

recibe como parametro/prop un item, este componente se utiliza para mostrar en primer instansia el producto en cuestion, el mismo tiene un Link sobre todo el card del producto, al hacerle click te lleva a /:itemId

### `ItemCount`

componente creado para llevar un contador de los productos a comprar dependiendo del stock del mismo.
como props tiene el stock, el inicial y una funcion para agregar el producto al carrito.

### `ItemDetail`

Componente que muestra en detalle el producto seleccionado, se importo del cartContext la funcion addItem(), para agregar el item y la cantidad al carrito.
si detecta la seleccion de un producto aparece un boton para terminar con la compra y te lleva a /cart.

### `ItemList`

este componente recibe como prop un array de items, con el cual se itera con .map y devuelve un componente Item por cada item del array.

### `Cart`

componente utilizado para mostrar el detalle del carrito, con todos los items seleccionados sus cantidades y el monto total a pagar,mediante el componente CartContext, en el mismo se debera llenar un formulario para finalizar y generar la orden de compra, al generarla se eliminan todos los items del carrito y se crea una orden que se guarda el la base de datos de firebase y devuelve un numeroId de la orden.
Ademas actualiza el stock en la base de datos.

## components container

### `ItemDetailContainer`

al hacer click a un producto, este componente mediante el useParams() captura el itemId, con este dato consulta en la base de dato de firebase, y por medio de una funcion captura ese item y devuelve un componente IatemDetail al que le pasa como prop el item en cuestion.

### `ItemListContainer`

componente que llama a la base de datos de firebase y trae todos los productos y los guarda en un array. devuelve un componente ItemList al que le pasa como prop este array de items con su respectiva info.
En el caso de seleccionar una categoria del menu, en la llamada a la base de datos hace un filtrado para guardar los items de la misma categoria.

## context

### `CartContext`

se crear este context con varias funciones para manejar los productos seleccionados y sus cantidades,
se evalua si esta en el carrito en el caso de que esta se actualiza la cantidad en el caso de no se agrega el item completo, se calcula la cantidad total de todos los productos seleccionados y el monto total
