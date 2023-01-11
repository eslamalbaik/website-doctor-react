import React from 'react'
import imgtitle from '../images/title_img.svg'
import ico_1 from '../images/icon_01.svg'
import icon_2 from '../images/icon_02.svg'
import Best_componet from './Best_componet'

const list_box = [
  {
    href: ico_1,
    title: "الاهتمــام بالرعاية الصحية والمهنية",
    tbody: "نعمل على الاهتمام بالرعاية الصحية ",
    tbody2: "  للطفل اهتماماً كمالاً من جميع الجوانب",
  },
  {
    href: icon_2,
    title: "نعتمد على أحدث الأبحاث العلمية",
    tbody: "نعمل على الاهتمام بالرعاية الصحية ",
    tbody2: "  للطفل اهتماماً كمالاً من جميع الجوانب",
  },
  {
    href: ico_1,
    title: "الاهتمــام بالرعاية الصحية والمهنية",
    tbody: "نعمل على الاهتمام بالرعاية الصحية ",
    tbody2: "  للطفل اهتماماً كمالاً من جميع الجوانب",
  },
]
const Best = () => {
  return (
    <div className='bg-[#F6FDFF] pt-20 '>
      <div className='flex justify-center items-center flex-col space-y-4'>
        <h4 className='text-[#333333] leading-6 text-[22px] font-medium'>لأننا دائما الأفضل</h4>
        <h2 className='text-[#02c873] leading-8 text-[28px] font-bold'>مايميزنا لنكون الخيار الأفضل</h2>
        <img className=' pb-8' src={imgtitle} alt="image-tilte" />
      </div>
      <div className=' flex lg:flex-row lg:mx-40 flex-col gap-10 mb-14 '>
        {/* boxs  */}
        {
          list_box.map((ele, index) => {
            return <Best_componet key={index} href={ele.href} title={ele.title} tbody={ele.tbody} tbody2={ele.tbody2} />
          })
        }
      </div>
    </div>
  )
}
export default Best