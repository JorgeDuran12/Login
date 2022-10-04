
import React, { useState } from 'react'
import '../src/App.css';
import logoo from './assets/img/Letra C.jpg';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import Menu from './Components/Menu';

//Reto #1

var usuario = "1007";
var contraseña = "7001";

var uldigts = usuario.slice(-1);
var firdits = contraseña.slice(0,1);

console.log(uldigts);
console.log(firdits);

var total = Number(uldigts) + Number(firdits);
console.log(total);

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

      console.log(setUsu);
      console.log(setPass);

      if ([usu, pass, captch].includes('')) {
        swal({
          title:"Los campos son obligatorios",
          icon:"error",
          button:"Aceptar"
          
        });

      }else{

        if (usu!=usuario || pass != contraseña || captch != total.toString()) {
          setlogin("false");
          swal({
            icon:"error",
            title:"No es posible ingresar",
            buttons:"Aceptar"
          });
        }
        if (usu === usuario && pass === contraseña & captch === total.toString()) {
          setlogin("true");
          document.getElementById("login on").style.display = "none";
          swal({
            icon:"success",
            title:"Bienvenido",
            buttons:"Aceptar"
            
          });
        nav('/menu')

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
        <h5>haga la suma del ultimo digito del usuario y el primer digito de la contraseña:  {usu.slice(-1)} + {pass.slice(0,1)}</h5>
        
        <input type="number" id='seguridad_captch' className='seguridad' autoComplete='off' onChange={ (e) => setCaptch(e.target.value)}/>

        <input type="submit" value='Ingresar' onClick={clickMenu}/>

      </form>

      { login == 'true' &&  <Menu />  }

    </div>
  )
}

export default App
