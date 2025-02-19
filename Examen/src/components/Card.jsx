import React from 'react'

const Card = ({productos, palabra, mostrar, categoria}) => {
  return (
    <>
    {
      productos.map(producto => {
        producto.categoria.name.includes(categoria) || categoria == null ?
        producto.title.tolowerCase().includes(palabra) || palabra === '' ?
        <div key = {producto.id} className='border border-indigo-700 p-5'>
          <img className='w-1/2' src={producto.images} alt="" />
          <h2>{producto.title}</h2>
          <p>{producto.price}</p>
          <button onClick={() => mostrar(producto)}>Ver info</button>
        </div>
        : null
        : null;
      })
    }
    </>
  )
}

export default Card