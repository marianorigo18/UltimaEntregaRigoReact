import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
const Checkout = () => {
    const {cart} = useCartContext()

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
              cart.map(product => <div key={product.id}><img src={product.img} alt={product.name}/><p>{product.name}</p><p>{product.quantity}</p></div>)
            }
          </>
        )
}

export default Checkout