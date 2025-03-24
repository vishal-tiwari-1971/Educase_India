import React from 'react';
import { Link } from 'react-router-dom';

const SignupScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F7F8F9] p-4">
    <div className='absolute top-[40px] w-full'> <h1 className="text-2xl  ml-[20px] w-[188px] h-[69px] font-bold [font:normal_normal_medium_28px/36px_Rubik] tracking-[0px] text-[#1D2226]">Create your PopX account</h1>
    </div> 
      <form className="w-full max-w-xs left-[15px]">
        <div className='mb-4'>
         <div className='relative'>
          <label className="absolute top-[0.2ex] left-[2em]  z-10 bg-[#F7F8F9]  h-[17px]  px-[5px] py-[0] text-[#6C25FF] [font:normal_normal_normal_13px/17px_Rubik]">Full Name <span className='text-[#DD4A3D]'>*</span></label></div>
          <input type="text" className="border-[1px] border-solid border-[#CBCBCB] rounded-[6px] relative w-[335px] h-[49px] m-[10px] leading-[6ex] text-[#1D2226]" />
        </div>

        <div className='mb-4'>
         <div className='relative'>
          <label className="absolute top-[0.2ex] left-[2em]  z-10 bg-[#F7F8F9]  h-[17px]  px-[5px] py-[0] text-[#6C25FF] [font:normal_normal_normal_13px/17px_Rubik]">Phone number <span className='text-[#DD4A3D]'>*</span></label></div>
          <input type="text" className="border-[1px] border-solid border-[#CBCBCB] rounded-[6px] relative w-[335px] h-[49px] m-[10px] leading-[6ex]" />
        </div>

        <div className='mb-4'>
         <div className='relative'>
          <label className="absolute top-[0.2ex] left-[2em]  z-10 bg-[#F7F8F9]  h-[17px]  px-[5px] py-[0] text-[#6C25FF] [font:normal_normal_normal_13px/17px_Rubik]">Email address <span className='text-[#DD4A3D]'>*</span></label></div>
          <input type="text" className="border-[1px] border-solid border-[#CBCBCB] rounded-[6px] relative w-[335px] h-[49px] m-[10px] leading-[6ex]" />
        </div>

        <div className='mb-4'>
         <div className='relative'>
          <label className="absolute top-[0.2ex] left-[2em]  z-10 bg-[#F7F8F9] h-[17px]  px-[5px] py-[0] text-[#6C25FF] [font:normal_normal_normal_13px/17px_Rubik]">Password <span className='text-[#DD4A3D]'>*</span></label></div>
          <input type="text" className="border-[1px] border-solid border-[#CBCBCB] rounded-[6px] relative w-[335px] h-[49px] m-[10px] leading-[6ex]" />
        </div>

        <div className='mb-4'>
         <div className='relative'>
          <label className="absolute top-[0.2ex] left-[2em]  z-10 bg-[#F7F8F9]  h-[17px]  px-[5px] py-[0] text-[#6C25FF] [font:normal_normal_normal_13px/17px_Rubik]">Company name </label></div>
          <input type="text" className="border-[1px] border-solid border-[#CBCBCB] rounded-[6px] relative w-[335px] h-[49px] m-[10px] leading-[6ex]" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Are you an Agency? <span className='text-[#DD4A3D]'>*</span></label>
          <div className='flex gap-[46px]'>
           <label className='flex gap-[14px] '> <input type='radio' name="company" value="yes" className="form-radio appearance-none w-[22px] h-[22px] border border-solid border-[#919191] dark:border-gray-300 rounded-full checked:bg-[#6C25FF]"/>Yes</label>
           <label className='flex gap-[14px]'> <input type='radio' name="company" value="no" className="form-radio appearance-none w-[22px] h-[22px] border border-solid border-[#919191] dark:border-gray-300 rounded-full checked:bg-[#6C25FF]"/>No</label>
          </div>
        </div>
       
       <Link to="/account-settings" className="absolute top-[736px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] text-white px-6 py-2  block text-center">
          Create Account
        </Link>
        
        </form>
    </div>
  );
};

export default SignupScreen;