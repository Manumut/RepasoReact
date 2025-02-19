import React from 'react'

const Card = ({producto}) => {
  return (
    <>
    {
      productos?.map(producto => {
        <div key = {producto.id} className='border border-indigo-700 p-5'></div>
      })
    }
    </>
  )
}

export default Card