import React from 'react'

const Cards = ({productos, palabra, mostrar, categoria}) => {
  return (
    <>
        {
            productos.map(producto =>(
                producto.category.name.includes(categoria) || categoria == null ?
                    producto.title.toLowerCase().includes(palabra) || palabra == null ?
                    <div key={producto.id} className='border p-5'>
                        <img  src={producto.images}/>
                        <h2>{producto.title}</h2>
                        <p>{producto.price}</p>
                        <button onClick={() => mostrar(producto)}>Ver Info</button>
                    </div>
                    : null
                : null
            ))
        }
    </>
  )
}

export default Cards