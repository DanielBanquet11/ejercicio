import React, { useState } from 'react'

export const App = () => {

 // primero hay que darle un estado al formulario con el useState
 const [Form, setForm] = useState({
  user: '',
  pass: '',
  captcha: ''
})
//Estado a los mensajes 
  const [Mensaje, setMensaje] = useState(false)

//Extraer los valores del useState con desestructuracion:
const { user, pass, captcha } = Form;

      //Ahora viene la magia :D 
      
      //sacar el ultimo digito primero sacr el de user con .slice
  //y se guarda en una constante nueva
  const UltimoDigitoUser = user.slice(8,9);
  const UltimoDigitoPass = pass.slice(8,9);

  
  // controlar el formulario 
  const Submit = (e) => {
    e.preventDefault();

    
      if(user==='123456789' && pass==='987654321' && captcha==='10')

        setMensaje('Correcto')

    else setMensaje('Incorrecto')//pruebalo

    setTimeout(() => {
        setMensaje('')
    }, 4000);
  }


  const inputUser = (e) => {
    //llamas al setForm para cambiar el valor,
    //"...Form": Es como decirle cambia el valor de user y guardame los demas datos que son pass y captcha
    //estoy tratando de explicar lo mejor posibl ejkasdljaskl estoy entendiendo a:v
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
            <h2>🕵️‍♂️Bienvenidos al sistema localizacion de zonas de acceso wifi🕵️‍♂️</h2> 
        </div>
        <div className="div3">
              <form id="f1" onSubmit={ Submit } >
                  <legend><h3>INICIO DE SESION</h3></legend>
                 <input
                 type='text' //tipo de input
                 name='user' //nombre del inpu
                 placeholder='Usuario' //nombre visible
                 maxLength={ 10 } 
                 value={ Form.user } //dentro del Form buscame a user) y ahora para modificar el valor:
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
            <img src="../src/assets/img/mapa.png"/>
        </div>
    </div>
  )
}

