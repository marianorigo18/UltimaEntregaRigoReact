import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [productData, setProductData] = useState({})
    const [loading, setLoading] = useState(true)
    const [exist, setExist] = useState(false)

    useEffect(()=>{
        const db = getFirestore();
        const docRef = doc(db, "products", productId);
        getDoc(docRef)
        .then(product => {
            if(!product.exists()){
                setExist(true)
            }
            setProductData({id: product.id, ...product.data()})
        })
        .catch(err => console.log(err))
        .then(()=>{setLoading(false)})
    }, [productId])


  return loading ? <h1 className='text-3xl m-7 font-bold text-blue-600'>cargando...</h1> : exist ? <h1 className='text-3xl m-7 font-bold text-blue-600'>El producto no existe el producto</h1> : (
    <div>
        <h1 className='text-3xl m-7 font-bold'>detalle del producto</h1>
        <ItemDetail {...productData}/>
    </div>
  )
}

export default ItemDetailContainer