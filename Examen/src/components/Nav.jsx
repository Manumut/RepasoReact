import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div > 
      <ul className='flex gap-5'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/Productos'><li>Productos</li></Link>
        <Link to='../Contacto'><li>Contacto</li></Link>
        <Link to='../Categorias'><li>Categorias</li></Link>

      </ul>
    </div>
  )
}

export default Nav