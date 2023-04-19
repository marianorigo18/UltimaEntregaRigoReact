import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <NavLink style={{paddingLeft: "20px"}} to="/">inicio</NavLink>
        <NavLink style={{paddingLeft: "20px"}} to="/categoria/cuadrado-embutir">cuadrado embutir</NavLink>
        <NavLink style={{paddingLeft: "20px"}} to="/categoria/circular-embutir">circular embutir</NavLink>
        <NavLink style={{paddingLeft: "20px"}} to="/categoria/cuadrado-aplicar">cuadrado aplicar</NavLink>
        <NavLink style={{paddingLeft: "20px"}} to="/categoria/circular-aplicar">circular aplicar</NavLink>
    </div>
  )
}

export default Navbar