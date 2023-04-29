import { Link } from "react-router-dom"
import BubbleAlert from "../BubleAlert/BubbleAlert"
import { useCartContext } from "../../context/CartContext"
const styles = {
    carro: {
        backgroundColor: "#359a2c",
        color: "#fff",
        border: "none",
        padding: "10px 15px",
        borderRadius: "15px",
    }
}

const Cart = () => {
  const {cart} = useCartContext()
  return (
    <div>
      <span className="relative right-16 top-5">
        <BubbleAlert value={cart.length}/>
      </span>
      <Link to="/checkout">
        <div style={styles.carro}>Carro</div>
      </Link>
    </div>
  )
}

export default Cart