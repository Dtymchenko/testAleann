import React from 'react'
import Geocode from "react-geocode";
import MapBlock from '../Components/MapBlock';
import { Link } from 'react-router-dom';

export const JobDetail = ({ today, getTimePassed, itemId, items }) => {
    
    const [address, setAddress] = React.useState('')

    const itemArr = items.filter((job) => job.id == itemId)
    const item = itemArr[0]        
        
            let phoneMod = [...item.phone]
            phoneMod.splice(3, 0, "(")
            phoneMod.splice(6, 0, ")")
            phoneMod.splice(10, 0, "-")
            phoneMod.splice(13, 0, "-")
            phoneMod = phoneMod.join('')
            
        
        
    // As Geocode can not return real address on location, that is received from server (something like 6RX9R43Q+JQ) - I will try to use random address from react geocode sample
    
        Geocode.setApiKey("AIzaSyAHTZCx4NC_KcJHgnPbGqmC-5LQk_ChVZg");
    Geocode.setLocationType("ROOFTOP");
    Geocode.fromLatLng(48.8583701, 2.2922926).then(
        (response) => {
            setAddress(response.results[0].formatted_address);
            let city, state, country;

          for (let i = 0; i < response.results[0].address_components.length; i++) {
            for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
              switch (response.results[0].address_components[i].types[j]) {
                case "locality":
                  city = response.results[0].address_components[i].long_name;
                  break;
                case "administrative_area_level_1":
                  state = response.results[0].address_components[i].long_name;
                  break;
                case "country":
                  country = response.results[0].address_components[i].long_name;
                  break;
              }
            }
          }
        },
        (error) => {
          console.error(error);
        }
      );
    

    return (
        <div className='job_detail_wrapper flex bg-white pt-[56px] rounded-lg'>
            <div className='job_details flex justify-between max-w-[723px] ml-[347px] mr-[131px] mb-[9px]'>
                <div className='job_details_header_wrapper'>
                    <header className='job_details_header flex items-center justify-between'>
                        <div className='headline1'>Job Details</div>
                        <div className='job_details_divider'>
                            <div className='h-px w-full bg-[#3A4562] opacity-[0.13] mt-[9px] mb-[15px]'></div>
                        </div>
                        <div className='flex items-center mb-[11px] text_job_detail'>
                            <img className='w-[16px] h-[20px] mr-4' src="/icons/rectangle31.png" alt="rectangle" />
                            <p className='mr-[31px]'>Save to my list</p>
                            <img className='w-[18px] h-[20px] mr-4' src="/icons/shape.png" alt="shape" />
                            <p>Share</p>
                        </div>
                    </header>
                    <div className='job_detail_header_divider h-px w-full bg-[#3A4562] opacity-[0.13] mb-[39px]'></div>
                    <button className='job_detail_upper_button w-[127px] h-[52px] rounded-lg bg-[#384564] text-white text-xs font-semibold mb-8'>APPLY NOW</button>
                    <div className='salary_and_descr_block'>
                    <div className='title_block flex justify-between items-baseline'>
                        <h1 className='w-[501px] text-[24px] font-bold leading-[30px] text-[#3A4562] tracking-[-0.75px]'>{item.title}</h1>
                        <div className='salary_block'>
                            <div className='headline2'>€ {item.salary.replace(/k/g, ' 000')}</div>
                            <div className='text_job_detail'>Brutto, per year</div>
                        </div>
                    </div>
                    </div>
                    <div className='detail_descr my-[7px] font-[roboto] text-[18px] leading-[24px] tracking-[-0.56px] text-[#38415D] opacity-[0.355988]'>Posted {getTimePassed(item.createdAt)} ago</div>
                    <div className='font-[roboto] text-[18px] leading-[24px] tracking-[-0.56px] text-[#3A4562]'>
                        <p>{item.description.substring(0, item.description.indexOf("Responsopilities"))}</p>
                        <p className='mt-[30px] mb-[15px] headline2'>Responsopilities</p>
                        <p className='text_job_detail'>{item.description.substring(item.description.indexOf("Responsopilities"), item.description.indexOf("Compensation")).replace("Responsopilities:", "")}</p>
                        <p className='mt-[30px] mb-[15px] headline2'>Compensation & Benefits:</p>
                        <p className='text_job_detail'>Our physicians enjoy a wide range of benefits, including:</p>
                        <ul>
                            {item.description.substring(item.description.indexOf("Compensation & Benefits:")).replace("Compensation & Benefits:", "").split(".").slice(0, -1).map((item, i) => {
                                return <li key={i} className='relative before:absolute before:top-[10px] before:left-[-20px] before:opacity-[0.632594] before:bg-[#384564] before:w-[9px] before:h-[9px]'>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div className='job_detail_lower_item_adaptive w-[127px] h-[52px] rounded-lg bg-[#384564] mt-[39px] mb-[86px] text-white text-xs font-semibold mb-8'>
                    <button className='job_detail_lower_button w-[127px] h-[52px]'>APPLY NOW</button>
                    </div>
                    
                    <div className='headline1'>Additional info</div>
                    <div className='h-px w-full bg-[#3A4562] opacity-[0.13] mt-[9px] mb-[15px]'></div>
                    <div className='text_job_detail mb-[15px]'>Employment type</div>
                    <div className='flex'>
                        {item.employment_type.map((item) => {
                                return <div key={item} className='flex justify-center items-center w-[222px] h-[49px] employment_types'>{item}</div>
                            })}
                    </div>
                    <div className='text_job_detail mt-[23px] mb-[10px]'>Benefits</div>
                    <div className='flex'>
                        {item.benefits.map((item) => {
                                return <div key={item} className='flex justify-center items-center w-[220px] h-[50px] benefits_types'>{item}</div>
                            })}
                    </div>
                    <div className='job_detail_images_descr headline1 mt-[87px]'>Attached images</div>
                    <div className='h-px w-full bg-[#3A4562] opacity-[0.13] mt-[9px] mb-[15px]'></div>
                    <div className="job_detail_images flex mb-[89px]">
                        {item.pictures.map((item, i) => {
                                return <div key={i} className="">
                                            <img src={item} alt="attached items" className='w-[200px] h-[116px] mr-[9px] rounded-lg'></img>
                                        </div>
                                
                            })}
                    </div>
                    <Link to='/'>
                        <button className='button_back flex items-center w-[213px] h-[50px] rounded-lg mt-[89px] ml-[-89px] bg-[#e4e5ea]'>
                        
                            <span className='ml-[23px] mr-[19px]'><img src="/icons/arrow.png" width={10} height={18} alt="arrow" /></span>
                            <span className='font-semibold text-xs text-[#3A4562] mr-[26px]'>RETURN TO JOB BOARD</span>
                        
                    </button>
                    </Link>
                </div>
            </div>
            <div className='job_contacts_title headline1 text-center hidden'>Contacts</div>
                    <div className='job_contacts_title_divider h-px w-full bg-[#3A4562] opacity-[0.13] hidden '></div>
            <div className='job_contacts flex-0 w-[402px] h-[436px] border-[1px] mr-[315px] rounded-lg overflow-hidden'>
                    
                <div className='h-1/2 relative overflow-hidden headline2 bg-[#2A3047] px-[63px] pt-[31px] pb-[15px]'>
                    <div className='text-white z-50'>Department name.</div>
                    <div className='text-white'>University Hospital Giessen.</div>
                    <div className='flex text_job_detail mb-[7px]'>
                        <span className='mr-[8px]'><img src='/icons/location.png' alt='location' width={13} height={18}></img></span>
                        <span className='text-[#E8EBF3]'>{address}</span>
                    </div>
                    <div className='text_job_detail text-[#E8EBF3]'>
                        <p className='text-[#E8EBF3]'>{phoneMod}</p>
                        <p className='text-[#E8EBF3]'>{item.email}</p>
                    </div>
                    <p></p>
                    
                </div>
                <MapBlock />
            </div>
            
        </div>
        
)
}
