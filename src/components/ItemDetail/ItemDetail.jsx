import { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'

const ItemDetail = ({name, img, stock}) => {

  const [alet, setAlert] = useState(false)

  useEffect(()=>{
  },[alet])

  const handleOnAdd = (quantuty) => {
    Swal.fire({
      title: 'Se agregaron',
      text: `${quantuty} unidades de ${name}`,
      imageUrl: img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: name,
    })
    setAlert(!false)
  }
  return (
    <div>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>stock: {stock}</p>
        <ItemCount stock={stock} initialValue={1} onAdd={handleOnAdd}/>
    </div>
  )
}

export default ItemDetail