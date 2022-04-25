import React, { useState } from 'react'
import './FormSignIn.css'

/* 
*   Login:
*   Email: test@test.com
*   password: test
*/

const FormSignIn = ( { onSuccess, onClickLink } ) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [type, setType] = useState('')
   
    function handleClick() {  
      if ( email === "test@test.com" ) {
        if( password === "test" ){
          if (type !== ""){        
            setError("")
            window.localStorage.setItem("isLogged", true)  
            window.localStorage.setItem("Email", email)
            window.localStorage.setItem("Tipo", type)  
      
            onSuccess()
            return 
          }
        }
      }else{
        setError("Datos Invalidos")
      }
    }

    function handleClickLink(){
        onClickLink()
        return
    }
    
    function onEmailChange(event){
      setEmail(event.target.value)
    }
  
    function onPasswordChange(event){
      setPassword(event.target.value)
    }
  
    function onTypeChange(event){
      setType(event.target.value)
    }

  return (
    <>
      <h4 className='FormTitle'>Stax Food Admin Login</h4>

      {error.length > 0 ? (
        <div className='ErrorMessage'> {error} </div>
      ) : null} 
      
      <div className='LoginForm'>    

          <h2 className='LoginFormDescription'>Please fill in your unique admin login details below</h2>

          <div className='LoginFormContainer'>

              <label htmlFor="email" className='LoginFormInputLabel'>Email address</label>
              <input type="email" name='email' id='email' className='LoginFormInput' value={email} onChange={onEmailChange} />

              <label htmlFor='password' className='LoginFormInputLabel'>Password</label>
              <input type="password" name='password' id='password' className='LoginFormInput' value={password} onChange={onPasswordChange} />

              <label htmlFor="type" className='LoginFormInputLabel'>Tipo</label>
              <select id="type" name="type" className='LoginFormInput' value={type} onChange={onTypeChange}>
                  <option value="" defaultValue={""}>- selecciona -</option>
                  <option value="Alumno">Alumno</option>
                  <option value="Profesor">Profesor</option>  
              </select>

              <h3 className='LoginFormLink' onClick={handleClickLink}>registrarse</h3>
              <button className='LoginFormButton' onClick={handleClick}>Sign In</button>

          </div>
      </div>    
    </>
  )
}

export default FormSignIn