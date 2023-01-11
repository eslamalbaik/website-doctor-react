import React, { useState } from 'react'
// import icons
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
// FaBars 
// AiOutlineClose
const NavMobile = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav className='lg:hidden relative z-20'>
      {/* menu icons */}
      <button onClick={() => setisOpen(true)}>
        <span className='content-none absolute -top-1 -right-1 w-4 h-4 bg-[#1A173E] p-4 rounded-sm'></span> <FaBars size={22} className="text-[#04C873] relative" />
      </button>
      {/* nav list */}
      <ul className={`${isOpen ? 'right-0' : 'right-full'
        } bg-[#1A173E] fixed top-0 w-full h-screen text-white transition-all flex flex-col
          justify-center items-center space-y-8 text-lg ` }>
        {/* close button */}
        <button onClick={() => setisOpen(false)} className='absolute top-6 left-6'>
          <AiOutlineClose size={22} className="text-[#fff]" />
        </button>
        <li>
          <Link className='cursor-pointer' to='/home'>معلومات الدكتور</Link>
        </li>
        <li>
          <Link className='cursor-pointer' to='/privacy'>سياسة الخصوصية</Link>
        </li>
        <li>
          <Link className='cursor-pointer' to='/terms'> شروط الاستخدام</Link>
        </li>
        <li><button className='text-[#04C873] border border-[#04C873] rounded-[26px] py-3 px-6 text-xl font-medium leading-6
        hover:bg-[#04C873] hover:text-white' >احجز  &nbsp; الأن</button></li>
      </ul>
    </nav >

  )
}

export default NavMobile