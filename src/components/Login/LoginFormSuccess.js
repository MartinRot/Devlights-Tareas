import React from 'react'
import "./LoginFormSuccess.css"

const LoginFormSuccess = ( { onLogout } ) => {

  let email = localStorage.getItem('Email');
  let type = localStorage.getItem('Tipo');

  function handleClick(){
    onLogout()
    return
  }

  return (
    <div className='LoginFormSuccess'>
      <h3 className='LoginSuccessTitle'>Bienvenido!</h3>
      <div className='LoginSuccessDescription'>
       <p>Tu Email: {email} </p>    
       <p>Tipo: {type} </p>  
       <button className='SuccessButton' onClick={handleClick}>Cerrar Sesion</button> 
      </div>    
    </div>
  )
}

export default LoginFormSuccess