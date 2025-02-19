import React from 'react'


const Detalles = ({detalles}) => {
  return (
    <div>
        <img src={detalles.images}/>
        <p>{detalles.price}</p>
        <h2>{detalles.title}</h2>
        <p>{detalles.descripion}</p>
    </div>
  )
}

export default Detalles