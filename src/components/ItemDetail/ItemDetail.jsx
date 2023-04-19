import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({name, img, stock}) => {
  return (
    <div>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <ItemCount stock={stock} initialValue={1}/>
    </div>
  )
}

export default ItemDetail