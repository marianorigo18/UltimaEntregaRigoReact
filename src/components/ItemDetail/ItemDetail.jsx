import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({name, img, stock}) => {

  const handleOnAdd = (quantuty) => {
    console.log(quantuty)
  }
  return (
    <div>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <ItemCount stock={stock} initialValue={1} onAdd={handleOnAdd}/>
    </div>
  )
}

export default ItemDetail