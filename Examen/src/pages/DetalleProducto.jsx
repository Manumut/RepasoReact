import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Card from '../components/Card'
import Card from '../components/Card'
import Buscador from '../components/Buscador';
import Detalles from '../components/Detalles';

const DetalleProducto = () => {
  const [productos, setProductos] =useState([]); 
const {categoria} =useParams();

  useEffect(() =>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(respuesta => respuesta.join())
    .then(datos => setProductos(datos))
  })

  return (
    < >
      <div>
      <Buscador cambiar={(word) => cambiar(word)}/>
        <div>
          <div className='grid md:grid-cols-4 w-[900px] mx-auto'>
              <h1>Productos</h1>
              <Card productos={productos} palabra={palabra} mostrar={(details) => mostrar(details)} categoria={categoria}}/>
            </div>
            {
              details != null ? <Detalles detalles={details}/> : null
            }
          </div>
        </div>

    </>
  )
}

export default DetalleProducto