
import React, { useState } from 'react'
import '../src/App.css';
import logoo from './assets/img/Letra C.jpg';


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
  
    function inicio(e) {
      e.preventDefault();
      
      console.log(setUsu);
      console.log(setPass);

      if ([usu, pass, captch].includes('')) {
        alert("Los campos son obligatorios")
      }else{

        if (usu!=usuario || pass != contraseña || captch != total.toString()) {
          setlogin("false");
          alert("Error al ingresar");
        }
        if (usu === usuario && pass === contraseña & captch === total.toString()) {
          setlogin("true");
          document.getElementById("login on").style.display = "none";
          alert("Sesion iniciada");
        }
      }
    }
    
  return (

    <div id='login-box'>
      <img src={logoo} className='logo'/>

      <form id='login on'>

      <h2>Bienvenido al sistema de ubicación para zonas públicas WIFI</h2>

        <label htmlFor="username">Username</label>git 
        <input type="text" placeholder='Enter Username' id="user" className='user' onChange={ (e)=> setUsu(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter Password' id="passe" className='passe' onChange={ (e) => setPass(e.target.value)} />

        <h5 className='cent'>
          Seguridad Captcha <br /> haga la suma del ultimo digito del usuario y el primer digito de la contraseña:  {usu.slice(-1)} + {pass.slice(0,1)}
        </h5>

        <input type="text" id='seguridad_captch' className='seguridad' onChange={ (e) => setCaptch(e.target.value)}/>

        <input type="submit" value='Ingresar' onClick={inicio}/>

      </form>

    </div>
  )
}

export default App