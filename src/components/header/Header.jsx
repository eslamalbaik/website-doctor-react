import React from 'react'
//import components ...
import Logo from '../../images/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
const Header = () => {
  return (
    <div className={`relative  scroll-smooth`}>
      <header className={`active  p-4 lg:px-0 w-full fixed z-10 
      transition-all duration-300 bg-[#1F1B4A] `}>
        <div className='container mx-auto flex items-center justify-between lg:justify-evenly'>
          {/* logo  */}
          <img className='w-[200px] ' src={Logo} alt="logo-img" />  
          {/* nav */}
          <Nav />
          {/* nav-mobile */}
          <NavMobile />
        </div>
      </header>

    </div>
  )
}

export default Header