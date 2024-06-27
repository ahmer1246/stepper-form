import React from 'react'

function Step3({onReturnHome}) {
  return (
    <div className=' w-full h-screen  flex flex-col justify-center items-center gap-6 p-4'>
          <div className='sm:w-[520px] sm:h-[362px] p-12  bg-white text-center'> 
            <div className='sm:w-[520px] sm:h-[104px] flex justify-center'>
                <div className='h-[104px] w-[104px] bg-[#E5E7EB]'></div>
            </div>
            <div className='sm:w-[520px] sm:h-[78px] flex justify-center '>
                  <div className=' sm:w-[520px] h-[78px]'>
                    <h4 className='font-Lato font-semibold text-[18px] sm:text-[28px] leading-[39px] text-center text-[#051011]'>Your Request for a Proposal Has Been Submitted!</h4></div>
            </div>
            <div className='sm:w-[520px] sm:h-[78px]'>
                <p className='text-[#6B7280] text-[16px] font-Lato font-normal leading-[24px] text-center'>Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida parturient urna tristique congue. Curabitur volutpat nulla convallis eget pellentesque. Luctus tellus eu ultrices egestas. </p>
            </div>
            <div className='sm:w-[520px] h-[48px] mt-6 text-center'>
                      <button onClick={()=>onReturnHome()} className='w-[160px] h-[48px] font-Lato font-semibold leading-[16px] text-[15px] text-[#FFFFFF] bg-[#019F44]'> Return Home </button>
                 </div>
        </div> 
       
    </div>
  )
}

export default Step3

