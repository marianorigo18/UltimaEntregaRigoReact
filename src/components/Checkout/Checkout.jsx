import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import {addDoc, collection, getFirestore} from "firebase/firestore"





const Checkout = () => {
    const {cart, removeProduct} = useCartContext()

    const order = {
      buyer:{
        name: "mariano",
        email: "marianowagnerrigo@gmail.com",
        phone: "3755745627",
        address: "gunther 849"
      },
      items: cart.map(product => ({id: product.id, name: product.name, quantity: product.quantity}))
    }

    const handleClick = () => {
      const db = getFirestore()
      const ordersCollection = collection(db, "orders")
      addDoc(ordersCollection, order)
      .then(({id}) => console.log(id))
    }
        if(cart.length === 0){
          return (
            <>
            <p className="text-red-700 underline text-sm">hay un hay productos agregados</p>
            <Link to="/" className="text-2xl underline">ver products</Link>
            </>
          )
        }

        return (
          <>
            {
              cart.map(product => 
              <div key={product.id}>
                <img src={product.img} alt={product.name}/>
                <p>{product.name}</p>
                <p>cantidad: {product.quantity}</p>
                <button className="text-red-600" onClick={()=> removeProduct(product.id)}>eliminar</button>
              </div>
                )
            }
            <button onClick={handleClick} className="bg-green-600 p-3 m-4 text-white">finalizar compra</button>
          </>
        )
}

export default Checkout