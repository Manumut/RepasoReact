import React, { use, useOptimistic, useState } from 'react'
import {useParams} from 'react-router-dom'
import Card from '../components/Card'

const DetalleProducto = () => {

  const [producto, setProducto] = useState([])
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
    .then(response => response.json())
    .then(datos => setProducto(datos))
  }, [])

  return (
    <section className='max-w-[960px] mx-auto border p-5 my-10 text-center'>
      <Card producto={producto}/>

    </section>
  )
}

export default DetalleProducto