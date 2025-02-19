import React from 'react'
import logo from '../assets/react.svg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='bg-indigo-700 px-[20px] py-[40px] text center flex justify-between'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
          <Navbar/>
        </div>
    </header>
  )
}

export default Header