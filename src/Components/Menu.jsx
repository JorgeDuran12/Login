import React, { useEffect, useState } from 'react'
import on from '../assets/img/jk.jpg'
import '../assets/css/Menu.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Menu = () => {

  const Submit2 = (e) => {
    e.preventDefault();
    
  }

  const  nav = useNavigate ()
  const add = () => {
    Swal.fire({
      title:'Bienvenido a la adivinanza',
      timer:1400,
      showConfirmButton: false,
      padding:'70px',
      color: 'black',
      background: '#FFC300',

    })
    setTimeout(() => {
      nav('/add')
    }, 1500);
  }

  const men = () => {

    Swal.fire({
      title: 'Hasta  pronto',
      timer: 1300,
      showConfirmButton: false,
      padding:'70px',
      color: 'black',
      background: '#FFC300',

    })

    setTimeout(() => {
      nav('/')
    },2000 );   
    
  }


  

  return (
    
    <div id='menu-box'> 
    <img src= {on} alt="Usuario" className='logo' />
    
    <form id='menu-on' onSubmit={Submit2}>
      <label htmlFor="Menu">Menu</label>
      <br />

      <button id='adiv' type="submit" onClick={ add } > 1) Adivinanza</button>

      <button id='cerr' type="submit" onClick={ men }> 2) Cerrar Sesión </button> 


    


    </form>
    
    </div>

  )
}

export default Menu