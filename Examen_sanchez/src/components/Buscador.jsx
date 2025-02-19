import React from 'react'

const Buscador = ({cambiar}) => {
  return (
    <>
        <input className='my-5 border' type="search" onChange={(e) => cambiar(e.target.value)} />
    </>
  )
}

export default Buscador