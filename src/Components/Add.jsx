import React, { useEffect, useState } from 'react'
import '../assets/css/Add.css'

const Add = () => {


  const Submit3 = (e) => {
    e.preventDefault();
  }
   
  





  
  return (

    <div id='add-box'>

      <form id='add' onSubmit={Submit3}>  

      <label>Adivinanza</label>
      <br />
      <label>¿Cuál es el numero secreto entre [0,10]?</label>
      <br />
      <input type="text" placeholder='Ingresa un numero' id='number' autoComplete='off'/>
      <button type='submit' id='btn'>Verificar</button>

      </form>


    </div>

  )
}

export default Add
