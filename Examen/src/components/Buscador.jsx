import React from 'react'

const Buscador = ({cambiar}) => {
  return (
    <>
        <input className='border border-indigo-700 my-5' type="search" placeholder="Buscar..." onChange={(e) => cambiar(e.target.value)}/>
    </>
  )
}

export default Buscador