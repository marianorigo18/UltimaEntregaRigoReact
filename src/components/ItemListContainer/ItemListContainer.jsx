import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import Card from '../Card/Card'

export const ItemListContainer = () => {
    const [categories, setCategories] = useState([]) 
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    
    useEffect(() => {
        setLoading(true)    
        const db = getFirestore();
        const collectionProducts = categoriaId ? query(collection(db, "products"), where("category", "==", categoriaId)) : collection(db, "categories")
        getDocs(collectionProducts)
        .then((result)=>{
            const lista = result.docs.map((product)=>{
                return {
                    id: product.id,
                    ...product.data()
                }
            })
            setCategories(lista)
        })
        .catch((err)=> console.log(err))
        .then(()=>{setLoading(false)})
    },[categoriaId])


    if(loading){
        return(<h1>cargando...</h1>)
    }


  return (
    <div>
        <h1>categories</h1>
        <Card categories={categories} categoriaId={categoriaId}/>
    </div>
  )
}