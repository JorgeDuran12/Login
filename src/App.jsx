
import React, { useState } from 'react'
import '../src/App.css';
import logoo from './assets/img/Letra C.jpg';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


//Reto #1

var usuario = "1007";
var contraseña = "7001";

var uldigts = usuario.slice(-1);
var firdits = contraseña.slice(0,1);

var total = Number(uldigts) + Number(firdits);

const App = () => {

    const [login,setlogin] = useState("false")
    const [usu, setUsu] = useState('');
    const [pass, setPass] = useState('');
    const [captch, setCaptch] = useState('');
  
    

    const Submit = (e) => {
      e.preventDefault();

    }
    
    const nav = useNavigate()

    const clickMenu = () => {


      if ([usu, pass, captch].includes('')) {
        Swal.fire({
          title:"Los campos son obligatorios",
          icon:"error",
          showConfirmButton: false,
          timer: 1500
        });

      }else{

        if (usu!=usuario || pass != contraseña || captch != total.toString()) {
          setlogin("false");
          Swal.fire({
            icon:"error",
            title:"No es posible ingresar",
            showConfirmButton: false,
            timer: 1500
          });
        }
        if (usu === usuario && pass === contraseña & captch === total.toString()) {
          setlogin("true");
          // document.getElementById("login-box").style.display = "none";
          Swal.fire({
            icon:"success",
            title:"Bienvenido",
            showConfirmButton: false,
            timer: 1150
            
          });
          
          setTimeout(() => {
            
            nav('/menu')
          }, 1000);
         

        }
      }
    }
    


  return (

    <div id='login-box'>
      <img src={logoo} className='logo'/>

      <form id='login on' onSubmit={ Submit }>

      <h2>Bienvenido al sistema de ubicación para zonas públicas WIFI</h2>

        <label htmlFor="username">Username</label>
        <input type="number" placeholder='Enter Username' id="user" className='user' autoComplete='off' onChange={ (e)=> setUsu(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter Password' id="passe" className='passe' onChange={ (e) => setPass(e.target.value)} />

        <label className='lin'>Seguridad Captcha</label>
        <h5>Haga la suma del ultimo digito del usuario y el primer digito de la contraseña:  {usu.slice(-1)} + {pass.slice(0,1)}</h5>
        
        <input type="number" id='seguridad_captch' className='seguridad' autoComplete='off' onChange={ (e) => setCaptch(e.target.value)}/>

        <input type="submit" value='Ingresar' onClick={clickMenu}/>

      </form>


    </div>
  )
}

export default App
