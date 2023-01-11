import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='text-white lg:flex space-x-6 items-center text-[18px] leading-6 font-normal lg:mr-32'>
        <li className='ml-6 '>
          <Link className='cursor-pointer hover:text-[#04C873] transition-all delay-200  ' to='/home'>معلومات عن الدكتور</Link>
        </li>
        <li>
          <Link className='cursor-pointer hover:text-[#04C873]  transition-all delay-200 ' to='/privacy'>سياسة الخصوصية</Link>
        </li>
        <li>
          <Link className='cursor-pointer hover:text-[#04C873]  transition-all delay-200 ' to='/terms'> شروط الاستخدام</Link>
        </li>
        <li><button className='text-[#04C873]  transition-all delay-100  border border-[#04C873] rounded-[26px] py-1 px-6 text-[18px] font-medium leading-6
        hover:bg-[#04C873] hover:text-white' >احجز &nbsp;الأن</button></li>    </ul>
    </nav>
  )
}
export default Nav