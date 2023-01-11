import React from 'react'

const Best_componet = (props) => {
  return (
    <div className='bg-white w-full rounded-[44px]  py-8 my-1 space-y-4 md:w-1/2 lg:my-4 flex justify-center items-center flex-col shadow-sm shadow-[#aeb0af] hover:shadow-[#04C873]' >
      <div className='bg-[#eef8fa] rounded-full p-4 border-transparent  hover:border-[#02c873] hover:rounded-full border-[4px] hover: transition-all delay-200'>
        <img className='w-20' src={props.href} alt="ico_1" />
      </div>
      <h3 className='text-[#1f1b4a] leading-5 text-[20px] font-semibold relative p-2
           before:content-[""] before:absolute before:w-[45px] before:h-[3px] before:bg-[#04C873] before:rounded-3xl before:-bottom-3 before:right-24 '> {props.title}</h3>
      <p className='pt-4 text-[#333333] leading-6 text-[18px] text-center font-normal'>
        {props.tbody}
        <br />
        {props.tbody2}
      </p>
    </div>
  )
}

export default Best_componet