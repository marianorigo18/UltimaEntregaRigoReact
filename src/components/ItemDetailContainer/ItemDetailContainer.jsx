import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asynkMock'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getProductById(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[productId])

    if(loading){
        return <h1>cargando...</h1>
    }
  return (
    <div>
        <img src={product.img} alt={product.name}/>
        <h2>{product.name}</h2>
        <ItemCount stock={product.stock} initialValue={1}/>
    </div>
  )
}

export default ItemDetailContainer