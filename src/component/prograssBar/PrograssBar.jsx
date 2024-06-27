import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className='w-full bg-[#E5E7EB] h-2'>
      <div className='h-2 bg-[#019F44]' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
