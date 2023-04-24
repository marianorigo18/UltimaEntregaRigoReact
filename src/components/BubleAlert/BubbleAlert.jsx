import React, { useEffect } from 'react'
import { useState } from 'react'

const BubbleAlert = ({value}) => {
  const [valueCount, setValueCount] = useState(null)
  useEffect(()=>{
    if(!value || value === "0") return setValueCount(0)
    return value > 9 ? setValueCount("9+") : setValueCount(value) 
  },[value])

  return (
    <span className='bg-orange-600 rounded-full text-neutral-50 py-1 px-3 text-xs absolute'>{valueCount}</span>
  )
}

export default BubbleAlert