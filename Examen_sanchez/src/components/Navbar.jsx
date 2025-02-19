import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <ul className='flex gap-4'>
            <Link to="/">Todos</Link>
            <Link to="/Shoes">Zapatos</Link>
            <Link to="/Electronics">Electronica</Link>
            <Link to="/Furniture">Follar</Link>
        </ul>
    </>
  )
}

export default Navbar