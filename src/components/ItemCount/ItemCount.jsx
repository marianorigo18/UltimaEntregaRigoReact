import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initialValue, onAdd}) => {
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }
    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1)
    }
  return (
    <div>
        <h1 className='font-bold underline'>cantidad: {count}</h1>
        <button className='border text-lg font-bold p-5' onClick={decrement}>-</button>
        <button className='border text-lg font-bold p-5' onClick={increment}>+</button>
        <button className='border text-lg font-bold p-5' onClick={() => onAdd(count)}>agregar al carro</button>
    </div>
  )
}

export default ItemCount