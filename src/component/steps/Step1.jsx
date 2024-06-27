import React from 'react'
import { useForm } from 'react-hook-form';
function Step1({ formData, setFormData, nextStep }) {
    
  

  const budgets = ["<$1,000/mon" , "$1,000-$2,000" , "$2,000-$5,000" , "$5,000-10,000","$10,000-$25,000","$25,000"];
  const handleNext = (budget) => {
    setFormData({ ...formData, budget });
    nextStep();
  };
  return (
    <div className='w-full sm:w-[480px] h-[749px] top-[137.5px] left-[480px] flex gap-12 text-center flex-col'>
        <div className='sm:w-[480px] h-[39px]'>
           <h4 className='text-[28px] leading-[39px] font-semibold text-center text-[#051011]'>Step # 1</h4>
        </div>
        <div className='sm:w-[480px] h-[78px] '>
        <p className='font-semibold sm:text-[28px] leading-[39px] text-center text-[#051011]' >What is your monthly digital marketing budget?</p>
        </div>
        
        <div className='sm:w-[480px] sm:h-[536px] flex flex-col gap-4'>
          {
            budgets.map((budget,index)=>( 
               <button key={index} onClick={() => handleNext(budget)} className='w-full sm:w-[480px] h-[76px] rounded-lg sm:p-6 border border-solid border-[#E5E7EB]'>{budget}</button>
            ))
          }
        </div>
         </div>
 

  );
};



export default Step1