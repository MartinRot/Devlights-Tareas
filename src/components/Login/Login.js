import React, { useState } from 'react'
import FormContainer from './FormContainer'
import LoginFormSuccess from './LoginFormSuccess'
import './Login.css'

const Login = () => {

  const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged"))
  
  function onSuccess(){     
    if(isLogged === "true"){
      setIsLogged("")
    }else{
      setIsLogged("true")      
    } 
  }

  function onLogout(){
    setIsLogged("")
    window.localStorage.setItem("isLogged", "")  
    window.localStorage.setItem("Tipo", "")
    window.localStorage.setItem("Email", "")
  }

  return (      
    <main className='Login'>    
        <section  className='LoginFormContainer'>            
          {isLogged === "true" ? <LoginFormSuccess onLogout={onLogout}/> : <FormContainer onSuccess={onSuccess} />}            
        </section>
    </main>
  )
}

export default Login