import React, { useState } from 'react'

export const App = () => {

 
 const [Form, setForm] = useState({
  user: '',
  pass: '',
  captcha: ''
})

  const [Mensaje, setMensaje] = useState(false)


   const { user, pass, captcha } = Form;

       
      const [menu, setmenu]=useState(false)
      
  const UltimoDigitoUser = user.slice(9,10);
  const UltimoDigitoPass = pass.slice(9,10);

  const validacion = (e) =>{
    setmenu(true)

  }
  
  const Submit = (e) => {
    e.preventDefault();

    
      if(user==='1103497841' && pass==='1487943011' && captcha==='2')
         setmenu(validacion),
        setMensaje('')

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
        
        <div className="div1">
            <h1>Bienvenidos al sistema localizacion de zonas de acceso wifi</h1> <br />
            
        </div>
        <div className="div2">
              <form id="f1" onSubmit={ Submit } >
                  <legend><h3></h3></legend>
                 <input
                 type='text' 
                 name='user' 
                 placeholder='User' 
                 maxLength={ 10 } 
                 value={ Form.user } 
                 onChange={ inputUser }
                 /> 
                  
                  <br/>
                  
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
                  /> 
                   
                   
                   <br/><br/> 
                  <button type="submit">Iniciar</button><br/><br/> 
                  <div id="m">{ Mensaje } </div>
             </form>
             {/* <div id="m">{ Mensaje } </div> */}
                    
        </div>
              <br />
         { menu? <div className='menu2'>
                 <h1> BIENVENIDO </h1>
                   
              <from> 
                      <label >1.Adivinanza</label>
                      <br/>
                      <label >2.Cerrar session</label>
                      <br/>
                      <input type="text" />
                      <br />
                      <button type='submit'>Enter</button>
                      <br />
              </from>
         </div> :undefined}
         
    </div>
  
  )
}

