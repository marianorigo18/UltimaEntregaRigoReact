import React from 'react'
import {getCategories} from "../../asynkMock"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    const [categories, setCategories] = useState([]) 
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    console.log(categoriaId)

    useEffect(() => {
        getCategories()
        .then(response => {
            setCategories(response)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    if(loading){
        return(<h1>cangando...</h1>)
    }


  return (
    <div>
        <h1>categories</h1>
        {
            categories.map(cat => {
                return(
                    <div key={cat.id}>
                        <img src={cat.img} alt={cat.name}/>
                        <p key={cat.id}>{cat.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
