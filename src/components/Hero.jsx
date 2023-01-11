import React from 'react'
import doctor from '../images/doctor.png';
import { SlMouse } from 'react-icons/sl'
import "./../App.css";

const Hero = () => {
  const styleparent = ' pt-24  bg-[#1F1B4A] lg:h-[700px] lg:flex justify-center items-center rounded-br-[80px]   rounded-bl-[80px]'
  return (
    <div className='relative'>
      <div className='bg-[#F6FDFF] '>
        <div className={styleparent}>
          <img className='w-[360px] h-[430px] ml-24' src={doctor} alt="doctor" />
          <div className='bg-[#1A173E] p-[55px] rounded-tr-[80px] lg:h-[420px] rounded-tl-[80px] rounded-bl-[80px] shadow-md shadow-[#04C873]'>
            <div className='text-[#04C873]'>
              <h4 className='font-normal text-[20px] leading-5 py-2'>الدكتور</h4>
              <h2 className='font-medium text-[36px] leading-9 py-2'>آدم محمود الجمال</h2>
              <h4 className='font-normal text-[18px] leading-5 py-2 pb-2 relative 
           before:content-[""] before:absolute before:w-[45px] before:h-[3px] before:bg-[#04C873] before:rounded-3xl before:-bottom-3 before:right-0  '>استاذ واستشارى الاطفال وحديثى الولادة</h4>
            </div>
            <div className='text-white pt-10 font-normal text-[18px] leading-8  '>
              <p >بكالوريوس الطب والجراحة جامعة الاسكندرية ١٩٨٨ بتقدير جيد جدا.
                <br />
                ماجستير طب الاطفال جامعة الاسكندرية ١٩٩٣ بتقدير جيد جدا.
                <br />
                زمالة الكلية الملكية البريطانية لطب الاطفال لندن ٢٠٠٦ عضو مجلس ادارة مركز  اسكندرية <br /> لطب الاطفال.
                <br />
                استشارى طب الاطفال وحديثى الولادة.مركز اسكندرية لطب الاطفال.</p>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div >
      <div className='absolute top-[630px] right-[750px] text-center cursor-pointer '>
        <span className="scroll-btn">
          <a href="#section1" className="transition-all duration-600">
            <span className="mouse">
              <span>
              </span>
            </span>
          </a>
        </span>
      </div>
    </div >
  )
}

export default Hero