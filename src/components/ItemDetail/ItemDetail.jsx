import { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import {useCartContext} from "../../context/CartContext"

const ItemDetail = ({name, img, stock, id}) => {
  
  const [alet, setAlert] = useState(false)
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext()

  useEffect(()=>{
  },[alet])

  const handleOnAdd = (quantuty) => {
    Swal.fire({
      title: `Se agregaron ${quantuty}`,
      text: `${name}`,
      imageUrl: img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: name,
    })
    addProduct({name, img, stock, id},quantuty)
    setAlert(!false)
    setGoToCart(true)
  }
  return (
    <div className='grid place-content-center'>
        <img src={img} alt={name}/>
        <h2 className='font-bold'>{name}</h2>
        <p className='font-bold'>stock: {stock}</p>
        {
          goToCart ? 
          <div className='flex flex-col'>
            <Link className='text-xl text-green-500 bg-amber-700'to="/cart">ver carrito</Link>
            <Link className='text-xl text-cyan-500 bg-red-400'to="/">volver al inicio</Link>
          </div> :
          <ItemCount stock={stock} initialValue={1} onAdd={handleOnAdd}/>
        }
    </div>
  )
}

export default ItemDetail