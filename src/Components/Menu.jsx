import React, { useState } from 'react'
import on from '../assets/img/jk.jpg'
import '../assets/css/Menu.css'
import { useNavigate } from 'react-router-dom'

const Menu = () => {

  const Submit = (e) => {
    e.preventDefault();

  }
  

  
  
  const  nav = useNavigate ()
  const add = () => {
  nav('/add')

  
  }



  return (
    
    <div id='menu-box'> 
    <img src= {on} alt="Usuario" className='logo' />
    
    <form id='menu-on' onSubmit={Submit}>



      <button id='adiv' type="submit" onClick={ add }> 1) Adivinanza</button>

      <button id='cerr' type="submit" > 2) Cerrar Sesión </button> 



    </form>
    
    </div>

  )
}

export default Menu