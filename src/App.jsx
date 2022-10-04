import React, { useState, useEffect } from 'react'

export const App = () => {
      
  const [MEN3, setMEN3 ] = useState({
    form3: ''
   })    // ADIVINANZA
     
  const [MEN2, setMEN2 ] = useState({
   form2: ''
  })     // menu
 
 const [Form, setForm] = useState({
  user: '',
  pass: '',
  captcha: ''
})
   
 const [ cont1 , setcont1] = useState(0); // contador 1
 useEffect( () => {
 console.log("kkkk" + cont1)
 },[cont1]);

 const aumentar = () => {
   setcont1(cont1 + 1)
 }

 const [ cont2 , setcont2] = useState(0); // contador 2
 useEffect( () => {
 console.log("hhh" + cont2)
 },[cont2]);

 const aumentar2 = () => {
  console.log("hhhh" + cont2)
   setcont2(cont2 + 1)
 }




const [num , setnum] = useState(0)
console.log(num)          //numero aleatorio

   const {form2} = MEN2;   // menu

   const {form3} = MEN3; 



  const [Mensaje, setMensaje] = useState(false)


   const { user, pass, captcha } = Form;

       
      const [menu, setmenu]=useState(false)

      const [menua , setmenua]=useState(false)

      const  vma = (e) =>{
        setmenua(true)
      }
      
      
  const UltimoDigitoUser = user.slice(9,10);
  const UltimoDigitoPass = pass.slice(9,10);

  const validacion = (e) =>{
    setmenu(true)

  }
  
  const Submit = (e) => {
    e.preventDefault();

    
      if(user==='1103497841' && pass==='1487943011' && captcha==='2'){
         setmenu(validacion),
         document.getElementById("contenedor-parent").style.display= "none"
        setMensaje('')

       

      }else{ setMensaje('ERROR')

    setTimeout(() => {
        setMensaje('')
    }, 3000);
  }
}


  const Submit2 = (e) =>{
    e.preventDefault();
     if (form2 === '1' ){
      setmenua(vma),setnum(Math.floor(Math.random() * 10))
      document.getElementById("men2").style.display= "none"
     } else{
      if(form2 === '2'  ){

          alert('HASTA PRONTO')
          location.reload();
         } else{
          if(cont2 === 3){
              alert("Limite de intentos alcanzados "), location.reload();
          }else {
            if(form2 != '1' , '2'){
                   alert("error")
            }
          }
         } 
     }



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
  
  // menu
  const inputmenu = (e) =>{

    setMEN2({
      ...MEN2,
      form2: e.target.value
    })
  }
 
  const inputmenu3 = (e) =>{

    setMEN3({
      ...MEN3,
      form3: e.target.value
    })
  }   // ADIVINANZA
    
          
    const Submit3 = (e) =>{
      e.preventDefault();
      if (form3 == num){
        alert("Adivinaste en   " + cont1 + "  intentos") 
        document.getElementById("adi").style.display= "none"
        document.getElementById("men2").style.display= "block"
      } else{
        if (form3 > 10 || form3 < 0){
             alert("ESTAS FUERA DE LOS PARAMETROS")
        } else{
          if( form3 > num){
              alert("TE PASASTE..")
          } else {
            if(form3 < num){
              alert("ESTAS POR DEBAJO..")
            }
          }
        }
      }

      

    }  // ADIVINANZA


  return (
        
    <div className="parent" >
        
        <div className="div1">
            <h1>Bienvenidos al sistema localizacion de zonas de acceso wifi</h1> <br />
            
        </div>
        <div className="div2" id='contenedor-parent'>
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
         { menu? <div className='menu2' id='men2'>
                 <h1> BIENVENIDO </h1>
                   
              <form onSubmit={ Submit2 }> 
                      <label >1.Adivinanza</label>
                      <br/>
                      <label >2.Cerrar session</label>
                      <br/>
                      <input type="text" name='menu'
                      value={ MEN2.form2}
                      onChange={ inputmenu } 


                      />
                      <br />
                      <button type='submit' onClick={aumentar2}
                       
                      >Enter</button>

                      <br />
              </form>
         </div> :undefined}
            
         { menua ?  <div className='adi' id='adi'>
               <h1> ADIVINANZA</h1>
               <br />
               <h3>cual es el numero secreto  [0 - 10] </h3>
                <form  onSubmit={ Submit3 }>
                    <input type="text" name='adivinanza'
                     value={ MEN3.form3}
                     onChange={ inputmenu3 } 
                     />
                    <br />
                    <button type='submit' onClick={aumentar}>Respuesta</button>


                </form>

            </div> : undefined}
          


    </div>
  
  )
}
