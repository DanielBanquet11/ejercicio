import React, { useState } from 'react'

export const App = () => {

 // primero hay que darle un estado al formulario con el useState
 const [Form, setForm] = useState({
  user: '',
  pass: '',
  captcha: ''
})

  const [Mensaje, setMensaje] = useState(false)


const { user, pass, captcha } = Form;

       
      
      
  const UltimoDigitoUser = user.slice(8,9);
  const UltimoDigitoPass = pass.slice(8,9);

  
  
  const Submit = (e) => {
    e.preventDefault();

    
      if(user==='123456789' && pass==='987654321' && captcha==='10')

        setMensaje('Correcto')

    else setMensaje('Incorrecto')

    setTimeout(() => {
        setMensaje('')
    }, 4000);
  }


  const inputUser = (e) => {
   
    setForm({
      ...Form,
      user: e.target.value
          
    })

  }

  console.log()
  const inputPass = (e) => {
    
    setForm({
      ...Form,
      pass: e.target.value
      
    })
    
  }
  const inputCaptcha = (e) => {
    
    setForm({
      ...Form,
      captcha: e.target.value
      
    })
    
  }
  
 




  return (
    
    <div className="parent">
        <div className="div1">
            
        </div>
        <div className="div2">
            <h2>Bienvenidos al sistema localizacion de zonas de acceso wifi</h2> 
        </div>
        <div className="div3">
              <form id="f1" onSubmit={ Submit } >
                  <legend><h3>INICIO DE SESION</h3></legend>
                 <input
                 type='text' //tipo de input
                 name='user' //nombre del inpu
                 placeholder='Usuario' 
                 maxLength={ 10 } 
                 value={ Form.user } 
                 onChange={ inputUser }
                 /><br/>
                 <input
                 type='password'
                 name='pass'
                 placeholder='Contraseña'
                 maxLength={ 10 }
                 value={ Form.pass }
                 onChange={ inputPass }
                 />
                  <br/> 
                  <div className='captcha'> 
                  { UltimoDigitoUser } + { UltimoDigitoPass }

                  </div>
                  <input
                  type='text'
                  name='captcha'
                  placeholder='ingresa la respuesta de la suma'
                  maxLength={3} //maximo de digito
                  value={ Form.captcha}
                  onChange={ inputCaptcha }
                  /><br/><br/> 
                  <button type="submit">INGRESAR</button><br/><br/> 

             </form>
             <div id="m">{ Mensaje } </div>
                    
        </div>
        <div className="div4">
            
        </div>
    </div>
  )
}

