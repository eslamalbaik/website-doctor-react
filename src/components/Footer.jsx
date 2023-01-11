import React from 'react'
import { BsWhatsapp, BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='flex  justify-between  lg:px-[200px]  px-4 h-[65px] items-center  bg-[#1F1B4A] text-white'>
      <a href="https://www.twitter.com/eslam_D7" className='hover:text-[#00ACEE]'><h3 className='leading-6 lg:text-[18px] text-sm font-normal'>جميع الحقوق محفوظة © اسلام البيك</h3></a>
      <div className=' text-xl cursor-pointer '>
        <ul className='flex justify-center items-center  m-0  '>
          <li className='p-2.5  '><BsWhatsapp className='hover:text-green-600' /></li>
          <li className='p-2.5  '><BsTwitter className='hover:text-[#00ACEE]' /></li>
          <li className='p-2.5   '><FaFacebookF className='hover:text-[#3B5999]' /></li>
          <li className='p-2.5  '><BsInstagram className='hover:text-[#E4405F]' /></li>
          <li className='p-2.5 lg:visible hidden   '><BsLinkedin className='hover:text-[#0077B5]' /></li>
          <li className='p-2.5 lg:visible hidden '><BsYoutube className='hover:text-[#CD201F]' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer