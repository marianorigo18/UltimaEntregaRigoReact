import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initialValue}) => {
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }
    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button>agregar al carro</button>
    </div>
  )
}

export default ItemCount