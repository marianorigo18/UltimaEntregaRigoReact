import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../Cartt.js/Cart'
import Brand from '../Brand/Brand'

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 50px",
    height: "100px",
    position: "relative",
   boxShadow: "0 2px 3px rgba(0,0,0,0.1)",
   fontSize: "18px",
  }
}

const Navbar = () => {
  return (
    <div style={styles.navbar}>
        <Brand/>
        <div>
          <NavLink className="pl-4 underline" to="/categoria/cuadrado-embutir">cuadrado embutir</NavLink>
          <NavLink className="pl-4 underline" to="/categoria/circular-embutir">circular embutir</NavLink>
          <NavLink className="pl-4 underline" to="/categoria/cuadrado-aplicar">cuadrado aplicar</NavLink>
          <NavLink className="pl-4 underline" to="/categoria/circular-aplicar">circular aplicar</NavLink>
        </div>
        <Cart/>
    </div>
  )
}

export default Navbar