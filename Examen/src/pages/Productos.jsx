import React from 'react'
import Card from '../components/Card'



const Productos = () => {
  return (
    <section className='grid md:grid-cols-3'>
      <h1>Productos</h1>
      <Card productos={producto} />
    </section>
  )
}

export default Productos