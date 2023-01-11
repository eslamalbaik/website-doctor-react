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
      <div className='fixed top-[30%] left-0 text-xl cursor-pointer z-10'>
        <ul className='text-white m-0 parent '>
          <li className='p-2.5 bg-green-600 dd'><BsWhatsapp className='hover:translate-x-1' /></li>
          <li className='p-2.5 bg-[#00ACEE] dd'><BsTwitter className='hover:translate-x-1' /></li>
          <li className='p-2.5 bg-[#3B5999] dd '><FaFacebookF className='hover:translate-x-1' /></li>
          <li className='p-2.5 bg-[#E4405F] dd'><BsInstagram className='hover:translate-x-1' /></li>
          <li className='p-2.5 bg-[#0077B5] dd'><BsLinkedin className='hover:translate-x-1' /></li>
          <li className='p-2.5 bg-[#CD201F] dd'><BsYoutube className='hover:translate-x-1' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Header