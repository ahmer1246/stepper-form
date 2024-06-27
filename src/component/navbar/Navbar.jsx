import React from 'react'

import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // This will navigate to the previous page in the history
    };
  
    const handleExit = () => {
      navigate('/exist'); // This will navigate to the home page or any specific route
    };
  
  return (
    <div className='w-full h-[52px] bg-[#FFFFFF] flex justify-between  pt-4 pr-[120px] pb-4 pl-[120px]'>
       <div className='w-[1360px] h-[20px] flex justify-between'>
          <div onClick={handleGoBack} className='w-[80px] h-[20px] flex  items-center gap-[8px]'>
        <FaArrowLeft className='h-[20px] w-[20px]' />
            <p className='font-semibold w-[52px] font-[Lato] text-[14px]  leading-4 text-[#000000]' ><a >Go Back</a></p>
          </div>
          <div onClick={handleExit} className='w-[52px] h-[20px] flex items-center gap-[32]'>
          <p className='font-semibold w-[24px] h-[16px] font-[Lato] text-[14px]  leading-4 text-[#000000]'><a >Exit</a></p>
          <IoClose  className='h-[20px] w-[20px]'/>
          </div>
       </div>
    </div>
    
  )
}

export default Navbar