import { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const ItemDetail = ({name, img, stock}) => {

  const [alet, setAlert] = useState(false)
  const [goToCart, setGoToCart] = useState(false)

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
    setAlert(!false)
    console.log(`se agregaron ${quantuty} de ${name}`)
    setGoToCart(true)
  }
  return (
    <div className='grid place-content-center'>
        <img src={img} alt={name}/>
        <h2 className='font-bold'>{name}</h2>
        <p className='font-bold'>stock: {stock}</p>
        {
          goToCart ? <Link to="/cart">terminar compra</Link> :
          <ItemCount stock={stock} initialValue={1} onAdd={handleOnAdd}/>
        }
    </div>
  )
}

export default ItemDetail