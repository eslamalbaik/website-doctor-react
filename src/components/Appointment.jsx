import imgtitle from '../images/title_img.svg'
import imgDoctor from '../images/doctor.svg'
import input_name from '../images/input_name.svg'
import contact_phone from '../images/contact_phone.svg'
import contact_time_email from '../images/contact_time_email.svg'
import contact_time from '../images/contact_time.svg'
import contact_date from '../images/contact_date.svg'
import contact_address from '../images/contact_address.svg'
import { ImLocation, ImPhone } from 'react-icons/im'

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className='bg-[#1f1b4a] h-[586px] relative'>
      <div className='flex justify-center items-center lg:flex-col space-y-4 pt-8'>
        <h2 className='text-[#02c873] leading-8 text-[28px] font-bold'>احجز الآن بكل سهولة</h2>
        <img className='pb-8' src={imgtitle} alt="imagetilte" />
      </div>
      <div>
        <div className='flex justify-start items-center'>
          <div className='bg-white lg:w-1/2 w-full lg:mr-[200px] p-10 rounded-tr-[54px]'>
            <h3 className='text-[#02c873] leading-8 text-[22px] font-bold pr-5
          relative 
          before:content-[""] before:absolute before:w-[3px] before:h-[23px]  before:bg-[#04C873] before:rounded-3xl before:top-1 before:right-2 '>املئ جميع البيانات المطلوبة لاتمام الحجز</h3>
            <form>
              <div className='my-6'>
                <label className='text-[#304457] leading-6 text-[19px] font-normal mr-3 ' htmlFor="name"> ادخل الاسم كاملا:</label>
                <br />
                <dir className="flex items-center justify-start bg-[#F4F8FF] gap-3 p-2 rounded-[34px]  border-[3px] border-transparent hover:border-[#71dcad]">
                  <img className='w-[22px]' src={input_name} alt="input_name" />
                  <input className='bg-transparent text-[#304457] leading-6 text-[18px] font-normal outline-none' type="text" placeholder='ادخل الاسم كاملا' />
                </dir>
              </div>
              <div className='flex justify-center lg:gap-48 lg:flex-row flex-col items-center -mt-6'>
                <div className='my-6'>
                  <label className='text-[#304457] leading-6 text-[19px] font-normal mr-3 ' htmlFor="name">ادخل رقم التليفون:</label>
                  <br />
                  <dir className="flex items-center justify-start bg-[#F4F8FF] gap-3 p-2 rounded-[34px]  border-[3px] border-transparent hover:border-[#71dcad]">
                    <img className='w-[22px]' src={contact_phone} alt="contact_phone" />
                    <input className='bg-transparent text-[#304457] leading-6 text-[18px] font-normal outline-none' type="text" placeholder='ادخل رقم التليفون' />
                  </dir>
                </div>
                <div className='my-6'>
                  <label className='text-[#304457] leading-6 text-[19px] font-normal mr-3 ' htmlFor="name">ادخل البريد الالكتروني:</label>
                  <br />
                  <dir className="flex items-center justify-start bg-[#F4F8FF] gap-3 p-2 rounded-[34px]  border-[3px] border-transparent hover:border-[#71dcad]">
                    <img className='w-[22px]' src={contact_time_email} alt="contact_time_email" />
                    <input className='bg-transparent text-[#304457] leading-6 w-48 text-[16px] font-normal outline-none' type="text" placeholder='ادخل البريد الالكتروني' />
                  </dir>
                </div>
              </div>
              <div className='flex justify-center lg:gap-48 lg:flex-row flex-col items-center -mt-6'>
                <div className='my-4'>

                  <label className='text-[#304457] leading-6 text-[19px] font-normal mr-3 ' htmlFor="name">تاريخ التسليم :</label>
                  <br />
                  <dir className="flex items-center justify-start bg-[#F4F8FF] gap-3 p-2 rounded-[34px]  border-[3px] border-transparent hover:border-[#71dcad]">
                    <img className='w-[22px]' src={contact_time} alt="contact_time" />
                    <DatePicker className='bg-transparent text-[#304457] leading-6 text-[16px] font-normal outline-none' placeholder='حدد يوم  الكشف '
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                      mainDate={new Date()}
                      dateFormat="حدد تاريخ اليوم"
                    />
                  </dir>
                </div>
                <div className='my-6'>
                  <label className='text-[#304457] leading-6 text-[19px] font-normal mr-3 ' htmlFor="name">وقت التسليم:</label>
                  <br />
                  <dir className="flex items-center justify-start bg-[#F4F8FF] gap-3 p-2 rounded-[34px]  border-[3px] border-transparent hover:border-[#71dcad]">
                    <img className='w-[22px]' src={contact_date} alt="contact_date" />
                    <input className='bg-transparent text-[#304457] leading-6 text-[18px] font-normal outline-none' type="text" placeholder='PM 3:13' />
                  </dir>
                </div>
              </div>
              <div className='text-red-600 space-y-2'>
                <hr className='bg-red-600 h-[1.5px]' />
                <p>بعد استكمال عملية الحجز سوف يتم التواصل معكم عن طريق التليفون لتأكيد موعد الحجز</p>
              </div>
              <div className='flex justify-center items-center'>
                <button className='mt-8  text-[#04C873]  transition-all delay-100  border border-[#04C873] rounded-[26px] py-1 px-6 text-[18px] font-medium leading-6
        hover:bg-[#04C873] hover:text-white' >احجز &nbsp;الأن</button>
              </div>
            </form>

          </div>
          <div className='lg:block hidden text-white bg-[#1f1b4a] z-[8] w-[400px] lg:h-[590px] p-10 '>
            <ul>
              <li className='flex items-center gap-4 bg-[#151232] p-4 font-normal text-[20px] leading-8 my-4 '>
                <img className='w-[22px]' src={contact_date} alt="contact_date" />
                من الأحد الى الخميس
              </li>
              <li className='flex items-center gap-4 bg-[#151232] p-4 font-normal text-[18px] leading-8 my-4 '>
                <img className='w-[22px]' src={contact_time} alt="contact_date" />
                من <span className='text-[#02c873] font-bold'>4:00</span> مساءاً  <span className='text-[#02c873] font-bold'>10:00</span> مساءاً

              </li>
              <li className='flex items-center gap-4 bg-[#151232] p-4 font-normal text-[20px] leading-8 my-4 '>
                <img className='w-[22px]' src={contact_address} alt="contact_address" />
                example@company.com
              </li>
              <li className='flex items-center gap-4 bg-[#151232] p-4 font-normal text-[20px] leading-8 my-4 '>
                <ImPhone className='text-[#02c873]' />
                +20 109-007-5695
              </li>
              <li className='flex items-center gap-4 bg-[#151232] p-4 font-normal text-[20px] leading-8 my-4 '>
                <ImLocation className='text-[#02c873]' />
                القـــاهرة - جمهورية مصر العربية
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img className='w-[380px] absolute top-2 left-0  lg:block   hidden' src={imgDoctor} alt="imgDoctor" />
    </div>
  )
}

export default Appointment