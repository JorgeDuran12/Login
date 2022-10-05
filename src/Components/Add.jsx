import React, { useEffect, useMemo, useState } from 'react'
import '../assets/css/Add.css'
import swal from 'sweetalert';

const Add = () => {

const [cont, setcont] = useState(0);
  useEffect(() =>{
       },[cont]);

      const au = () => {
      setcont(cont + 1)
      }
        
        const [ValorInput, setValorInput] = useState('')

              const NumeroAl  = useMemo(() => (Math.floor( Math.random()*10)), [])
              
            
           
        const Submit3 = (e) => {
          e.preventDefault();

            if(ValorInput == NumeroAl ){

              swal('Felicidades lo adivinaste en  ' + cont + '   intentos')

            }else{
              if(ValorInput>10 ||ValorInput<0) {
                alert('ESTAS FUERA DE LOS PARAMETROS')
            }else{
              if (ValorInput > NumeroAl) {
                alert('TE PASASTE')
              }else{
                if (ValorInput<NumeroAl)
                alert('ESTAS POR DEBAJO')
            }
          }
          
        } 
        }
        
  
  return (

    <div id='add-box'>

      <form id='add' onSubmit={Submit3}>  

      <label>Adivinanza</label>
      <br />
      <label>¿Cuál es el numero secreto entre [0,10]?</label>
      <br />
      <input type="text" placeholder='Ingresa un numero' id='number' autoComplete='off'value={ ValorInput } onChange={(e) => {setValorInput(e.target.value)}}/>
      <button type='submit' id='btn' onClick={au}>Verificar</button>

      </form>


    </div>

  )
}

export default Add
