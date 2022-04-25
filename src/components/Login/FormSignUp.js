import React, { useState } from 'react'
import './FormSignUp.css'

const FormSignUp = ( { onRegister, onClickLink } ) => {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
    
  function onNameChange(event){
    setName(event.target.value)
  }

  function onSurnameChange(event){
    setSurname(event.target.value)
  }

  function onEmailChange(event){
    setEmail(event.target.value)
  }

  function onPasswordChange(event){
    setPassword(event.target.value)
  }

  function handleClickLink(){
    onClickLink()
    return
  }

  function handleClick() {

    if ( name.length > 0 ) {
      if ( surname.length > 0 ){    
        if ( email.length > 0 ) {
          if( password.length > 0 ){                    
              setError("")

              console.log("Nombre: " + name)
              console.log("Apellido: " + surname)
              console.log("Email: " + email)
              console.log("Password: " + password)
        
              onRegister()
              return             
          }
        }
      }
    }else{
      setError("Datos Invalidos")
    }
  }

  return (
    <>
      <h4 className='SignUpFormTitle'>Stax Food Admin Login</h4>

      {error.length > 0 ? (
        <div className='ErrorMessage'> {error} </div>
      ) : null} 
      
      <div className='SignUpForm'>    

        <h2 className='SignUpFormDescription'>Formulario registro</h2>

      <div className='SignUpFormContainer'>

            <label htmlFor="name" className='SignUpFormInputLabel'>Nombre</label>
            <input type="name" name='name' id='name' className='SignUpFormInput' value={name} onChange={onNameChange} />

            <label htmlFor="surname" className='SignUpFormInputLabel'>Apellido</label>
            <input type="surname" name='surname' id='surname' className='SignUpFormInput' value={surname} onChange={onSurnameChange} />

            <label htmlFor="email" className='SignUpFormInputLabel'>Email</label>
            <input type="email" name='email' id='email' className='SignUpFormInput' value={email} onChange={onEmailChange} />

            <label htmlFor='password' className='SignUpFormInputLabel'>Password</label>
            <input type="password" name='password' id='password' className='SignUpFormInput' value={password} onChange={onPasswordChange} />

            <h3 className='SignUpFormLink' onClick={handleClickLink}>iniciar sesion</h3>
            <button className='SignUpFormButton' onClick={handleClick}>Sign Up</button>

        </div> 
      </div>
    </>
  )
}

export default FormSignUp