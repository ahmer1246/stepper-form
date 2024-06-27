import React from 'react';
import { useForm } from 'react-hook-form';
import { IoLockClosedOutline } from 'react-icons/io5';

function Step2({ formData, setFormData, nextStep, prevStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <div className='w-full p-12 sm:w-[520px] h-screen sm:top-[199.5px] left-[460px] gap-[48px]'>
      <div className='sm:w-[520px] h-[150px] flex flex-col gap-3'>
        <div className='sm:w-[520px] h-[39px]'>
          <h4 className='text-[28px] leading-[39px] font-semibold text-center text-[#051011]'>Step # 2</h4>
        </div>
        <div className='sm:w-[520px] h-[39px]'>
          <h4 className='text-[28px] leading-[39px] font-semibold text-center text-[#051011]'>Details</h4>
        </div>
        <div className='sm:w-[520px] h-[48px]'>
          <p className='text-[#6B7280] font-normal font-Lato text-[16px] text-center leading-[24px]'>
            We’re thrilled at the opportunity to help you grow your business online. Please let us know the best way to reach you.
          </p>
        </div>
      </div>



      {/* ///form */}

      <div className=' w-full h-screen sm:w-[520px] sm:h-3/4 mt-14'>
        <form className='flex flex-col gap-[32px]' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-full sm:w-[520px] sm:h-[294px] flex flex-col gap-[16px]'>
            <div className='w-full sm:w-[520px] h-[66px]'>
              <label htmlFor='name' className='font-Lato font-semibold text-[12px] leading-[14.4px] text-center w-8 h-[14px] text-[#051011]'>
                Name
              </label>
              <input
                type='text'
                name='name'
                className='w-full sm:w-[520px] h-[48px] rounded-[3px] border-[#E5E7EB] border border-solid'
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className='w-full  sm:w-[520px] h-[66px] flex flex-col sm:flex gap-4'>
              <div className='w-full sm:w-[252px] h-[66px]'>
                <label htmlFor='email' className='font-Lato font-semibold text-[12px] leading-[14.4px] text-center w-[29px] h-[14px] text-[#051011]'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  className='w-full sm:w-[252px] h-[48px] rounded-[3px] border-[#E5E7EB] border border-solid'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Entered value does not match email format'
                    }
                  })}
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
              </div>
              <div className='w-full sm:w-[252px] sm:h-[66px] '>
                <label htmlFor='phone' className='font-Lato font-semibold text-[12px] leading-[14.4px] text-center w-[29px] h-[14px] text-[#051011]'>
                  Phone
                </label>
                <input
                  type='tel'
                  name='phone'
                  className='w-full sm:w-[252px] h-[48px] rounded-[3px] border-[#E5E7EB] border border-solid'
                  {...register('phone', {
                    required: 'Phone is required',
                    minLength: { value: 6, message: 'Phone number is too short' },
                    maxLength: { value: 12, message: 'Phone number is too long' }
                  })}
                />
                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
              </div>
            </div>
            <div className='w-full mt-24 h-[200px] sm:w-[252px] sm:h-[130px]'>
              <label htmlFor='message' className='font-Lato font-semibold text-[12px] leading-[14.4px] text-center w-[29px] h-[14px] text-[#051011]'>
                Anything else you’d like to share?
              </label>
              <textarea
                name='message'
                className=' w-full h-[120px] font-Lato sm:w-[520px] sm:h-[112px] rounded-[3px] border-[#E5E7EB] border border-solid'
                {...register('message',{required:true})}
              ></textarea>
              {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
            </div>

            <div className='w-full sm:w-[520px] h-[48px] sm:mt-6 text-center'>
              <button type='submit' className='w-[130px] sm:w-[160px] h-[40px] sm:h-[48px] font-Lato  sm:font-semibold leading-[16px]text-[12px] p-1 sm:text-[15px] text-[#FFFFFF] bg-[#019F44]'>
                Send Request
              </button>
            </div>
            <div className='w-full sm:w-[520px] h-[48px] mt-6 flex justify-center'>
              <div className='w-[423px] h-[20px] flex gap-[3px] justify-center'>
                <IoLockClosedOutline />
                <p className='text-[14px] font-normal leading-[20px] text-center text-[#6B7280]'>
                  We promise never to share your information or spam your inbox
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step2;
