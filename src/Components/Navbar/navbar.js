import React from 'react'
import '../Navbar/navbar.css'

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>NewsWallah</div>
        <div className='navbar__item'>Weather Info</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        
    </header>
  )
}

export default Navbar