import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

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
        return(<h1>cangando...</h1>)
    }


  return (
    <div>
        <h1>categories</h1>
        {
            categories.map(cat => {
                return(
                    <div key={cat.id} style={{border:"1px solid #c3c3c3", display: "inline-flex", flexWrap: "wrap"}}>
                        <img src={cat.img} alt={cat.name} style={{width: "200px"}}/>
                        <p key={cat.id}>{cat.name}</p>
                        {categoriaId ? <Link to={`/articulo/${cat.id}`}>ver detalle</Link> : <Link to={`/categoria/${cat.slug}`}>ver categorias</Link>}
                        
                    </div>
                )
            })
        }
    </div>
  )
}