import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asynkMock'
import ItemDetail from '../ItemDetail/ItemDetail'

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
        <h1>detalle del producto</h1>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer