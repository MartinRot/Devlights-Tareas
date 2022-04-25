import React, { useState } from 'react'
import FormSignIn from './FormSignIn'
import FormSignUp from './FormSignUp'

const FormContainer = ( { onSuccess } ) => {
  
  const [signUp, setSignUp] = useState('') 

  function onClickLink(){
    if (signUp === ""){
      setSignUp("true")
    }else{
      setSignUp("")
    }
  }  

  function onRegister(){    
    alert("Usuario Registrado")

    if (signUp === ""){
      setSignUp("true")
    }else{
      setSignUp("")
    }
  }
  
  return (    

  <>  
    {signUp === "true" ? <FormSignUp onClickLink={onClickLink} onRegister={onRegister}/> : <FormSignIn onSuccess={onSuccess} onClickLink={onClickLink} /> }
  </>

  )
}

export default FormContainer





