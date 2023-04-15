import React from 'react'
import imgtitle from '../images/title_img.svg'
import img1 from '../images/service_img_01.jpg'
const Services = () => {
  return (
    <div className='lg:h-[990px]  h-auto pt-[200px] bg-[#F6FDFF]'>
      <div className='flex justify-center items-center flex-col space-y-4 pt-8'>
        <h4 className='text-[#333333] leading-6 text-[22px] font-medium'>عن العيادة</h4>
        <h2 className='text-[#02c873] leading-8 text-[28px] font-bold'>خدمات العيادة
        </h2>        <img className='pb-8' src={imgtitle} alt="imagetilte" />
      </div>
      <div>
        <div className=' flex lg:flex-row lg:mx-40 flex-col gap-10 mb-14 '>

          <div className='bg-white w-full rounded-tr-[44px]  rounded-br-[44px]  rounded-bl-[44px]   rounded-tl-[24px]  space-y-4 pb-[30px] md:w-1/2 lg:my-4 flex justify-center items-center flex-col shadow-sm shadow-transparent hover:shadow-[#04C873]' >
            <div className='  border-transparent  hover:border-[#02c873]  '>
              <img className='w-[368px] h-[280px]  rounded-tr-[44px] ml-8 rounded-bl-[280px]' src={img1} alt="ico_1" />
            </div>
            <h3 className='text-[#1f1b4a] leading-5 text-[20px] font-semibold relative p-2
           before:content-[""] before:absolute before:w-[45px] before:h-[3px] before:bg-[#04C873] before:rounded-3xl before:-bottom-3 before:right-24 '> الرضـــاعة والتغذية           </h3>
            <p className='pt-4 text-[#333333] leading-6 text-[18px] text-center font-normal'>
              المعلومات التى تحتاج الى معرفتها الان عندما <br /> يتعلق الأمر بالرضاعة الطبيعية. كيفية ادارة  <br />المدة و التوقيت و مخاوف الضخ و أكثر من ذلك <br />من المخاوف و الأسئلة لأول مولود.
            </p>
          </div>
          <div className='bg-white w-full rounded-tr-[44px]  rounded-br-[44px]  rounded-bl-[44px]   rounded-tl-[24px]  space-y-4 pb-[30px] md:w-1/2 lg:my-4 flex justify-center items-center flex-col shadow-sm shadow-transparent hover:shadow-[#04C873]' >
            <div className='  border-transparent  hover:border-[#02c873]  '>
              <img className='w-[368px] h-[280px]  rounded-tr-[44px] ml-8 rounded-bl-[280px]' src={img1} alt="ico_1" />
            </div>
            <h3 className='text-[#1f1b4a] leading-5 text-[20px] font-semibold relative p-2
           before:content-[""] before:absolute before:w-[45px] before:h-[3px] before:bg-[#04C873] before:rounded-3xl before:-bottom-3 before:right-24 '> الرضـــاعة والتغذية           </h3>
            <p className='pt-4 text-[#333333] leading-6 text-[18px] text-center font-normal'>
              المعلومات التى تحتاج الى معرفتها الان عندما <br /> يتعلق الأمر بالرضاعة الطبيعية. كيفية ادارة  <br />المدة و التوقيت و مخاوف الضخ و أكثر من ذلك <br />من المخاوف و الأسئلة لأول مولود.
            </p>
          </div>
          <div className='bg-white w-full rounded-tr-[44px]  rounded-br-[44px]  rounded-bl-[44px]   rounded-tl-[24px]  space-y-4 pb-[30px] md:w-1/2 lg:my-4 flex justify-center items-center flex-col shadow-sm shadow-transparent hover:shadow-[#04C873]' >
            <div className='  border-transparent  hover:border-[#02c873]  '>
              <img className='w-[368px] h-[280px]  rounded-tr-[44px] ml-8 rounded-bl-[280px]' src={img1} alt="ico_1" />
            </div>
            <h3 className='text-[#1f1b4a] leading-5 text-[20px] font-semibold relative p-2
           before:content-[""] before:absolute before:w-[45px] before:h-[3px] before:bg-[#04C873] before:rounded-3xl before:-bottom-3 before:right-24 '> الرضـــاعة والتغذية           </h3>
            <p className='pt-4 text-[#333333] leading-6 text-[18px] text-center font-normal'>
              المعلومات التى تحتاج الى معرفتها الان عندما <br /> يتعلق الأمر بالرضاعة الطبيعية. كيفية ادارة  <br />المدة و التوقيت و مخاوف الضخ و أكثر من ذلك <br />من المخاوف و الأسئلة لأول مولود.
            </p>
          </div>
              
        </div>
      </div>
    </div>
  )
}

export default Services