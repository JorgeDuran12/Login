import React, { useEffect, useMemo, useState } from 'react'
import '../assets/css/Add.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'


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

              Swal.fire({
                title:'Felicidades lo adivinaste en  ' + cont + '   intentos',
                timer:1500
              })
              
              setTimeout(() => {
                      location.reload()
              },2000 );             

            }else{
              if(ValorInput>10 ||ValorInput<0) {
                Swal.fire({
                
                  title:'ESTAS FUERA DE LOS PARAMETROS',
                  timer:1500
                 

                 })

            }else{
              if (ValorInput > NumeroAl) {
                Swal.fire({
                 title: 'TE PASASTE',
                 timer:1500

                })
              }else{
                if (ValorInput<NumeroAl)
                Swal.fire({
                 title: 'ESTAS POR DEBAJO',
                  timer:1500
                })
             }
            }
          } 
          
          
          
        }
        
        const  nav = useNavigate ()
        const nw = () => {
            
            nav('/menu')
          
          }
      

  
  return (

    <div id='add-box'>

      <form id='add' onSubmit={ Submit3 }>  

      <label  className='h'>Adivinanza</label>
      <br />
      <label>¿Cuál es el numero secreto entre [0,10]?</label>
      <br />
      <input type="text" placeholder='Ingresa un numero' id='number' autoComplete='off'value={ ValorInput } onChange={(e) => {setValorInput(e.target.value)}}/>

      <button type='submit' id='btn' onClick={ au }>Verificar</button>
      <button type='submit'  id='btm' onClick={ nw }>Menu</button>

      </form>


    </div>

  )
}
export default Add
