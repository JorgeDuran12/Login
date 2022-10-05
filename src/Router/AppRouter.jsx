import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Add from '../Components/Add'
import Menu from '../Components/Menu'
const AppRouter = () => {
  return (
    
    <BrowserRouter>
    
        <Routes>

            <Route path= '/' element={ <App />}/>
        
            <Route path= 'menu' element={ <Menu />}/>
          
            <Route path= 'add' element={ <Add/>}/>

        </Routes>
    
    </BrowserRouter>

  )
}

export default AppRouter