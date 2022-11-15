import React from 'react'

export const JobDetail = () => {

    const item = {
        "id":"635ee6d304601d61a71951f6",
        "name":"Sureplex",
        "email":"sureplex@gmail.bo",
        "phone":"+97117307890",
        "title":"Ut veniam occaecat aute adipisicing eiusmod non pariatur enim enim cupidatat nulla ipsum eiusmod.",
        "salary":"60k-71k",
        "address":"76 Blende Jardine Place",
        "benefits":["Pay vocations","Flexible hours"],
        "location":{"lat":9.804124,"long":147.139488},
        "pictures":["https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300"],
        "createdAt":"2012-05-04T01:38:26.141Z",
        "updatedAt":"2012-05-05T01:38:26.141Z",
        "description":"\n  Reprehenderit Lorem consectetur non et minim adipisicing deserunt. Ipsum reprehenderit do pariatur proident esse sint magna ullamco qui minim. Anim Lorem ut laborum occaecat culpa consectetur reprehenderit aliquip ex cupidatat proident quis laborum. Nulla aute ipsum et anim.\n  \n  Responsopilities:\n    Ex qui consequat deserunt laborum cupidatat ut ullamco veniam minim nisi incididunt aliquip incididunt. Sunt sunt ullamco elit ipsum ea enim consectetur sit magna minim ea cupidatat. Et ut proident voluptate quis nulla anim commodo in pariatur ad.\n  \nCompensation & Benefits:\n\t    Incididunt et sint incididunt laboris duis. Deserunt consectetur sint aute et sint aliqua quis nostrud non elit aliqua elit tempor. Aliquip ad dolore proident eu consequat elit amet laborum aute excepteur sit labore.\n\n",
        "employment_type":["Full time"]}

    return (
        <div className='flex bg-white pt-[56px] rounded-lg'>
            <div className='job_details flex justify-between ml-[347px] mr-[54px] mb-[9px]'>
                <div className=''>
                    <header className='job_details_header flex items-center justify-between'>
                        <div className='headline1'>Job Details</div>
                        <div className='flex items-center mb-[11px] text_job_detail'>
                            <img className='w-[16px] h-[20px] mr-4' src="/icons/rectangle31.png" alt="rectangle" />
                            <p className='mr-[31px]'>Save to my list</p>
                            <img className='w-[18px] h-[20px] mr-4' src="/icons/shape.png" alt="shape" />
                            <p>Share</p>
                        </div>
                    </header>
                    <div className='h-px w-full bg-[#3A4562] opacity-[0.13] mb-[39px]'></div>
                    <button className='w-[127px] h-[52px] rounded-lg bg-[#384564] text-white text-xs font-semibold mb-8'>APPLY NOW</button>
                    <div className='flex justify-between items-baseline'>
                        <h1 className='w-[501px] text-[24px] font-bold leading-[30px] text-[#3A4562] tracking-[-0.75px]'>{item.title}</h1>
                        <div className='salary_block'>
                            <div className='headline2'>€ {item.salary.replace(/k/g, ' 000')}</div>
                            <div className='text_job_detail'>Brutto, per year</div>
                        </div>
                    </div>
                    <div className='my-[7px] font-[roboto] text-[18px] leading-[24px] tracking-[-0.56px] text-[#38415D] opacity-[0.355988]'>Posted 2 days ago</div>
                    <div className='font-[roboto] text-[18px] leading-[24px] tracking-[-0.56px] text-[#3A4562]'>
                        <p>{item.description.substring(0, item.description.indexOf("Responsopilities"))}</p>
                        <p className='mt-[30px] mb-[15px] headline2'>Responsopilities</p>
                        <p className='text_job_detail'>{item.description.substring(item.description.indexOf("Responsopilities"), item.description.indexOf("Compensation")).replace("Responsopilities:", "")}</p>
                    </div>
                </div>
            </div>
            <div className='job_contacts w-[402px] border-[1px] mr-[315px] bg-black'>
                JobContact
            </div>
        </div>
        
)
}
