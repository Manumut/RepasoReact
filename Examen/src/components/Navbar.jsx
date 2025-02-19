import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    < > 
      <ul className='flex gap-5'>
        <Link to='/'><li>Todos</li></Link>
        <Link to='/Shoes'><li>Zapatos</li></Link>
        <Link to='/Electronics'><li>Electronica</li></Link>
        <Link to='/Fourniture'><li>Folle</li></Link>

      </ul>
    </>
  )
}

export default Nav