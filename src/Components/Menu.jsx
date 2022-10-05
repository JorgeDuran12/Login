import React, { useEffect, useState } from 'react'
import on from '../assets/img/jk.jpg'
import '../assets/css/Menu.css'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const Menu = () => {

  const Submit2 = (e) => {
    e.preventDefault();
    
  }

  const  nav = useNavigate ()
  const add = () => {
  nav('/add')
  
  }

  const men = () => {
    swal({
      title: 'Hasta pronto'
    })
    nav('/')
  }


  

  return (
    
    <div id='menu-box'> 
    <img src= {on} alt="Usuario" className='logo' />
    
    <form id='menu-on' onSubmit={Submit2}>

      <label htmlFor="Bien">Bienvenido</label>
      <label htmlFor="Menu">Menu</label>
      <br />

      <button id='adiv' type="submit" onClick={ add } > 1) Adivinanza</button>

      <button id='cerr' type="submit" onClick={ men }> 2) Cerrar Sesión </button> 


    


    </form>
    
    </div>

  )
}

export default Menu