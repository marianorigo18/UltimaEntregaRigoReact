import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "spase-between",
    padding: "0 50px",
    height: "100px",
    position: "relative",
    boxShadow: "0 2px 3px rgba(0,0,0,0.1)"
  }
}

const Navbar = () => {
  return (
    <div style={styles.navbar}>
        <NavLink style={{paddingLeft: "20px"}} to="/">inicio</NavLink>
        <div>
          <NavLink style={{paddingLeft: "20px"}} to="/categoria/cuadrado-embutir">cuadrado embutir</NavLink>
          <NavLink style={{paddingLeft: "20px"}} to="/categoria/circular-embutir">circular embutir</NavLink>
          <NavLink style={{paddingLeft: "20px"}} to="/categoria/cuadrado-aplicar">cuadrado aplicar</NavLink>
          <NavLink style={{paddingLeft: "20px"}} to="/categoria/circular-aplicar">circular aplicar</NavLink>
        </div>
        <p>carro</p>
    </div>
  )
}

export default Navbar