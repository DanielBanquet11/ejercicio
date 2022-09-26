import React, { useState } from 'react'

export const App = () => {

 
 const [Form, setForm] = useState({
  user: '',
  pass: '',
  captcha: ''
})

  const [Mensaje, setMensaje] = useState(false)


const { user, pass, captcha } = Form;

       
      
      
  const UltimoDigitoUser = user.slice(9,10);
  const UltimoDigitoPass = pass.slice(9,10);

  
  
  const Submit = (e) => {
    e.preventDefault();

    
      if(user==='1103497841' && pass==='1487943011' && captcha==='2')

        setMensaje('Bienvenido')

    else setMensaje('ERROR')

    setTimeout(() => {
        setMensaje('')
    }, 3000);
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
        
        <div className="div2">
            <h1>Bienvenidos al sistema localizacion de zonas de acceso wifi</h1> 
        </div>
        <div className="div3">
              <form id="f1" onSubmit={ Submit } >
                  <legend><h3></h3></legend>
                 <input
                 type='text' 
                 name='user' 
                 placeholder='User' 
                 maxLength={ 10 } 
                 value={ Form.user } 
                 onChange={ inputUser }
                 /><br/>
                 <input
                 type='password'
                 name='pass'
                 placeholder='Password'
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
                  placeholder='Resuelva aqui :3'
                  maxLength={3} 
                  value={ Form.captcha}
                  onChange={ inputCaptcha }
                  /><br/><br/> 
                  <button type="submit">Iniciar</button><br/><br/> 

             </form>
             <div id="m">{ Mensaje } </div>
                    
        </div>
        
    </div>
  )
}

