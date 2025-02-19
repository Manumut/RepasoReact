import React from 'react'
import logo from '../assets/react.svg'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='bg-indigo-700 px-[20px] py-[40px] text center flex justify-between'>
        <div>
            <img src={logo} alt="" />
        </div>
        <Nav/>
    </header>
  )
}

export default Header