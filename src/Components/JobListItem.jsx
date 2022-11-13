import React from 'react'

export const JobListItem = ({ obj }) => {
  return (
    <div className='item max-w-[1400px] h-[164px] bg-white flex flex-row justify-between items-center rounded-lg mb-2 px-4 py-6 shadow-[2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)]'>
          <div className='item_content flex'>
            <div className='item_content_logo w-[85px] h-[85px] mr-[26px] overflow-hidden rounded-full'><img src={obj.pictures[0]} width={85} alt="logo" /></div>
            <div className='item_content_text w-[959px] h-[116px]'>
              <div className='item_content_text_title h-[50px] mb-2 text-[#3A4562] font-bold text-[20px] leading-[25px] tracking-[-0.63px]'>
                <a href='/detail'>{obj.title}</a>
              </div>
              <div className='item_content_text_dept mb-2 text-base text-[#878D9D] font-normal tracking-[0.23619px]'>
                {/* Not sure that it is correct for Department name, but did not find anything more similar */}
                Department name • {obj.name}
                </div>
                <div className='item_content_text_location flex'>
                  <div className='item_content_text_location_img mr-2'>
                    <img src="/icons/location.png" alt="location" />
                  </div>
                  <div className='item_content_text_location_txt text-base text-[#878D9D] font-normal tracking-[0.23619px]'>
                    {/* Could be got from backend, but there is no such data there and location is some point in the Ocean */}
                  Vienna, Austria
                  </div>
                </div>
              </div>
      
          </div>
          <div className='item_rate w-24 h-[18px] flex'>
            <img src="/icons/star.png" alt="star" />
            <img src="/icons/star.png" alt="star" />
            <img src="/icons/star.png" alt="star" />
            <img src="/icons/star.png" alt="star" />
            <img src="/icons/star.png" alt="star" />
          </div>
          <div className='item_extra w-[138px] h-[116px] relative'>
            <div className='item_extra_img absolute top-0 right-0'>
              <img src="/icons/rectangle31.png" alt="" />
            </div>
            <div className='item_extra_txt absolute bottom-0 left-0 text-base text-[#878D9D] font-normal tracking-[0.23619px]'>Posted 2 days ago</div>
          </div>
        </div>
  )
}