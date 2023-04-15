import React, { useState, useEffect } from 'react'
//import components ...
import Logo from '../../images/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { BsWhatsapp, BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'
const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
        setShow(false);
      } else { // if scroll up show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div className={`relative  scroll-smooth`}>
      <header className={`active ${show && ' shadow-sm shadow-[#8ed2b5]'} p-4 lg:px-0 w-full fixed z-10 
      transition-all duration-300 bg-[#1F1B4A] `}>
        <div className='container mx-auto flex items-center justify-between lg:justify-evenly'>
          {/* logo  */}
          <a href='#' className=''><img className='w-[200px] ' src={Logo} alt="logo-img" />  </a>
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