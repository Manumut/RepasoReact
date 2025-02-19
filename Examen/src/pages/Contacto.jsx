import React from 'react'

const Contacto = () => {
  return (
    // Crea un formulario con nombre correo mensaje y boton de enviar y validaqr q los campos no esten vacios
    <form  className='max-w-[960px] mx-auto border p-5 my-10 text-center'>
      <input type="text" placeholder='Nombre del usuario' required/>
      <input type="text" placeholder='Correo electronico' required className='m-5'/>
      <input type="button" value="Enviar" className='p-2 w-[100px] bg-indigo-300 hover:bg-indigo-600'/>
    </form>
  )
}

export default Contacto