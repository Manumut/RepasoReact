import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Buscador from '../components/Buscador';
import Detalles from '../components/Detalles';



const Productos = () => {
  const [productos, setProductos] =useState([]); 
  const [palabra, setPalabra] =useState();
  const [details, setDetails] =useState([]);


  let cambiar = (palabra) => {
    setPalabra(palabra.tolowerCase());
  }

  let mostrar = (ide) => {
    setDetails(details);
  }

  useEffect(() =>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(respuesta => respuesta.join())
    .then(datos => setProductos(datos))
  })
  return (
    <>
    <div>
      <Buscador cambiar={(word) => cambiar(word)}/>
        <div>
          <div className='grid md:grid-cols-4 w-[900px] mx-auto'>
              <h1>Productos</h1>
              <Card productos={productos} palabra={palabra} mostrar={(details) => mostrar(details)}/>
            </div>
            {
              details != null ? <Detalles detalles={details}/> : null
            }
          </div>
        </div>
      
    
    </>
  )
}

export default Productos