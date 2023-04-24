import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import Card from '../Card/Card'
import Grilla from '../Grilla/Grilla'

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

    console.log(categories)
    if(loading){
        return(<h1 className='text-3xl m-7 font-bold text-blue-600'>cargando...</h1>)
    }


  return (
    <div>
        <h1 className='text-3xl m-7 font-bold'>categories</h1>
        <Grilla>
            <Card categories={categories} categoriaId={categoriaId}/>
        </Grilla>
    </div>
  )
}